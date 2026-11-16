import { Menu, X } from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { company, navItems } from '../data/content'

const Navbar: FC = () => {
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
          scrolled
            ? 'border-b border-white/10 bg-navy/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-site flex items-center justify-between gap-3 py-3 sm:py-4">
          <a
            href="#home"
            className="relative z-10 flex min-h-11 items-center gap-2.5"
            aria-label={`${company.clubName} — ${company.nameEn}`}
          >
            <img src="/logo.svg" alt="" className="h-9 w-auto sm:h-10" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-bold tracking-wide text-white">
                {company.clubName}
              </span>
              <span className="text-[10px] text-white/50">{company.nameEn}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/75 transition hover:bg-white/[0.05] hover:text-cyan"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden min-h-11 items-center rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)] transition hover:brightness-110 lg:inline-flex"
          >
            تواصل الآن
          </a>

          <button
            type="button"
            className="touch-target inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl transition hover:border-[#00A9FF]/50 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-md"
            aria-label="إغلاق القائمة"
            onClick={closeMenu}
          />
          <aside
            id="mobile-drawer"
            className="animate-drawer-in absolute inset-y-0 end-0 flex w-[min(88vw,22rem)] flex-col border-s border-white/10 bg-navy/90 p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl"
          >
            <div className="mb-6 flex items-center justify-between pt-14">
              <div>
                <p className="font-display text-lg font-bold text-white">{company.clubName}</p>
                <p className="text-xs text-white/45">{company.tagline}</p>
              </div>
              <button
                type="button"
                className="touch-target inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]"
                aria-label="إغلاق"
                onClick={closeMenu}
              >
                <X size={20} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center rounded-xl border border-transparent px-4 text-base font-semibold text-white/90 transition hover:border-[#00A9FF]/40 hover:bg-white/[0.05] hover:text-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)]"
            >
              تواصل مع الإدارة
            </a>
          </aside>
        </div>
      ) : null}
    </>
  )
}

export default Navbar
