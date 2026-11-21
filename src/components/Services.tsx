import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { filterServicesByCategory } from '../utils/services'
import { pickLocale } from '../utils/locale'
import EmptyState from './EmptyState'
import FacilityCard from './FacilityCard'

/**
 * Recreational & Sports Facilities — `services` where category = 'recreation'.
 * Includes Swimming Pools, BBQ Areas, Cafeteria, Changing Rooms, and any
 * new facilities added from the Admin Dashboard with that category.
 */
const Services: FC = () => {
  const { language, t } = useLanguage()
  const { settings, services } = useSite()

  const facilities = filterServicesByCategory(services, 'recreation')

  const sectionTitle = pickLocale(
    language,
    settings.facilities_heading_ar,
    settings.facilities_heading_en,
  )
  const sectionIntro = pickLocale(
    language,
    settings.facilities_intro_ar,
    settings.facilities_intro_en,
  )

  return (
    <section
      id="vision"
      className="section-pad relative overflow-hidden bg-[var(--bg-elevated)]/55"
    >
      <div className="pointer-events-none absolute start-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-cyan">
            {t.vision.eyebrow}
          </p>
          <h2 className="text-balance text-2xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            {sectionTitle}
          </h2>
          {sectionIntro ? (
            <p className="mt-4 text-pretty text-sm leading-8 text-[var(--text-secondary)] sm:text-base sm:leading-8">
              {sectionIntro}
            </p>
          ) : null}
        </div>

        {facilities.length === 0 ? (
          <div className="mt-10">
            <EmptyState message={t.empty.noServices} />
          </div>
        ) : (
          <ul className="cards-grid mt-10 grid-cols-1 md:grid-cols-2">
            {facilities.map((item, index) => (
              <li key={item.id} className="min-h-0">
                <FacilityCard item={item} language={language} index={index} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Services
