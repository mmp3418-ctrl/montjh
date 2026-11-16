import type { GalleryCategoryId, Language } from '../types'

export interface Dictionary {
  brand: {
    company: string
    companyShort: string
    club: string
    clubSubtitle: string
    tagline: string
  }
  nav: {
    home: string
    about: string
    investments: string
    club: string
    gallery: string
    contact: string
    cta: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    badgeCompany: string
    badgeClub: string
    headline: string
    subheadline: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    eyebrow: string
    title: string
    p1: string
    p2: string
    p3: string
    visionTitle: string
    visionText: string
    luxuryTitle: string
    luxuryText: string
    globalTitle: string
    globalText: string
    cardCaption: string
    cardLine: string
  }
  investments: {
    eyebrow: string
    title: string
    description: string
    items: Record<
      string,
      {
        title: string
        description: string
      }
    >
  }
  club: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    features: Record<
      string,
      {
        title: string
        description: string
      }
    >
  }
  gallery: {
    eyebrow: string
    title: string
    description: string
    closePreview: string
    categories: Record<GalleryCategoryId, string>
    items: Record<
      string,
      {
        title: string
        alt: string
      }
    >
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    companyInfo: string
    address: string
    phoneFax: string
    officialEmail: string
    website: string
    mapTitle: string
    openMaps: string
    call: string
    whatsapp: string
    directManagement: string
    formName: string
    formNamePh: string
    formEmail: string
    formPhone: string
    formPhonePh: string
    formSubject: string
    formSubjectPh: string
    formMessage: string
    formMessagePh: string
    formSubmit: string
    formSubmitting: string
    formSuccess: string
    formError: string
    errors: {
      name: string
      emailRequired: string
      emailInvalid: string
      phoneRequired: string
      phoneInvalid: string
      subject: string
      message: string
    }
  }
  footer: {
    blurb: string
    quickLinks: string
    contact: string
    rights: string
  }
  a11y: {
    toggleTheme: string
    toggleLanguage: string
    lightMode: string
    darkMode: string
  }
}

