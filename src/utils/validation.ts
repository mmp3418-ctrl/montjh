import type { Dictionary } from '../i18n/translations'
import type { ContactFormData, ContactFormErrors } from '../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(
  values: ContactFormData,
  errorsCopy: Dictionary['contact']['errors'],
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.full_name.trim() || values.full_name.trim().length < 2) {
    errors.full_name = errorsCopy.name
  }

  if (!values.email.trim()) {
    errors.email = errorsCopy.emailRequired
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = errorsCopy.emailInvalid
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = errorsCopy.message
  }

  return errors
}

export function hasFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
