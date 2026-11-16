import { Crown, Sparkles } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { clubFeatures } from '../data/content'

const BegoniaClub: FC = () => {
  const { t } = useLanguage()

  return (
    <section id="club" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 scale-105 opacity-35"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]/92 to-[var(--bg-base)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,120,215,0.18),transparent_60%)]" />

      <div className="container-site relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A9FF]/30 bg-[#00A9FF]/10 px-4 py-1.5 text-xs font-semibold text-cyan backdrop-blur-xl">
              <Crown size={14} />
              {t.club.eyebrow}
            </div>

            <h2 className="text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              {t.club.title}
              <span className="mt-2 block text-gradient text-[0.7em]">{t.club.subtitle}</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--text-secondary)] sm:text-base md:text-lg">
              {t.club.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)] transition hover:brightness-110"
              >
                <Sparkles size={16} />
                {t.club.ctaPrimary}
              </a>
              <a
                href="#gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] backdrop-blur-2xl transition hover:border-[var(--glass-border-hover)]"
              >
                {t.club.ctaSecondary}
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {clubFeatures.map((feature) => {
              const copy = t.club.features[feature.id]
              if (!copy) return null

              return (
                <li
                  key={feature.id}
                  className="glass-card rounded-2xl p-5 hover:-translate-y-1"
                >
                  <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">
                    {copy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {copy.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BegoniaClub
