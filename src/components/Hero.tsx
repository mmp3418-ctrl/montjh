import { ArrowRight, Building2, Sparkles } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME, company } from '../data/content'

const Hero: FC = () => {
  const { t, language } = useLanguage()
  const tagline = language === 'ar' ? company.taglineAr : company.taglineEn

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-end overflow-hidden pb-16 pt-28 sm:pb-20 md:items-center md:pb-24 md:pt-28"
    >
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0047AB]/25 via-transparent to-navy/75" />

      <div className="animate-pulse-glow pointer-events-none absolute -start-16 top-24 h-64 w-64 rounded-full bg-[#00A9FF]/22 blur-[90px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -end-10 bottom-20 h-72 w-72 rounded-full bg-[#0078D7]/18 blur-[100px]" />

      <div className="relative container-site w-full">
        <div className="animate-fade-up mb-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-xl sm:text-xs">
            <Building2 size={13} className="shrink-0" />
            <span dir="ltr">{BRAND_NAME}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00A9FF]/40 bg-[#00A9FF]/15 px-3 py-1.5 text-[11px] font-semibold text-cyan backdrop-blur-xl sm:text-xs">
            <Sparkles size={13} className="shrink-0" />
            {t.hero.badgeSector}
          </span>
        </div>

        <p className="animate-fade-up mb-3 text-sm font-semibold tracking-wide text-cyan/95 sm:text-base">
          {tagline}
        </p>

        <h1 className="animate-fade-up-delay max-w-4xl text-[2.15rem] font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl">
          <span className="block font-display" dir="ltr">
            {BRAND_NAME}
          </span>
          <span className="mt-3 block max-w-2xl text-gradient text-[0.55em] leading-snug sm:text-[0.48em]">
            {t.hero.subheadline}
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-sm leading-8 text-white/78 sm:text-base md:text-lg">
          {t.hero.description}
        </p>

        <div className="animate-fade-up-delay-2 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#investments"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(0,169,255,0.28)] transition hover:brightness-110 sm:w-auto"
          >
            {t.hero.ctaPrimary}
            <ArrowRight
              size={16}
              className={`shrink-0 opacity-85 ${language === 'ar' ? 'rotate-180' : ''}`}
            />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-2xl transition hover:border-[#00A9FF]/45 hover:bg-white/15 sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
