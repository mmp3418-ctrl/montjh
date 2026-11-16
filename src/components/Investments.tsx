import type { FC } from 'react'
import { services } from '../data/content'
import ServiceIcon from './ServiceIcon'

const Investments: FC = () => {
  return (
    <section id="investments" className="section-pad relative bg-navy-soft/40">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-cyan">
            الاستثمارات والخدمات
          </p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            قطاعات سياحية وشراكات قابلة للنمو
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            نقدم منظومة متكاملة من الفرص الاستثمارية والخدمات التي تدعم تطوير
            الوجهات السياحية وتعزيز قيمة الشراكات طويلة الأمد.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.id}
              className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-xl hover:shadow-cyan/10"
            >
              <div className="mb-5 inline-flex rounded-xl bg-brand-gradient p-3 text-white shadow-lg shadow-cyan/20">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-white transition group-hover:text-cyan">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Investments
