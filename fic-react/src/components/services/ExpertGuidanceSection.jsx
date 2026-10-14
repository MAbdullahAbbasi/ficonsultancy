import { expertGuidance } from '../../data/servicesData'

export default function ExpertGuidanceSection() {
  return (
    <div className="expertguidancediv">
      <div className="expertheadingdiv">
        <div>
          <h1 className="expertheading">{expertGuidance.heading}</h1>
        </div>
        <div className="expertpradiv">
          <p id="expertpra">{expertGuidance.paragraph}</p>
        </div>
      </div>

      <div className="expertimagediv">
        <div className="expertimageupperdiv">
          {expertGuidance.logos.map((logo) => (
            <div key={logo.id}>
              <a
                href=""
                className="expertimg"
                id={logo.id}
                onClick={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
