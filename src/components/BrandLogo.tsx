import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

interface BrandLogoProps {
  compact?: boolean
  className?: string
}

const BrandLogo: FC<BrandLogoProps> = ({ compact = false, className = '' }) => {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const markColor = theme === 'dark' ? '#F8FAFC' : '#0B192C'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="48" height="48" rx="12" fill="#0B192C" />
        <circle cx="24" cy="24" r="5" fill="#00A9FF" />
        <ellipse cx="24" cy="14" rx="4.5" ry="7" fill="#0078D7" />
        <ellipse cx="24" cy="34" rx="4.5" ry="7" fill="#0078D7" />
        <ellipse cx="14" cy="24" rx="7" ry="4.5" fill="#0047AB" />
        <ellipse cx="34" cy="24" rx="7" ry="4.5" fill="#0047AB" />
      </svg>

      <div className={`min-w-0 leading-tight ${compact ? 'hidden sm:block' : ''}`}>
        <p className="truncate text-sm font-extrabold tracking-tight" style={{ color: markColor }}>
          {t.brand.companyShort}
        </p>
        <p className="truncate text-[10px] font-medium text-cyan sm:text-[11px]">
          {t.brand.club} · {t.brand.clubSubtitle}
        </p>
      </div>
    </div>
  )
}

export default BrandLogo
