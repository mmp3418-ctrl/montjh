import { Menu, X } from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { navItems } from '../data/content'

interface NavbarProps {
  brandAlt?: string
}

const Navbar: FC<NavbarProps> = ({ brandAlt = 'Begonia Club' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 24)
    }
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

  const handleNavClick = (): void => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'glass-strong shadow-lg shadow-cyan/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex items-center justify-between gap-4 py-3 md:py-4">
        <a href="#home" className="relative z-10 flex items-center gap-2" aria-label={brandAlt}>
          <img src="/logo.svg" alt={brandAlt} className="h-10 w-auto md:h-11" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-cyan"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan/20 transition hover:brightness-110 lg:inline-flex"
        >
          تواصل الآن
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2.5 text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-site flex flex-col gap-1 pb-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={handleNavClick}
                className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/5 hover:text-cyan"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block rounded-xl bg-brand-gradient px-4 py-3 text-center text-sm font-semibold text-white"
            >
              تواصل الآن
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
