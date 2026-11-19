import { Camera } from 'lucide-react'
import { useMemo, useState, type FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { pickLocale } from '../utils/locale'
import SectionHeading from './SectionHeading'

const Gallery: FC = () => {
  const { t, language } = useLanguage()
  const { gallery } = useSite()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = useMemo(() => {
    const map = new Map<string, string>()
    gallery.forEach((item) => {
      const key = pickLocale(language, item.category_ar, item.category_en)
      if (key) map.set(key, key)
    })
    return Array.from(map.values())
  }, [gallery, language])

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return gallery
    return gallery.filter((item) => {
      const key = pickLocale(language, item.category_ar, item.category_en)
      return key === activeCategory
    })
  }, [gallery, activeCategory, language])

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div className="container-site relative">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              activeCategory === 'all'
                ? 'bg-brand-gradient text-white'
                : 'nav-control text-[var(--text-secondary)] hover:text-cyan'
            }`}
          >
            {t.gallery.all}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-brand-gradient text-white'
                  : 'nav-control text-[var(--text-secondary)] hover:text-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const title = pickLocale(language, item.title_ar, item.title_en)
            const category = pickLocale(language, item.category_ar, item.category_en)

            return (
              <li key={item.id} className="glass-card overflow-hidden rounded-2xl">
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-[var(--bg-deep)]/25">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-cyan backdrop-blur-xl">
                    <Camera size={24} aria-hidden="true" />
                  </div>
                  <p className="px-4 text-center text-xs text-[var(--text-muted)]">
                    {t.empty.noGallery}
                  </p>
                </div>
                <div className="p-4">
                  {category ? (
                    <p className="text-xs font-semibold tracking-wide text-cyan">{category}</p>
                  ) : null}
                  {title ? (
                    <h3 className="mt-1 text-sm font-bold text-[var(--text-primary)]">{title}</h3>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
