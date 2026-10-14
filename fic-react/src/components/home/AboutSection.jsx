import { Link } from 'react-router-dom'
import { homeAssets } from '../../config/homeAssets'
import { aboutContent } from '../../data/homeContent'

export default function AboutSection() {
  return (
    <div className="aboutdiv">
      <div id="aboutheading">
        <h1 id="heading1">{aboutContent.heading}</h1>
      </div>

      <div className="informationdiv">
        <div
          className="imgdiv"
          style={{ backgroundImage: `url('${homeAssets.about}')` }}
        />

        <div className="pradiv">
          <p className="aboutpra">{aboutContent.paragraph}</p>
          <Link to="/about" id="readmore">
            {aboutContent.linkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
