import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { company, contactPersons } from '../data/content'
import type { ContactFormData, ContactFormState } from '../types'
import { hasFormErrors, validateContactForm } from '../utils/validation'
import ContactPersonCard from './ContactPersonCard'
import LocationMap from './LocationMap'
import SectionHeading from './SectionHeading'

const initialValues: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const Contact: FC = () => {
  const { t, language } = useLanguage()
  const [form, setForm] = useState<ContactFormState>({
    values: initialValues,
    errors: {},
    status: 'idle',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target
    const field = name as keyof ContactFormData

    setForm((prev) => ({
      ...prev,
      status: prev.status === 'success' ? 'idle' : prev.status,
      values: { ...prev.values, [field]: value },
      errors: { ...prev.errors, [field]: undefined },
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const errors = validateContactForm(form.values, t.contact.errors)

    if (hasFormErrors(errors)) {
      setForm((prev) => ({ ...prev, errors, status: 'error' }))
      return
    }

    setForm((prev) => ({ ...prev, status: 'submitting', errors: {} }))

    window.setTimeout(() => {
      const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
        form.values.subject,
      )}&body=${encodeURIComponent(
        `${t.contact.formName}: ${form.values.name}\n${t.contact.formPhone}: ${form.values.phone}\n${t.contact.formEmail}: ${form.values.email}\n\n${form.values.message}`,
      )}`

      window.location.href = mailto

      setForm({
        values: initialValues,
        errors: {},
        status: 'success',
      })
    }, 400)
  }

  const fieldClass =
    'w-full min-h-12 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--glass-border-hover)] focus:ring-2 focus:ring-[#00A9FF]/20'

  const infoCards = [
    {
      id: 'address',
      icon: MapPin,
      label: t.contact.address,
      primary: language === 'ar' ? company.addressAr : company.addressEn,
      secondary: language === 'ar' ? company.addressEn : company.addressAr,
      href: company.mapsUrl,
      external: true,
    },
    {
      id: 'phone',
      icon: Phone,
      label: t.contact.phoneFax,
      primary: company.phone,
      href: 'tel:+218214802432',
      ltr: true,
    },
    {
      id: 'email',
      icon: Mail,
      label: t.contact.officialEmail,
      primary: company.email,
      href: `mailto:${company.email}`,
      ltr: true,
    },
  ] as const

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute start-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactPersons.map((person) => (
            <ContactPersonCard key={person.id} person={person} />
          ))}
        </div>

        <div className="mt-8">
          <LocationMap />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {infoCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              {...('external' in card && card.external
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              className="glass-card group rounded-2xl p-5 transition hover:-translate-y-1 sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-gradient p-2.5 text-white shadow-[0_8px_20px_rgba(0,169,255,0.22)]">
                <card.icon size={18} aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
                {card.label}
              </p>
              <p
                className="mt-2 text-sm font-semibold leading-7 text-[var(--text-primary)] transition group-hover:text-cyan sm:text-[15px]"
                dir={'ltr' in card && card.ltr ? 'ltr' : undefined}
              >
                {card.primary}
              </p>
              {'secondary' in card && card.secondary ? (
                <p className="mt-1 text-xs leading-6 text-[var(--text-muted)]" dir="ltr">
                  {card.secondary}
                </p>
              ) : null}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass mx-auto max-w-4xl rounded-2xl p-5 sm:p-7"
            aria-label={t.contact.title}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                >
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.values.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder={t.contact.formNamePh}
                  aria-invalid={Boolean(form.errors.name)}
                />
                {form.errors.name ? (
                  <p className="mt-1.5 text-xs text-red-500">{form.errors.name}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                >
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.values.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="name@example.com"
                  dir="ltr"
                  aria-invalid={Boolean(form.errors.email)}
                />
                {form.errors.email ? (
                  <p className="mt-1.5 text-xs text-red-500">{form.errors.email}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                >
                  {t.contact.formPhone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.values.phone}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder={t.contact.formPhonePh}
                  dir="ltr"
                  aria-invalid={Boolean(form.errors.phone)}
                />
                {form.errors.phone ? (
                  <p className="mt-1.5 text-xs text-red-500">{form.errors.phone}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                >
                  {t.contact.formSubject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.values.subject}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder={t.contact.formSubjectPh}
                  aria-invalid={Boolean(form.errors.subject)}
                />
                {form.errors.subject ? (
                  <p className="mt-1.5 text-xs text-red-500">{form.errors.subject}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
              >
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.values.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
                placeholder={t.contact.formMessagePh}
                aria-invalid={Boolean(form.errors.message)}
              />
              {form.errors.message ? (
                <p className="mt-1.5 text-xs text-red-500">{form.errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="submit"
                disabled={form.status === 'submitting'}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={16} />
                {form.status === 'submitting' ? t.contact.formSubmitting : t.contact.formSubmit}
              </button>

              {form.status === 'success' ? (
                <p className="text-sm font-medium text-cyan" role="status">
                  {t.contact.formSuccess}
                </p>
              ) : null}

              {form.status === 'error' ? (
                <p className="text-sm font-medium text-red-500" role="alert">
                  {t.contact.formError}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
