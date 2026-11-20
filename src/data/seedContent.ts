import type { GalleryItem, ServiceRow, SiteSettings } from '../types'

/**
 * Exact residential facilities content — fallback when Supabase is empty.
 * Live site prefers `site_settings` (id = 1) + `services` ordered by sort_order.
 */
export const seedSettings: SiteSettings = {
  id: 1,
  hero_title_ar: 'وصف المرافق الترفيهية والخدمات المتوفرة بالمجمع السكني',
  hero_title_en:
    'Description of Recreational Facilities and Available Services in the Residential Complex',
  hero_subtitle_ar:
    'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  hero_subtitle_en:
    'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
  main_heading_ar: 'وصف المرافق الترفيهية والخدمات المتوفرة بالمجمع السكني',
  main_heading_en:
    'Description of Recreational Facilities and Available Services in the Residential Complex',
  complex_overview_ar:
    'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  complex_overview_en:
    'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
  facilities_heading_ar: '4. المرافق الترفيهية والرياضية',
  facilities_heading_en: '4. Recreational and Sports Facilities',
  facilities_intro_ar:
    'يوفر المجمع مجموعة واسعة من المرافق الترفيهية والخدمات المخصصة للراحة والاستجمام، وتشمل:',
  facilities_intro_en:
    'The complex offers a wide range of recreational facilities and services dedicated to relaxation and leisure, including:',
  about_ar:
    'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  about_en:
    'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
  vision_ar: '4. المرافق الترفيهية والرياضية',
  vision_en: '4. Recreational and Sports Facilities',
  mission_ar:
    'يوفر المجمع مجموعة واسعة من المرافق الترفيهية والخدمات المخصصة للراحة والاستجمام، وتشمل:',
  mission_en:
    'The complex offers a wide range of recreational facilities and services dedicated to relaxation and leisure, including:',
  phone: '+218 21 480 2432',
  whatsapp: '+218 21 480 2432',
  email: 'info@garden-city.com.ly',
  address_ar: 'طريق المطار، سيدي صليم، طرابلس - ليبيا',
  address_en: 'Airport St., Sedy Slem, Tripoli - Libya',
  map_url: 'https://maps.google.com/?q=32.794930,13.134346',
  hero_image_url: null,
  logo_url: null,
  updated_at: new Date().toISOString(),
}

export const seedServices: ServiceRow[] = [
  {
    id: 'fac-pools',
    title_ar: 'حوضا سباحة',
    title_en: 'Two Swimming Pools',
    description_ar:
      'حوض سباحة صغير مناسب للأطفال، وحوض سباحة آخر بحجم يقارب الحجم الأولمبي.',
    description_en:
      'A small swimming pool suitable for children, and another swimming pool close to Olympic size.',
    icon_name: 'Waves',
    image_url: null,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'fac-bbq',
    title_ar: 'جلسات بجانب المسبح ومنطقة للشواء (BBQ)',
    title_en: 'Poolside Seating and BBQ Area',
    description_ar:
      'تحيط بمنطقة أحواض السباحة شرفة واسعة للجلسات، مع منطقة شواء مظللة محاطة بأشجار النخيل.',
    description_en:
      'Surrounding the swimming pool area is a spacious seating terrace, along with a shaded barbecue area surrounded by palm trees.',
    icon_name: 'Flame',
    image_url: null,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 'fac-cafeteria',
    title_ar: 'كافتيريا',
    title_en: 'Cafeteria',
    description_ar:
      'تقع على ارتفاع أربع درجات فوق مستوى منطقة المسبح، وتتميز بوجود شرفة واسعة.',
    description_en:
      'Located four steps above the pool area level, featuring a spacious terrace.',
    icon_name: 'Coffee',
    image_url: null,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: 'fac-restrooms',
    title_ar: 'مرافق تغيير الملابس والحمامات',
    title_en: 'Changing Rooms and Restrooms',
    description_ar: 'يوجد حمامان لخدمة المنطقة الترفيهية.',
    description_en: 'Two restrooms are available to serve the recreational area.',
    icon_name: 'Bath',
    image_url: null,
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
]

/** Empty image slots only — no titles/categories rendered in UI. */
export const seedGallery: GalleryItem[] = Array.from({ length: 6 }, (_, index) => ({
  id: `gal-${index + 1}`,
  title_ar: null,
  title_en: null,
  category_ar: null,
  category_en: null,
  image_url: null,
  created_at: new Date().toISOString(),
}))

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=32.794930,13.134346&z=16&output=embed'

export const MAP_EXTERNAL_URL = 'https://maps.google.com/?q=32.794930,13.134346'

export function toMapEmbedUrl(mapUrl: string | null | undefined): string {
  const raw = (mapUrl ?? '').trim()
  if (!raw) return MAP_EMBED_URL
  if (raw.includes('output=embed')) return raw
  const coordMatch = raw.match(/(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)/)
  if (coordMatch) {
    return `https://maps.google.com/maps?q=${coordMatch[1]},${coordMatch[2]}&z=16&output=embed`
  }
  try {
    const url = new URL(raw)
    if (!url.searchParams.has('output')) url.searchParams.set('output', 'embed')
    return url.toString()
  } catch {
    return MAP_EMBED_URL
  }
}
