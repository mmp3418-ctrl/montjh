export type ThemeMode = 'dark' | 'light'
export type Language = 'ar' | 'en'

export type NavLabelKey =
  | 'home'
  | 'about'
  | 'vision'
  | 'services'
  | 'gallery'
  | 'contact'

export interface NavItem {
  id: NavLabelKey
  href: `#${string}`
  labelKey: NavLabelKey
}

export interface ContactFormData {
  full_name: string
  email: string
  phone: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

export type {
  ContactMessage,
  ContactMessageInsert,
  GalleryItem,
  ManagementContact,
  ServiceRow,
  SiteSettings,
} from './database'
