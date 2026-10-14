import { servicePath } from './navigation'

/** Shared Lorem ipsum block used on most listing cards (from services.html) */
const LOREM_STANDARD =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae ea eius omnis alias cumque earum iusto porro inventore hic iure vero, aliquam reiciendis nesciunt sapiente quo illo dolorum architecto ullam, voluptatum perspiciatis rem deleniti dicta facilis. Sint veniam at aperiam ut illum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit quaerat.'

/** Advisory card Lorem — preserved typos from original HTML */
const LOREM_ADVISORY =
  'Lorem ipsum dolor sit amet consectetur adipisicingelit. Assumenda beatae ea eius omnis alias cumque earum iusto porro inventore hic iurevero, aliquam reiciendis nesciunt sapiente quo illo dolorum architecto ullam, voluptatumperspiciatis rem deleniti dicta facilis. Sint veniam at aperiam ut illum debitis? Loremipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit quaerat.'

/**
 * Services listing page metadata — order and content from pages/services.html.
 * Listing page only — detail content lives in serviceDetails.js (Phase 4D).
 */
export const servicesListingHero = {
  heading: 'Services',
  slogan:
    'FI. Consultancy combines multi-disciplinary approach with deep, practical industry knowledge to help clients meet challenges and respond to opportunities.',
  slides: [
    '/images/banners/services/Financial Reporting Page - Pic 1.jpg',
    '/images/banners/services/taxation - Page.jpg',
    '/images/banners/services/Audit Service Page.png',
    '/images/banners/services/Bookkeeping - page.jpg',
    '/images/banners/services/Advisory - Page.jpg',
    '/images/banners/services/Integrate Solution - Page.jpg',
  ],
}

export const servicesListingCards = [
  {
    slug: 'financialreporting',
    headingId: 'financialreportingheading',
    title: 'Financial Reporting',
    description: LOREM_STANDARD,
    to: servicePath('financialreporting'),
  },
  {
    slug: 'audit',
    headingId: 'auditheading',
    title: 'Audit',
    description: LOREM_STANDARD,
    to: servicePath('audit'),
  },
  {
    slug: 'tax',
    headingId: 'taxheading',
    title: 'Tax',
    description: LOREM_STANDARD,
    to: servicePath('tax'),
  },
  {
    slug: 'advisory',
    headingId: 'advisoryheading',
    title: 'Advisory',
    description: LOREM_ADVISORY,
    to: servicePath('advisory'),
  },
  {
    slug: 'bookkeeping',
    headingId: 'bookkeepingheading',
    title: 'Book-Keeping',
    description: LOREM_STANDARD,
    to: servicePath('bookkeeping'),
  },
  {
    slug: 'integrated-solutions',
    headingId: 'integratedsolutionheading',
    title: 'Integrated Solution',
    description: LOREM_STANDARD,
    to: servicePath('integrated-solutions'),
  },
]

export const expertGuidance = {
  heading: 'Expert Guidance for Financial Reporting Software',
  paragraph:
    'Simplify financial management with intelligent reporting tools.We help businesses leverage advanced reporting software to maintain precise financial records, optimize tax calculations, and ensure seamless compliance. With our specialized financial services, clients can streamline their accounting processes.',
  logos: [
    { id: 'expertimg1', image: '/images/quickbooks.webp' },
    { id: 'expertimg2', image: '/images/sage.webp' },
    { id: 'expertimg3', image: '/images/xero.jpg' },
    { id: 'expertimg4', image: '/images/zoho.webp' },
    { id: 'expertimg5', image: '/images/odoo.webp' },
    { id: 'expertimg6', image: '/images/oracle.jpg' },
    { id: 'expertimg7', image: '/images/office365.jpg' },
    { id: 'expertimg8', image: '/images/sap.webp' },
  ],
}

export const servicesHelp = {
  heading: 'We Can Help You',
  paragraph:
    'Our professionals in Audit, Taxation and Advisory can help you with your organisation\u2019s business requirement.',
  ctaLabel: 'Reach out to us',
  ctaTo: '/appointment',
}
