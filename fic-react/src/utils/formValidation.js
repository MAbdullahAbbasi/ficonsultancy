import { isValidEmail } from './email'

export function validateContactFields({ first_name, last_name, email, message }) {
  const errors = {}
  if (!String(first_name ?? '').trim()) errors.first_name = 'First name is required.'
  if (!String(last_name ?? '').trim()) errors.last_name = 'Last name is required.'
  const emailVal = String(email ?? '').trim()
  if (!emailVal) errors.email = 'Email address is required.'
  else if (!isValidEmail(emailVal)) errors.email = 'Please enter a valid email address.'
  if (!String(message ?? '').trim()) errors.message = 'Message is required.'
  return errors
}

export function validateAppointmentFields({ name, email, date, time }) {
  const errors = {}
  if (!String(name ?? '').trim()) errors.name = 'Full name is required.'
  const emailVal = String(email ?? '').trim()
  if (!emailVal) errors.email = 'Email address is required.'
  else if (!isValidEmail(emailVal)) errors.email = 'Please enter a valid email address.'
  if (!String(date ?? '').trim()) errors.date = 'Date is required.'
  if (!String(time ?? '').trim()) errors.time = 'Time is required.'
  return errors
}
