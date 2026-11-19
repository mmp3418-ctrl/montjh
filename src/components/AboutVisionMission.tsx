import { Eye, Flag, Target } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { pickLocale } from '../utils/locale'
import SectionHeading from './SectionHeading'

const AboutVisionMission: FC = () => {
  const { t, language } = useLanguage()
  const { settings } = useSite()

  const cards = [
    {
      id: 'about',
      icon: Flag,
      title: t.about.title,
      body: pickLocale(language, settings.about_ar, settings.about_en),
    },
    {
      id: 'vision',
      icon: Eye,
      title: t.vision.visionTitle,
      body: pickLocale(language, settings.vision_ar, settings.vision_en),
    },
    {
      id: 'mission',
      icon: Target,
      title: t.vision.missionTitle,
      body: pickLocale(language, settings.mission_ar, settings.mission_en),
    },
  ] as const

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-[#00A9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-16 bottom-0 h-64 w-64 rounded-full bg-[#0047AB]/12 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading eyebrow={t.vision.eyebrow} title={t.about.title} />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id === 'about' ? undefined : card.id}
              className="glass-card rounded-2xl p-6 sm:p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-gradient p-2.5 text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)]">
                <card.icon size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] sm:leading-8">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutVisionMission
