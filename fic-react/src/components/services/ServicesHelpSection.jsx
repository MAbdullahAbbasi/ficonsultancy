import { Link } from 'react-router-dom'
import { servicesHelp } from '../../data/servicesData'

export default function ServicesHelpSection() {
  return (
    <div className="helpdiv">
      <div className="helpinnerdiv">
        <div className="helpheadingdiv">
          <h1 id="helpheading">{servicesHelp.heading}</h1>

          <div className="helppradiv">
            <p id="helppra">{servicesHelp.paragraph}</p>
            <div className="reachoutdiv">
              <Link to={servicesHelp.ctaTo} id="reachoutbutton">
                {servicesHelp.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
