import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { filterServicesByCategory } from '../utils/services'
import EmptyState from './EmptyState'
import FacilityCard from './FacilityCard'
import SectionHeading from './SectionHeading'

/**
 * Dedicated Services — `services` where category = 'service'.
 * Completely separate from Recreational & Sports Facilities.
 */
const DedicatedServices: FC = () => {
  const { language, t } = useLanguage()
  const { services } = useSite()

  const dedicated = filterServicesByCategory(services, 'service')

  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -end-20 top-16 h-64 w-64 rounded-full bg-[#00A9FF]/8 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />

        {dedicated.length === 0 ? (
          <div className="mt-10">
            <EmptyState message={t.empty.noServices} />
          </div>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {dedicated.map((item, index) => (
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

export default DedicatedServices
