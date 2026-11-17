import type { FC } from 'react'
import { useTheme } from '../context/ThemeContext'
import { BRAND_NAME } from '../data/content'

interface BrandLogoProps {
  compact?: boolean
  className?: string
}

const BrandLogo: FC<BrandLogoProps> = ({ compact = false, className = '' }) => {
  const { theme } = useTheme()
  const markColor = theme === 'dark' ? '#F8FAFC' : '#0B192C'

  return (
    <div className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        width={compact ? 36 : 40}
        height={compact ? 36 : 40}
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

      <p
        className={`whitespace-nowrap font-display font-extrabold tracking-tight ${
          compact ? 'text-[13px] sm:text-sm' : 'text-sm sm:text-[15px]'
        }`}
        style={{ color: markColor }}
        dir="ltr"
      >
        {BRAND_NAME}
      </p>
    </div>
  )
}

export default BrandLogo
