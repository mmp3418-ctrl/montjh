import { seedSettings } from '../data/seedContent'
import type { SiteSettings } from '../types'
import { firstText, hasText } from './locale'

function coalesce(
  primary: string | null | undefined,
  fallback: string | null | undefined,
): string | null {
  const value = firstText(primary, fallback)
  return value || null
}

/**
 * Normalize a DB row onto SiteSettings.
 * Database non-empty values always win; seed is used only for empty/null fields.
 */
export function mergeSettings(row: Partial<SiteSettings> | null | undefined): SiteSettings {
  const base = seedSettings
  if (!row) return { ...base }

  const mainHeadingAr = coalesce(row.main_heading_ar, coalesce(row.hero_title_ar, base.main_heading_ar))
  const mainHeadingEn = coalesce(row.main_heading_en, coalesce(row.hero_title_en, base.main_heading_en))
  const overviewAr = coalesce(
    row.complex_overview_ar,
    coalesce(row.about_ar, coalesce(row.hero_subtitle_ar, base.complex_overview_ar)),
  )
  const overviewEn = coalesce(
    row.complex_overview_en,
    coalesce(row.about_en, coalesce(row.hero_subtitle_en, base.complex_overview_en)),
  )
  const facilitiesHeadingAr = coalesce(
    row.facilities_heading_ar,
    coalesce(row.vision_ar, base.facilities_heading_ar),
  )
  const facilitiesHeadingEn = coalesce(
    row.facilities_heading_en,
    coalesce(row.vision_en, base.facilities_heading_en),
  )
  const facilitiesIntroAr = coalesce(
    row.facilities_intro_ar,
    coalesce(row.mission_ar, base.facilities_intro_ar),
  )
  const facilitiesIntroEn = coalesce(
    row.facilities_intro_en,
    coalesce(row.mission_en, base.facilities_intro_en),
  )

  return {
    id: row.id ?? base.id,
    // Prefer dedicated hero_* from DB when present; otherwise shared headings.
    hero_title_ar: coalesce(row.hero_title_ar, mainHeadingAr),
    hero_title_en: coalesce(row.hero_title_en, mainHeadingEn),
    hero_subtitle_ar: coalesce(row.hero_subtitle_ar, overviewAr),
    hero_subtitle_en: coalesce(row.hero_subtitle_en, overviewEn),
    main_heading_ar: mainHeadingAr,
    main_heading_en: mainHeadingEn,
    complex_overview_ar: overviewAr,
    complex_overview_en: overviewEn,
    facilities_heading_ar: facilitiesHeadingAr,
    facilities_heading_en: facilitiesHeadingEn,
    facilities_intro_ar: facilitiesIntroAr,
    facilities_intro_en: facilitiesIntroEn,
    about_ar: coalesce(row.about_ar, overviewAr),
    about_en: coalesce(row.about_en, overviewEn),
    vision_ar: coalesce(row.vision_ar, facilitiesHeadingAr),
    vision_en: coalesce(row.vision_en, facilitiesHeadingEn),
    mission_ar: coalesce(row.mission_ar, facilitiesIntroAr),
    mission_en: coalesce(row.mission_en, facilitiesIntroEn),
    phone: coalesce(row.phone, base.phone),
    whatsapp: coalesce(row.whatsapp, base.whatsapp),
    email: coalesce(row.email, base.email),
    address_ar: coalesce(row.address_ar, base.address_ar),
    address_en: coalesce(row.address_en, base.address_en),
    map_url: coalesce(row.map_url, base.map_url),
    hero_image_url: hasText(row.hero_image_url) ? row.hero_image_url!.trim() : null,
    logo_url: hasText(row.logo_url) ? row.logo_url!.trim() : null,
    updated_at: row.updated_at ?? base.updated_at,
  }
}

/**
 * Live logo from Supabase, with optional cache-busting via updated_at.
 * Falls back to static `/logo.png` when `logo_url` is empty.
 */
export function resolveLogoUrl(
  logoUrl: string | null | undefined,
  updatedAt?: string | null,
): string | null {
  const trimmed = logoUrl?.trim()
  if (!trimmed) return '/logo.png'

  if (!updatedAt?.trim()) return trimmed
  const join = trimmed.includes('?') ? '&' : '?'
  return `${trimmed}${join}v=${encodeURIComponent(updatedAt.trim())}`
}
