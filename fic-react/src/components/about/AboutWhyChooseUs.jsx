import { whyChooseUs } from '../../data/aboutContent'

export default function AboutWhyChooseUs() {
  return (
    <div className="aboutWhyChooseUs">
      <h2>{whyChooseUs.title}</h2>
      <div className="whyChooseGrid">
        {whyChooseUs.cards.map((card) => (
          <div className="whyChooseCard" key={card.number}>
            <div className="whyChooseNumber">{card.number}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
