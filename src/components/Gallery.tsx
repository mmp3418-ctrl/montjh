import { useState, type FC } from 'react'
import { galleryItems } from '../data/content'

const Gallery: FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="gallery" className="section-pad bg-navy-soft/30">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-cyan">المعرض</p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            لحظات من عالم بيغونيا والاستثمار السياحي
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            تصفح مجموعة مختارة من الصور التي تعكس روح الوجهات، أجواء النادي، ورؤية
            المشاريع الاستثمارية.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => {
            const isWide = index === 0 || index === 5
            return (
              <li
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl ${
                  isWide ? 'sm:col-span-2 lg:col-span-1' : ''
                } ${index === 0 ? 'lg:row-span-2' : ''}`}
              >
                <button
                  type="button"
                  className="relative block h-full min-h-64 w-full overflow-hidden text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  onClick={() => setActiveId(item.id === activeId ? null : item.id)}
                  aria-pressed={activeId === item.id}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className={`h-full w-full object-cover transition duration-700 ${
                      activeId === item.id ? 'scale-110' : 'scale-100 group-hover:scale-105'
                    } ${index === 0 ? 'min-h-[28rem]' : 'min-h-64'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-xs font-semibold tracking-wide text-cyan">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
