import IndustriesHeroSection from '../components/industries/IndustriesHeroSection'
import IndustriesCardsGrid from '../components/industries/IndustriesCardsGrid'
import IndustriesProposalCTA from '../components/industries/IndustriesProposalCTA'
import '../styles/pages/industries.css'
import '../styles/pages/industriesIcons.css'

export default function IndustriesPage() {
  return (
    <div className="industries-listing-page">
      <IndustriesHeroSection />
      <IndustriesCardsGrid />
      <IndustriesProposalCTA />
    </div>
  )
}
