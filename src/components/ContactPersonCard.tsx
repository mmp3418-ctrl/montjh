import { MessageCircle, Phone, UserRound } from 'lucide-react'
import type { FC } from 'react'
import type { ContactPerson } from '../types'

interface ContactPersonCardProps {
  person: ContactPerson
}

const ContactPersonCard: FC<ContactPersonCardProps> = ({ person }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#00A9FF]/50 hover:bg-white/[0.07] sm:p-6">
      <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-[#00A9FF]/15 blur-3xl transition group-hover:bg-[#00A9FF]/30" />
      <div className="absolute -start-8 bottom-0 h-24 w-24 rounded-full bg-[#0047AB]/20 blur-2xl" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_8px_24px_rgba(0,169,255,0.3)]">
          <UserRound size={26} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            {person.name}
            <span className="ms-2 font-display text-sm font-medium text-white/40">
              {person.nameEn}
            </span>
          </h3>
          <p className="mt-1 text-sm text-white/50">{person.role}</p>
          <p className="mt-2 font-display text-lg font-semibold tracking-wide text-cyan" dir="ltr">
            {person.phoneDisplay}
          </p>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${person.phone}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] text-sm font-bold text-white transition hover:border-[#00A9FF]/50 hover:text-cyan"
        >
          <Phone size={16} />
          اتصال
        </a>
        <a
          href={`https://wa.me/${person.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)] transition hover:brightness-110"
        >
          <MessageCircle size={16} />
          واتساب
        </a>
      </div>
    </article>
  )
}

export default ContactPersonCard
