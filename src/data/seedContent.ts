import type { GalleryItem, ServiceRow, SiteSettings } from '../types'

/**
 * Residential complex facilities content.
 * Image fields intentionally left empty for future dashboard uploads.
 */
export const seedSettings: SiteSettings = {
  id: 'seed-settings',
  hero_title_ar: 'وصف المرافق الترفيهية والخدمات المتوفرة بالمجمع السكني',
  hero_title_en:
    'Description of Recreational Facilities and Available Services in the Residential Complex',
  hero_subtitle_ar:
    'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  hero_subtitle_en:
    'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
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
  email: 'info@garden-city.com.ly',
  address_ar: 'طريق المطار، سيدي صليم، طرابلس - ليبيا',
  address_en: 'Airport St., Sedy Slem, Tripoli - Libya',
  map_url: 'https://maps.google.com/?q=32.794930,13.134346',
  hero_image_url: null,
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
      'A small swimming pool suitable for children, and another swimming pool with a size close to Olympic dimensions.',
    icon_name: 'waves',
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
      'A spacious seating terrace surrounds the swimming pool area, featuring a shaded barbecue (BBQ) area surrounded by palm trees.',
    icon_name: 'flame',
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
    icon_name: 'coffee',
    image_url: null,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: 'fac-restrooms',
    title_ar: 'مرافق تغيير الملابس والحمامات',
    title_en: 'Changing Facilities and Restrooms',
    description_ar: 'يوجد حمامان لخدمة المنطقة الترفيهية.',
    description_en: 'There are two restrooms serving the recreational area.',
    icon_name: 'bath',
    image_url: null,
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
]

/** Empty image slots only — no titles/categories rendered in UI. */
export const seedGallery: GalleryItem[] = [
  { id: 'gal-1', title_ar: null, title_en: null, category_ar: null, category_en: null, image_url: null, created_at: new Date().toISOString() },
  { id: 'gal-2', title_ar: null, title_en: null, category_ar: null, category_en: null, image_url: null, created_at: new Date().toISOString() },
  { id: 'gal-3', title_ar: null, title_en: null, category_ar: null, category_en: null, image_url: null, created_at: new Date().toISOString() },
  { id: 'gal-4', title_ar: null, title_en: null, category_ar: null, category_en: null, image_url: null, created_at: new Date().toISOString() },
  { id: 'gal-5', title_ar: null, title_en: null, category_ar: null, category_en: null, image_url: null, created_at: new Date().toISOString() },
  { id: 'gal-6', title_ar: null, title_en: null, category_ar: null, category_en: null, image_url: null, created_at: new Date().toISOString() },
]

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=32.794930,13.134346&z=16&output=embed'

export const MAP_EXTERNAL_URL = 'https://maps.google.com/?q=32.794930,13.134346'
