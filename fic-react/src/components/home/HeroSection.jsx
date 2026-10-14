import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { homeAssets } from '../../config/homeAssets'
import { heroContent } from '../../data/homeContent'
import { useHeroCarousel } from '../../hooks/useHeroCarousel'

export default function HeroSection() {
  const { currentIndex, goToSlide, getSlideClassName } = useHeroCarousel(
    homeAssets.heroSlides.length,
  )

  return (
    <div id="heroBannerDiv" className="box heroBannerDiv">
      <div id="heroBannerImageDiv" className="box">
        {homeAssets.heroSlides.map((src, index) => (
          <div
            key={src}
            className={getSlideClassName(index)}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className="carousel-dots">
          {homeAssets.heroSlides.map((_, index) => (
            <span
              key={index}
              className={`dot${index === currentIndex ? ' active' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  goToSlide(index)
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="heroDiv">
        <div className="hero">
          <h1 className="heroh1">
            {heroContent.title}{' '}
            <span className="gradient-text">{heroContent.titleAccent}</span>
          </h1>

          <p className="herop1">{heroContent.subtitle}</p>

          <div className="buttonsdiv">
            <Link to="/appointment" className="btn-primary" id="getstarted">
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/services" className="btn-secondary">
              <FontAwesomeIcon icon={faPlayCircle} />
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
