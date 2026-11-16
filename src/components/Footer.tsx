import { Mail, MapPin, Phone } from 'lucide-react'
import type { FC } from 'react'
import { company, navItems } from '../data/content'

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-deep/80">
      <div className="container-site section-pad !py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <img src="/logo.svg" alt="Begonia Club" className="h-11 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
              {company.nameAr} — {company.nameEn}. {company.tagline}. تعاون
              استثماري سياحي ونادي بيغونيا لتجربة راقية في طرابلس.
            </p>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-display text-lg font-semibold text-cyan transition hover:brightness-110"
              dir="ltr"
            >
              {company.website}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-white/55 transition hover:text-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white">تواصل</h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>{company.addressAr}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-cyan" />
                <a href="tel:+218214802432" className="hover:text-cyan" dir="ltr">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-cyan" />
                <a href={`mailto:${company.email}`} className="hover:text-cyan" dir="ltr">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.nameEn} & {company.clubName}. جميع الحقوق محفوظة.
          </p>
          <p dir="ltr">{company.website}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
