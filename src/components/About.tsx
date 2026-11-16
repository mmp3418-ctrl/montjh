import type { FC } from 'react'
import { company } from '../data/content'

const About: FC = () => {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-16 bottom-0 h-64 w-64 rounded-full bg-blue-deep/20 blur-3xl" />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-cyan">من نحن</p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            رؤية سياحية تجمع الاستثمار والهوية المحلية
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-white/70 md:text-lg">
            <p>
              {company.nameAr} ({company.nameEn}) هي جهة متخصصة في التعاون
              الاستثماري السياحي، تعمل على بناء شراكات مستدامة ترفع قيمة الوجهات
              الليبية وتفتح آفاقاً جديدة للنمو.
            </p>
            <p>
              نؤمن بأن السياحة ليست مجرد قطاع اقتصادي، بل منظومة متكاملة من الضيافة
              والثقافة والتجربة. من خلال {company.clubName} نقدّم مساحة حصرية
              للتواصل والاستثمار بمعايير راقية تعكس طموحنا في التميز.
            </p>
            <p>
              مقرنا في {company.address}، ونخدم شركاءنا عبر قنوات مباشرة ومهنية
              لضمان سرعة الاستجابة وجودة التنفيذ.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="animate-float absolute -inset-3 rounded-[2rem] bg-brand-gradient opacity-30 blur-xl" />
          <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-1">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
              alt="مشهد طبيعي يعكس روح الاستثمار السياحي"
              className="h-72 w-full rounded-[1.5rem] object-cover md:h-96"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl glass px-5 py-4 md:inset-x-6">
              <p className="font-display text-xs tracking-[0.2em] text-cyan uppercase">
                Tourism Investment Cooperation
              </p>
              <p className="mt-1 text-sm font-semibold text-white md:text-base">
                شراكات تبني وجهات، وتجارب تبقى في الذاكرة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
