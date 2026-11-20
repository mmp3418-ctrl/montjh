import { useCallback, useEffect, useRef, useState } from 'react'
import { seedGallery, seedServices } from '../data/seedContent'
import { supabase } from '../lib/supabase'
import type { GalleryItem, ServiceRow, SiteSettings } from '../types'
import { mergeSettings } from '../utils/siteSettings'

export interface SiteData {
  settings: SiteSettings
  services: ServiceRow[]
  gallery: GalleryItem[]
}

interface SiteDataState extends SiteData {
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

async function fetchSiteSettings(): Promise<SiteSettings> {
  // Prefer id = 1 (admin canonical row)
  const byId = await supabase.from('site_settings').select('*').eq('id', 1).maybeSingle()

  if (!byId.error && byId.data) {
    return mergeSettings(byId.data as SiteSettings)
  }

  if (byId.error) {
    console.warn('[useSiteData] site_settings id=1:', byId.error.message)
  }

  // Fallback: first available row (legacy databases)
  const first = await supabase
    .from('site_settings')
    .select('*')
    .order('id', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (first.error) {
    console.warn('[useSiteData] site_settings fallback:', first.error.message)
  }

  return mergeSettings((first.data as SiteSettings | null) ?? null)
}

async function fetchSiteData(): Promise<SiteData> {
  const [settings, servicesRes, galleryRes] = await Promise.all([
    fetchSiteSettings(),
    supabase.from('services').select('*').order('sort_order', { ascending: true }),
    supabase.from('gallery_items').select('*').order('created_at', { ascending: false }),
  ])

  if (servicesRes.error) {
    console.warn('[useSiteData] services:', servicesRes.error.message)
  }
  if (galleryRes.error) {
    console.warn('[useSiteData] gallery_items:', galleryRes.error.message)
  }

  const services =
    !servicesRes.error && Array.isArray(servicesRes.data) && servicesRes.data.length > 0
      ? (servicesRes.data as ServiceRow[])
      : seedServices

  const gallery =
    !galleryRes.error && Array.isArray(galleryRes.data) && galleryRes.data.length > 0
      ? (galleryRes.data as GalleryItem[])
      : seedGallery

  return { settings, services, gallery }
}

export function useSiteData(): SiteDataState {
  const [data, setData] = useState<SiteData>({
    settings: mergeSettings(null),
    services: seedServices,
    gallery: seedGallery,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const requestId = useRef(0)

  const refresh = useCallback(async () => {
    const id = ++requestId.current
    setError(null)
    try {
      const next = await fetchSiteData()
      // Ignore out-of-order responses from rapid realtime/focus refreshes
      if (id !== requestId.current) return
      setData(next)
    } catch (err) {
      if (id !== requestId.current) return
      const message = err instanceof Error ? err.message : 'Failed to load site data'
      setError(message)
      setData({
        settings: mergeSettings(null),
        services: seedServices,
        gallery: seedGallery,
      })
    } finally {
      if (id === requestId.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  // Live sync from Admin Dashboard
  useEffect(() => {
    const channel = supabase
      .channel(`garden-city-live-${Date.now()}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'site_settings' },
        () => {
          void refresh()
        },
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'services' },
        () => {
          void refresh()
        },
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'gallery_items' },
        () => {
          void refresh()
        },
      )
      .subscribe()

    return () => {
      void supabase.removeChannel(channel)
    }
  }, [refresh])

  // Refetch on focus / tab visible
  useEffect(() => {
    const onFocus = (): void => {
      void refresh()
    }
    const onVisibility = (): void => {
      if (document.visibilityState === 'visible') void refresh()
    }

    window.addEventListener('focus', onFocus)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [refresh])

  return {
    ...data,
    loading,
    error,
    refresh,
  }
}
