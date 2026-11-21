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
    <article className="facility-card group relative flex h-full flex-col rounded-2xl p-5 sm:p-6 md:p-7">
      <div
        className="pointer-events-none absolute -end-10 -top-10 h-36 w-36 rounded-full bg-[#00A9FF]/12 blur-3xl transition-[opacity,transform] duration-[var(--motion-duration)] ease-[var(--motion-smooth)] group-hover:scale-110 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden="true"
      />

      <div className="relative mb-5 flex items-center gap-3.5">
        <div className="card-icon inline-flex shrink-0 rounded-2xl bg-brand-gradient p-3.5 text-white shadow-[0_10px_28px_rgba(0,169,255,0.3)]">
          <ServiceIcon name={item.icon_name} className="h-6 w-6" />
        </div>
        {showIndex && typeof index === 'number' ? (
          <span className="font-display text-sm font-bold tracking-[0.14em] text-cyan">
            {String(index + 1).padStart(2, '0')}
          </span>
        ) : null}
      </div>

      <h3 className="card-title relative text-lg font-bold leading-snug tracking-tight text-[var(--text-primary)] sm:text-xl">
        {title}
      </h3>
      {description ? (
        <p className="relative mt-3.5 flex-1 text-sm leading-7 text-[var(--text-secondary)] sm:mt-4 sm:text-[0.95rem] sm:leading-8">
          {description}
        </p>
      ) : null}
    </article>
  )
}

export default FacilityCard
