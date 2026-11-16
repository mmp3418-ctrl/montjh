import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { services } from '../data/content'
import SectionHeading from './SectionHeading'
import ServiceIcon from './ServiceIcon'

const Investments: FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="investments"
      className="section-pad relative overflow-hidden bg-[var(--bg-elevated)]/55"
    >
      <div className="pointer-events-none absolute start-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading
          eyebrow={t.investments.eyebrow}
          title={t.investments.title}
          description={t.investments.description}
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const copy = t.investments.items[service.id]
            if (!copy) return null

            return (
              <li
                key={service.id}
                className="glass-card group rounded-2xl p-5 hover:-translate-y-1 sm:p-6"
              >
                <div className="mb-5 inline-flex rounded-xl bg-brand-gradient p-3 text-white shadow-[0_8px_24px_rgba(0,169,255,0.28)] transition group-hover:scale-105">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] transition group-hover:text-cyan sm:text-xl">
                  {copy.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {copy.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Investments
