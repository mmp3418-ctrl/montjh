import type { ContactFormData, ContactFormErrors } from '../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[\d+\s()-]{8,20}$/

export function validateContactForm(values: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'يرجى إدخال الاسم الكامل (حرفان على الأقل)'
  }

  if (!values.email.trim()) {
    errors.email = 'البريد الإلكتروني مطلوب'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'صيغة البريد الإلكتروني غير صحيحة'
  }

  if (!values.phone.trim()) {
    errors.phone = 'رقم الهاتف مطلوب'
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'صيغة رقم الهاتف غير صحيحة'
  }

  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = 'يرجى إدخال موضوع الرسالة'
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل'
  }

  return errors
}

export function hasFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
