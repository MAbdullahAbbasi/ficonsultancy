import AboutHeroSection from '../components/about/AboutHeroSection'
import AboutMissionVision from '../components/about/AboutMissionVision'
import AboutWhoWeAre from '../components/about/AboutWhoWeAre'
import AboutOurValues from '../components/about/AboutOurValues'
import AboutWhyChooseUs from '../components/about/AboutWhyChooseUs'
import '../styles/pages/about.css'
import '../styles/pages/aboutIcons.css'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <div className="aboutContentSection">
        <AboutMissionVision />
        <AboutWhoWeAre />
        <AboutOurValues />
        <AboutWhyChooseUs />
      </div>
    </>
  )
}
