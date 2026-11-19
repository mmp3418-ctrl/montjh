import { useCallback, useState } from 'react'
import { seedGallery, seedServices, seedSettings } from '../data/seedContent'
import type { GalleryItem, ServiceRow, SiteSettings } from '../types'

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

/** Corporate content is served from seed copy. Contact form still writes to Supabase. */
export function useSiteData(): SiteDataState {
  const [data] = useState<SiteData>({
    settings: seedSettings,
    services: seedServices,
    gallery: seedGallery,
  })

  const refresh = useCallback(async () => {
    // Reserved for future dashboard sync.
  }, [])

  return {
    ...data,
    loading: false,
    error: null,
    refresh,
  }
}
