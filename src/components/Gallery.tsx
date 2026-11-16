import { Expand, X } from 'lucide-react'
import { useEffect, useMemo, useState, type FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { galleryCategoryIds, galleryItems } from '../data/content'
import type { GalleryCategoryId, GalleryItem } from '../types'
import SectionHeading from './SectionHeading'

const Gallery: FC = () => {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<GalleryCategoryId>('all')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filteredItems = useMemo(() => {
    if (filter === 'all') return galleryItems
    return galleryItems.filter((item) => item.category === filter)
  }, [filter])

  useEffect(() => {
    if (!activeItem) return

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setActiveItem(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeItem])

  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-[var(--bg-elevated)]/50">
      <div className="container-site relative">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          description={t.gallery.description}
        />

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:overflow-visible">
          {galleryCategoryIds.map((category) => {
            const isActive = filter === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-[#00A9FF]/60 bg-[#00A9FF]/15 text-cyan shadow-[0_0_24px_rgba(0,169,255,0.15)]'
                    : 'border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:border-[var(--glass-border-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                {t.gallery.categories[category]}
              </button>
            )
          })}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const copy = t.gallery.items[item.id]
            if (!copy) return null

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-start shadow-[var(--shadow-glass)] backdrop-blur-2xl transition hover:border-[var(--glass-border-hover)] focus:outline-none"
                >
                  <img
                    src={item.imageUrl}
                    alt={copy.alt}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wide text-cyan">
                        {t.gallery.categories[item.category]}
                      </span>
                      <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                        {copy.title}
                      </h3>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition group-hover:border-[#00A9FF]/50 group-hover:text-cyan">
                      <Expand size={16} />
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--bg-deep)]/85 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.items[activeItem.id]?.title ?? ''}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="animate-lightbox-in relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-base)] shadow-[var(--shadow-glass)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute end-3 top-3 z-10 touch-target inline-flex items-center justify-center rounded-xl border border-white/20 bg-navy/70 text-white backdrop-blur-xl transition hover:border-[#00A9FF]/50"
              aria-label={t.gallery.closePreview}
              onClick={() => setActiveItem(null)}
            >
              <X size={18} />
            </button>
            <img
              src={activeItem.imageUrl}
              alt={t.gallery.items[activeItem.id]?.alt ?? ''}
              className="max-h-[70vh] w-full object-cover"
            />
            <div className="border-t border-[var(--glass-border)] px-5 py-4">
              <p className="text-xs font-semibold text-cyan">
                {t.gallery.categories[activeItem.category]}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[var(--text-primary)]">
                {t.gallery.items[activeItem.id]?.title}
              </h3>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Gallery
