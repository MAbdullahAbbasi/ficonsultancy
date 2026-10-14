/**
 * Central navigation data — sourced from index.html and shared across static pages.
 * Desktop and mobile industry menus use different label text and ordering (preserved from original).
 */

export const mainNavItems = [
  { to: '/', label: 'Home', end: true, navId: 'home' },
  { to: '/about', label: 'About', navId: 'about' },
  { to: '/contact', label: 'Contact', navId: 'contact' },
  { to: '/careers', label: 'Careers', navId: 'careers' },
]

/** @type {{ slug: string, label: string, mobileLabel: string, mobileIcon: string }[]} */
export const serviceNavItems = [
  {
    slug: 'financialreporting',
    label: 'Financial Reporting',
    mobileLabel: 'Financial Reporting',
    mobileIcon: 'chart-line',
  },
  {
    slug: 'tax',
    label: 'Tax',
    mobileLabel: 'Tax',
    mobileIcon: 'file-invoice-dollar',
  },
  {
    slug: 'audit',
    label: 'Audit',
    mobileLabel: 'Audit',
    mobileIcon: 'clipboard-check',
  },
  {
    slug: 'bookkeeping',
    label: 'Book Keeping',
    mobileLabel: 'Book Keeping',
    mobileIcon: 'book',
  },
  {
    slug: 'advisory',
    label: 'Advisory',
    mobileLabel: 'Advisory',
    mobileIcon: 'handshake',
  },
  {
    slug: 'integrated-solutions',
    label: 'Integrated Solutions',
    mobileLabel: 'Integrated Solutions',
    mobileIcon: 'puzzle-piece',
  },
]

/** Desktop industries dropdown — order and labels from index.html #industriesDropDownDiv */
export const industryNavItemsDesktop = [
  { slug: 'financial-services', label: 'Financial Services' },
  { slug: 'consumer-retail', label: 'Consumer & Retail' },
  {
    slug: 'ict',
    label: 'Information, Communication and Telecommunication',
  },
  {
    slug: 'healthcare',
    label: 'Infrastructure, Government and HealthCare',
  },
  { slug: 'building-construction', label: 'Building & Construction' },
  { slug: 'transportation', label: 'Transportation' },
]

/** Mobile industries submenu — order and labels from index.html #industriesRespDropDownDiv */
export const industryNavItemsMobile = [
  { slug: 'healthcare', label: 'Healthcare', mobileIcon: 'heartbeat' },
  { slug: 'ict', label: 'ICT', mobileIcon: 'laptop-code' },
  {
    slug: 'building-construction',
    label: 'Building & Construction',
    mobileIcon: 'hard-hat',
  },
  {
    slug: 'financial-services',
    label: 'Financial Services',
    mobileIcon: 'university',
  },
  {
    slug: 'consumer-retail',
    label: 'Consumer & Retail',
    mobileIcon: 'shopping-cart',
  },
  { slug: 'transportation', label: 'Transportation', mobileIcon: 'truck' },
]

export const footerCompanyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/appointment', label: 'Meet Our Team' },
]

export const footerContact = {
  email: 'info@ficonsultancy.net',
  phones: ['+92-314-1503257', '+92-322-0846330'],
}

export const whatsAppContacts = [
  {
    initials: 'FI',
    name: 'Faseh Iqbal',
    phone: '923141503257',
  },
  {
    initials: 'IK',
    name: 'Immad Khan',
    phone: '923220846330',
  },
]

export const WHATSAPP_DEFAULT_MESSAGE = "Hello, I'd like to connect with you!"

export function getWhatsAppUrl(phone) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
}

export function servicePath(slug) {
  return `/services/${slug}`
}

export function industryPath(slug) {
  return `/industries/${slug}`
}
