import { seedSettings } from '../data/seedContent'
import type { SiteSettings } from '../types'
import { hasText } from './locale'

function coalesce(
  primary: string | null | undefined,
  fallback: string | null | undefined,
): string | null {
  if (hasText(primary)) return primary!.trim()
  if (hasText(fallback)) return fallback!.trim()
  return null
}

/** Normalize a DB row (partial / legacy columns) onto the full SiteSettings shape. */
export function mergeSettings(row: Partial<SiteSettings> | null | undefined): SiteSettings {
  const base = seedSettings
  if (!row) return { ...base }

  return {
    id: row.id ?? base.id,
    hero_title_ar: coalesce(row.hero_title_ar, base.hero_title_ar),
    hero_title_en: coalesce(row.hero_title_en, base.hero_title_en),
    hero_subtitle_ar: coalesce(row.hero_subtitle_ar, base.hero_subtitle_ar),
    hero_subtitle_en: coalesce(row.hero_subtitle_en, base.hero_subtitle_en),
    main_heading_ar: coalesce(
      row.main_heading_ar,
      coalesce(row.hero_title_ar, base.main_heading_ar),
    ),
    main_heading_en: coalesce(
      row.main_heading_en,
      coalesce(row.hero_title_en, base.main_heading_en),
    ),
    complex_overview_ar: coalesce(
      row.complex_overview_ar,
      coalesce(row.about_ar, base.complex_overview_ar),
    ),
    complex_overview_en: coalesce(
      row.complex_overview_en,
      coalesce(row.about_en, base.complex_overview_en),
    ),
    facilities_heading_ar: coalesce(
      row.facilities_heading_ar,
      coalesce(row.vision_ar, base.facilities_heading_ar),
    ),
    facilities_heading_en: coalesce(
      row.facilities_heading_en,
      coalesce(row.vision_en, base.facilities_heading_en),
    ),
    facilities_intro_ar: coalesce(
      row.facilities_intro_ar,
      coalesce(row.mission_ar, base.facilities_intro_ar),
    ),
    facilities_intro_en: coalesce(
      row.facilities_intro_en,
      coalesce(row.mission_en, base.facilities_intro_en),
    ),
    about_ar: coalesce(row.about_ar, coalesce(row.complex_overview_ar, base.about_ar)),
    about_en: coalesce(row.about_en, coalesce(row.complex_overview_en, base.about_en)),
    vision_ar: coalesce(row.vision_ar, coalesce(row.facilities_heading_ar, base.vision_ar)),
    vision_en: coalesce(row.vision_en, coalesce(row.facilities_heading_en, base.vision_en)),
    mission_ar: coalesce(row.mission_ar, coalesce(row.facilities_intro_ar, base.mission_ar)),
    mission_en: coalesce(row.mission_en, coalesce(row.facilities_intro_en, base.mission_en)),
    phone: coalesce(row.phone, base.phone),
    whatsapp: coalesce(row.whatsapp, base.whatsapp),
    email: coalesce(row.email, base.email),
    address_ar: coalesce(row.address_ar, base.address_ar),
    address_en: coalesce(row.address_en, base.address_en),
    map_url: coalesce(row.map_url, base.map_url),
    hero_image_url: hasText(row.hero_image_url) ? row.hero_image_url!.trim() : null,
    updated_at: row.updated_at ?? base.updated_at,
  }
}
