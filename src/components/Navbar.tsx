import { Menu, X } from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { company, navItems } from '../data/content'
import BrandLogo from './BrandLogo'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Navbar: FC = () => {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = (): void => setIsOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-surface' : 'nav-surface-top'
        }`}
      >
        <nav className="container-site flex items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
          <a
            href="#home"
            className="relative z-10 min-h-11"
            aria-label={company.nameEn}
            onClick={closeMenu}
          >
            <BrandLogo compact />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--glass-bg)] hover:text-cyan xl:px-3.5"
                >
                  {t.nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            <a
              href="#contact"
              className="hidden min-h-11 items-center rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)] transition hover:brightness-110 lg:inline-flex"
            >
              {t.nav.cta}
            </a>

            {!isOpen ? (
              <button
                type="button"
                className="touch-target inline-flex items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] backdrop-blur-xl transition hover:border-[var(--glass-border-hover)] lg:hidden"
                aria-expanded={false}
                aria-controls="mobile-drawer"
                aria-label={t.nav.openMenu}
                onClick={() => setIsOpen(true)}
              >
                <Menu size={22} />
              </button>
            ) : (
              <span className="touch-target lg:hidden" aria-hidden="true" />
            )}
          </div>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--bg-deep)]/70 backdrop-blur-md"
            aria-label={t.nav.closeMenu}
            onClick={closeMenu}
          />
          <aside
            id="mobile-drawer"
            className="animate-drawer-in absolute inset-y-0 end-0 flex w-[min(92vw,24rem)] flex-col border-s border-[var(--glass-border)] bg-[var(--bg-base)]/95 shadow-[var(--shadow-glass)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--glass-border)] px-5 py-4">
              <p className="font-display text-sm font-semibold tracking-wide text-[var(--text-primary)]">
                {company.nameEn}
              </p>
              <button
                type="button"
                className="touch-target inline-flex items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)]"
                aria-label={t.nav.closeMenu}
                onClick={closeMenu}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-5 py-5">
              <div className="mb-5 flex gap-2 sm:hidden">
                <LanguageToggle className="flex-1" />
                <ThemeToggle className="flex-1 !w-auto" />
              </div>

              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="flex min-h-14 items-center rounded-2xl border border-transparent px-4 text-base font-semibold text-[var(--text-primary)] transition hover:border-[var(--glass-border-hover)] hover:bg-[var(--glass-bg)] hover:text-cyan"
                    >
                      {t.nav[item.labelKey]}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-auto flex min-h-14 items-center justify-center rounded-2xl bg-brand-gradient text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)]"
              >
                {t.nav.cta}
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  )
}

export default Navbar
