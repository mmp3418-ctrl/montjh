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

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <aside className="glass space-y-4 rounded-2xl p-5 sm:p-7">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {t.contact.companyInfo}
            </h3>

            <div className="flex items-start gap-3 text-sm leading-7 text-[var(--text-secondary)]">
              <MapPin className="mt-1 shrink-0 text-cyan" size={18} />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">{t.contact.address}</p>
                <p>{language === 'ar' ? company.addressAr : company.addressEn}</p>
                <p className="mt-1 text-[var(--text-muted)]" dir="ltr">
                  {language === 'ar' ? company.addressEn : company.addressAr}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm leading-7 text-[var(--text-secondary)]">
              <Phone className="mt-1 shrink-0 text-cyan" size={18} />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">{t.contact.phoneFax}</p>
                <a href="tel:+218214802432" className="transition hover:text-cyan" dir="ltr">
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm leading-7 text-[var(--text-secondary)]">
              <Mail className="mt-1 shrink-0 text-cyan" size={18} />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">
                  {t.contact.officialEmail}
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition hover:text-cyan"
                  dir="ltr"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-[#00A9FF]/25 bg-[#00A9FF]/08 px-4 py-3">
              <p className="text-xs text-[var(--text-muted)]">{t.contact.website}</p>
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg font-semibold text-cyan"
                dir="ltr"
              >
                {company.website}
              </a>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-5 sm:p-7"
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
