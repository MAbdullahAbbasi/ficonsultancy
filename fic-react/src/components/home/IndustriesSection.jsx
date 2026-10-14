import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { industriesSection } from '../../data/homeContent'
import { industryIcons } from '../../lib/homeIcons'

export default function IndustriesSection() {
  return (
    <div className="industriesdiv">
      <div>
        <h1 id="heading4">{industriesSection.heading}</h1>
        <p id="industrypra1">{industriesSection.intro}</p>
        <h4 id="industrypra2">{industriesSection.description}</h4>
      </div>

      <div className="industryimagediv">
        {industriesSection.cards.map((card) => (
          <Link to={card.to} className="hoverStyle" key={card.id}>
            <div className="aboutindustryimage" id={card.id}>
              <h1 className="heading5">
                <FontAwesomeIcon icon={industryIcons[card.icon]} className="fa" />
                {card.title}
              </h1>

              <p className="industrypra">{card.text}</p>

              <span className="industrybutton">Explore &nbsp; &gt;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
