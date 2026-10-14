import { industrySideCarouselImages } from '../../data/industryDetails'

export default function IndustrySideCarousel() {
  return (
    <div className="ourAreasImageContainer">
      <div className="carousel-wrapper">
        <div className="carousel-slides">
          {industrySideCarouselImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
