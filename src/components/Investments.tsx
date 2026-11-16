import type { FC } from 'react'
import { services } from '../data/content'
import SectionHeading from './SectionHeading'
import ServiceIcon from './ServiceIcon'

const Investments: FC = () => {
  return (
    <section id="investments" className="section-pad relative overflow-hidden bg-navy-soft/35">
      <div className="pointer-events-none absolute start-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="الاستثمارات والخدمات"
          title="قطاعات سياحية وشراكات قابلة للنمو"
          description="منظومة متكاملة من الفرص الاستثمارية والخدمات التي تدعم تطوير الوجهات السياحية وتعزيز قيمة الشراكات طويلة الأمد."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.id}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-[#00A9FF]/50 hover:bg-white/[0.07] sm:p-6"
            >
              <div className="mb-5 inline-flex rounded-xl bg-brand-gradient p-3 text-white shadow-[0_8px_24px_rgba(0,169,255,0.28)] transition group-hover:scale-105">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-lg font-bold text-white transition group-hover:text-cyan sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Investments
