import type {
  ClubFeature,
  CompanyInfo,
  ContactPerson,
  GalleryCategoryId,
  GalleryItem,
  NavItem,
  ServiceItem,
} from '../types'

export const company: CompanyInfo = {
  nameAr: 'شركة مدينة الحدائق ذ.م.م',
  nameEn: 'Garden City Company L.L.C',
  legalSuffix: 'L.L.C',
  taglineAr: 'التعاون الاستثماري السياحي',
  taglineEn: 'Tourism Investment Cooperation',
  clubName: 'Begonia Club',
  website: 'www.begonia.com.ly',
  addressAr: 'طريق المطار، سيدي صليم، طرابلس - ليبيا',
  addressEn: 'Airport St., Sedy Slem, Tripoli - Libya',
  phone: '+218 (21) 480 2432',
  email: 'info@begonia.com.ly',
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
  { id: 'club', href: '#club', labelKey: 'club' },
  { id: 'gallery', href: '#gallery', labelKey: 'gallery' },
  { id: 'contact', href: '#contact', labelKey: 'contact' },
]

export const services: ServiceItem[] = [
  { id: 'hospitality', icon: 'hotel', titleKey: 'hospitality', descriptionKey: 'hospitality' },
  { id: 'travel', icon: 'plane', titleKey: 'travel', descriptionKey: 'travel' },
  {
    id: 'real-estate',
    icon: 'landmark',
    titleKey: 'real-estate',
    descriptionKey: 'real-estate',
  },
  {
    id: 'partnerships',
    icon: 'handshake',
    titleKey: 'partnerships',
    descriptionKey: 'partnerships',
  },
  { id: 'destination', icon: 'tree', titleKey: 'destination', descriptionKey: 'destination' },
  { id: 'advisory', icon: 'compass', titleKey: 'advisory', descriptionKey: 'advisory' },
]

export const clubFeatures: ClubFeature[] = [
  { id: 'exclusive', titleKey: 'exclusive', descriptionKey: 'exclusive' },
  { id: 'ambiance', titleKey: 'ambiance', descriptionKey: 'ambiance' },
  { id: 'networking', titleKey: 'networking', descriptionKey: 'networking' },
  { id: 'events', titleKey: 'events', descriptionKey: 'events' },
]

export const galleryCategoryIds: GalleryCategoryId[] = [
  'all',
  'destinations',
  'club',
  'investment',
  'hospitality',
  'architecture',
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    titleKey: 'g1',
    category: 'destinations',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g1',
  },
  {
    id: 'g2',
    titleKey: 'g2',
    category: 'club',
    imageUrl:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g2',
  },
  {
    id: 'g3',
    titleKey: 'g3',
    category: 'investment',
    imageUrl:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g3',
  },
  {
    id: 'g4',
    titleKey: 'g4',
    category: 'hospitality',
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g4',
  },
  {
    id: 'g5',
    titleKey: 'g5',
    category: 'architecture',
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g5',
  },
  {
    id: 'g6',
    titleKey: 'g6',
    category: 'club',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g6',
  },
  {
    id: 'g7',
    titleKey: 'g7',
    category: 'destinations',
    imageUrl:
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g7',
  },
  {
    id: 'g8',
    titleKey: 'g8',
    category: 'hospitality',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
    altKey: 'g8',
  },
]

export const contactPersons: ContactPerson[] = [
  {
    id: 'mounir',
    nameAr: 'منير',
    nameEn: 'Mounir',
    roleKey: 'directManagement',
    phone: '0910151188',
    phoneDisplay: '0910 151 188',
    whatsapp: '218910151188',
  },
  {
    id: 'khaled',
    nameAr: 'خالد',
    nameEn: 'Khaled',
    roleKey: 'directManagement',
    phone: '0912153950',
    phoneDisplay: '0912 153 950',
    whatsapp: '218912153950',
  },
]
