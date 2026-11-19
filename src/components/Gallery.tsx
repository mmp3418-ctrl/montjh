import { Camera } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import SectionHeading from './SectionHeading'

const Gallery: FC = () => {
  const { t } = useLanguage()
  const { gallery } = useSite()

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div className="container-site relative">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <li
              key={item.id}
              className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className="flex h-full w-full items-center justify-center">
                <Camera
                  size={28}
                  className="text-cyan/70"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="sr-only">Garden City L.L.C gallery slot</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
