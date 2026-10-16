import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PageFallback from './components/layout/PageFallback'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage'))
const IndustryDetailPage = lazy(
  () => import('./pages/industries/IndustryDetailPage'),
)

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
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
      </Suspense>
    </BrowserRouter>
  )
}
