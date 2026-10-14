export default function ServiceDetailHero({ title, subtitle, heroImage }) {
  return (
    <div className="service-detail-hero">
      <div
        className="service-detail-hero__image"
        style={{ '--service-hero-image': `url(${heroImage})` }}
      />
      <div className="service-detail-hero__content">
        <div className="service-detail-hero__text">
          <div className="service-detail-hero__heading">{title}</div>
          <div className="service-detail-hero__para">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}
