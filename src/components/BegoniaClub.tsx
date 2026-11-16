import { Crown, Sparkles } from 'lucide-react'
import type { FC } from 'react'
import { clubFeatures, company } from '../data/content'

const BegoniaClub: FC = () => {
  return (
    <section id="club" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_120_215/0.18),transparent_60%)]" />

      <div className="container-site relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan">
              <Crown size={14} />
              تجربة حصرية
            </div>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              {company.clubName}
              <span className="mt-2 block text-gradient text-[0.72em]">
                حيث تلتقي الفخامة بفرص الاستثمار
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              نادي بيغونيا هو الوجه الراقي لشركة مدينة الحدائق؛ مساحة مصممة للأعضاء
              والشركاء الباحثين عن أجواء راقية، وتواصل استراتيجي، وتجربة ضيافة لا
              تُنسى في قلب المشهد السياحي الليبي.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan/20 transition hover:brightness-110"
              >
                <Sparkles size={16} />
                استفسر عن العضوية
              </a>
              <a
                href="#gallery"
                className="glass rounded-xl px-5 py-3 text-sm font-bold text-white transition hover:border-cyan/40"
              >
                شاهد الأجواء
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {clubFeatures.map((feature) => (
              <li
                key={feature.id}
                className="glass-strong rounded-2xl p-5 transition hover:border-cyan/40"
              >
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BegoniaClub
