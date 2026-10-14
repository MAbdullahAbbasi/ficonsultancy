import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'
import AppointmentPage from './pages/AppointmentPage'
import CareersPage from './pages/CareersPage'
import ServiceDetailPage from './pages/services/ServiceDetailPage'
import IndustryDetailPage from './pages/industries/IndustryDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:slug" element={<IndustryDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
