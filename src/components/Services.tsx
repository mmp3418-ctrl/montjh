import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { pickLocale } from '../utils/locale'
import ServiceIcon from './ServiceIcon'

const Services: FC = () => {
  const { language } = useLanguage()
  const { settings, services } = useSite()

  const sectionTitle = pickLocale(language, settings.vision_ar, settings.vision_en)
  const sectionIntro = pickLocale(language, settings.mission_ar, settings.mission_en)

  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden bg-[var(--bg-elevated)]/55"
    >
      <div className="pointer-events-none absolute start-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <div id="vision" className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-8 text-[var(--text-secondary)] sm:text-base sm:leading-8">
            {sectionIntro}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const title = pickLocale(language, service.title_ar, service.title_en)
            const description = pickLocale(
              language,
              service.description_ar,
              service.description_en,
            )

            return (
              <li key={service.id} className="glass-card group rounded-2xl p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-brand-gradient p-3 text-white shadow-[0_8px_24px_rgba(0,169,255,0.28)] transition group-hover:scale-105">
                    <ServiceIcon name={service.icon_name} />
                  </div>
                  <span className="font-display text-sm font-bold text-cyan">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] transition group-hover:text-cyan sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] sm:leading-8">
                  {description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Services
