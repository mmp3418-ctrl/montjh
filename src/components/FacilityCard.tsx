import type { FC } from 'react'
import type { Language, ServiceRow } from '../types'
import { pickLocale } from '../utils/locale'
import ServiceIcon from './ServiceIcon'

interface FacilityCardProps {
  item: ServiceRow
  language: Language
  index?: number
  showIndex?: boolean
}

/**
 * Unified card layout for recreation facilities and dedicated services.
 * Same proportions, frame, icon treatment, and typography everywhere.
 */
const FacilityCard: FC<FacilityCardProps> = ({
  item,
  language,
  index,
  showIndex = true,
}) => {
  const title = pickLocale(language, item.title_ar, item.title_en)
  const description = pickLocale(language, item.description_ar, item.description_en)

  return (
    <article className="facility-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--shadow-glass)] backdrop-blur-xl transition duration-300 hover:border-[var(--glass-border-hover)] hover:bg-[var(--glass-bg-hover)] sm:p-6">
      <div className="pointer-events-none absolute -end-8 -top-8 h-28 w-28 rounded-full bg-[#00A9FF]/10 blur-2xl transition duration-300 group-hover:bg-[#00A9FF]/18" />

      <div className="relative mb-4 flex items-center gap-3">
        <div className="inline-flex shrink-0 rounded-xl bg-brand-gradient p-3 text-white shadow-[0_8px_24px_rgba(0,169,255,0.28)] transition duration-300 group-hover:scale-105">
          <ServiceIcon name={item.icon_name} className="h-6 w-6" />
        </div>
        {showIndex && typeof index === 'number' ? (
          <span className="font-display text-sm font-bold tracking-wide text-cyan">
            {String(index + 1).padStart(2, '0')}
          </span>
        ) : null}
      </div>

      <h3 className="relative text-lg font-bold leading-snug text-[var(--text-primary)] transition duration-300 group-hover:text-cyan sm:text-xl">
        {title}
      </h3>
      {description ? (
        <p className="relative mt-3 flex-1 text-sm leading-7 text-[var(--text-secondary)] sm:leading-8">
          {description}
        </p>
      ) : null}
    </article>
  )
}

export default FacilityCard
