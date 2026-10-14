export default function IndustryDetailHero({ title, subtitle, heroImage }) {
  return (
    <div className="industry-detail-hero">
      <div
        className="industry-detail-hero__image"
        style={{ '--industry-hero-image': `url(${heroImage})` }}
      />
      <div className="industry-detail-hero__content">
        <div className="industry-detail-hero__text">
          <div className="industry-detail-hero__heading">{title}</div>
          <div className="industry-detail-hero__para">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}
