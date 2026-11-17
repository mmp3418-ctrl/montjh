import { Layers } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { hasText, pickLocale } from '../utils/locale'
import EmptyState from './EmptyState'
import SectionHeading from './SectionHeading'
import ServiceIcon from './ServiceIcon'
import SkeletonBlock from './SkeletonBlock'

const Services: FC = () => {
  const { t, language } = useLanguage()
  const { services, loading } = useSite()

  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden bg-[var(--bg-elevated)]/55"
    >
      <div className="pointer-events-none absolute start-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />

        {loading ? (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonBlock key={index} className="h-52" />
            ))}
          </div>
        ) : services.length === 0 ? (
          <div className="mt-10">
            <EmptyState message={t.empty.noServices} icon={<Layers size={22} />} />
          </div>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const title = pickLocale(language, service.title_ar, service.title_en)
              const description = pickLocale(
                language,
                service.description_ar,
                service.description_en,
              )
              const image = service.image_url?.trim() || ''

              return (
                <li key={service.id} className="glass-card group overflow-hidden rounded-2xl">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-brand-gradient p-3 text-white shadow-[0_8px_24px_rgba(0,169,255,0.28)]">
                      <ServiceIcon name={service.icon_name} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] transition group-hover:text-cyan sm:text-xl">
                      {title}
                    </h3>
                    {hasText(description) ? (
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                        {description}
                      </p>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Services
