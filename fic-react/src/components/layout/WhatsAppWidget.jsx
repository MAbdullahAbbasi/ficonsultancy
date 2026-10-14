import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import {
  getWhatsAppUrl,
  whatsAppContacts,
} from '../../data/navigation'

export default function WhatsAppWidget() {
  const [panelOpen, setPanelOpen] = useState(false)
  const location = useLocation()
  const whatsappBtnRef = useRef(null)
  const appointmentBtnRef = useRef(null)

  const isAppointmentPage = location.pathname === '/appointment'

  const matchButtonWidths = () => {
    if (window.innerWidth > 768) {
      const whatsappButton = whatsappBtnRef.current
      const appointmentButton = appointmentBtnRef.current

      if (whatsappButton && appointmentButton) {
        appointmentButton.style.width = `${whatsappButton.offsetWidth}px`
      }
    } else if (appointmentBtnRef.current) {
      appointmentBtnRef.current.style.width = ''
    }
  }

  useEffect(() => {
    matchButtonWidths()
    window.addEventListener('resize', matchButtonWidths)
    return () => window.removeEventListener('resize', matchButtonWidths)
  }, [isAppointmentPage])

  const openContact = (phone) => {
    window.open(getWhatsAppUrl(phone), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="whatsappDiv">
      <div
        className="whatsAppContactPersonDiv"
        id="whatsAppContactPerson"
        style={{ display: panelOpen ? 'block' : 'none' }}
      >
        <div className="whatsAppCrossDiv">
          <span
            className="whatsAppCrossBtn"
            role="button"
            tabIndex={0}
            aria-label="Close WhatsApp contacts"
            onClick={() => setPanelOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setPanelOpen(false)
              }
            }}
          >
            &#10005;
          </span>
        </div>

        {whatsAppContacts.map((contact) => (
          <div
            key={contact.phone}
            className="nameandlogo"
            role="button"
            tabIndex={0}
            onClick={() => openContact(contact.phone)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openContact(contact.phone)
              }
            }}
          >
            <div className="userProfile">{contact.initials}</div>
            <div className="texts">
              <div className="fields">{contact.name}</div>
              <div className="fields" id="online">
                Online
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isAppointmentPage && (
        <Link
          to="/appointment"
          className="appointmentFloatingBtn"
          id="appointmentFloatingButton"
          ref={appointmentBtnRef}
        >
          <FontAwesomeIcon icon={faCalendarCheck} />
          <span>Make Appointment</span>
        </Link>
      )}

      <button
        type="button"
        className="b3"
        id="whatsappTriggerButton"
        ref={whatsappBtnRef}
        onClick={() => setPanelOpen(true)}
      >
        <FontAwesomeIcon icon={faWhatsapp} id="icon" />
        <span className="whatsapp-text">How can we help you?</span>
      </button>
    </div>
  )
}
