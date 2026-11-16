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

export interface GalleryItem {
  id: string
  title: string
  category: string
  imageUrl: string
  alt: string
}

export interface ContactPerson {
  id: string
  name: string
  role: string
  phone: string
  phoneDisplay: string
}

export interface CompanyInfo {
  nameAr: string
  nameEn: string
  clubName: string
  website: string
  address: string
  phone: string
  email: string
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
