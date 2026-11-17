import { Moon, Sun } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle: FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.a11y.lightMode : t.a11y.darkMode}
      title={t.a11y.toggleTheme}
      className={`nav-control touch-target inline-flex h-11 w-11 items-center justify-center rounded-xl text-[var(--text-primary)] transition hover:border-[var(--glass-border-hover)] ${className}`}
    >
      {isDark ? <Sun size={18} className="text-cyan" /> : <Moon size={18} className="text-teal" />}
    </button>
  )
}

export default ThemeToggle
