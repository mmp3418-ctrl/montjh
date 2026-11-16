import { Award, Globe2, Target } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME } from '../data/content'
import SectionHeading from './SectionHeading'

const About: FC = () => {
  const { t } = useLanguage()

  const highlights = [
    { icon: Target, title: t.about.visionTitle, text: t.about.visionText },
    { icon: Award, title: t.about.luxuryTitle, text: t.about.luxuryText },
    { icon: Globe2, title: t.about.globalTitle, text: t.about.globalText },
  ] as const

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-[#00A9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-20 bottom-0 h-64 w-64 rounded-full bg-[#0047AB]/12 blur-3xl" />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <SectionHeading
            align="start"
            eyebrow={t.about.eyebrow}
            title={
              <>
                <span className="font-display" dir="ltr">
                  {BRAND_NAME}
                </span>
                <span className="mx-1.5 text-[var(--text-muted)]">—</span>
                <span>{t.about.title}</span>
              </>
            }
            description={t.about.p1}
          />

          <div className="mt-6 space-y-4 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <li key={item.title} className="glass-card rounded-2xl p-4">
                <item.icon className="mb-3 text-cyan" size={20} />
                <h3 className="text-sm font-bold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-[var(--text-muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-w-0">
          <div className="animate-float absolute -inset-3 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-1.5 shadow-[var(--shadow-glass)] backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
              alt={BRAND_NAME}
              className="h-64 w-full rounded-[1.4rem] object-cover sm:h-80 md:h-[26rem]"
              loading="lazy"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-navy/78 px-4 py-3.5 backdrop-blur-2xl sm:inset-x-5 sm:px-5 sm:py-4">
              <p className="font-display text-[10px] tracking-[0.18em] text-cyan uppercase sm:text-xs">
                {t.about.cardCaption}
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                {t.about.cardLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
