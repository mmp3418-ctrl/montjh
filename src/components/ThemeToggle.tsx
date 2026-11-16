import { Moon, Sun } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

interface ThemeToggleProps {
  floating?: boolean
  className?: string
}

const ThemeToggle: FC<ThemeToggleProps> = ({ floating = false, className = '' }) => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.a11y.lightMode : t.a11y.darkMode}
      title={t.a11y.toggleTheme}
      className={`nav-control touch-target inline-flex items-center justify-center rounded-xl text-[var(--text-primary)] transition hover:border-[var(--glass-border-hover)] ${
        floating
          ? 'fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] end-[max(1.25rem,env(safe-area-inset-right))] z-40 h-12 w-12 shadow-[var(--shadow-glass)]'
          : 'h-11 w-11'
      } ${className}`}
    >
      {isDark ? <Sun size={18} className="text-cyan" /> : <Moon size={18} className="text-teal" />}
    </button>
  )
}

export default ThemeToggle
