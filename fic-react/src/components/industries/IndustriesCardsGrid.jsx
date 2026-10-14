import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  industriesAllIndustriesButton,
  industriesListingCards,
} from '../../data/industriesData'
import { industriesListingIcons } from '../../lib/industriesIcons'

export default function IndustriesCardsGrid() {
  return (
    <div className="cardsSectionDiv">
      <div className="industriesCardsDiv">
        {industriesListingCards.map((card) => (
          <Link
            key={card.slug}
            to={card.to}
            className="industriesCard"
          >
            <h1 className="industriesCardHeading industriesContents">
              <FontAwesomeIcon icon={industriesListingIcons[card.icon]} />
              {card.title}
            </h1>
            <div className="industriesCardContent industriesContents">
              {card.description}
            </div>
            <span className="industrybutton">
              Explore &nbsp; &gt;
            </span>
          </Link>
        ))}
      </div>

      <div className="allIndustriesBtnDiv">
        <a
          id="allIndustriesBtn"
          href={industriesAllIndustriesButton.href}
          onClick={(event) => event.preventDefault()}
        >
          {industriesAllIndustriesButton.label}
        </a>
      </div>
    </div>
  )
}
