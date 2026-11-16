import { MessageCircle, Phone, UserRound } from 'lucide-react'
import type { FC } from 'react'
import { useLanguage } from '../context/LanguageContext'
import type { ContactPerson } from '../types'

interface ContactPersonCardProps {
  person: ContactPerson
}

const ContactPersonCard: FC<ContactPersonCardProps> = ({ person }) => {
  const { t, language } = useLanguage()
  const displayName = language === 'ar' ? person.nameAr : person.nameEn
  const secondaryName = language === 'ar' ? person.nameEn : person.nameAr

  return (
    <article className="glass-card group relative overflow-hidden rounded-2xl p-5 hover:-translate-y-1 sm:p-6">
      <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-[#00A9FF]/15 blur-3xl transition group-hover:bg-[#00A9FF]/25" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_8px_24px_rgba(0,169,255,0.3)]">
          <UserRound size={26} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            {displayName}
            <span className="ms-2 font-display text-sm font-medium text-[var(--text-muted)]">
              {secondaryName}
            </span>
          </h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{t.contact.directManagement}</p>
          <a
            href={`tel:${person.phone}`}
            className="mt-2 inline-block font-display text-lg font-semibold tracking-wide text-cyan transition hover:brightness-110"
            dir="ltr"
          >
            {person.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${person.phone}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-sm font-bold text-[var(--text-primary)] transition hover:border-[var(--glass-border-hover)] hover:text-cyan"
        >
          <Phone size={16} />
          {t.contact.call}
        </a>
        <a
          href={`https://wa.me/${person.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)] transition hover:brightness-110"
        >
          <MessageCircle size={16} />
          {t.contact.whatsapp}
        </a>
      </div>
    </article>
  )
}

export default ContactPersonCard
