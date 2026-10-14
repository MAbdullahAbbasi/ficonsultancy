import { Link, useParams } from 'react-router-dom'
import IndustryDetailHero from '../../components/industries/IndustryDetailHero'
import IndustryDetailContent from '../../components/industries/IndustryDetailContent'
import ServiceProposalCTA from '../../components/services/ServiceProposalCTA'
import { getIndustryDetail } from '../../data/industryDetails'
import '../../styles/pages/industry-detail.css'

export default function IndustryDetailPage() {
  const { slug } = useParams()
  const industry = getIndustryDetail(slug)

  if (!industry) {
    return (
      <div className="industry-detail-not-found">
        <h1>Industry not found</h1>
        <p>The industry you are looking for does not exist.</p>
        <Link to="/industries">Back to Industries</Link>
      </div>
    )
  }

  return (
    <div className="industry-detail-page">
      <IndustryDetailHero
        title={industry.heroTitle}
        subtitle={industry.heroSubtitle}
        heroImage={industry.heroImage}
      />
      <IndustryDetailContent
        contentHeading={industry.contentHeading}
        paragraphs={industry.paragraphs}
      />
      <ServiceProposalCTA />
    </div>
  )
}
