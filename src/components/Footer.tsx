import type { FC } from 'react'
import { company, navItems } from '../data/content'

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-soft/60">
      <div className="container-site section-pad !py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src="/logo.svg" alt="Begonia Club" className="h-11 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              {company.nameAr} — {company.nameEn}. تعاون استثماري سياحي ونادي
              بيغونيا لتجربة راقية في طرابلس.
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
                    className="text-sm text-white/60 transition hover:text-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white">تواصل</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{company.address}</li>
              <li dir="ltr">{company.phone}</li>
              <li>
                <a href={`mailto:${company.email}`} className="transition hover:text-cyan" dir="ltr">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
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
