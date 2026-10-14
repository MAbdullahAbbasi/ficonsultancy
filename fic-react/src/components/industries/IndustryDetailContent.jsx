import IndustrySideCarousel from './IndustrySideCarousel'

export default function IndustryDetailContent({ contentHeading, paragraphs }) {
  return (
    <div className="industry-detail-body">
      <div className="industry-detail-main contentDiv">
        <div className="industry-detail-main__heading">{contentHeading}</div>
        <div className="industry-detail-main__para">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div id="OurAreasSectionDiv" className="contentDiv">
        <IndustrySideCarousel />
      </div>
    </div>
  )
}
