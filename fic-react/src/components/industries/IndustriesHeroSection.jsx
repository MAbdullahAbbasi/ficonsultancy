import { industriesListingHero } from '../../data/industriesData'
import { useServicesCarousel } from '../../hooks/useServicesCarousel'

export default function IndustriesHeroSection() {
  const { getSlideClassName } = useServicesCarousel(
    industriesListingHero.slides.length,
  )

  return (
    <div className="servicesimageouterdiv">
      <div className="servicesimageinnerdiv" id="servicesCarouselContainer">
        {industriesListingHero.slides.map((src, index) => (
          <div
            key={src}
            className={getSlideClassName(index)}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}

        <div className="services-overlay" />
      </div>

      <div className="servicesoverlaydiv">
        <div className="servicesOverlayContent">
          <h1 className="servicesheading">{industriesListingHero.heading}</h1>
          <h1 id="servicesoverlaySlogan">{industriesListingHero.slogan}</h1>
        </div>
      </div>
    </div>
  )
}
