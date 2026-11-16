import type { Language } from '../types'

export interface Dictionary {
  brand: {
    company: string
    tagline: string
  }
  nav: {
    home: string
    about: string
    investments: string
    contact: string
    cta: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    badgeCompany: string
    badgeSector: string
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
  contact: {
    eyebrow: string
    title: string
    description: string
    companyInfo: string
    address: string
    phoneFax: string
    officialEmail: string
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
      company: 'Garden City L.L.C',
      tagline: 'التعاون الاستثماري السياحي',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      investments: 'الاستثمارات',
      contact: 'تواصل معنا',
      cta: 'تواصل الآن',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    hero: {
      badgeCompany: 'Garden City L.L.C',
      badgeSector: 'استثمار سياحي',
      headline: 'Garden City L.L.C',
      subheadline: 'تعاون استثماري سياحي برؤية واضحة',
      description:
        'نطوّر وجهات سياحية استثنائية ونبني شراكات استراتيجية تعزز قيمة الاستثمار السياحي في قلب طرابلس وليبيا.',
      ctaPrimary: 'استكشف القطاعات',
      ctaSecondary: 'تواصل مع الإدارة',
    },
    about: {
      eyebrow: 'من نحن',
      title: 'Garden City L.L.C… حيث يلتقي الاستثمار بالهيبة السياحية',
      p1: 'Garden City L.L.C جهة متخصصة في التعاون الاستثماري السياحي، تعمل على بناء شراكات مستدامة ترفع قيمة الوجهات وتفتح آفاقاً جديدة للنمو.',
      p2: 'نؤمن بأن السياحة منظومة متكاملة من الضيافة والثقافة والتجربة، ونقدّم حلولاً استثمارية بمعايير راقية تليق بطموح شركائنا.',
      p3: 'مقرنا في طريق المطار، سيدي صليم، طرابلس - ليبيا، ونخدم شركاءنا عبر قنوات مباشرة ومهنية لضمان سرعة الاستجابة وجودة التنفيذ.',
      visionTitle: 'رؤية استثمارية',
      visionText: 'بناء منظومة سياحية مستدامة تعزز قيمة الوجهات الليبية.',
      luxuryTitle: 'معايير راقية',
      luxuryText: 'تجارب ضيافة وشراكات بمعايير احترافية تليق بهوية الشركة.',
      globalTitle: 'تعاون موسّع',
      globalText: 'ربط المستثمرين المحليين والدوليين بفرص نمو حقيقية.',
      cardCaption: 'Tourism Investment Cooperation',
      cardLine: 'شراكات تبني وجهات… وتجارب تبقى في الذاكرة',
    },
    investments: {
      eyebrow: 'الاستثمارات والتصنيفات',
      title: 'قطاعاتنا الاستثمارية',
      description:
        'تصنيفات واضحة ومنظمة لقطاعات التعاون الاستثماري السياحي التي تركز عليها Garden City L.L.C.',
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
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'نحن هنا لبناء شراكتك القادمة',
      description:
        'تواصل مع الإدارة مباشرة، حدّد موقعنا على الخريطة، أو أرسل رسالتك عبر النموذج.',
      companyInfo: 'معلومات الشركة',
      address: 'العنوان',
      phoneFax: 'هاتف وفاكس',
      officialEmail: 'البريد الرسمي',
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
        'Garden City L.L.C — التعاون الاستثماري السياحي. شراكات راقية ووجهات واعدة في طرابلس.',
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
      company: 'Garden City L.L.C',
      tagline: 'Tourism Investment Cooperation',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      investments: 'Investments',
      contact: 'Contact',
      cta: 'Contact Us',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      badgeCompany: 'Garden City L.L.C',
      badgeSector: 'Tourism Investment',
      headline: 'Garden City L.L.C',
      subheadline: 'Tourism investment cooperation with a clear vision',
      description:
        'We develop exceptional tourism destinations and build strategic partnerships that elevate investment value across Tripoli and Libya.',
      ctaPrimary: 'Explore Categories',
      ctaSecondary: 'Contact Management',
    },
    about: {
      eyebrow: 'About Us',
      title: 'Garden City… where investment meets tourism prestige',
      p1: 'Garden City L.L.C is a specialized tourism investment cooperation firm building sustainable partnerships that elevate destinations and unlock new growth.',
      p2: 'We believe tourism is an integrated system of hospitality, culture, and experience — delivered through refined investment solutions for ambitious partners.',
      p3: 'Based on Airport St., Sedy Slem, Tripoli - Libya, we serve partners through direct professional channels for fast response and quality delivery.',
      visionTitle: 'Investment Vision',
      visionText: 'Building a sustainable tourism ecosystem that strengthens Libyan destinations.',
      luxuryTitle: 'Refined Standards',
      luxuryText: 'Hospitality experiences and partnerships that reflect our corporate identity.',
      globalTitle: 'Expanded Cooperation',
      globalText: 'Connecting local and international investors to real growth opportunities.',
      cardCaption: 'Tourism Investment Cooperation',
      cardLine: 'Partnerships that build destinations… experiences that stay with you',
    },
    investments: {
      eyebrow: 'Investments & Categories',
      title: 'Our investment categories',
      description:
        'Clear, organized classifications of the tourism investment sectors Garden City focuses on.',
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
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build your next partnership',
      description:
        'Reach management directly, locate us on the map, or send your message through the form.',
      companyInfo: 'Company Information',
      address: 'Address',
      phoneFax: 'Telephone & Fax',
      officialEmail: 'Official Email',
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
        'Garden City L.L.C — Tourism Investment Cooperation. Refined partnerships and promising destinations in Tripoli.',
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
