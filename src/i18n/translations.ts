import type { Language } from '../types'

/** UI chrome / empty states only — business copy comes from Supabase. */
export interface Dictionary {
  nav: {
    home: string
    about: string
    vision: string
    services: string
    gallery: string
    contact: string
    cta: string
    openMenu: string
    closeMenu: string
    menuLabel: string
  }
  hero: {
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    eyebrow: string
    title: string
  }
  vision: {
    eyebrow: string
    visionTitle: string
    missionTitle: string
  }
  services: {
    eyebrow: string
    title: string
  }
  gallery: {
    eyebrow: string
    title: string
    all: string
  }
  contact: {
    eyebrow: string
    title: string
    formTitle: string
    formName: string
    formEmail: string
    formPhone: string
    formMessage: string
    formSubmit: string
    formSubmitting: string
    formSuccess: string
    formError: string
    address: string
    phone: string
    email: string
    management: string
    mapTitle: string
    openMaps: string
    call: string
    errors: {
      name: string
      emailRequired: string
      emailInvalid: string
      message: string
    }
  }
  footer: {
    rights: string
  }
  empty: {
    awaiting: string
    noServices: string
    noGallery: string
    noContacts: string
    noMap: string
  }
  a11y: {
    toggleTheme: string
    toggleLanguage: string
    lightMode: string
    darkMode: string
    brandHome: string
  }
}

export const translations: Record<Language, Dictionary> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'المرافق',
      vision: 'الترفيه والرياضة',
      services: 'الخدمات',
      gallery: 'معرض الصور',
      contact: 'التواصل',
      cta: 'تواصل معنا',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      menuLabel: 'القائمة',
    },
    hero: {
      ctaPrimary: 'استكشف المرافق',
      ctaSecondary: 'تواصل معنا',
    },
    about: {
      eyebrow: 'المجمع السكني',
      title: 'وصف المرافق والخدمات',
    },
    vision: {
      eyebrow: 'المرافق',
      visionTitle: 'المرافق الترفيهية والرياضية',
      missionTitle: 'الخدمات المتوفرة',
    },
    services: {
      eyebrow: 'المرافق الترفيهية',
      title: 'المرافق الترفيهية والرياضية',
    },
    gallery: {
      eyebrow: 'معرض الصور',
      title: 'معرض الصور',
      all: 'الكل',
    },
    contact: {
      eyebrow: 'التواصل',
      title: 'تواصل معنا',
      formTitle: 'أرسل رسالة',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف',
      formMessage: 'الرسالة',
      formSubmit: 'إرسال',
      formSubmitting: 'جاري الإرسال...',
      formSuccess: 'تم إرسال رسالتك بنجاح.',
      formError: 'تعذر الإرسال. حاول مرة أخرى.',
      address: 'العنوان',
      phone: 'الهاتف',
      email: 'البريد',
      management: 'الإدارة المباشرة',
      mapTitle: 'موقعنا',
      openMaps: 'افتح الخريطة',
      call: 'اتصال',
      errors: {
        name: 'يرجى إدخال الاسم',
        emailRequired: 'البريد مطلوب',
        emailInvalid: 'صيغة البريد غير صحيحة',
        message: 'الرسالة قصيرة جداً',
      },
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
    },
    empty: {
      awaiting: 'بانتظار المحتوى من لوحة التحكم',
      noServices: 'لا توجد خدمات بعد',
      noGallery: 'بانتظار رفع الصورة',
      noContacts: 'لا توجد جهات اتصال بعد',
      noMap: 'الخريطة ستظهر عند إضافة الرابط',
    },
    a11y: {
      toggleTheme: 'تبديل المظهر',
      toggleLanguage: 'تبديل اللغة',
      lightMode: 'الوضع الفاتح',
      darkMode: 'الوضع الداكن',
      brandHome: 'الصفحة الرئيسية',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Facilities',
      vision: 'Recreation & Sports',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      cta: 'Contact Us',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menuLabel: 'Menu',
    },
    hero: {
      ctaPrimary: 'Explore Facilities',
      ctaSecondary: 'Contact Us',
    },
    about: {
      eyebrow: 'Residential Complex',
      title: 'Facilities & Services Overview',
    },
    vision: {
      eyebrow: 'Facilities',
      visionTitle: 'Recreational and Sports Facilities',
      missionTitle: 'Available Services',
    },
    services: {
      eyebrow: 'Recreational Facilities',
      title: 'Recreational and Sports Facilities',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Gallery',
      all: 'All',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      formTitle: 'Send a message',
      formName: 'Full name',
      formEmail: 'Email',
      formPhone: 'Phone',
      formMessage: 'Message',
      formSubmit: 'Send',
      formSubmitting: 'Sending...',
      formSuccess: 'Your message was sent successfully.',
      formError: 'Could not send. Please try again.',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      management: 'Direct Management',
      mapTitle: 'Our Location',
      openMaps: 'Open map',
      call: 'Call',
      errors: {
        name: 'Please enter your name',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        message: 'Message is too short',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
    empty: {
      awaiting: 'Awaiting content from Dashboard',
      noServices: 'No services yet',
      noGallery: 'Awaiting photo upload',
      noContacts: 'No management contacts yet',
      noMap: 'Map appears once a link is added',
    },
    a11y: {
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      brandHome: 'Home',
    },
  },
}
