import { Outlet } from 'react-router-dom'
import { MobileMenuProvider } from '../../context/MobileMenuContext'
import MenuBackdrop from './MenuBackdrop'
import Header from './Header'
import MobileNav from './MobileNav'
import Footer from './Footer'
import WhatsAppWidget from './WhatsAppWidget'
import ChatbotWidget from './ChatbotWidget'
import '../../styles/layout/navActive.css'
import '../../styles/layout/mobileNav.css'
import '../../styles/layout/footer.css'
import '../../styles/layout/chatbot.css'

export default function Layout() {
  return (
    <MobileMenuProvider>
      <MenuBackdrop />
      <Header />
      <MobileNav />
      <main>
        <Outlet />
      </main>
      <WhatsAppWidget />
      <ChatbotWidget />
      <Footer />
    </MobileMenuProvider>
  )
}
