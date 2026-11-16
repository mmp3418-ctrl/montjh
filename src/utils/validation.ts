import type { Dictionary } from '../i18n/translations'
import type { ContactFormData, ContactFormErrors } from '../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[\d+\s()-]{8,20}$/

export function validateContactForm(
  values: ContactFormData,
  errorsCopy: Dictionary['contact']['errors'],
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = errorsCopy.name
  }

  if (!values.email.trim()) {
    errors.email = errorsCopy.emailRequired
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = errorsCopy.emailInvalid
  }

  if (!values.phone.trim()) {
    errors.phone = errorsCopy.phoneRequired
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = errorsCopy.phoneInvalid
  }

  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = errorsCopy.subject
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = errorsCopy.message
  }

  return errors
}

export function hasFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
