export interface NavItem {
  id: string
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: 'hotel' | 'plane' | 'landmark' | 'handshake' | 'tree' | 'compass'
}

export interface ClubFeature {
  id: string
  title: string
  description: string
}

export type GalleryCategory = 'الكل' | 'وجهات' | 'نادي بيغونيا' | 'استثمار' | 'ضيافة' | 'عمارة'

export interface GalleryItem {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'الكل'>
  imageUrl: string
  alt: string
}

export interface ContactPerson {
  id: string
  name: string
  nameEn: string
  role: string
  phone: string
  phoneDisplay: string
  whatsapp: string
}

export interface CompanyInfo {
  nameAr: string
  nameEn: string
  tagline: string
  clubName: string
  website: string
  addressAr: string
  addressEn: string
  phone: string
  email: string
  mapsUrl: string
  mapsEmbedUrl: string
  lat: number
  lng: number
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

export interface ContactFormState {
  values: ContactFormData
  errors: ContactFormErrors
  status: 'idle' | 'submitting' | 'success' | 'error'
}

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'start' | 'center'
}
