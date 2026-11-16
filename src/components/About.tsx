import { Award, Globe2, Target } from 'lucide-react'
import type { FC } from 'react'
import { company } from '../data/content'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    icon: Target,
    title: 'رؤية استثمارية',
    text: 'بناء منظومة سياحية مستدامة تعزز قيمة الوجهات الليبية.',
  },
  {
    icon: Award,
    title: 'معايير فاخرة',
    text: 'تجارب ضيافة وشراكات بمعايير راقية تليق بهوية بيغونيا.',
  },
  {
    icon: Globe2,
    title: 'تعاون دولي',
    text: 'ربط المستثمرين المحليين والدوليين بفرص نمو حقيقية.',
  },
] as const

const About: FC = () => {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-[#00A9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-20 bottom-0 h-64 w-64 rounded-full bg-[#0047AB]/20 blur-3xl" />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="start"
            eyebrow="من نحن"
            title="مدينة الحدائق… حيث يلتقي الاستثمار بالهيبة السياحية"
            description={`${company.nameAr} (${company.nameEn}) جهة متخصصة في التعاون الاستثماري السياحي، تعمل على بناء شراكات مستدامة ترفع قيمة الوجهات وتفتح آفاقاً جديدة للنمو.`}
          />

          <div className="mt-6 space-y-4 text-sm leading-8 text-white/65 sm:text-base">
            <p>
              نؤمن بأن السياحة منظومة متكاملة من الضيافة والثقافة والتجربة. عبر{' '}
              {company.clubName} نقدّم مساحة حصرية للتواصل والاستثمار بمعايير راقية
              تعكس طموحنا في التميز.
            </p>
            <p>
              مقرنا في {company.addressAr}، ونخدم شركاءنا عبر قنوات مباشرة ومهنية
              لضمان سرعة الاستجابة وجودة التنفيذ.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:border-[#00A9FF]/45"
              >
                <item.icon className="mb-3 text-cyan" size={20} />
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-white/55">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="animate-float absolute -inset-3 rounded-[2rem] bg-brand-gradient opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
              alt="مشهد طبيعي يعكس روح الاستثمار السياحي"
              className="h-64 w-full rounded-[1.4rem] object-cover sm:h-80 md:h-96"
              loading="lazy"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-navy/70 px-4 py-3.5 backdrop-blur-2xl sm:inset-x-5 sm:px-5 sm:py-4">
              <p className="font-display text-[10px] tracking-[0.22em] text-cyan uppercase sm:text-xs">
                {company.tagline}
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                شراكات تبني وجهات… وتجارب تبقى في الذاكرة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
