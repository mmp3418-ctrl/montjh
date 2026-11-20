import { ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSite } from '../context/SiteDataContext'
import { MAP_EXTERNAL_URL, toMapEmbedUrl } from '../data/seedContent'
import { supabase } from '../lib/supabase'
import type { ContactFormData, ContactFormErrors } from '../types'
import { pickLocale, toTelHref } from '../utils/locale'
import { hasFormErrors, validateContactForm } from '../utils/validation'
import SectionHeading from './SectionHeading'

const initialValues: ContactFormData = {
  full_name: '',
  email: '',
  phone: '',
  message: '',
}

const Contact: FC = () => {
  const { t, language } = useLanguage()
  const { settings } = useSite()
  const [values, setValues] = useState<ContactFormData>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const address = pickLocale(language, settings.address_ar, settings.address_en)
  const phone = settings.phone?.trim() || ''
  const email = settings.email?.trim() || ''
  const mapExternal = settings.map_url?.trim() || MAP_EXTERNAL_URL
  const mapEmbed = toMapEmbedUrl(settings.map_url)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target
    const field = name as keyof ContactFormData
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const nextErrors = validateContactForm(values, t.contact.errors)
    if (hasFormErrors(nextErrors)) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrors({})

    const payload = {
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      message: values.message.trim(),
    }

    const { error } = await supabase.from('contact_messages').insert(payload)

    if (error) {
      setStatus('error')
      return
    }

    setValues(initialValues)
    setStatus('success')
  }

  const fieldClass =
    'w-full min-h-12 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--glass-border-hover)] focus:ring-2 focus:ring-[#00A9FF]/20'

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute start-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0078D7]/10 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-5 sm:p-6">
            <div className="mb-4 inline-flex rounded-xl bg-brand-gradient p-2.5 text-white">
              <MapPin size={18} />
            </div>
            <p className="text-xs font-semibold text-[var(--text-muted)]">{t.contact.address}</p>
            <p className="mt-2 text-sm font-semibold leading-7 text-[var(--text-primary)]">
              {address}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6">
            <div className="mb-4 inline-flex rounded-xl bg-brand-gradient p-2.5 text-white">
              <Phone size={18} />
            </div>
            <p className="text-xs font-semibold text-[var(--text-muted)]">{t.contact.phone}</p>
            <a
              href={toTelHref(phone)}
              className="mt-2 inline-block text-sm font-semibold text-[var(--text-primary)] transition hover:text-cyan"
              dir="ltr"
            >
              {phone}
            </a>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6">
            <div className="mb-4 inline-flex rounded-xl bg-brand-gradient p-2.5 text-white">
              <Mail size={18} />
            </div>
            <p className="text-xs font-semibold text-[var(--text-muted)]">{t.contact.email}</p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block break-all text-sm font-semibold text-[var(--text-primary)] transition hover:text-cyan"
              dir="ltr"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--shadow-glass)] backdrop-blur-2xl">
          <div className="flex flex-col gap-3 border-b border-[var(--glass-border)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">{t.contact.mapTitle}</h3>
              <p className="mt-0.5 text-xs text-[var(--text-muted)] sm:text-sm">{address}</p>
            </div>
            <a
              href={mapExternal}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 text-sm font-bold text-white"
            >
              {t.contact.openMaps}
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="relative aspect-[16/11] w-full bg-[var(--bg-deep)] sm:aspect-[16/9]">
            <iframe
              title={t.contact.mapTitle}
              src={mapEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--glass-border)]" />
          </div>
        </div>

        <form
          onSubmit={(event) => {
            void handleSubmit(event)
          }}
          noValidate
          className="glass mx-auto mt-8 w-full max-w-4xl rounded-2xl p-5 sm:p-7"
        >
          <h3 className="mb-5 text-lg font-bold text-[var(--text-primary)] sm:text-xl">
            {t.contact.formTitle}
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="full_name" className="mb-2 block text-sm text-[var(--text-secondary)]">
                {t.contact.formName}
              </label>
              <input
                id="full_name"
                name="full_name"
                value={values.full_name}
                onChange={handleChange}
                className={fieldClass}
                autoComplete="name"
              />
              {errors.full_name ? (
                <p className="mt-1.5 text-xs text-red-500">{errors.full_name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-[var(--text-secondary)]">
                {t.contact.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className={fieldClass}
                dir="ltr"
                autoComplete="email"
              />
              {errors.email ? <p className="mt-1.5 text-xs text-red-500">{errors.email}</p> : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="mb-2 block text-sm text-[var(--text-secondary)]">
                {t.contact.formPhone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                className={fieldClass}
                dir="ltr"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-2 block text-sm text-[var(--text-secondary)]">
              {t.contact.formMessage}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              className={`${fieldClass} resize-y`}
            />
            {errors.message ? (
              <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-70"
            >
              <Send size={16} />
              {status === 'submitting' ? t.contact.formSubmitting : t.contact.formSubmit}
            </button>
            {status === 'success' ? (
              <p className="text-sm font-medium text-cyan" role="status">
                {t.contact.formSuccess}
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="text-sm font-medium text-red-500" role="alert">
                {t.contact.formError}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
