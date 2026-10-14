import { forwardRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { getRecaptchaSiteKey } from '../../utils/email'

const RecaptchaField = forwardRef(function RecaptchaField(
  { onChange, onExpired },
  ref,
) {
  const siteKey = getRecaptchaSiteKey()

  if (!siteKey) {
    return (
      <p className="form-config-notice" role="alert">
        reCAPTCHA is not configured. Set <code>VITE_RECAPTCHA_SITE_KEY</code> in
        your environment file before submitting this form.
      </p>
    )
  }

  return (
    <ReCAPTCHA
      ref={ref}
      sitekey={siteKey}
      onChange={onChange}
      onExpired={onExpired}
    />
  )
})

export default RecaptchaField
