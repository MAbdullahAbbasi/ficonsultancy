import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import ValuesSection from '../components/home/ValuesSection'
import IndustriesSection from '../components/home/IndustriesSection'
import '../styles/pages/home.css'
import '../styles/pages/homeIcons.css'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <IndustriesSection />
    </>
  )
}
