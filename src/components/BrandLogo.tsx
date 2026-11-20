import { useState, type FC, type SyntheticEvent } from 'react'
import { useTheme } from '../context/ThemeContext'
import { BRAND_NAME } from '../data/content'

interface BrandLogoProps {
  compact?: boolean
  className?: string
}

const LogoMarkFallback: FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
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
)

const BrandLogo: FC<BrandLogoProps> = ({ compact = false, className = '' }) => {
  const { theme } = useTheme()
  const [logoFailed, setLogoFailed] = useState(false)
  const markColor = theme === 'dark' ? '#F8FAFC' : '#0B192C'
  const handleLogoError = (event: SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.display = 'none'
    setLogoFailed(true)
  }

  return (
    <div className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      {!logoFailed ? (
        <img
          src="/logo.png"
          alt="Garden City L.L.C"
          className="h-10 w-auto shrink-0 object-contain md:h-12"
          onError={handleLogoError}
          decoding="async"
        />
      ) : (
        <LogoMarkFallback size={compact ? 40 : 48} />
      )}

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
