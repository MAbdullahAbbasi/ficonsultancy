import { servicesListingHero } from '../../data/servicesData'
import { useServicesCarousel } from '../../hooks/useServicesCarousel'

export default function ServicesHeroSection() {
  const { getSlideClassName } = useServicesCarousel(
    servicesListingHero.slides.length,
  )

  return (
    <div className="servicesimageouterdiv">
      <div className="servicesimageinnerdiv" id="servicesCarouselContainer">
        {servicesListingHero.slides.map((src, index) => (
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
          <h1 className="servicesheading">{servicesListingHero.heading}</h1>
          <h1 id="servicesoverlaySlogan">{servicesListingHero.slogan}</h1>
        </div>
      </div>
    </div>
  )
}
