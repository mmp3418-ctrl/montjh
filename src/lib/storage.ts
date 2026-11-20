import { MEDIA_BUCKET, supabase } from './supabase'

function sanitizeFileName(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9._-]/g, '')
    .toLowerCase()
}

export function buildMediaPath(folder: string, fileName: string): string {
  const safe = sanitizeFileName(fileName) || 'upload.bin'
  const stamp = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return `${folder}/${stamp}-${safe}`
}

export async function uploadMediaFile(
  folder: string,
  file: File,
): Promise<{ publicUrl: string; path: string }> {
  const path = buildMediaPath(folder, file.name)
  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type || undefined,
  })

  if (error) {
    throw new Error(error.message || 'Upload failed')
  }

  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path)
  if (!data.publicUrl) {
    throw new Error('Could not resolve public URL for uploaded file')
  }

  return { publicUrl: data.publicUrl, path }
}

export function extractStoragePathFromPublicUrl(publicUrl: string): string | null {
  try {
    const marker = `/object/public/${MEDIA_BUCKET}/`
    const idx = publicUrl.indexOf(marker)
    if (idx === -1) return null
    return decodeURIComponent(publicUrl.slice(idx + marker.length))
  } catch {
    return null
  }
}

export async function deleteMediaByPublicUrl(publicUrl: string): Promise<void> {
  const path = extractStoragePathFromPublicUrl(publicUrl)
  if (!path) return
  const { error } = await supabase.storage.from(MEDIA_BUCKET).remove([path])
  if (error) {
    throw new Error(error.message || 'Failed to delete media file')
  }
}
