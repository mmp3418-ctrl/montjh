import type {
  ClubFeature,
  CompanyInfo,
  ContactPerson,
  GalleryItem,
  NavItem,
  ServiceItem,
} from '../types'

export const company: CompanyInfo = {
  nameAr: 'شركة مدينة الحدائق ذ.م.م',
  nameEn: 'Garden City Company LLC',
  clubName: 'Begonia Club',
  website: 'www.begonia.com.ly',
  address: 'شارع المطار، سيدي سليم، طرابلس — ليبيا',
  phone: '+218 (21) 480 2432',
  email: 'info@begonia.com.ly',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'الرئيسية', href: '#home' },
  { id: 'about', label: 'من نحن', href: '#about' },
  { id: 'investments', label: 'الاستثمارات', href: '#investments' },
  { id: 'club', label: 'نادي بيغونيا', href: '#club' },
  { id: 'gallery', label: 'المعرض', href: '#gallery' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact' },
]

export const services: ServiceItem[] = [
  {
    id: 'hospitality',
    title: 'الضيافة والفنادق',
    description:
      'شراكات استثمارية في مشاريع الضيافة الفاخرة وتطوير الوجهات السياحية بمعايير عالمية.',
    icon: 'hotel',
  },
  {
    id: 'travel',
    title: 'السفر والتجارب',
    description:
      'تصميم تجارب سياحية متكاملة تربط الزائر بالثقافة الليبية والمناظر المتوسطية الفريدة.',
    icon: 'plane',
  },
  {
    id: 'real-estate',
    title: 'العقارات السياحية',
    description:
      'تطوير مجمعات ومنتجعات سياحية تعزز القيمة الاستثمارية وتدعم النمو المستدام.',
    icon: 'landmark',
  },
  {
    id: 'partnerships',
    title: 'شراكات استراتيجية',
    description:
      'نتعاون مع مستثمرين محليين ودوليين لبناء منظومة سياحية مترابطة وقابلة للتوسع.',
    icon: 'handshake',
  },
  {
    id: 'destination',
    title: 'تطوير الوجهات',
    description:
      'إعادة تخيل المساحات الحضرية والطبيعية كوجهات سياحية جاذبة للاستثمار والزيارة.',
    icon: 'tree',
  },
  {
    id: 'advisory',
    title: 'الاستشارات السياحية',
    description:
      'دراسات جدوى وخطط تشغيل واستشارات استثمارية لدعم قرارات الشركاء بثقة ووضوح.',
    icon: 'compass',
  },
]

export const clubFeatures: ClubFeature[] = [
  {
    id: 'exclusive',
    title: 'عضوية حصرية',
    description: 'تجربة نادي راقية مخصصة للنخبة من الأعضاء والشركاء الاستثماريين.',
  },
  {
    id: 'ambiance',
    title: 'أجواء فاخرة',
    description: 'تصميم معاصر، تفاصيل دقيقة، ومساحات استقبال تعكس هوية بيغونيا.',
  },
  {
    id: 'networking',
    title: 'شبكة علاقات',
    description: 'منصة للتواصل بين رجال الأعمال والمستثمرين في قطاع السياحة والضيافة.',
  },
  {
    id: 'events',
    title: 'فعاليات خاصة',
    description: 'أمسيات ولقاءات مصممة لتعزيز الشراكات وعرض الفرص الاستثمارية.',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'أفق المتوسط',
    category: 'وجهات',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    alt: 'شاطئ متوسطي عند الغروب',
  },
  {
    id: 'g2',
    title: 'ردهة النادي',
    category: 'نادي بيغونيا',
    imageUrl:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    alt: 'ردهة فندقية فاخرة',
  },
  {
    id: 'g3',
    title: 'حدائق استثمارية',
    category: 'استثمار',
    imageUrl:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    alt: 'حديقة خضراء منسقة',
  },
  {
    id: 'g4',
    title: 'تجربة ضيافة',
    category: 'ضيافة',
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    alt: 'منتجع فاخر بإطلالة مائية',
  },
  {
    id: 'g5',
    title: 'ممرات معمارية',
    category: 'عمارة',
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'ممر معماري فاخر',
  },
  {
    id: 'g6',
    title: 'أمسية النادي',
    category: 'نادي بيغونيا',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'قاعة مطعم راقية مضاءة',
  },
]

export const contactPersons: ContactPerson[] = [
  {
    id: 'mounir',
    name: 'منير',
    role: 'الإدارة المباشرة',
    phone: '0910151188',
    phoneDisplay: '0910 151 188',
  },
  {
    id: 'khaled',
    name: 'خالد',
    role: 'الإدارة المباشرة',
    phone: '0912153950',
    phoneDisplay: '0912 153 950',
  },
]
