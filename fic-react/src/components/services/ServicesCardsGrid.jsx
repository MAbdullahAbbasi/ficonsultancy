import { Link } from 'react-router-dom'
import { servicesListingCards } from '../../data/servicesData'

export default function ServicesCardsGrid() {
  return (
    <div id="allServicesCardsDiv">
      {servicesListingCards.map((card) => (
        <div className="servicesCard" key={card.slug}>
          <h1 className="allCardsHeadings" id={card.headingId}>
            {card.title}
          </h1>
          <p className="servicesCardParagraph">{card.description}</p>
          <Link to={card.to} className="servicesCardButton">
            Explore &gt;
          </Link>
        </div>
      ))}
    </div>
  )
}
