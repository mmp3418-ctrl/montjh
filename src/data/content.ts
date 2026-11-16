import type { CompanyInfo, ContactPerson, NavItem, ServiceItem } from '../types'

/** Canonical brand — never translate or localize this string. */
export const BRAND_NAME = 'Garden City L.L.C' as const

export const company: CompanyInfo = {
  brandName: BRAND_NAME,
  taglineAr: 'التعاون الاستثماري السياحي',
  taglineEn: 'Tourism Investment Cooperation',
  addressAr: 'طريق المطار، سيدي صليم، طرابلس - ليبيا',
  addressEn: 'Airport St., Sedy Slem, Tripoli - Libya',
  phone: '+218 (21) 480 2432',
  phoneTel: '+218214802432',
  email: 'info@garden-city.ly',
  mapsUrl: 'https://maps.google.com/?q=32.794930,13.134346',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=32.794930,13.134346&z=16&output=embed',
  lat: 32.79493,
  lng: 13.134346,
}

export const navItems: NavItem[] = [
  { id: 'home', href: '#home', labelKey: 'home' },
  { id: 'about', href: '#about', labelKey: 'about' },
  { id: 'investments', href: '#investments', labelKey: 'investments' },
  { id: 'contact', href: '#contact', labelKey: 'contact' },
]

export const services: ServiceItem[] = [
  { id: 'hospitality', icon: 'hotel' },
  { id: 'travel', icon: 'plane' },
  { id: 'real-estate', icon: 'landmark' },
  { id: 'partnerships', icon: 'handshake' },
  { id: 'destination', icon: 'tree' },
  { id: 'advisory', icon: 'compass' },
]

export const contactPersons: ContactPerson[] = [
  {
    id: 'mounir',
    nameAr: 'منير',
    nameEn: 'Mounir',
    phone: '0910151188',
    phoneDisplay: '0910 151 188',
    whatsapp: '218910151188',
  },
  {
    id: 'khaled',
    nameAr: 'خالد',
    nameEn: 'Khaled',
    phone: '0912153950',
    phoneDisplay: '0912 153 950',
    whatsapp: '218912153950',
  },
]
