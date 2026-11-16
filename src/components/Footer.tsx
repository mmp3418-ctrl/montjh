import { Mail, MapPin, Phone } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME, company, navItems } from '../data/content'
import BrandLogo from './BrandLogo'

const Footer: FC = () => {
  const { t, language } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-elevated)]/80">
      <div className="container-site section-pad !py-10 sm:!py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <div className="min-w-0">
            <BrandLogo />
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              {t.footer.blurb}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-[var(--text-primary)]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-[var(--text-secondary)] transition hover:text-cyan"
                  >
                    {t.nav[item.labelKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-[var(--text-primary)]">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span className="leading-6">
                  {language === 'ar' ? company.addressAr : company.addressEn}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-cyan" />
                <a href={`tel:${company.phoneTel}`} className="hover:text-cyan" dir="ltr">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-cyan" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all hover:text-cyan"
                  dir="ltr"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--glass-border)] pt-6 text-xs text-[var(--text-muted)]">
          <p dir="ltr">
            © {year} {BRAND_NAME}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
