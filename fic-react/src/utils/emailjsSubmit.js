import emailjs from '@emailjs/browser'
import {
  getEmailJsEnv,
  isEmailJsConfiguredForAppointment,
  isEmailJsConfiguredForContact,
} from './email'

let emailJsInitialized = false

function ensureEmailJsInit() {
  const { publicKey } = getEmailJsEnv()
  if (!publicKey) {
    throw new Error('EMAILJS_NOT_CONFIGURED')
  }
  if (!emailJsInitialized) {
    emailjs.init({ publicKey })
    emailJsInitialized = true
  }
}

function mapEmailJsError(error) {
  const status = error?.status
  if (status === 400) return 'Invalid request.'
  if (status === 401) return 'Authentication failed.'
  if (status === 404) return 'Service or template not found.'
  return 'Please try again later.'
}

/**
 * Send contact form via EmailJS (main template + optional auto-reply).
 * Resolves only after EmailJS confirms success for the primary send.
 */
export async function sendContactEmail(templateParams) {
  if (!isEmailJsConfiguredForContact()) {
    throw new Error('EMAILJS_NOT_CONFIGURED')
  }

  const { serviceId, contactTemplateId, contactReplyTemplateId } = getEmailJsEnv()
  ensureEmailJsInit()

  try {
    await emailjs.send(serviceId, contactTemplateId, templateParams)
  } catch (error) {
    const wrapped = new Error('CONTACT_SEND_FAILED')
    wrapped.status = error?.status
    throw wrapped
  }

  if (contactReplyTemplateId) {
    try {
      await emailjs.send(serviceId, contactReplyTemplateId, templateParams)
    } catch {
      /* Auto-reply failure does not block primary success */
    }
  }
}

export async function sendAppointmentEmail(templateParams) {
  if (!isEmailJsConfiguredForAppointment()) {
    throw new Error('EMAILJS_NOT_CONFIGURED')
  }

  const { serviceId, appointmentTemplateId } = getEmailJsEnv()
  ensureEmailJsInit()

  try {
    await emailjs.send(serviceId, appointmentTemplateId, templateParams)
  } catch (error) {
    const detail = mapEmailJsError(error)
    throw new Error(`APPOINTMENT_SEND_FAILED:${detail}`)
  }
}

export function getContactSendErrorMessage(error) {
  if (error?.message === 'EMAILJS_NOT_CONFIGURED') {
    return 'Email service is not configured. Please set VITE_EMAILJS_* environment variables.'
  }
  if (error?.message === 'CONTACT_SEND_FAILED' || error?.status) {
    return `Failed to send message. ${mapEmailJsError(error)}`
  }
  return 'Failed to send message. Please try again later.'
}

export function getAppointmentSendErrorMessage(error) {
  if (error?.message === 'EMAILJS_NOT_CONFIGURED') {
    return 'Email service is not configured. Please set VITE_EMAILJS_* environment variables.'
  }
  if (typeof error?.message === 'string' && error.message.startsWith('APPOINTMENT_SEND_FAILED:')) {
    return `Failed to book appointment. ${error.message.replace('APPOINTMENT_SEND_FAILED:', '')}`
  }
  return 'Failed to book appointment. Please try again.'
}
