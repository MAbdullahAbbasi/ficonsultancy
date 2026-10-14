import ContactForm from '../components/contact/ContactForm'
import '../styles/pages/contact.css'
import '../styles/components/form-fields.css'

export default function ContactPage() {
  return (
    <div className="contactstartdiv">
      <div className="contactouterdiv">
        <div className="headingdiv">
          <h1 id="contactheading">Connect with us - we are here to help.</h1>
          <p id="contactSubheading">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contactinnerdiv">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
