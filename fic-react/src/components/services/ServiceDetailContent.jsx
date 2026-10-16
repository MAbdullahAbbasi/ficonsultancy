export default function ServiceDetailContent({
  contentHeading,
  paragraphs,
  sideImage,
  sideImageAlt,
}) {
  return (
    <div className="service-detail-body">
      <div className="service-detail-main contentDiv">
        <div className="service-detail-main__heading">{contentHeading}</div>
        <div className="service-detail-main__para">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div id="OurAreasSectionDiv" className="contentDiv">
        <div className="ourAreasImageContainer">
          <img
            src={sideImage}
            alt={sideImageAlt}
            className="ourAreasLandscapeImage"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
