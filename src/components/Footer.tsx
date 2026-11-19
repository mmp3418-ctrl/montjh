import { Mail } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { BRAND_NAME, navItems } from '../data/content'
import BrandLogo from './BrandLogo'

const Footer: FC = () => {
  const { t } = useLanguage()
  const { settings } = useSite()
  const year = new Date().getFullYear()
  const email = settings.email?.trim() || 'info@garden-city.com.ly'

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-elevated)]/80">
      <div className="container-site section-pad !py-10 sm:!py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <BrandLogo />
            <a
              href={`mailto:${email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-cyan"
              dir="ltr"
            >
              <Mail size={15} className="text-cyan" aria-hidden="true" />
              {email}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-2">
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
