import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type ReactNode,
} from 'react'
import { translations, type Dictionary } from '../i18n/translations'
import type { Language } from '../types'

interface LanguageContextValue {
  language: Language
  dir: 'rtl' | 'ltr'
  t: Dictionary
  toggleLanguage: () => void
  setLanguage: (language: Language) => void
}

const STORAGE_KEY = 'garden-city-language'
const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  // Default locale is Arabic (RTL). Persisted choice still wins after first toggle.
  if (typeof window === 'undefined') return 'ar'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en') return 'en'
  return 'ar'
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir: language === 'ar' ? 'rtl' : 'ltr',
      t: translations[language],
      toggleLanguage,
      setLanguage,
    }),
    [language, toggleLanguage, setLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
