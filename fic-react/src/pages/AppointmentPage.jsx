import AppointmentForm from '../components/appointment/AppointmentForm'
import '../styles/pages/appointment.css'
import '../styles/components/form-fields.css'

const APPOINTMENT_IMAGE = '/images/appointment/appointment.jpg'

export default function AppointmentPage() {
  return (
    <div className="outerdiv">
      <div className="appointmentouter">
        <h1 className="heading">Book Your Appointment</h1>
        <div className="inputsdiv">
          <AppointmentForm />
        </div>
      </div>

      <div className="imageCalender">
        <h1 className="slogan">Your next appointment is just a click away!</h1>
        <img
          src={APPOINTMENT_IMAGE}
          alt="Appointment"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
