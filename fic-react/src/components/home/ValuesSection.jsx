import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { valuesSection } from '../../data/homeContent'
import { valueIcons } from '../../lib/homeIcons'

export default function ValuesSection() {
  return (
    <div className="ourvalues">
      <div>
        <h1 id="heading3">{valuesSection.heading}</h1>
        <p id="valuepra">{valuesSection.intro}</p>
      </div>

      <div>
        <div className="valueimagediv">
          {valuesSection.cards.map((card) => (
            <div className="aboutvalueimage" id={card.id} key={card.id}>
              <div className="pradivs">
                <h3 className="valuepra3">
                  <FontAwesomeIcon icon={valueIcons[card.icon]} /> {card.title}
                </h3>
                <p className="valuepra2">{card.subtitle}</p>
                <p className="valuepra1">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
