import { ArrowRight } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { BRAND_NAME } from '../data/content'
import { hasText, pickLocale } from '../utils/locale'
import SkeletonBlock from './SkeletonBlock'

const Hero: FC = () => {
  const { t, language } = useLanguage()
  const { settings, loading } = useSite()

  const title = pickLocale(language, settings?.hero_title_ar, settings?.hero_title_en)
  const subtitle = pickLocale(
    language,
    settings?.hero_subtitle_ar,
    settings?.hero_subtitle_en,
  )
  const heroImage = settings?.hero_image_url?.trim() || ''

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-end overflow-hidden pb-16 pt-28 sm:pb-20 md:items-center md:pb-24 md:pt-28"
    >
      <div className="absolute inset-0 bg-navy" />

      {heroImage ? (
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,169,255,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(0,71,171,0.35),transparent_50%),linear-gradient(135deg,#0B192C_0%,#102038_55%,#0047AB_140%)]" />
      )}

      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0047AB]/20 via-transparent to-navy/70" />

      <div className="relative container-site w-full">
        <p className="mb-3 font-display text-sm font-semibold tracking-wide text-cyan" dir="ltr">
          {BRAND_NAME}
        </p>

        {loading ? (
          <div className="space-y-4">
            <SkeletonBlock className="h-12 w-full max-w-xl sm:h-16" />
            <SkeletonBlock className="h-6 w-full max-w-lg" />
            <SkeletonBlock className="h-6 w-3/4 max-w-md" />
          </div>
        ) : (
          <>
            <h1 className="max-w-4xl text-[2.1rem] font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl">
              {hasText(title) ? (
                title
              ) : (
                <span className="font-display" dir="ltr">
                  {BRAND_NAME}
                </span>
              )}
            </h1>

            {hasText(subtitle) ? (
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/78 sm:text-base md:text-lg">
                {subtitle}
              </p>
            ) : (
              <p className="mt-5 max-w-xl text-sm text-white/55">{t.empty.awaiting}</p>
            )}
          </>
        )}

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
