import ServicesHeroSection from '../components/services/ServicesHeroSection'
import ServicesCardsGrid from '../components/services/ServicesCardsGrid'
import ExpertGuidanceSection from '../components/services/ExpertGuidanceSection'
import ServicesHelpSection from '../components/services/ServicesHelpSection'
import '../styles/pages/services.css'

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesCardsGrid />
      <ExpertGuidanceSection />
      <ServicesHelpSection />
    </>
  )
}
