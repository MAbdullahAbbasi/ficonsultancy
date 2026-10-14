import { aboutAssets } from '../../config/aboutAssets'
import { aboutHero } from '../../data/aboutContent'
import { useServicesCarousel } from '../../hooks/useServicesCarousel'

export default function AboutHeroSection() {
  const { getSlideClassName } = useServicesCarousel(aboutAssets.heroSlides.length)

  return (
    <div className="servicesimageouterdiv">
      <div className="servicesimageinnerdiv" id="aboutCarouselContainer">
        {aboutAssets.heroSlides.map((src, index) => (
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
          <h1 className="servicesheading">{aboutHero.heading}</h1>
          <p id="servicesoverlaySlogan">{aboutHero.slogan}</p>
        </div>
      </div>
    </div>
  )
}
