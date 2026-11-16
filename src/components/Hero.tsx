import type { FC } from 'react'
import { company } from '../data/content'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80'

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-end overflow-hidden pb-20 pt-28 md:items-center md:pb-0 md:pt-24"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="أفق سياحي متوسطي"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgb(11 25 44 / 0.92) 0%, rgb(11 25 44 / 0.72) 42%, rgb(0 71 171 / 0.45) 78%, rgb(0 169 255 / 0.28) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgb(0_169_255/0.22),transparent_50%)]" />
      </div>

      <div className="hero-shimmer relative container-site w-full">
        <p className="animate-fade-up mb-4 font-display text-xs font-semibold tracking-[0.28em] text-cyan uppercase md:text-sm">
          {company.nameEn} · {company.clubName}
        </p>

        <h1 className="animate-fade-up-delay max-w-3xl text-4xl leading-tight font-extrabold text-white md:text-6xl md:leading-[1.15]">
          <span className="block">{company.nameAr}</span>
          <span className="mt-2 block text-gradient text-[0.72em] md:text-[0.68em]">
            تعاون استثماري سياحي برؤية عالمية
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          نطوّر وجهات سياحية راقية ونقدّم عبر نادي بيغونيا تجربة عضوية حصرية تربط
          الاستثمار بالضيافة والتميز في قلب طرابلس.
        </p>

        <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap gap-3">
          <a
            href="#investments"
            className="rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-cyan/25 transition hover:brightness-110"
          >
            استكشف الاستثمارات
          </a>
          <a
            href="#club"
            className="glass rounded-xl px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan/40 hover:bg-white/10"
          >
            اكتشف نادي بيغونيا
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
