/** Footer email click — mirrors scripts/main.js handleEmailClick */
export function openEmailClient() {
  const email = 'info@ficonsultancy.net'
  const subject = 'Inquiry'
  const body = ''
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  if (isMobile) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      window.location.href = `googlegmail:///co?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }, 300)
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank',
    )
  }
}

export function getRecaptchaSiteKey() {
  const key = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  return typeof key === 'string' && key.trim() ? key.trim() : ''
}

export function getEmailJsEnv() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '',
    contactTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT?.trim() || '',
    contactReplyTemplateId:
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT_REPLY?.trim() || '',
    appointmentTemplateId:
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_APPOINTMENT?.trim() || '',
  }
}

export function isEmailJsConfiguredForContact() {
  const { publicKey, serviceId, contactTemplateId } = getEmailJsEnv()
  return Boolean(publicKey && serviceId && contactTemplateId)
}

export function isEmailJsConfiguredForAppointment() {
  const { publicKey, serviceId, appointmentTemplateId } = getEmailJsEnv()
  return Boolean(publicKey && serviceId && appointmentTemplateId)
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(String(value ?? '').trim())
}
