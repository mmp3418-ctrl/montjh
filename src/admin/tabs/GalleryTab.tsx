import { ImagePlus, Trash2 } from 'lucide-react'
import { useEffect, useState, type ChangeEvent, type FC } from 'react'
import { deleteMediaByPublicUrl, uploadMediaFile } from '../../lib/storage'
import { supabase } from '../../lib/supabase'
import type { GalleryItem } from '../../types'
import type { AdminDictionary } from '../i18n'
import type { ToastState } from '../components/AdminToast'

interface GalleryTabProps {
  dict: AdminDictionary
  onToast: (toast: ToastState) => void
}

const GalleryTab: FC<GalleryTabProps> = ({ dict, onToast }) => {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  const load = async (): Promise<void> => {
    setLoading(true)
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      onToast({ type: 'error', message: error.message || dict.error })
      setItems([])
    } else {
      setItems((data as GalleryItem[]) ?? [])
    }
    setLoading(false)
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const files = event.target.files
    event.target.value = ''
    if (!files || files.length === 0) return

    setUploading(true)
    try {
      const list = Array.from(files)
      for (const file of list) {
        const { publicUrl } = await uploadMediaFile('gallery', file)
        const { error } = await supabase.from('gallery_items').insert({
          image_url: publicUrl,
          title_ar: null,
          title_en: null,
          category_ar: null,
          category_en: null,
        })
        if (error) throw new Error(error.message)
      }
      onToast({ type: 'success', message: dict.saved })
      await load()
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (item: GalleryItem): Promise<void> => {
    if (!window.confirm(dict.confirmDelete)) return
    try {
      const { error } = await supabase.from('gallery_items').delete().eq('id', item.id)
      if (error) throw new Error(error.message)
      if (item.image_url) {
        try {
          await deleteMediaByPublicUrl(item.image_url)
        } catch {
          /* row deleted; storage cleanup best-effort */
        }
      }
      onToast({ type: 'success', message: dict.saved })
      await load()
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    }
  }

  if (loading) {
    return <p className="text-sm text-[var(--text-muted)]">{dict.loading}</p>
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[var(--text-secondary)]">
          {items.length} {dict.tabs.gallery}
        </p>
        <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-brand-gradient px-4 text-sm font-bold text-white">
          <ImagePlus size={16} />
          {uploading ? dict.uploading : dict.upload}
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            disabled={uploading}
            onChange={(e) => void handleUpload(e)}
          />
        </label>
      </div>

      {items.length === 0 ? (
        <div className="glass rounded-2xl p-8 text-center text-sm text-[var(--text-muted)]">
          {dict.noGallery}
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="glass overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] bg-[var(--bg-deep)]">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-[var(--text-muted)]">
                    —
                  </div>
                )}
              </div>
              <div className="p-3">
                <button
                  type="button"
                  onClick={() => void handleDelete(item)}
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 text-sm font-semibold text-red-400"
                >
                  <Trash2 size={15} />
                  {dict.delete}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GalleryTab
