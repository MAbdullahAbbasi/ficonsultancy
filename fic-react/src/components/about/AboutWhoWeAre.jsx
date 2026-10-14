import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { aboutAssets } from '../../config/aboutAssets'
import { whoWeAre } from '../../data/aboutContent'
import { aboutIcons } from '../../lib/aboutIcons'

export default function AboutWhoWeAre() {
  return (
    <div className="aboutWhoWeAre">
      <div className="whoWeAreContent">
        <h2>{whoWeAre.title}</h2>
        {whoWeAre.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <div className="whoWeAreFeatures">
          {whoWeAre.features.map((feature) => (
            <div className="featureItem" key={feature}>
              <FontAwesomeIcon icon={aboutIcons['check-circle']} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="whoWeAreImage">
        <img
          src={aboutAssets.whoWeAre}
          alt="Who We Are"
          className="whoWeAreImageContent"
        />
      </div>
    </div>
  )
}
