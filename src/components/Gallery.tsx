import { Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FC,
  type TouchEvent,
} from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { seedGallery } from '../data/seedContent'
import type { GalleryItem } from '../types'
import SectionHeading from './SectionHeading'

function resolveCards(gallery: GalleryItem[]): GalleryItem[] {
  const withImages = gallery.filter((item) => Boolean(item.image_url?.trim()))
  return withImages.length > 0 ? withImages : seedGallery
}

const Gallery: FC = () => {
  const { t, language } = useLanguage()
  const { gallery } = useSite()
  const cards = useMemo(() => resolveCards(gallery), [gallery])
  const total = cards.length
  const [active, setActive] = useState(0)
  const regionRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const labelId = useId()

  useEffect(() => {
    setActive((prev) => (total === 0 ? 0 : Math.min(prev, total - 1)))
  }, [total])

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return
      const next = ((index % total) + total) % total
      setActive(next)
    },
    [total],
  )

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])
  const goNext = useCallback(() => goTo(active + 1), [active, goTo])

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent): void => {
      const target = event.target as HTMLElement | null
      if (target) {
        const tag = target.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable) {
          return
        }
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        if (language === 'ar') goNext()
        else goPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        if (language === 'ar') goPrev()
        else goNext()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev, language])

  const onTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
    const start = touchStartX.current
    const end = event.changedTouches[0]?.clientX
    touchStartX.current = null
    if (start == null || end == null) return
    const delta = end - start
    if (Math.abs(delta) < 48) return
    if (delta > 0) {
      if (language === 'ar') goNext()
      else goPrev()
    } else if (language === 'ar') goPrev()
    else goNext()
  }

  const activeItem = cards[active]
  const activeSrc = activeItem?.image_url?.trim() || null
  const counterLabel =
    language === 'ar' ? `${active + 1} من ${total}` : `${active + 1} / ${total}`

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div className="container-site relative">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />

        <div
          ref={regionRef}
          className="mt-10"
          role="region"
          aria-roledescription="carousel"
          aria-labelledby={labelId}
          tabIndex={0}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <p id={labelId} className="sr-only">
            {t.gallery.title}
          </p>

          {/* Featured framed slide */}
          <div className="relative mx-auto max-w-4xl">
            <div className="gallery-frame group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[var(--glass-border)] sm:aspect-[16/10]">
              {activeSrc ? (
                <img
                  key={activeItem?.id ?? active}
                  src={activeSrc}
                  alt=""
                  className="h-full w-full object-cover"
                  decoding="async"
                  draggable={false}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Camera size={32} className="text-cyan/70" strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only">{t.empty.noGallery}</span>
                </div>
              )}

              {/* Frame inset highlight — no text overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                aria-hidden="true"
              />
            </div>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="gallery-nav absolute start-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--nav-bg)]/90 text-[var(--text-primary)] shadow-lg backdrop-blur-md sm:start-3 sm:h-12 sm:w-12"
                  aria-label={t.gallery.prev}
                >
                  {language === 'ar' ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="gallery-nav absolute end-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--nav-bg)]/90 text-[var(--text-primary)] shadow-lg backdrop-blur-md sm:end-3 sm:h-12 sm:w-12"
                  aria-label={t.gallery.next}
                >
                  {language === 'ar' ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
                </button>
              </>
            ) : null}
          </div>

          {/* Counter + dots */}
          {total > 0 ? (
            <div className="mt-5 flex flex-col items-center gap-3 sm:mt-6">
              <p
                className="font-display text-sm font-semibold tracking-wide text-[var(--text-muted)]"
                aria-live="polite"
              >
                {counterLabel}
              </p>

              {total > 1 ? (
                <div
                  className="flex max-w-full flex-wrap items-center justify-center gap-2 px-2"
                  role="tablist"
                  aria-label={t.gallery.title}
                >
                  {cards.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={index === active}
                      aria-label={
                        language === 'ar'
                          ? `صورة ${index + 1}`
                          : `Photo ${index + 1}`
                      }
                      onClick={() => goTo(index)}
                      className={`h-2.5 rounded-full transition-[width,background-color] duration-[var(--motion-duration)] ease-[var(--motion-smooth)] ${
                        index === active
                          ? 'w-7 bg-cyan'
                          : 'w-2.5 bg-[var(--text-muted)]/35 hover:bg-cyan/60'
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Uniform framed cards grid — image only, no titles/captions */}
          <ul className="cards-grid mt-8 grid-cols-2 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            {cards.map((item, index) => {
              const src = item.image_url?.trim() || null
              const isActive = index === active
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    className={`gallery-frame group relative block w-full overflow-hidden rounded-2xl border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 ${
                      isActive
                        ? 'is-active border-cyan'
                        : 'border-[var(--glass-border)]'
                    }`}
                    aria-label={
                      language === 'ar'
                        ? `عرض الصورة ${index + 1}`
                        : `View photo ${index + 1}`
                    }
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="relative block aspect-[4/3]">
                      {src ? (
                        <img
                          src={src}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center">
                          <Camera
                            size={22}
                            className="text-cyan/70"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </span>
                      )}
                      <span
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Gallery
