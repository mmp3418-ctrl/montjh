import { ArrowLeft, Building2, Sparkles } from 'lucide-react'
import type { FC } from 'react'
import { company } from '../data/content'

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-end overflow-hidden pb-16 pt-28 sm:pb-20 md:items-center md:pb-0 md:pt-24"
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
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0047AB]/35 via-transparent to-navy/90" />

      <div className="animate-pulse-glow pointer-events-none absolute -start-20 top-24 h-72 w-72 rounded-full bg-[#00A9FF]/25 blur-[100px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -end-16 bottom-24 h-80 w-80 rounded-full bg-[#0078D7]/20 blur-[110px]" />
      <div className="pointer-events-none absolute start-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0047AB]/15 blur-[90px]" />

      <div className="relative container-site w-full">
        <div className="animate-fade-up mb-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold text-cyan backdrop-blur-xl sm:text-xs">
            <Building2 size={13} />
            {company.nameEn}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00A9FF]/30 bg-[#00A9FF]/10 px-3 py-1.5 text-[11px] font-semibold text-cyan backdrop-blur-xl sm:text-xs">
            <Sparkles size={13} />
            {company.clubName} · VIP
          </span>
        </div>

        <p className="animate-fade-up mb-3 font-display text-[11px] font-semibold tracking-[0.28em] text-cyan/90 uppercase sm:text-xs">
          {company.tagline}
        </p>

        <h1 className="animate-fade-up-delay max-w-3xl text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl">
          <span className="block">{company.nameAr}</span>
          <span className="mt-2 block text-gradient text-[0.68em] sm:text-[0.65em]">
            استثمار سياحي راقٍ بهوية بيغونيا
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-sm leading-8 text-white/70 sm:text-base sm:leading-8 md:text-lg">
          نطوّر وجهات سياحية استثنائية ونقدّم عبر نادي بيغونيا تجربة عضوية حصرية
          تجمع الفخامة، الشراكات الاستراتيجية، والضيافة بمعايير عالمية في قلب
          طرابلس.
        </p>

        <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#investments"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(0,169,255,0.28)] transition hover:brightness-110"
          >
            استكشف الاستثمارات
            <ArrowLeft size={16} className="opacity-80" />
          </a>
          <a
            href="#club"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl transition hover:border-[#00A9FF]/50 hover:bg-white/[0.08]"
          >
            اكتشف نادي بيغونيا
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
