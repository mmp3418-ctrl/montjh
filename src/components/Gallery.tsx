import { Camera } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { seedGallery } from '../data/seedContent'
import SectionHeading from './SectionHeading'

const Gallery: FC = () => {
  const { t } = useLanguage()
  const { gallery } = useSite()

  const withImages = gallery.filter((item) => Boolean(item.image_url?.trim()))
  const cards = withImages.length > 0 ? withImages : seedGallery

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div className="container-site relative">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => {
            const src = item.image_url?.trim() || null
            return (
              <li
                key={item.id}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                {src ? (
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Camera
                      size={28}
                      className="text-cyan/70"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="sr-only">Garden City L.L.C gallery slot</span>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
