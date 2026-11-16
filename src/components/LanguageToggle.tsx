import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface LanguageToggleProps {
  className?: string
}

const LanguageToggle: FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.a11y.toggleLanguage}
      title={t.a11y.toggleLanguage}
      className={`touch-target inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 font-display text-xs font-bold tracking-wide text-[var(--text-primary)] backdrop-blur-xl transition hover:border-[var(--glass-border-hover)] hover:text-cyan ${className}`}
    >
      {language === 'ar' ? 'EN' : 'ع'}
    </button>
  )
}

export default LanguageToggle
