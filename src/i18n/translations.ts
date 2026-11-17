import type { Language } from '../types'

/** UI chrome only — no business/content copy. */
export interface Dictionary {
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
    a11y: {
      toggleTheme: 'تبديل المظهر',
      toggleLanguage: 'تبديل اللغة',
      lightMode: 'الوضع الفاتح',
      darkMode: 'الوضع الداكن',
      brandHome: 'الصفحة الرئيسية',
    },
  },
  en: {
    a11y: {
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      brandHome: 'Home',
    },
  },
}
