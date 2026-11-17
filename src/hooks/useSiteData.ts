import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type {
  GalleryItem,
  ManagementContact,
  ServiceRow,
  SiteSettings,
} from '../types'

export interface SiteData {
  settings: SiteSettings | null
  services: ServiceRow[]
  gallery: GalleryItem[]
  management: ManagementContact[]
}

interface SiteDataState extends SiteData {
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

const emptyData: SiteData = {
  settings: null,
  services: [],
  gallery: [],
  management: [],
}

async function fetchSiteData(): Promise<SiteData> {
  const [settingsRes, servicesRes, galleryRes, managementRes] = await Promise.all([
    supabase.from('site_settings').select('*').limit(1).maybeSingle(),
    supabase.from('services').select('*').order('sort_order', { ascending: true }),
    supabase.from('gallery_items').select('*').order('created_at', { ascending: false }),
    supabase
      .from('management_contacts')
      .select('*')
      .order('sort_order', { ascending: true }),
  ])

  const firstError =
    settingsRes.error?.message ||
    servicesRes.error?.message ||
    galleryRes.error?.message ||
    managementRes.error?.message

  if (firstError) {
    throw new Error(firstError)
  }

  return {
    settings: (settingsRes.data as SiteSettings | null) ?? null,
    services: (servicesRes.data as ServiceRow[] | null) ?? [],
    gallery: (galleryRes.data as GalleryItem[] | null) ?? [],
    management: (managementRes.data as ManagementContact[] | null) ?? [],
  }
}

export function useSiteData(): SiteDataState {
  const [data, setData] = useState<SiteData>(emptyData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const next = await fetchSiteData()
      setData(next)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content')
      setData(emptyData)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return {
    ...data,
    loading,
    error,
    refresh,
  }
}
