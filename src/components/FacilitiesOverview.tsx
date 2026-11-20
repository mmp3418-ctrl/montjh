import { Car, DoorOpen, Lamp, Route } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { BRAND_NAME } from '../data/content'
import { pickLocale } from '../utils/locale'

const highlights = {
  ar: [
    { icon: DoorOpen, label: 'حوالي 4 مداخل' },
    { icon: Route, label: 'طرق داخلية مرصوفة' },
    { icon: Lamp, label: 'إنارة للشوارع' },
    { icon: Car, label: 'مواقف ≈ 16 سيارة' },
  ],
  en: [
    { icon: DoorOpen, label: '~4 entrances' },
    { icon: Route, label: 'Paved internal roads' },
    { icon: Lamp, label: 'Street lighting' },
    { icon: Car, label: '~16-car parking' },
  ],
} as const

const FacilitiesOverview: FC = () => {
  const { language } = useLanguage()
  const { settings } = useSite()

  const heading = pickLocale(
    language,
    settings.main_heading_ar ?? settings.hero_title_ar,
    settings.main_heading_en ?? settings.hero_title_en,
  )
  const overview = pickLocale(
    language,
    settings.complex_overview_ar ?? settings.about_ar,
    settings.complex_overview_en ?? settings.about_en,
  )
  const items = highlights[language]

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-[#00A9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-16 bottom-0 h-64 w-64 rounded-full bg-[#0047AB]/12 blur-3xl" />

      <div className="container-site relative">
        <article className="glass overflow-hidden rounded-[1.75rem]">
          <div className="border-b border-[var(--glass-border)] bg-brand-gradient/10 px-6 py-5 sm:px-8 sm:py-6">
            <p
              className="font-display text-xs font-semibold tracking-[0.18em] text-cyan uppercase sm:text-sm"
              dir="ltr"
            >
              {BRAND_NAME}
            </p>
            <h2 className="mt-3 max-w-4xl text-balance text-2xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
              {heading}
            </h2>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <p className="max-w-4xl text-pretty text-sm leading-8 text-[var(--text-secondary)] sm:text-base sm:leading-9">
              {overview}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="glass-card flex items-center gap-3 rounded-2xl px-4 py-4"
                >
                  <span className="inline-flex rounded-xl bg-brand-gradient p-2.5 text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)]">
                    <item.icon size={16} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default FacilitiesOverview
