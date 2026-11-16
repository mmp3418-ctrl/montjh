import type { ReactNode } from 'react'

export type ThemeMode = 'dark' | 'light'
export type Language = 'ar' | 'en'
export type NavLabelKey = 'home' | 'about' | 'investments' | 'contact'

export interface NavItem {
  id: NavLabelKey
  href: `#${NavLabelKey}`
  labelKey: NavLabelKey
}

export interface ServiceItem {
  id: string
  icon: 'hotel' | 'plane' | 'landmark' | 'handshake' | 'tree' | 'compass'
}

export interface ContactPerson {
  id: string
  nameAr: string
  nameEn: string
  phone: string
  phoneDisplay: string
  whatsapp: string
}

export interface CompanyInfo {
  brandName: 'Garden City L.L.C'
  taglineAr: string
  taglineEn: string
  addressAr: string
  addressEn: string
  phone: string
  phoneTel: string
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
  title: ReactNode
  description?: string
  align?: 'start' | 'center'
}
