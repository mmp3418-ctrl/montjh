import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState, type FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME, navItems } from '../data/content'
import BrandLogo from './BrandLogo'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Navbar: FC = () => {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const drawerId = useId()

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
      <header className="nav-shell fixed inset-x-0 top-0 z-50">
        <nav className="container-site flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
          <a
            href="#home"
            className="relative z-10 flex min-w-0 max-w-[58%] items-center sm:max-w-none"
            aria-label={`${BRAND_NAME} — ${t.a11y.brandHome}`}
            onClick={closeMenu}
          >
            <BrandLogo compact />
          </a>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded-xl px-2.5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--glass-bg)] hover:text-cyan 2xl:px-3.5"
                >
                  {t.nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
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

            <button
              type="button"
              className="nav-control touch-target inline-flex items-center justify-center rounded-xl text-[var(--text-primary)] transition hover:border-[var(--glass-border-hover)] xl:hidden"
              aria-expanded={isOpen}
              aria-controls={drawerId}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 xl:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--bg-deep)]/65 backdrop-blur-sm"
            aria-label={t.nav.closeMenu}
            onClick={closeMenu}
          />

          <aside
            id={drawerId}
            className="animate-drawer-in absolute inset-y-0 end-0 flex w-[min(92vw,22rem)] flex-col border-s border-[var(--glass-border)] bg-[var(--bg-base)]/96 shadow-[var(--shadow-glass)] backdrop-blur-2xl"
          >
            <div className="border-b border-[var(--glass-border)] px-5 py-5 pt-20">
              <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
                {t.nav.menuLabel}
              </p>
              <p className="mt-1 font-display text-base font-bold text-[var(--text-primary)]" dir="ltr">
                {BRAND_NAME}
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
              <div className="flex gap-2 sm:hidden">
                <LanguageToggle className="flex-1" />
                <ThemeToggle className="flex-1 !w-auto" />
              </div>

              <ul className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="flex min-h-14 items-center rounded-2xl px-4 text-base font-semibold text-[var(--text-primary)] transition hover:bg-[var(--glass-bg)] hover:text-cyan"
                    >
                      {t.nav[item.labelKey]}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-auto flex min-h-14 items-center justify-center rounded-2xl bg-brand-gradient text-sm font-bold text-white"
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
