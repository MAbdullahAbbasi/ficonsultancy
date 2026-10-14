import searchEntries from '../data/search.json'

/** Legacy static-site paths from data/search.json → React Router paths */
const LEGACY_URL_TO_ROUTE = {
  '/index.html': '/',
  '/pages/about.html': '/about',
  '/pages/contact.html': '/contact',
  '/pages/appointment.html': '/appointment',
  '/pages/careers.html': '/careers',
  '/pages/industries.html': '/industries',
  '/pages/industries/building&construction.html': '/industries/building-construction',
  '/pages/industries/consumerRetail.html': '/industries/consumer-retail',
  '/pages/industries/financialServices.html': '/industries/financial-services',
  '/pages/industries/healthcare.html': '/industries/healthcare',
  '/pages/industries/ICT.html': '/industries/ict',
  '/pages/industries/transportation.html': '/industries/transportation',
  '/pages/services.html': '/services',
  '/pages/services/advisory.html': '/services/advisory',
  '/pages/services/audit.html': '/services/audit',
  '/pages/services/bookkeeping.html': '/services/bookkeeping',
  '/pages/services/financialreporting.html': '/services/financialreporting',
  '/pages/services/integratedSolutions.html': '/services/integrated-solutions',
  '/pages/services/tax.html': '/services/tax',
}

export const SEARCH_DATASET_SIZE = searchEntries.length

/**
 * Map a search.json url to an in-app route, or null if unknown.
 */
export function resolveSearchRoute(legacyUrl) {
  if (typeof legacyUrl !== 'string') return null
  const key = legacyUrl.trim()
  return LEGACY_URL_TO_ROUTE[key] ?? null
}

/**
 * Filter search entries by query (title + content, case-insensitive substring).
 * Matches scripts/search.js behavior.
 */
export function filterSearchEntries(query) {
  const normalized = String(query ?? '').trim().toLowerCase()
  if (!normalized) return []

  return searchEntries
    .filter((item) => {
      const title = String(item?.title ?? '').toLowerCase()
      const content = String(item?.content ?? '').toLowerCase()
      return title.includes(normalized) || content.includes(normalized)
    })
    .map((item) => ({
      title: item.title,
      content: item.content,
      legacyUrl: item.url,
      route: resolveSearchRoute(item.url),
    }))
}
