import { Building2 } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { BRAND_NAME } from '../data/content'
import { pickLocale } from '../utils/locale'

const FacilitiesOverview: FC = () => {
  const { language } = useLanguage()
  const { settings } = useSite()

  const heading = pickLocale(language, settings.hero_title_ar, settings.hero_title_en)
  const overview = pickLocale(language, settings.about_ar, settings.about_en)

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-[#00A9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-16 bottom-0 h-64 w-64 rounded-full bg-[#0047AB]/12 blur-3xl" />

      <div className="container-site relative">
        <article className="glass-card mx-auto max-w-4xl rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="mb-5 inline-flex rounded-xl bg-brand-gradient p-2.5 text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)]">
            <Building2 size={18} aria-hidden="true" />
          </div>

          <p className="mb-3 font-display text-sm font-semibold tracking-wide text-cyan" dir="ltr">
            {BRAND_NAME}
          </p>

          <h2 className="text-balance text-2xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            {heading}
          </h2>

          <p className="mt-5 text-pretty text-sm leading-8 text-[var(--text-secondary)] sm:text-base sm:leading-9">
            {overview}
          </p>
        </article>
      </div>
    </section>
  )
}

export default FacilitiesOverview
