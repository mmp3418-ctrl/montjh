import { useEffect, useState, type FC, type SyntheticEvent } from 'react'
import { useSite } from '../context/SiteDataContext'
import { useTheme } from '../context/ThemeContext'
import { BRAND_NAME } from '../data/content'
import { resolveLogoUrl } from '../utils/siteSettings'

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
    className="brand-logo-mark shrink-0"
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
  const { settings } = useSite()
  const logoSrc = resolveLogoUrl(settings.logo_url, settings.updated_at)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const markColor = theme === 'dark' ? '#F8FAFC' : '#0B192C'
  const showImage = Boolean(logoSrc) && failedSrc !== logoSrc
  const isSvg = Boolean(logoSrc?.toLowerCase().includes('.svg'))

  useEffect(() => {
    setFailedSrc(null)
  }, [logoSrc])

  const handleLogoError = (event: SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.display = 'none'
    if (logoSrc) setFailedSrc(logoSrc)
  }

  const shellClass = compact
    ? 'brand-logo-shell brand-logo-shell--compact'
    : 'brand-logo-shell brand-logo-shell--full'
  const imgClass = compact
    ? 'brand-logo-img h-11 w-auto max-h-11 sm:h-12 sm:max-h-12 md:h-[3.25rem] md:max-h-[3.25rem]'
    : 'brand-logo-img h-14 w-auto max-h-14 sm:h-16 sm:max-h-16 md:h-[4.75rem] md:max-h-[4.75rem]'

  return (
    <div className={`flex min-w-0 items-center gap-3 sm:gap-3.5 ${className}`}>
      <span className={shellClass} aria-hidden={!showImage}>
        <span className="brand-logo-glow" aria-hidden="true" />
        <span className="brand-logo-ring">
          {showImage && logoSrc ? (
            <img
              key={logoSrc}
              src={logoSrc}
              alt="Garden City L.L.C"
              className={`${imgClass} ${isSvg ? 'brand-logo-img--svg' : 'brand-logo-img--raster'}`}
              onError={handleLogoError}
              decoding="async"
            />
          ) : (
            <LogoMarkFallback size={compact ? 44 : 56} />
          )}
        </span>
      </span>

      <p
        className={`whitespace-nowrap font-display font-extrabold tracking-tight ${
          compact ? 'text-sm sm:text-[15px] md:text-base' : 'text-[15px] sm:text-base md:text-lg'
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
