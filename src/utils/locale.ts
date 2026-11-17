import type { Language } from '../types'

export function pickLocale(
  language: Language,
  ar: string | null | undefined,
  en: string | null | undefined,
): string {
  const value = language === 'ar' ? ar : en
  const fallback = language === 'ar' ? en : ar
  return (value?.trim() || fallback?.trim() || '')
}

export function hasText(value: string | null | undefined): boolean {
  return Boolean(value && value.trim().length > 0)
}

export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

export function toWhatsAppHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  const normalized = digits.startsWith('0') ? `218${digits.slice(1)}` : digits
  return `https://wa.me/${normalized}`
}

export function toEmbedMapUrl(mapUrl: string): string | null {
  const trimmed = mapUrl.trim()
  if (!trimmed) return null
  if (trimmed.includes('output=embed') || trimmed.includes('/embed')) return trimmed

  try {
    const url = new URL(trimmed)
    if (url.hostname.includes('google.') && url.searchParams.has('q')) {
      const q = url.searchParams.get('q')
      return `https://maps.google.com/maps?q=${encodeURIComponent(q ?? '')}&z=16&output=embed`
    }
  } catch {
    return trimmed
  }

  return trimmed
}
