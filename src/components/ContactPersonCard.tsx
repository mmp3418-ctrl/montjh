import { Phone, UserRound } from 'lucide-react'
import type { FC } from 'react'
import type { ContactPerson } from '../types'

interface ContactPersonCardProps {
  person: ContactPerson
}

const ContactPersonCard: FC<ContactPersonCardProps> = ({ person }) => {
  return (
    <article className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/10">
      <div className="absolute -end-8 -top-8 h-28 w-28 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-cyan/20" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-cyan/25">
          <UserRound size={26} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold tracking-wide text-white">
            {person.name}
          </h3>
          <p className="mt-1 text-sm text-white/55">{person.role}</p>
        </div>
      </div>

      <a
        href={`tel:${person.phone}`}
        className="relative mt-6 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition hover:border-cyan/40 hover:bg-cyan/10"
        dir="ltr"
      >
        <span className="flex items-center gap-2 font-display text-lg font-semibold text-cyan">
          <Phone size={18} aria-hidden="true" />
          {person.phoneDisplay}
        </span>
        <span className="text-xs font-medium text-white/50">اتصال مباشر</span>
      </a>
    </article>
  )
}

export default ContactPersonCard
