import { lazy, Suspense, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarCheck,
  faCheck,
  faCommentAlt,
  faClock,
  faEnvelope,
  faSpinner,
  faUser,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
const RecaptchaField = lazy(() => import('../forms/RecaptchaField'))
import FormNotificationToast from '../forms/FormNotificationToast'
import { useFormNotification } from '../../hooks/useFormNotification'
import {
  getRecaptchaSiteKey,
  isEmailJsConfiguredForAppointment,
} from '../../utils/email'
import { validateAppointmentFields } from '../../utils/formValidation'
import {
  getAppointmentSendErrorMessage,
  sendAppointmentEmail,
} from '../../utils/emailjsSubmit'

const INITIAL = {
  name: '',
  email: '',
  date: '',
  time: '',
  message: '',
}

export default function AppointmentForm() {
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
    const errors = validateAppointmentFields(values)
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

    if (!isEmailJsConfiguredForAppointment()) {
      showNotification(
        'Email service is not configured. Set VITE_EMAILJS_* environment variables.',
        'error',
      )
      return
    }

    setIsSubmitting(true)
    setButtonPhase('sending')

    const templateParams = {
      name: values.name.trim(),
      email: values.email.trim(),
      date: values.date.trim(),
      time: values.time.trim(),
      message: values.message.trim() || 'No message provided',
      time_sent: new Date().toLocaleString(),
    }

    try {
      await sendAppointmentEmail(templateParams)

      setButtonPhase('success')
      showNotification('Appointment booked successfully!', 'success')
      setValues(INITIAL)
      recaptchaRef.current?.reset()
      setCaptchaToken(null)

      setTimeout(() => {
        setButtonPhase('idle')
        setIsSubmitting(false)
      }, 3000)
    } catch (error) {
      showNotification(getAppointmentSendErrorMessage(error), 'error')
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
          <span>Booking...</span>
          <FontAwesomeIcon icon={faSpinner} spin />
        </>
      )
    }
    if (buttonPhase === 'success') {
      return (
        <>
          <span>Booked</span>
          <FontAwesomeIcon icon={faCheck} />
        </>
      )
    }
    return (
      <>
        <span>Book Appointment</span>
        <FontAwesomeIcon icon={faCalendarCheck} />
      </>
    )
  }

  return (
    <>
      <FormNotificationToast notification={notification} />
      <form action="" id="appointmentFormDiv" onSubmit={handleSubmit} noValidate>
        <div className="formfieldsDiv">
          <div className="inputWrapper">
            <label htmlFor="appointmentName" className="labelstyling">
              <FontAwesomeIcon icon={faUser} /> Full Name
            </label>
            <input
              type="text"
              id="appointmentName"
              name="name"
              className="inputstyling"
              placeholder="Enter your full name"
              value={values.name}
              disabled={formDisabled}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? 'name-error' : undefined}
              onChange={(ev) => updateField('name', ev.target.value)}
            />
            {renderFieldError('name')}
          </div>
        </div>

        <div className="formfieldsDiv">
          <div className="inputWrapper">
            <label htmlFor="appointmentEmail" className="labelstyling">
              <FontAwesomeIcon icon={faEnvelope} /> Email Address
            </label>
            <input
              type="email"
              id="appointmentEmail"
              name="email"
              className="inputstyling"
              placeholder="example@domain.com"
              value={values.email}
              disabled={formDisabled}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'email-error' : undefined}
              onChange={(ev) => updateField('email', ev.target.value)}
            />
            {renderFieldError('email')}
          </div>
        </div>

        <div className="formRow">
          <div className="formfieldsDiv">
            <div className="inputWrapper">
              <label htmlFor="appointmentDate" className="labelstyling">
                <FontAwesomeIcon icon={faCalendarAlt} /> Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                name="date"
                className="inputstyling"
                value={values.date}
                disabled={formDisabled}
                aria-invalid={Boolean(fieldErrors.date)}
                aria-describedby={fieldErrors.date ? 'date-error' : undefined}
                onChange={(ev) => updateField('date', ev.target.value)}
              />
              {renderFieldError('date')}
            </div>
          </div>

          <div className="formfieldsDiv">
            <div className="inputWrapper">
              <label htmlFor="appointmentTime" className="labelstyling">
                <FontAwesomeIcon icon={faClock} /> Time
              </label>
              <input
                type="time"
                id="appointmentTime"
                name="time"
                className="inputstyling"
                value={values.time}
                disabled={formDisabled}
                aria-invalid={Boolean(fieldErrors.time)}
                aria-describedby={fieldErrors.time ? 'time-error' : undefined}
                onChange={(ev) => updateField('time', ev.target.value)}
              />
              {renderFieldError('time')}
            </div>
          </div>
        </div>

        <div className="formfieldsDiv">
          <div className="inputWrapper">
            <label htmlFor="appointmentMessage" className="labelstyling">
              <FontAwesomeIcon icon={faCommentAlt} /> Message (Optional)
            </label>
            <textarea
              id="appointmentMessage"
              name="message"
              className="inputstyling textareaStyle"
              rows={5}
              placeholder="Tell us about your appointment needs..."
              value={values.message}
              disabled={formDisabled}
              onChange={(ev) => updateField('message', ev.target.value)}
            />
          </div>
        </div>

        <Suspense fallback={null}>
          <RecaptchaField
            ref={recaptchaRef}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </Suspense>

        <div className="formfieldsDiv submitWrapper">
          <button
            type="submit"
            className="appointmentbtn"
            id="appointbtn"
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
