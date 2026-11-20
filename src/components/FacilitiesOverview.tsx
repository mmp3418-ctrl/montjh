import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { BRAND_NAME } from '../data/content'
import { pickLocale } from '../utils/locale'

const FacilitiesOverview: FC = () => {
  const { language } = useLanguage()
  const { settings } = useSite()

  const heading = pickLocale(
    language,
    settings.main_heading_ar,
    settings.main_heading_en,
  )
  const overview = pickLocale(
    language,
    settings.complex_overview_ar,
    settings.complex_overview_en,
  )

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
          </div>
        </article>
      </div>
    </section>
  )
}

export default FacilitiesOverview