export const translations: Record<Language, Dictionary> = {
  ar: {
    brand: {
      company: 'شركة مدينة الحدائق ذ.م.م',
      companyShort: 'مدينة الحدائق',
      club: 'نادي بيغونيا',
      clubSubtitle: 'المشروع الرائد',
      tagline: 'التعاون الاستثماري السياحي',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      investments: 'الاستثمارات',
      club: 'نادي بيغونيا',
      gallery: 'المعرض',
      contact: 'تواصل معنا',
      cta: 'تواصل الآن',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    hero: {
      badgeCompany: 'Garden City Company L.L.C',
      badgeClub: 'Begonia Club · المشروع الرائد',
      headline: 'شركة مدينة الحدائق ذ.م.م',
      subheadline: 'تعاون استثماري سياحي برؤية عالمية',
      description:
        'نطوّر وجهات سياحية استثنائية، ونقدّم عبر نادي بيغونيا — مشروعنا الرائد — تجربة عضوية حصرية تجمع الفخامة والشراكات الاستراتيجية في قلب طرابلس.',
      ctaPrimary: 'استكشف الاستثمارات',
      ctaSecondary: 'اكتشف نادي بيغونيا',
    },
    about: {
      eyebrow: 'من نحن',
      title: 'مدينة الحدائق… حيث يلتقي الاستثمار بالهيبة السياحية',
      p1: 'شركة مدينة الحدائق ذ.م.م (Garden City Company L.L.C) جهة متخصصة في التعاون الاستثماري السياحي، تعمل على بناء شراكات مستدامة ترفع قيمة الوجهات وتفتح آفاقاً جديدة للنمو.',
      p2: 'نؤمن بأن السياحة منظومة متكاملة من الضيافة والثقافة والتجربة. عبر نادي بيغونيا، مشروعنا الرائد، نقدّم مساحة حصرية للتواصل والاستثمار بمعايير راقية.',
      p3: 'مقرنا في طريق المطار، سيدي صليم، طرابلس - ليبيا، ونخدم شركاءنا عبر قنوات مباشرة ومهنية لضمان سرعة الاستجابة وجودة التنفيذ.',
      visionTitle: 'رؤية استثمارية',
      visionText: 'بناء منظومة سياحية مستدامة تعزز قيمة الوجهات الليبية.',
      luxuryTitle: 'معايير فاخرة',
      luxuryText: 'تجارب ضيافة وشراكات بمعايير راقية تليق بهوية المجموعة.',
      globalTitle: 'تعاون دولي',
      globalText: 'ربط المستثمرين المحليين والدوليين بفرص نمو حقيقية.',
      cardCaption: 'Tourism Investment Cooperation',
      cardLine: 'شراكات تبني وجهات… وتجارب تبقى في الذاكرة',
    },
    investments: {
      eyebrow: 'الاستثمارات والخدمات',
      title: 'قطاعات سياحية وشراكات قابلة للنمو',
      description:
        'منظومة متكاملة من الفرص الاستثمارية والخدمات التي تدعم تطوير الوجهات السياحية وتعزيز قيمة الشراكات طويلة الأمد.',
      items: {
        hospitality: {
          title: 'الضيافة والفنادق',
          description:
            'شراكات استثمارية في مشاريع الضيافة الفاخرة وتطوير الوجهات السياحية بمعايير عالمية.',
        },
        travel: {
          title: 'السفر والتجارب',
          description:
            'تصميم تجارب سياحية متكاملة تربط الزائر بالثقافة الليبية والمناظر المتوسطية الفريدة.',
        },
        'real-estate': {
          title: 'العقارات السياحية',
          description:
            'تطوير مجمعات ومنتجعات سياحية تعزز القيمة الاستثمارية وتدعم النمو المستدام.',
        },
        partnerships: {
          title: 'شراكات استراتيجية',
          description:
            'نتعاون مع مستثمرين محليين ودوليين لبناء منظومة سياحية مترابطة وقابلة للتوسع.',
        },
        destination: {
          title: 'تطوير الوجهات',
          description:
            'إعادة تخيل المساحات الحضرية والطبيعية كوجهات سياحية جاذبة للاستثمار والزيارة.',
        },
        advisory: {
          title: 'الاستشارات السياحية',
          description:
            'دراسات جدوى وخطط تشغيل واستشارات استثمارية لدعم قرارات الشركاء بثقة ووضوح.',
        },
      },
    },
    club: {
      eyebrow: 'المشروع الرائد',
      title: 'نادي بيغونيا',
      subtitle: 'حيث تلتقي الفخامة بفرص الاستثمار',
      description:
        'نادي بيغونيا هو المشروع الرائد لشركة مدينة الحدائق ذ.م.م؛ مساحة حصرية مصممة للأعضاء والشركاء الباحثين عن أجواء راقية، وتواصل استراتيجي، وتجربة ضيافة لا تُنسى.',
      ctaPrimary: 'استفسر عن العضوية',
      ctaSecondary: 'شاهد الأجواء',
      features: {
        exclusive: {
          title: 'عضوية حصرية',
          description: 'تجربة نادي راقية مخصصة للنخبة من الأعضاء والشركاء الاستثماريين.',
        },
        ambiance: {
          title: 'أجواء فاخرة',
          description: 'تصميم معاصر، تفاصيل دقيقة، ومساحات استقبال تعكس هوية بيغونيا.',
        },
        networking: {
          title: 'شبكة علاقات',
          description: 'منصة للتواصل بين رجال الأعمال والمستثمرين في قطاع السياحة والضيافة.',
        },
        events: {
          title: 'فعاليات خاصة',
          description: 'أمسيات ولقاءات مصممة لتعزيز الشراكات وعرض الفرص الاستثمارية.',
        },
      },
    },
    gallery: {
      eyebrow: 'المعرض',
      title: 'لحظات من عالم مدينة الحدائق ونادي بيغونيا',
      description:
        'تصفية تفاعلية ومعاينة كاملة للصور التي تعكس روح الوجهات، أجواء النادي، ورؤية المشاريع.',
      closePreview: 'إغلاق المعاينة',
      categories: {
        all: 'الكل',
        destinations: 'وجهات',
        club: 'نادي بيغونيا',
        investment: 'استثمار',
        hospitality: 'ضيافة',
        architecture: 'عمارة',
      },
      items: {
        g1: { title: 'أفق المتوسط', alt: 'شاطئ متوسطي عند الغروب' },
        g2: { title: 'ردهة النادي', alt: 'ردهة فندقية فاخرة' },
        g3: { title: 'حدائق استثمارية', alt: 'حديقة خضراء منسقة' },
        g4: { title: 'تجربة ضيافة', alt: 'منتجع فاخر بإطلالة مائية' },
        g5: { title: 'ممرات معمارية', alt: 'ممر معماري فاخر' },
        g6: { title: 'أمسية النادي', alt: 'قاعة مطعم راقية مضاءة' },
        g7: { title: 'إطلالة ساحلية', alt: 'ساحل متوسطي صافٍ' },
        g8: { title: 'قاعة الاستقبال', alt: 'قاعة استقبال فندقية فاخرة' },
      },
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'نحن هنا لبناء شراكتك القادمة',
      description:
        'تواصل مع الإدارة مباشرة، حدّد موقعنا على الخريطة، أو أرسل رسالتك عبر النموذج.',
      companyInfo: 'معلومات الشركة',
      address: 'العنوان',
      phoneFax: 'هاتف وفاكس',
      officialEmail: 'البريد الرسمي',
      website: 'الموقع الرسمي',
      mapTitle: 'موقعنا على الخريطة',
      openMaps: 'افتح في خرائط Google',
      call: 'اتصال',
      whatsapp: 'واتساب',
      directManagement: 'الإدارة المباشرة',
      formName: 'الاسم الكامل',
      formNamePh: 'أدخل اسمك',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف',
      formPhonePh: '09xxxxxxxx',
      formSubject: 'الموضوع',
      formSubjectPh: 'موضوع الرسالة',
      formMessage: 'الرسالة',
      formMessagePh: 'اكتب تفاصيل استفسارك أو عرض الشراكة...',
      formSubmit: 'إرسال الرسالة',
      formSubmitting: 'جاري الإرسال...',
      formSuccess: 'تم تجهيز رسالتك بنجاح. سيُفتح تطبيق البريد لإكمال الإرسال.',
      formError: 'يرجى تصحيح الحقول المطلوبة قبل الإرسال.',
      errors: {
        name: 'يرجى إدخال الاسم الكامل (حرفان على الأقل)',
        emailRequired: 'البريد الإلكتروني مطلوب',
        emailInvalid: 'صيغة البريد الإلكتروني غير صحيحة',
        phoneRequired: 'رقم الهاتف مطلوب',
        phoneInvalid: 'صيغة رقم الهاتف غير صحيحة',
        subject: 'يرجى إدخال موضوع الرسالة',
        message: 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل',
      },
    },
    footer: {
      blurb:
        'شركة مدينة الحدائق ذ.م.م — التعاون الاستثماري السياحي. نادي بيغونيا هو مشروعنا الرائد لتجربة راقية في طرابلس.',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
    },
    a11y: {
      toggleTheme: 'تبديل المظهر',
      toggleLanguage: 'تبديل اللغة',
      lightMode: 'الوضع الفاتح',
      darkMode: 'الوضع الداكن',
    },
  },
  en: {
    brand: {
      company: 'Garden City Company L.L.C',
      companyShort: 'Garden City',
      club: 'Begonia Club',
      clubSubtitle: 'Flagship Project',
      tagline: 'Tourism Investment Cooperation',
    },
    nav: {
      home: 'Home',
      about: 'About',
      investments: 'Investments',
      club: 'Begonia Club',
      gallery: 'Gallery',
      contact: 'Contact',
      cta: 'Contact Us',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      badgeCompany: 'Garden City Company L.L.C',
      badgeClub: 'Begonia Club · Flagship',
      headline: 'Garden City Company L.L.C',
      subheadline: 'Tourism investment cooperation with a global vision',
      description:
        'We develop exceptional tourism destinations and, through Begonia Club — our flagship project — deliver an exclusive membership experience that unites luxury and strategic partnerships in the heart of Tripoli.',
      ctaPrimary: 'Explore Investments',
      ctaSecondary: 'Discover Begonia Club',
    },
    about: {
      eyebrow: 'About Us',
      title: 'Garden City… where investment meets tourism prestige',
      p1: 'Garden City Company L.L.C is a specialized tourism investment cooperation firm building sustainable partnerships that elevate destinations and unlock new growth.',
      p2: 'We believe tourism is an integrated system of hospitality, culture, and experience. Through Begonia Club, our flagship project, we offer an exclusive space for networking and investment at refined standards.',
      p3: 'Based on Airport St., Sedy Slem, Tripoli - Libya, we serve partners through direct professional channels for fast response and quality delivery.',
      visionTitle: 'Investment Vision',
      visionText: 'Building a sustainable tourism ecosystem that strengthens Libyan destinations.',
      luxuryTitle: 'Luxury Standards',
      luxuryText: 'Hospitality experiences and partnerships that reflect our group identity.',
      globalTitle: 'Global Cooperation',
      globalText: 'Connecting local and international investors to real growth opportunities.',
      cardCaption: 'Tourism Investment Cooperation',
      cardLine: 'Partnerships that build destinations… experiences that stay with you',
    },
    investments: {
      eyebrow: 'Investments & Services',
      title: 'Tourism sectors and scalable partnerships',
      description:
        'An integrated portfolio of investment opportunities and services that advance destination development and long-term partnership value.',
      items: {
        hospitality: {
          title: 'Hospitality & Hotels',
          description:
            'Investment partnerships in luxury hospitality projects and destination development to global standards.',
        },
        travel: {
          title: 'Travel & Experiences',
          description:
            'Crafting integrated tourism journeys that connect visitors with Libyan culture and Mediterranean landscapes.',
        },
        'real-estate': {
          title: 'Tourism Real Estate',
          description:
            'Developing resorts and tourism complexes that enhance investment value and sustainable growth.',
        },
        partnerships: {
          title: 'Strategic Partnerships',
          description:
            'Collaborating with local and international investors to build a connected, scalable tourism ecosystem.',
        },
        destination: {
          title: 'Destination Development',
          description:
            'Reimagining urban and natural spaces as compelling destinations for investment and visitation.',
        },
        advisory: {
          title: 'Tourism Advisory',
          description:
            'Feasibility studies, operating plans, and investment advisory to support confident partner decisions.',
        },
      },
    },
    club: {
      eyebrow: 'Flagship Project',
      title: 'Begonia Club',
      subtitle: 'Where luxury meets investment opportunity',
      description:
        'Begonia Club is the flagship project of Garden City Company L.L.C — an exclusive space designed for members and partners seeking refined ambiance, strategic networking, and unforgettable hospitality.',
      ctaPrimary: 'Inquire About Membership',
      ctaSecondary: 'View the Atmosphere',
      features: {
        exclusive: {
          title: 'Exclusive Membership',
          description:
            'A refined club experience curated for elite members and investment partners.',
        },
        ambiance: {
          title: 'Luxury Atmosphere',
          description:
            'Contemporary design, precise detailing, and reception spaces that embody Begonia’s identity.',
        },
        networking: {
          title: 'Business Network',
          description:
            'A platform connecting entrepreneurs and investors across tourism and hospitality.',
        },
        events: {
          title: 'Private Events',
          description:
            'Evenings and gatherings designed to strengthen partnerships and showcase opportunities.',
        },
      },
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Moments from Garden City & Begonia Club',
      description:
        'Interactive filtering and fullscreen preview of imagery reflecting destinations, club atmosphere, and project vision.',
      closePreview: 'Close preview',
      categories: {
        all: 'All',
        destinations: 'Destinations',
        club: 'Begonia Club',
        investment: 'Investment',
        hospitality: 'Hospitality',
        architecture: 'Architecture',
      },
      items: {
        g1: { title: 'Mediterranean Horizon', alt: 'Mediterranean beach at sunset' },
        g2: { title: 'Club Lobby', alt: 'Luxury hotel lobby' },
        g3: { title: 'Investment Gardens', alt: 'Landscaped green garden' },
        g4: { title: 'Hospitality Experience', alt: 'Luxury resort with water view' },
        g5: { title: 'Architectural Walks', alt: 'Elegant architectural corridor' },
        g6: { title: 'Club Evening', alt: 'Refined illuminated dining hall' },
        g7: { title: 'Coastal Vista', alt: 'Clear Mediterranean coastline' },
        g8: { title: 'Reception Hall', alt: 'Luxury hotel reception hall' },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build your next partnership',
      description:
        'Reach management directly, locate us on the map, or send your message through the form.',
      companyInfo: 'Company Information',
      address: 'Address',
      phoneFax: 'Telephone & Fax',
      officialEmail: 'Official Email',
      website: 'Official Website',
      mapTitle: 'Our Location',
      openMaps: 'Open in Google Maps',
      call: 'Call',
      whatsapp: 'WhatsApp',
      directManagement: 'Direct Management',
      formName: 'Full Name',
      formNamePh: 'Enter your name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number',
      formPhonePh: '09xxxxxxxx',
      formSubject: 'Subject',
      formSubjectPh: 'Message subject',
      formMessage: 'Message',
      formMessagePh: 'Share your inquiry or partnership proposal...',
      formSubmit: 'Send Message',
      formSubmitting: 'Sending...',
      formSuccess: 'Your message is ready. Your email app will open to complete sending.',
      formError: 'Please correct the required fields before submitting.',
      errors: {
        name: 'Please enter your full name (at least 2 characters)',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        phoneRequired: 'Phone number is required',
        phoneInvalid: 'Invalid phone number format',
        subject: 'Please enter a message subject',
        message: 'Message must be at least 10 characters',
      },
    },
    footer: {
      blurb:
        'Garden City Company L.L.C — Tourism Investment Cooperation. Begonia Club is our flagship project for a refined Tripoli experience.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    a11y: {
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
    },
  },
}
