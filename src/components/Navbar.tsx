import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME } from '../data/content'
import BrandLogo from './BrandLogo'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Navbar: FC = () => {
  const { t } = useLanguage()

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50">
      <nav className="container-site flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
        <a
          href="#main"
          className="relative z-10 flex min-w-0 max-w-[65%] items-center sm:max-w-none"
          aria-label={`${BRAND_NAME} — ${t.a11y.brandHome}`}
        >
          <BrandLogo compact />
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
