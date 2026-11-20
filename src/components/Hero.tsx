import { ArrowRight } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { BRAND_NAME } from '../data/content'
import { pickLocale } from '../utils/locale'

const Hero: FC = () => {
  const { t, language } = useLanguage()
  const { settings } = useSite()

  // Live DB fields (merged: hero_* preferred when set, else main_heading / overview)
  const title = pickLocale(language, settings.hero_title_ar, settings.hero_title_en)
  const subtitle = pickLocale(language, settings.hero_subtitle_ar, settings.hero_subtitle_en)

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-end overflow-hidden pb-16 pt-28 sm:pb-20 md:items-center md:pb-24 md:pt-28"
    >
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,169,255,0.32),transparent_42%),radial-gradient(ellipse_at_80%_10%,rgba(0,120,215,0.28),transparent_40%),radial-gradient(ellipse_at_70%_80%,rgba(0,71,171,0.35),transparent_45%),linear-gradient(145deg,#07111D_0%,#0B192C_48%,#102038_100%)]" />
      <div className="pointer-events-none absolute -start-10 top-24 h-72 w-72 rounded-full bg-[#00A9FF]/25 blur-[100px]" />
      <div className="pointer-events-none absolute end-0 bottom-10 h-80 w-80 rounded-full bg-[#0047AB]/30 blur-[110px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C]/35 via-transparent to-[#0B192C]/85" />

      <div className="relative container-site w-full">
        <p className="mb-3 font-display text-sm font-semibold tracking-wide text-cyan" dir="ltr">
          {BRAND_NAME}
        </p>

        <h1 className="max-w-4xl text-[2rem] font-extrabold leading-[1.2] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 sm:text-base md:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#services"
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
