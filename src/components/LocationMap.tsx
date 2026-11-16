import { ExternalLink, MapPinned, Navigation } from 'lucide-react'
import type { FC } from 'react'
import { company } from '../data/content'

const LocationMap: FC = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl">
      <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A9FF]/15 text-cyan">
            <MapPinned size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">موقعنا على الخريطة</h3>
            <p className="mt-0.5 text-xs text-white/50 sm:text-sm">{company.addressAr}</p>
          </div>
        </div>

        <a
          href={company.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)] transition hover:brightness-110"
        >
          <Navigation size={15} />
          افتح في خرائط Google
          <ExternalLink size={13} className="opacity-70" />
        </a>
      </div>

      <div className="relative aspect-[16/11] w-full bg-navy-deep sm:aspect-[16/9]">
        <iframe
          title="موقع Garden City Company LLC على خرائط Google"
          src={company.mapsEmbedUrl}
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05] saturate-[0.85]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      <div className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p>{company.addressEn}</p>
        <p className="font-display" dir="ltr">
          {company.lat.toFixed(6)}, {company.lng.toFixed(6)}
        </p>
      </div>
    </div>
  )
}

export default LocationMap
