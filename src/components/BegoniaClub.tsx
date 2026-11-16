import { Crown, Sparkles } from 'lucide-react'
import type { FC } from 'react'
import { clubFeatures, company } from '../data/content'

const BegoniaClub: FC = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/92 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,120,215,0.2),transparent_60%)]" />

      <div className="container-site relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A9FF]/30 bg-[#00A9FF]/10 px-4 py-1.5 text-xs font-semibold text-cyan backdrop-blur-xl">
              <Crown size={14} />
              تجربة VIP حصرية
            </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              {company.clubName}
              <span className="mt-2 block text-gradient text-[0.7em]">
                حيث تلتقي الفخامة بفرص الاستثمار
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/70 sm:text-base md:text-lg">
              نادي بيغونيا هو الوجه الراقي لشركة مدينة الحدائق؛ مساحة مصممة للأعضاء
              والشركاء الباحثين عن أجواء راقية، وتواصل استراتيجي، وتجربة ضيافة لا
              تُنسى في قلب المشهد السياحي الليبي.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)] transition hover:brightness-110"
              >
                <Sparkles size={16} />
                استفسر عن العضوية
              </a>
              <a
                href="#gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white backdrop-blur-2xl transition hover:border-[#00A9FF]/50"
              >
                شاهد الأجواء
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {clubFeatures.map((feature) => (
              <li
                key={feature.id}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#00A9FF]/50 hover:bg-white/[0.07]"
              >
                <h3 className="text-base font-bold text-white sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BegoniaClub
