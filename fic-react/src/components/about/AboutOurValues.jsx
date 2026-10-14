import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { coreValues } from '../../data/aboutContent'
import { aboutIcons } from '../../lib/aboutIcons'

export default function AboutOurValues() {
  return (
    <div className="aboutOurValues">
      <h2>{coreValues.title}</h2>
      <div className="valuesGrid">
        {coreValues.cards.map((card) => (
          <div className="valueCard" key={card.title}>
            <FontAwesomeIcon icon={aboutIcons[card.icon]} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
