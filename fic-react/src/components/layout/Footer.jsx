import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { footerCompanyLinks, footerContact } from '../../data/navigation'
import { openEmailClient } from '../../utils/email'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerdiv">
        <div className="footerinnerdiv">
          <div className="footerlogoandheadingdiv">
            <img
              src="/images/common/logos/logofooter.png"
              alt="FI Consultancy Logo"
              className="f1logodiv"
            />
          </div>

          <div className="iconsdiv">
            <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
          </div>
        </div>

        <div className="footerinnerdiv">
          <h3 id="heading7">Company</h3>
          <ul className="listfooter">
            {footerCompanyLinks.map((link) => (
              <li className="listfooterinnerdiv" key={link.to}>
                <Link className="footerLinksPages" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <p className="footercopyright">
              Copyright © 2025 . F1 Consultancy . All rights reserved.
            </p>
          </div>
        </div>

        <div className="footerinnerdiv" id="footercontactdiv">
          <p
            id="footerpra2"
            className="contactpra"
            role="button"
            tabIndex={0}
            onClick={openEmailClient}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openEmailClient()
              }
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} /> {footerContact.email}
          </p>
          {footerContact.phones.map((phone) => (
            <p id="footerpra1" className="contactpra" key={phone}>
              <FontAwesomeIcon icon={faWhatsapp} /> {phone}
            </p>
          ))}
        </div>
      </div>
    </footer>
  )
}
