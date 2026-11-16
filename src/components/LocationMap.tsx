import { ExternalLink, MapPinned, Navigation } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { company } from '../data/content'

const LocationMap: FC = () => {
  const { t, language } = useLanguage()

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--shadow-glass)] backdrop-blur-2xl">
      <div className="flex flex-col gap-3 border-b border-[var(--glass-border)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A9FF]/15 text-cyan">
            <MapPinned size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">{t.contact.mapTitle}</h3>
            <p className="mt-0.5 text-xs text-[var(--text-muted)] sm:text-sm">
              {language === 'ar' ? company.addressAr : company.addressEn}
            </p>
          </div>
        </div>

        <a
          href={company.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)] transition hover:brightness-110"
        >
          <Navigation size={15} />
          {t.contact.openMaps}
          <ExternalLink size={13} className="opacity-70" />
        </a>
      </div>

      <div className="relative aspect-[16/11] w-full bg-[var(--bg-deep)] sm:aspect-[16/9]">
        <iframe
          title={t.contact.mapTitle}
          src={company.mapsEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          style={{ filter: 'var(--map-filter)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--glass-border)]" />
      </div>

      <div className="flex flex-col gap-1 border-t border-[var(--glass-border)] px-4 py-3 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p>{language === 'ar' ? company.addressEn : company.addressAr}</p>
        <p className="font-display" dir="ltr">
          {company.lat.toFixed(6)}, {company.lng.toFixed(6)}
        </p>
      </div>
    </div>
  )
}

export default LocationMap
