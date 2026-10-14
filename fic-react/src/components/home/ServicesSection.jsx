import { Link } from 'react-router-dom'
import { homeAssets } from '../../config/homeAssets'
import { servicesSection } from '../../data/homeContent'

export default function ServicesSection() {
  return (
    <div className="servicesdiv">
      <div>
        <h1 id="heading2">{servicesSection.heading}</h1>
      </div>

      <div className="imagesdivs">
        {servicesSection.cards.map((card) => (
          <div className="servicesCard" key={card.id}>
            <div
              className="imgservicesdiv"
              id={card.id}
              style={{
                backgroundImage: `url('${homeAssets.services[card.imageKey]}')`,
              }}
            >
              <div id={card.overlayId} className="overlayServices" />
            </div>

            <div id={card.paraId} className="servicesParaDiv">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.to} id={card.buttonId}>
                Explore &nbsp; &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
