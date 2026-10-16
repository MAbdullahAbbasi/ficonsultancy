import { lazy, Suspense, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faPaperPlane,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
const RecaptchaField = lazy(() => import('../forms/RecaptchaField'))
import FormNotificationToast from '../forms/FormNotificationToast'
import { useFormNotification } from '../../hooks/useFormNotification'
import {
  getRecaptchaSiteKey,
  isEmailJsConfiguredForContact,
} from '../../utils/email'
import { validateContactFields } from '../../utils/formValidation'
import {
  getContactSendErrorMessage,
  sendContactEmail,
} from '../../utils/emailjsSubmit'

const INITIAL = {
  first_name: '',
  last_name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonPhase, setButtonPhase] = useState('idle')
  const recaptchaRef = useRef(null)
  const [captchaToken, setCaptchaToken] = useState(null)
  const { notification, showNotification } = useFormNotification()

  const formDisabled = isSubmitting

  const updateField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const validate = () => {
    const errors = validateContactFields(values)
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    if (!validate()) {
      showNotification('Please fill all required fields.', 'error')
      return
    }

    if (!getRecaptchaSiteKey()) {
      showNotification(
        'reCAPTCHA is not configured. Set VITE_RECAPTCHA_SITE_KEY in your environment file.',
        'error',
      )
      return
    }

    if (!captchaToken) {
      showNotification('Please verify that you are not a robot.', 'error')
      return
    }

    if (!isEmailJsConfiguredForContact()) {
      showNotification(
        'Email service is not configured. Set VITE_EMAILJS_* environment variables.',
        'error',
      )
      return
    }

    setIsSubmitting(true)
    setButtonPhase('sending')

    const templateParams = {
      name: `${values.first_name.trim()} ${values.last_name.trim()}`.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      title: 'New Contact Form Submission',
      time: new Date().toLocaleString(),
    }

    try {
      await sendContactEmail(templateParams)

      setButtonPhase('success')
      showNotification(
        'Message sent successfully! We will get back to you soon.',
        'success',
      )
      setValues(INITIAL)
      recaptchaRef.current?.reset()
      setCaptchaToken(null)

      setTimeout(() => {
        setButtonPhase('idle')
        setIsSubmitting(false)
      }, 3000)
    } catch (error) {
      showNotification(getContactSendErrorMessage(error), 'error')
      recaptchaRef.current?.reset()
      setCaptchaToken(null)
      setButtonPhase('idle')
      setIsSubmitting(false)
    }
  }

  const renderFieldError = (name) =>
    fieldErrors[name] ? (
      <span className="field-error" id={`${name}-error`} role="alert">
        {fieldErrors[name]}
      </span>
    ) : null

  const submitButtonContent = () => {
    if (buttonPhase === 'sending') {
      return (
        <>
          <span>Sending...</span>
          <FontAwesomeIcon icon={faSpinner} spin />
        </>
      )
    }
    if (buttonPhase === 'success') {
      return (
        <>
          <span>Message Sent!</span>
          <FontAwesomeIcon icon={faCheck} />
        </>
      )
    }
    return (
      <>
        <span>Send Message</span>
        <FontAwesomeIcon icon={faPaperPlane} />
      </>
    )
  }

  return (
    <>
      <FormNotificationToast notification={notification} />
      <form action="" id="contactForm" onSubmit={handleSubmit} noValidate>
        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="firstnameinput" id="namepra">
              First Name*
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              id="firstnameinput"
              value={values.first_name}
              disabled={formDisabled}
              aria-invalid={Boolean(fieldErrors.first_name)}
              aria-describedby={
                fieldErrors.first_name ? 'first_name-error' : undefined
              }
              onChange={(ev) => updateField('first_name', ev.target.value)}
            />
            {renderFieldError('first_name')}
          </div>

          <div className="formGroup">
            <label htmlFor="lastnameinput" id="lastnamepra">
              Last Name*
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              id="lastnameinput"
              value={values.last_name}
              disabled={formDisabled}
              aria-invalid={Boolean(fieldErrors.last_name)}
              aria-describedby={
                fieldErrors.last_name ? 'last_name-error' : undefined
              }
              onChange={(ev) => updateField('last_name', ev.target.value)}
            />
            {renderFieldError('last_name')}
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="emailinput" id="emailpra">
            Email Address*
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            id="emailinput"
            value={values.email}
            disabled={formDisabled}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            onChange={(ev) => updateField('email', ev.target.value)}
          />
          {renderFieldError('email')}
        </div>

        <div className="formGroup">
          <label htmlFor="commentinput" id="commentormessagepra">
            Message*
          </label>
          <textarea
            name="message"
            id="commentinput"
            placeholder="Tell us how we can help you..."
            rows={6}
            value={values.message}
            disabled={formDisabled}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? 'message-error' : undefined}
            onChange={(ev) => updateField('message', ev.target.value)}
          />
          {renderFieldError('message')}
        </div>

        <Suspense fallback={null}>
          <RecaptchaField
            ref={recaptchaRef}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </Suspense>

        <div className="submitdiv">
          <button
            type="submit"
            id="submitbutton"
            disabled={isSubmitting}
            style={
              buttonPhase === 'success'
                ? { backgroundColor: '#4CAF50' }
                : undefined
            }
          >
            {submitButtonContent()}
          </button>
        </div>
      </form>
    </>
  )
}
