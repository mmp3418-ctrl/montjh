import type { GalleryItem, ServiceRow, SiteSettings } from '../types'

/** Executive bilingual content. Image fields intentionally left empty for dashboard uploads. */
export const seedSettings: SiteSettings = {
  id: 'seed-settings',
  hero_title_ar: 'نستثمر في مستقبل السياحة الليبية بمعايير عالمية',
  hero_title_en: 'Investing in Libya’s tourism future to world-class standards',
  hero_subtitle_ar:
    'Garden City L.L.C تقود تطوير الوجهات والمنتجعات الفاخرة عبر شراكات استثمارية رصينة تجمع بين الرؤية المحلية والخبرة الدولية.',
  hero_subtitle_en:
    'Garden City L.L.C leads luxury destination and resort development through disciplined investment partnerships that unite local vision with international expertise.',
  about_ar:
    'Garden City L.L.C شركة متخصصة في التعاون الاستثماري السياحي، تعمل على بناء منظومة متكاملة لتطوير المنتجعات والوجهات والضيافة الفاخرة في ليبيا. نجمع بين الحوكمة الاستثمارية الرصينة ومعايير الجودة العالمية لخلق قيمة مستدامة للمستثمرين والشركاء والزوار.',
  about_en:
    'Garden City L.L.C is a specialized tourism investment cooperation firm building an integrated platform for resorts, destinations, and luxury hospitality across Libya. We combine disciplined investment governance with global quality standards to create lasting value for investors, partners, and guests.',
  vision_ar:
    'أن نكون الشريك الاستثماري الأبرز في صياغة الوجهات السياحية الراقية في ليبيا، ونموذجاً يُحتذى في تطوير أصول الضيافة بمعايير دولية وهوية متوسطية أصيلة.',
  vision_en:
    'To be the foremost investment partner shaping refined tourism destinations in Libya, and a benchmark for developing hospitality assets to international standards with authentic Mediterranean character.',
  mission_ar:
    'تطوير وإدارة مشاريع سياحية عالية الأثر عبر دراسات دقيقة، شراكات استراتيجية، وتشغيل بمعايير فاخرة تعزز جاذبية طرابلس وليبيا على خارطة السياحة الإقليمية.',
  mission_en:
    'To develop and manage high-impact tourism projects through rigorous studies, strategic partnerships, and luxury-grade operations that elevate Tripoli and Libya on the regional tourism map.',
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
    id: 'svc-resorts',
    title_ar: 'تطوير المنتجعات والوجهات السياحية',
    title_en: 'Resorts & Destinations Development',
    description_ar:
      'نصمّم ونطوّر منتجعات ووجهات سياحية متكاملة تجمع بين الهوية المكانية والتجربة الفاخرة والعائد الاستثماري المستدام.',
    description_en:
      'We design and develop integrated resorts and destinations that balance place identity, luxury experience, and sustainable investment returns.',
    icon_name: 'trees',
    image_url: null,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'svc-assets',
    title_ar: 'إدارة الأصول والاستثمارات الفندقية',
    title_en: 'Hospitality Asset & Investment Management',
    description_ar:
      'نوفّر إدارة استثمارية وتشغيلية للأصول الفندقية، مع تحسين الأداء المالي والتشغيلي ورفع قيمة المحفظة على المدى الطويل.',
    description_en:
      'We provide investment and operational management for hospitality assets, optimizing financial and operating performance to grow long-term portfolio value.',
    icon_name: 'landmark',
    image_url: null,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 'svc-luxury',
    title_ar: 'الضيافة الفاخرة والمرافق الترفيهية',
    title_en: 'Luxury Hospitality & Leisure Facilities',
    description_ar:
      'نبني تجارب ضيافة راقية ومرافق ترفيهية مميزة ترتقي بتوقعات النزلاء وتعزز تميّز الوجهة في السوق الإقليمي.',
    description_en:
      'We craft refined hospitality experiences and distinctive leisure facilities that elevate guest expectations and strengthen destination differentiation.',
    icon_name: 'hotel',
    image_url: null,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: 'svc-planning',
    title_ar: 'دراسات الجدوى والتخطيط السياحي الاستراتيجي',
    title_en: 'Tourism Feasibility & Strategic Planning',
    description_ar:
      'نقدّم دراسات جدوى وخططاً استراتيجية دقيقة تمكّن الشركاء من اتخاذ قرارات استثمارية واثقة ومدروسة في القطاع السياحي.',
    description_en:
      'We deliver precise feasibility studies and strategic plans that empower partners to make confident, well-informed tourism investment decisions.',
    icon_name: 'compass',
    image_url: null,
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
]

export const seedGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title_ar: 'أفق الواجهة الساحلية',
    title_en: 'Waterfront Horizon Concept',
    category_ar: 'وجهات',
    category_en: 'Destinations',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'gal-2',
    title_ar: 'منتجع الضيافة الفاخرة',
    title_en: 'Luxury Resort Pavilion',
    category_ar: 'منتجعات',
    category_en: 'Resorts',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'gal-3',
    title_ar: 'ردهة الاستقبال الراقية',
    title_en: 'Grand Arrival Lobby',
    category_ar: 'ضيافة',
    category_en: 'Hospitality',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'gal-4',
    title_ar: 'مساحات الترفيه العائلية',
    title_en: 'Family Leisure Terraces',
    category_ar: 'ترفيه',
    category_en: 'Leisure',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'gal-5',
    title_ar: 'مخطط تطوير الوجهة',
    title_en: 'Destination Masterplan Study',
    category_ar: 'تخطيط',
    category_en: 'Planning',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'gal-6',
    title_ar: 'تجربة المساء المتوسطية',
    title_en: 'Mediterranean Evening Experience',
    category_ar: 'تجارب',
    category_en: 'Experiences',
    image_url: null,
    created_at: new Date().toISOString(),
  },
]

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=32.794930,13.134346&z=16&output=embed'

export const MAP_EXTERNAL_URL = 'https://maps.google.com/?q=32.794930,13.134346'
