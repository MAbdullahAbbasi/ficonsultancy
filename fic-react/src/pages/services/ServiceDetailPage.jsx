import { Link, useParams } from 'react-router-dom'
import ServiceDetailHero from '../../components/services/ServiceDetailHero'
import ServiceDetailContent from '../../components/services/ServiceDetailContent'
import ServiceProposalCTA from '../../components/services/ServiceProposalCTA'
import { getServiceDetail } from '../../data/serviceDetails'
import '../../styles/pages/service-detail.css'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceDetail(slug)

  if (!service) {
    return (
      <div className="service-detail-not-found">
        <h1>Service not found</h1>
        <p>The service you are looking for does not exist.</p>
        <Link to="/services">Back to Services</Link>
      </div>
    )
  }

  return (
    <>
      <ServiceDetailHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        heroImage={service.heroImage}
      />
      <ServiceDetailContent
        contentHeading={service.contentHeading}
        paragraphs={service.paragraphs}
        sideImage={service.sideImage}
        sideImageAlt={service.sideImageAlt}
      />
      <ServiceProposalCTA />
    </>
  )
}
