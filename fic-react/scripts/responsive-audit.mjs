/**
 * Local responsive overflow audit — run while dev/preview server is up.
 * Usage: node scripts/responsive-audit.mjs [baseUrl]
 */
import { chromium } from 'playwright'

const base = process.argv[2] || 'http://127.0.0.1:5173'
const routes = [
  '/',
  '/about',
  '/services',
  '/services/financialreporting',
  '/services/audit',
  '/services/tax',
  '/services/advisory',
  '/services/bookkeeping',
  '/services/integrated-solutions',
  '/industries',
  '/industries/financial-services',
  '/industries/consumer-retail',
  '/industries/ict',
  '/industries/healthcare',
  '/industries/building-construction',
  '/industries/transportation',
  '/contact',
  '/appointment',
  '/careers',
]
const widths = [1440, 1280, 1024, 768, 600, 480, 390]

const browser = await chromium.launch({ headless: true })
const overflows = []
const homeServicesCols = []

for (const width of widths) {
  for (const route of routes) {
    const page = await browser.newPage()
    await page.setViewportSize({ width, height: 900 })
    try {
      const res = await page.goto(`${base}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 20000,
      })
      const status = res?.status() ?? 0
      const metrics = await page.evaluate(() => {
        const cw = document.documentElement.clientWidth
        const sw = document.documentElement.scrollWidth
        const maxScroll = Math.max(0, sw - cw)
        const bodyOx = getComputedStyle(document.body).overflowX
        return { cw, sw, maxScroll, bodyOx, canScrollX: maxScroll > 1 }
      })

      if (metrics.canScrollX) {
        overflows.push({ width, route, status, ...metrics })
      }

      if (route === '/' && width >= 768) {
        const cols = await page.evaluate(() => {
          const grid = document.querySelector('.imagesdivs')
          if (!grid) return null
          return getComputedStyle(grid).gridTemplateColumns
        })
        homeServicesCols.push({ width, cols })
      }
    } catch (err) {
      overflows.push({
        width,
        route,
        error: String(err.message || err),
      })
    }
    await page.close()
  }
}

await browser.close()

console.log(JSON.stringify({ base, totalChecks: routes.length * widths.length, overflows, homeServicesCols }, null, 2))
