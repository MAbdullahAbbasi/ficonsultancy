import { industryPath } from './navigation'

/** Hero carousel — order from pages/industries.html */
export const industriesListingHero = {
  heading: 'Industries',
  slogan:
    'FI Consultancy can provide an informed perspective on issues faced by the global business community.',
  slides: [
    '/images/banners/industries/Health Care.jpg',
    '/images/banners/industries/ICT.jpg',
    '/images/banners/industries/Building.jpg',
    '/images/banners/industries/Construction Page.jpg',
    '/images/banners/industries/Transportation Page.jpg',
  ],
}

/** Card order and copy from pages/industries.html (typos and spacing preserved) */
export const industriesListingCards = [
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: 'dollar-sign',
    description:
      'The financial services industry operates in a highly regulated and fast evolving environment Businesses face increasing challenges related to regulatory compliance accurate financial reporting risk management audit readiness and tax obligations......',
    to: industryPath('financial-services'),
  },
  {
    slug: 'consumer-retail',
    title: 'Consumer & Retail',
    icon: 'shopping-bag',
    description:
      'The consumer retail sector operates in a highly competitive and rapidly changing environment driven by evolving customer expectations regulatory requirements and market pressures......',
    to: industryPath('consumer-retail'),
  },
  {
    slug: 'ict',
    title: 'Information, Communication and Telecommunication',
    icon: 'satellite-dish',
    description:
      'The information communication and telecommunication sector operates in a fast paced......',
    to: industryPath('ict'),
  },
  {
    slug: 'healthcare',
    title: 'Infrastructure, Government and HealthCare',
    icon: 'hospital',
    description:
      'The infrastructure government and healthcare sector operates in a highly .....',
    to: industryPath('healthcare'),
  },
  {
    slug: 'building-construction',
    title: 'Building & Construction',
    icon: 'hard-hat',
    description:
      'The building construction and real estate sector operates in a capital intensive and highly regulated environment .......',
    to: industryPath('building-construction'),
  },
  {
    slug: 'transportation',
    title: 'Transportation',
    icon: 'truck',
    description:
      'The transportation sector operates in a dynamic and highly regulated environment Businesses face continuous challenges including compliance regulatory complexity ........',
    to: industryPath('transportation'),
  },
]

export const industriesAllIndustriesButton = {
  label: 'All Industries',
  href: '',
}
