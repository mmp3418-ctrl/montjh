import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
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
    const errors = validateContactForm(form.values)

    if (hasFormErrors(errors)) {
      setForm((prev) => ({ ...prev, errors, status: 'error' }))
      return
    }

    setForm((prev) => ({ ...prev, status: 'submitting', errors: {} }))

    window.setTimeout(() => {
      const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
        form.values.subject,
      )}&body=${encodeURIComponent(
        `الاسم: ${form.values.name}\nالهاتف: ${form.values.phone}\nالبريد: ${form.values.email}\n\n${form.values.message}`,
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
    'w-full min-h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00A9FF]/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#00A9FF]/20'

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute start-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0078D7]/12 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="نحن هنا لبناء شراكتك القادمة"
          description="تواصل مع الإدارة مباشرة، حدّد موقعنا على الخريطة، أو أرسل رسالتك عبر النموذج."
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
          <aside className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl sm:p-7">
            <h3 className="text-xl font-bold text-white">معلومات الشركة</h3>

            <div className="flex items-start gap-3 text-sm leading-7 text-white/70">
              <MapPin className="mt-1 shrink-0 text-cyan" size={18} />
              <div>
                <p className="font-semibold text-white">العنوان</p>
                <p>{company.addressAr}</p>
                <p className="mt-1 text-white/45" dir="ltr">
                  {company.addressEn}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm leading-7 text-white/70">
              <Phone className="mt-1 shrink-0 text-cyan" size={18} />
              <div>
                <p className="font-semibold text-white">هاتف وفاكس</p>
                <a
                  href="tel:+218214802432"
                  className="transition hover:text-cyan"
                  dir="ltr"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm leading-7 text-white/70">
              <Mail className="mt-1 shrink-0 text-cyan" size={18} />
              <div>
                <p className="font-semibold text-white">البريد الرسمي</p>
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
              <p className="text-xs text-white/50">الموقع الرسمي</p>
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
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl sm:p-7"
            aria-label="نموذج التواصل"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  الاسم الكامل
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.values.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="أدخل اسمك"
                  aria-invalid={Boolean(form.errors.name)}
                />
                {form.errors.name ? (
                  <p className="mt-1.5 text-xs text-red-300">{form.errors.name}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  البريد الإلكتروني
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
                  <p className="mt-1.5 text-xs text-red-300">{form.errors.email}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                  رقم الهاتف
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.values.phone}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="09xxxxxxxx"
                  dir="ltr"
                  aria-invalid={Boolean(form.errors.phone)}
                />
                {form.errors.phone ? (
                  <p className="mt-1.5 text-xs text-red-300">{form.errors.phone}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/80">
                  الموضوع
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.values.subject}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="موضوع الرسالة"
                  aria-invalid={Boolean(form.errors.subject)}
                />
                {form.errors.subject ? (
                  <p className="mt-1.5 text-xs text-red-300">{form.errors.subject}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.values.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
                placeholder="اكتب تفاصيل استفسارك أو عرض الشراكة..."
                aria-invalid={Boolean(form.errors.message)}
              />
              {form.errors.message ? (
                <p className="mt-1.5 text-xs text-red-300">{form.errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="submit"
                disabled={form.status === 'submitting'}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={16} />
                {form.status === 'submitting' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>

              {form.status === 'success' ? (
                <p className="text-sm font-medium text-cyan" role="status">
                  تم تجهيز رسالتك بنجاح. سيُفتح تطبيق البريد لإكمال الإرسال.
                </p>
              ) : null}

              {form.status === 'error' ? (
                <p className="text-sm font-medium text-red-300" role="alert">
                  يرجى تصحيح الحقول المطلوبة قبل الإرسال.
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
