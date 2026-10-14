# FI Consultancy — React Migration Status

**Created:** October 6, 2026  
**Last updated:** October 10, 2026  
**Phase:** Phase 7B complete — Vercel deployment preparation (local only; not deployed)  
**Status:** `vercel.json` SPA rewrite added; Vercel project-root and env guidance documented; local build/preview verified (7B)

---

## Project Locations

| Item | Path |
|------|------|
| **Existing static website (source of truth)** | `D:\fic\ficonsultancy` |
| **React project** | `D:\fic\ficonsultancy\fic-react` |

> **Note:** At inspection time, no React project existed at `D:\fic\ficonsultancy\fic-react` or `D:\fic\fic-react`. A fresh Vite + React scaffold was created at `D:\fic\ficonsultancy\fic-react`. The original static website was **not modified**.

---

## React / Vite Versions

| Package | Version |
|---------|---------|
| **React** | ^19.2.8 (installed: 19.2.8) |
| **React DOM** | ^19.2.8 |
| **Vite** | ^8.3.0 (installed: 8.3.3) |
| **@vitejs/plugin-react** | ^6.1.1 |

---

## Installed Dependencies (React project)

### Production (`dependencies`)

| Package | Version |
|---------|---------|
| react | ^19.2.8 |
| react-dom | ^19.2.8 |
| react-router-dom | ^7.18.4 |
| @emailjs/browser | ^5.0.2 |
| react-google-recaptcha | ^3.1.0 |
| @fortawesome/react-fontawesome | ^3.5.0 |
| @fortawesome/fontawesome-svg-core | ^7.3.1 |
| @fortawesome/free-solid-svg-icons | ^7.3.1 |
| @fortawesome/free-brands-svg-icons | ^7.3.1 |

### Development (`devDependencies`)

| Package | Version |
|---------|---------|
| @types/react | ^19.2.18 |
| @types/react-dom | ^19.2.7 |
| @vitejs/plugin-react | ^6.1.1 |
| oxlint | ^1.81.0 |
| vite | ^8.3.0 |

### npm Scripts

| Script | Command |
|--------|---------|
| `dev` | `vite` |
| `build` | `vite build` |
| `preview` | `vite preview` |
| `lint` | `oxlint` |

---

## Build Verification

| Check | Result | Notes |
|-------|--------|-------|
| `npm install` | ✅ Pass | 43 packages, 0 vulnerabilities |
| `npm run dev` | ✅ Pass | Vite ready (port may vary if 5173 in use) |
| `npm run build` | ✅ Pass | Output in `dist/` (~131 KB CSS, ~416 KB JS, ~3.1s) |

---

## Existing Static Website — Pages Discovered (19 HTML files)

| # | File | Purpose |
|---|------|---------|
| 1 | `index.html` | Home / landing |
| 2 | `pages/about.html` | About |
| 3 | `pages/services.html` | Services listing |
| 4 | `pages/industries.html` | Industries listing |
| 5 | `pages/contact.html` | Contact form |
| 6 | `pages/appointment.html` | Appointment booking |
| 7 | `pages/careers.html` | Careers |
| 8 | `pages/services/financialreporting.html` | Service detail |
| 9 | `pages/services/tax.html` | Service detail |
| 10 | `pages/services/audit.html` | Service detail |
| 11 | `pages/services/bookkeeping.html` | Service detail |
| 12 | `pages/services/advisory.html` | Service detail |
| 13 | `pages/services/integratedSolutions.html` | Service detail |
| 14 | `pages/industries/financialServices.html` | Industry detail |
| 15 | `pages/industries/consumerRetail.html` | Industry detail |
| 16 | `pages/industries/ICT.html` | Industry detail |
| 17 | `pages/industries/healthcare.html` | Industry detail |
| 18 | `pages/industries/building&construction.html` | Industry detail |
| 19 | `pages/industries/transportation.html` | Industry detail |

---

## Existing Static Website — CSS Files (22)

| File | Used By |
|------|---------|
| `styles/main.css` | All pages (imports `chatbot.css`) |
| `styles/about.css` | about.html |
| `styles/appointment.css` | appointment.html |
| `styles/careers.css` | careers.html |
| `styles/conatct.css` | contact.html (typo in filename) |
| `styles/industries.css` | industries.html |
| `styles/services.css` | services.html |
| `styles/chatbot.css` | via main.css import |
| `styles/search.css` | **Orphan — not linked in any HTML** |
| `styles/services/advisory.css` | advisory.html |
| `styles/services/audit.css` | audit.html |
| `styles/services/bookkeeping.css` | bookkeeping.html |
| `styles/services/financialreporting.css` | financialreporting.html |
| `styles/services/integratedSolutions.css` | integratedSolutions.html |
| `styles/services/tax.css` | tax.html |
| `styles/services/services-common.css` | **Orphan — not linked in any HTML** |
| `styles/industries/building&construction.css` | building&construction.html |
| `styles/industries/FMCG.css` | financialServices.html |
| `styles/industries/healthcare.css` | healthcare.html |
| `styles/industries/ICT.css` | ICT.html |
| `styles/industries/nonProfit.css` | consumerRetail.html |
| `styles/industries/onlineMarketplace.css` | transportation.html |

---

## Existing Static Website — JavaScript Files (7)

| File | Purpose | Pages |
|------|---------|-------|
| `scripts/main.js` | Carousels, nav, WhatsApp, email, appointment nav | All pages |
| `scripts/search.js` | JSON search dropdown | All pages |
| `scripts/darktheme.js` | Dark/light theme + localStorage | All pages |
| `scripts/chatbot.js` | FAQ chatbot widget | All pages |
| `scripts/contact.js` | Contact form (EmailJS disabled/simulated) | contact.html |
| `scripts/appointment.js` | Appointment form (EmailJS active) | appointment.html |
| `scripts/industries.js` | Industry card navigation | index.html, industries.html |

---

## Existing Static Website — Data Files

| File | Purpose |
|------|---------|
| `data/search.json` | Search index (19 entries: title, url, content) |

---

## Existing Static Website — Asset / Image Structure

**Root:** `D:\fic\ficonsultancy\images\` — **94 image files**

```
images/
├── about/
├── appointment/
├── banners/          (about, home, industries, services)
├── careers/
├── common/
│   ├── icons/        (6 SVG industry icons)
│   ├── industries/
│   ├── logos/        (logo.png, logofooter.png, logoLight.png, logoDark.png)
│   └── servicesAndIndustriesSide/
├── consultancyBannerImages/
├── contact/
├── home/
├── industries/       (building&construction, consumerRetail, financialServices, healthcare, ICT, transportation)
├── services/         (advisory, audit, bookkeeping, financialreporting, integratedSolutions, tax)
└── (root-level images: software logos, value images, banners, etc.)
```

Additional static assets outside `images/`:
- `images/logoFI.jpg` — favicon used across all pages
- `pages.zip` — archive present at repo root (not referenced in code)

---

## Current React Project Files

```
fic-react/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css
│   ├── App.jsx          (default Vite template — not migrated)
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html           (Vite entry — title: "fic-react")
├── package.json
├── README.md
├── vite.config.js       (default — no custom aliases or base path yet)
└── MIGRATION_STATUS.md  (this file)
```

**Added in Phase 2:**
- `public/images/` — full copy of original `images/` (94 files)
- `src/data/search.json` — copied from original
- `src/styles/global.css` — global design foundation from `styles/main.css`
- `src/lib/fontawesome.js` — Font Awesome library setup
- `src/config/assets.js` — `/images/...` path helpers

**Not yet present in React project:**
- No React Router routes configured
- No page components
- No Layout (Header/Footer) components
- No page-specific CSS files ported
- No chatbot.css ported (Phase 3+)

---

## Discrepancies: Static Site vs React Project

| Area | Static Site | React Project (current) |
|------|-------------|---------------------------|
| Pages | 19 standalone HTML files | 1 Vite `index.html` + default `App.jsx` |
| Routing | Multi-page (full reload) | None (single page) |
| CSS | ~141KB `main.css` + 21 page CSS files | Default Vite `index.css` + `App.css` (~4KB built) |
| JS | 7 vanilla JS files | None migrated |
| Images | 94 files in `../images/` | 3 Vite template assets only |
| Favicon | `images/logoFI.jpg` | `public/favicon.svg` |
| Title | "FI Consultancy" | "fic-react" |
| `<base href="/">` | All pages except index.html | Not configured |
| Font Awesome | CDN 6.5.0 on all pages | Not installed |
| Google Fonts | Poppins, Inter via main.css | Not imported |
| EmailJS | Appointment form | Not installed |
| reCAPTCHA | Contact + appointment forms | Not installed |
| Chatbot | Site-wide widget | Not implemented |

---

## Phase 2 — Global Foundation (completed)

### Dependencies installed
`react-router-dom`, `@emailjs/browser`, `react-google-recaptcha`, `@fortawesome/react-fontawesome`, `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`

### Assets copied
| Source | Destination | Count |
|--------|-------------|-------|
| `../images/` | `public/images/` | **94 files** (structure preserved) |
| `../data/search.json` | `src/data/search.json` | 19 search entries |

### Global CSS migrated (`src/styles/global.css`)
Ported from `styles/main.css` — **global rules only**, not page-specific sections:

- Google Fonts `@import` (Poppins 400–800, Inter 300–600) — same URL as original
- CSS custom properties (`:root` + `body.dark` overrides)
- Reset (`*`, `html`, `body`)
- Navbar (desktop + mobile drawer + dropdowns)
- Search bar + search results dropdown
- Theme toggle button
- Appointment nav buttons
- Common buttons (`.btn-primary`, `.btn-secondary`, `.buttonsdiv`)
- WhatsApp widget + floating appointment button
- Footer
- Responsive breakpoints for nav/footer/whatsapp (1024px, 768px, 600px, 480px)

**Excluded from global.css** (deferred to page/component CSS in later phases):
- Home hero carousel, about/services/values/industries home sections
- Page-specific hero carousels (`.services-carousel-slide`, etc.)
- `chatbot.css` (will port with Chatbot component)
- Page CSS files (`about.css`, `services.css`, etc.)

### Font strategy
Same as original: `@import url('https://fonts.googleapis.com/css2?family=Poppins:...&family=Inter:...')` at top of `global.css`. Body default remains `Arial, Helvetica, sans-serif`; components use `'Poppins', sans-serif` where the original does.

### Font Awesome strategy
- CDN link **not** used in React project
- `@fortawesome/fontawesome-svg-core` + solid/brands icon packs installed
- `src/lib/fontawesome.js` registers common icons; imported in `main.jsx`
- Full icon migration deferred to Phase 3+ (component-by-component `<FontAwesomeIcon>`)

### Asset path strategy
- All images served from `public/images/` → reference as `/images/...`
- Helper module: `src/config/assets.js` (logo paths pre-defined)
- No `<base href>` — React Router will handle routes
- No fragile `../../images/` paths in React code

### Phase 2 build result
```
✓ built in 2.18s
dist/assets/index-*.css   68.20 kB (global.css + Font Awesome core styles)
dist/assets/index-*.js   317.22 kB
```

### Original static site
**Not modified** — confirmed unchanged at `D:\fic\ficonsultancy`

---

## Known Static-Site Issues to Address During Migration

These were identified in the pre-migration audit. Fix during migration, not before:

1. **`handleAppointmentBtn()`** always navigates to `pages/appointment.html` — breaks from nested pages
2. **`industries.js`** uses `../pages/industries/...` — incorrect from root index
3. **`search.js` path** wrong on service/industry detail pages (`scripts/search.js` vs `../../scripts/search.js`)
4. **`fetch('data/search.json')`** relative path fails on all pages except index
5. **`handleSearch()` name collision** between main.js and search.js
6. **Contact form EmailJS disabled** — currently simulated with 2s timeout
7. **`#alertBox` on appointment page** never shown (toasts used instead)
8. **`integratedsolutions.html` vs `integratedSolutions.html`** case mismatch in services.html link
9. **Contact form:** `last_name` required in HTML but not validated in JS
10. **Footer social icons** have no href links
11. **`pages/industries.html` "All Industries" button** has empty `href=""`
12. **Services listing cards** contain Lorem ipsum placeholder text (preserve as-is unless client provides copy)
13. **Brand inconsistency:** "FI Consultancy" vs "F1 Consultancy" in footer copyright
14. **`index.html` lacks `<base href="/">`** while all other pages have it

---

## Problems That Must Be Handled Before Page Migration

### 1. Asset strategy
Decide how React accesses parent-site images (~94 files, many multi-MB):
- **Option A:** Copy `images/` into `fic-react/public/images/` (self-contained build)
- **Option B:** Symlink or Vite alias to `../images/` during development
- **Recommended:** Copy to `public/images/` for production independence; original stays untouched

### 2. CSS port strategy
`main.css` is ~141KB with CSS variables, dark mode, and `@import url(...)` for Google Fonts. Options:
- Import as global CSS in `main.jsx` initially (fastest parity)
- Gradually refactor to CSS modules per component (later phase)

`main.css` contains `@import url('chatbot.css')` with a relative path — path must be corrected when copied.

### 3. Routing & base path
Static site uses mix of:
- Relative paths (`pages/about.html`)
- Absolute paths (`/pages/services.html`)
- `<base href="/">` on all pages except index

React Router `basename` must match deployment target (likely `/` at domain root).

### 4. External CDN scripts
These cannot be dropped in as `<script>` tags without React wrappers:
- Font Awesome 6.5.0
- Google reCAPTCHA
- EmailJS Browser SDK

### 5. Duplicated layout
Nav + footer HTML is duplicated across all 19 static pages (~400 lines each). Must become shared `<Layout>` component before migrating individual pages.

### 6. Special filename characters
- `building&construction.html` and `building&construction.css` — URL-encode `&` in React routes
- `conatct.css` typo — preserve or alias during migration

---

## Phase 3 — Application Shell (Complete)

### Components created

| Component | Path |
|-----------|------|
| Layout | `src/components/layout/Layout.jsx` |
| Header | `src/components/layout/Header.jsx` |
| MobileNav | `src/components/layout/MobileNav.jsx` |
| Footer | `src/components/layout/Footer.jsx` |
| WhatsAppWidget | `src/components/layout/WhatsAppWidget.jsx` |
| MenuBackdrop | `src/components/layout/MenuBackdrop.jsx` |
| SearchBar (UI placeholder) | `src/components/layout/SearchBar.jsx` |

### Supporting files

| File | Purpose |
|------|---------|
| `src/data/navigation.js` | Shared nav data (services, industries, footer links, WhatsApp contacts) |
| `src/context/MobileMenuContext.jsx` | Mobile menu open/close state |
| `src/hooks/useBodyScrollLock.js` | Body scroll lock when menu open |
| `src/lib/mobileNavIcons.js` | Font Awesome icon map for mobile submenu |
| `src/utils/email.js` | Footer email click handler (mirrors `main.js`) |
| `src/styles/layout/navActive.css` | NavLink active / parent-active styles |
| `src/styles/layout/mobileNav.css` | SVG icon compatibility for mobile nav |
| `src/styles/layout/footer.css` | SVG icon compatibility for footer |

### Page shells created

| Route | Component |
|-------|-----------|
| `/` | `src/pages/HomePage.jsx` |
| `/about` | `src/pages/AboutPage.jsx` |
| `/services` | `src/pages/ServicesPage.jsx` |
| `/services/:slug` | `src/pages/services/ServiceDetailPage.jsx` |
| `/industries` | `src/pages/IndustriesPage.jsx` |
| `/industries/:slug` | `src/pages/industries/IndustryDetailPage.jsx` |
| `/contact` | `src/pages/ContactPage.jsx` |
| `/appointment` | `src/pages/AppointmentPage.jsx` |
| `/careers` | `src/pages/CareersPage.jsx` |

### Routes

All routes render inside `<Layout>` via React Router v7 nested routes in `src/App.jsx`.

### Navigation items (desktop order)

Home → About → Services (dropdown) → Industries (dropdown) → Contact → Careers

Additional header elements: search bar, theme toggle (UI only), Make Appointment (hidden via CSS on desktop).

### Service slugs (canonical React routes)

| Display name | Original file | React slug |
|--------------|---------------|------------|
| Financial Reporting | `financialreporting.html` | `financialreporting` |
| Tax | `tax.html` | `tax` |
| Audit | `audit.html` | `audit` |
| Book Keeping | `bookkeeping.html` | `bookkeeping` |
| Advisory | `advisory.html` | `advisory` |
| Integrated Solutions | `integratedSolutions.html` | `integrated-solutions` |

> **Note:** Canonical slug `integrated-solutions` resolves the static-site casing bug (`integratedsolutions.html` vs `integratedSolutions.html`).

### Industry slugs (canonical React routes)

| Desktop display name | Mobile label | Original file | React slug |
|----------------------|--------------|---------------|------------|
| Financial Services | Financial Services | `financialServices.html` | `financial-services` |
| Consumer & Retail | Consumer & Retail | `consumerRetail.html` | `consumer-retail` |
| Information, Communication and Telecommunication | ICT | `ICT.html` | `ict` |
| Infrastructure, Government and HealthCare | Healthcare | `healthcare.html` | `healthcare` |
| Building & Construction | Building & Construction | `building&construction.html` | `building-construction` |
| Transportation | Transportation | `transportation.html` | `transportation` |

> Desktop and mobile industry menus preserve **different label text and ordering** from the original site.

### Mobile navigation behavior

- Open/close via hamburger/cross icons (`#openMenu` / `#closeMenu`)
- Backdrop click closes menu
- Body scroll lock with scroll position restore
- Swipe left (≥50px) closes menu
- Services / Industries submenu toggle with `.active` / `.rotated` classes
- Menu closes on internal route navigation (except dropdown toggles)
- Make Appointment button in mobile drawer

### Footer status

- Logo, Company column links, copyright, email, phone numbers preserved
- Social icons (Instagram, Facebook, LinkedIn) preserved **without links** (matches original)
- No physical address in original footer — not added
- Copyright text preserved as **"F1 Consultancy"** (original spelling)

### WhatsApp widget status

- Floating button: "How can we help you?" with WhatsApp icon
- Contact panel: Faseh Iqbal (923141503257), Immad Khan (923220846330)
- Message: `Hello, I'd like to connect with you!`
- Floating Make Appointment button hidden on `/appointment` (matches `appointment.html`)
- Button width matching on resize preserved

### Search UI

- Desktop and mobile search inputs rendered (readonly placeholder)
- Search engine logic **not implemented** (deferred)

### Active navigation

- `NavLink` with `.active` class on top-level routes
- Services / Industries parent items active when on `/services/*` or `/industries/*`

### Responsive verification

Layout tested in browser at default desktop width; global CSS breakpoints (768px, 600px, 480px, etc.) reused unchanged from Phase 2. Additional SVG compatibility CSS added for Font Awesome React icons in mobile nav and footer.

### Build result (Phase 3)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~3.8s) |
| `npm run dev` | ✅ Pass (http://localhost:5175/) |
| Route navigation | ✅ All routes load without full page reload |
| Console errors | ✅ None observed during route testing |

### Deviations / notes

1. **Logo** wrapped in `<Link to="/">` for SPA navigation (original had no link wrapper)
2. **Make Appointment** uses React Router `<Link>` instead of `<button onclick="handleAppointmentBtn()">` — fixes broken nested-page navigation from original
3. **Theme toggle** button rendered but dark-mode logic not wired (deferred per Phase 3 scope)
4. **Font Awesome** renders as SVG; supplemental CSS added where original targeted `<i>` elements
5. **Footer** has no separate Services/Industries link columns in original HTML — only Company column migrated
6. **Chatbot** not included in layout (deferred)

---

## Phase 4A — Home Page (Complete)

### Sections migrated (in order)

1. **Hero** — 4-slide background carousel, gradient overlay, heading, subtitle, Get Started + Our Services CTAs, dot navigation
2. **About Us** — heading, image, paragraph, Explore link
3. **Our Services** — 6 service cards (Financial Reporting, Book Keeping, Advisory, Tax, Audit, Integrated Solutions)
4. **Our Values** — intro + 6 value cards (Integrity, Excellence, Move Together, Focused on what matters, Well-being, Unlock New Horizons)
5. **Industries** — intro + 6 industry cards (Financial Services, Consumer Retail, ICT, Healthcare, Building & Construction, Transportation)

> Nav, footer, and WhatsApp widget remain in shared Layout (Phase 3). Chatbot not migrated (deferred).

### Components created

| Component | Path |
|-----------|------|
| HomePage | `src/pages/HomePage.jsx` |
| HeroSection | `src/components/home/HeroSection.jsx` |
| AboutSection | `src/components/home/AboutSection.jsx` |
| ServicesSection | `src/components/home/ServicesSection.jsx` |
| ValuesSection | `src/components/home/ValuesSection.jsx` |
| IndustriesSection | `src/components/home/IndustriesSection.jsx` |

### Supporting files

| File | Purpose |
|------|---------|
| `src/config/homeAssets.js` | Home page image path map |
| `src/data/homeContent.js` | Home page text, cards, and internal link targets |
| `src/hooks/useHeroCarousel.js` | React hero carousel (5s interval, dot nav, cleanup on unmount) |
| `src/lib/homeIcons.js` | Font Awesome icons for values + industries |
| `src/styles/pages/home.css` | Home-specific styles ported from `styles/main.css` |
| `src/styles/pages/homeIcons.css` | SVG icon + overlay compatibility |

### Home assets used

| Usage | Public path |
|-------|-------------|
| Hero slide 1 | `/images/banners/home/Landing page- Pic-1.jpg` |
| Hero slide 2 | `/images/banners/home/Landing Page -Pic 2.jpg` |
| Hero slide 3 | `/images/banners/home/Landing Page - Pic-3.jpg` |
| Hero slide 4 | `/images/banners/home/Landing Page-1.jpg` |
| About image | `/images/home/AboutUsLandingPage.jpg` |
| Service: Financial Reporting | `/images/financialReporting.jpg` |
| Service: Book Keeping | `/images/pexels-cottonbro-4107100.jpg` |
| Service: Advisory | `/images/pexels-shkrabaanthony-5816299.jpg` |
| Service: Tax | `/images/pexels-n-voitkevich-6863336.jpg` |
| Service: Audit | `/images/pexels-leeloothefirst-8970297.jpg` |
| Service: Integrated Solutions | `/images/pexels-kindelmedia-7688333.jpg` |

### Carousel behavior

- 4 slides, 5-second auto-advance (verified from `scripts/main.js`)
- Slide transition: `translateX` + opacity (1s ease-in-out)
- Dot navigation resets interval on manual selection
- First slide immediate-visible on mount; transitions enabled after 200ms
- Interval cleared on component unmount

### Internal links migrated

| Original | React route |
|----------|-------------|
| `pages/about.html` | `/about` |
| `pages/services.html` | `/services` |
| `pages/appointment.html` (Get Started) | `/appointment` |
| `/pages/services/financialreporting.html` | `/services/financialreporting` |
| `/pages/services/bookkeeping.html` | `/services/bookkeeping` |
| `/pages/services/advisory.html` | `/services/advisory` |
| `/pages/services/tax.html` | `/services/tax` |
| `/pages/services/audit.html` | `/services/audit` |
| `/pages/services/integratedSolutions.html` | `/services/integrated-solutions` |
| Industry card clicks (`industries.js`) | `/industries/:slug` (canonical slugs) |

### Build result (Phase 4A)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~5.3s, ~105 KB CSS) |
| `npm run dev` | ✅ Pass (http://localhost:5173/) |
| Console errors | ✅ None observed |
| Visual check | ✅ Hero, all 5 content sections, layout shell render correctly |

### Deviations / notes

1. **WhatsApp in hero** — original nests `whatsappDiv` inside `heroDiv`; React uses fixed-position widget from Layout (same visual result)
2. **Get Started / Our Services** — `<Link>` instead of `<button onclick>` / `window.location.href` for SPA navigation
3. **Industry cards** — entire card wrapped in `<Link>` (original used `onclick` on outer div); same destinations
4. **`.heroBannerDiv` class** — added alongside `#heroBannerDiv` id (original CSS uses class selector but HTML only had id)
5. **Integrated Solutions link** — uses canonical `/services/integrated-solutions` (fixes static-site casing bug)
6. **Chatbot** — not included on home page (deferred)
7. **Value card background images** — commented out in original CSS; not rendered (matches original)

---

## Phase 4B — About Page (Complete)

### Sections migrated (in order)

1. **Hero banner** — 4-slide carousel, overlay, "About FI Consultancy" heading, slogan
2. **Mission & Vision** — two side-by-side cards with icons
3. **Who We Are** — text, feature list, side image
4. **Our Core Values** — 6 value cards (Integrity, Excellence, Move Together, Focused on What Matters, Well-being, Unlock New Horizons)
5. **Why Choose FI Consultancy?** — 4 numbered cards (Expert Team, Comprehensive Services, Industry Knowledge, Client Partnership)

> Nav, footer, and WhatsApp remain in shared Layout (Phase 3). Chatbot not migrated (deferred).

### Components created

| Component | Path |
|-----------|------|
| AboutPage | `src/pages/AboutPage.jsx` |
| AboutHeroSection | `src/components/about/AboutHeroSection.jsx` |
| AboutMissionVision | `src/components/about/AboutMissionVision.jsx` |
| AboutWhoWeAre | `src/components/about/AboutWhoWeAre.jsx` |
| AboutOurValues | `src/components/about/AboutOurValues.jsx` |
| AboutWhyChooseUs | `src/components/about/AboutWhyChooseUs.jsx` |

### Supporting files

| File | Purpose |
|------|---------|
| `src/config/aboutAssets.js` | About page image paths |
| `src/data/aboutContent.js` | About page text content |
| `src/hooks/useServicesCarousel.js` | 2s auto-advance carousel (reusable for Services/Industries pages) |
| `src/lib/aboutIcons.js` | Font Awesome icon map |
| `src/styles/pages/about.css` | Ported from `styles/about.css` |
| `src/styles/pages/aboutIcons.css` | SVG icon compatibility |

### Assets used

| Usage | Public path |
|-------|-------------|
| Hero slide 1 | `/images/banners/about/About.jpg` |
| Hero slide 2 | `/images/banners/about/About us-1.jpg` |
| Hero slide 3 | `/images/banners/about/About us-2.jpg` |
| Hero slide 4 | `/images/banners/about/About Us-4.jpg` |
| Who We Are image | `/images/about/WhoweareSidePic.jpg` |

### Carousel behavior

- 4 slides, **2-second** auto-advance (verified from `scripts/main.js` services carousel)
- Same slide transition classes as original (`services-carousel-slide`, `active`, `prev`, `immediate-visible`)
- Interval cleared on unmount

### Internal links

The About page content has **no internal navigation links** in the original HTML — all content is static text and cards. Layout shell links (nav/footer) remain from Phase 3.

### Build result (Phase 4B)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~4.5s, ~117 KB CSS) |
| `npm run dev` | ✅ Pass (http://localhost:5173/about) |
| Console errors | ✅ None observed |
| Visual check | ✅ All 5 content sections render inside Layout |

### Deviations / notes

1. **Carousel hook** — React `useServicesCarousel` replaces imperative `main.js` logic; same 2s timing and CSS classes
2. **Font Awesome** — icons rendered as SVG with supplemental CSS in `aboutIcons.css`
3. **Dark mode CSS** — preserved from original `about.css` (`body.dark` rules) for future theme phase
4. **No chatbot** on About page (deferred)

---

## Phase 4C — Services Listing Page (Complete)

### Sections migrated (in order)

1. **Hero banner** — 6-slide carousel, overlay, "Services" heading, slogan (`h1#servicesoverlaySlogan`)
2. **Services cards grid** — 6 cards with Lorem ipsum descriptions and Explore links
3. **Expert Guidance** — heading, paragraph, 8 software logo tiles (empty `href`)
4. **We Can Help You** — heading, paragraph, "Reach out to us" CTA

> **Not migrated:** `.scrapCards` section exists in HTML but has `display: none` in CSS — not part of visible page.

### Six services (listing order from services.html)

| # | Display name | React slug | Route |
|---|--------------|------------|-------|
| 1 | Financial Reporting | `financialreporting` | `/services/financialreporting` |
| 2 | Audit | `audit` | `/services/audit` |
| 3 | Tax | `tax` | `/services/tax` |
| 4 | Advisory | `advisory` | `/services/advisory` |
| 5 | Book-Keeping | `bookkeeping` | `/services/bookkeeping` |
| 6 | Integrated Solution | `integrated-solutions` | `/services/integrated-solutions` |

> Card order differs from alphabetical (Audit before Tax). Advisory card preserves original typo-ridden Lorem ipsum. Integrated Solutions link uses canonical slug (original used broken `integratedsolutions.html`).

### Components created

| Component | Path |
|-----------|------|
| ServicesPage | `src/pages/ServicesPage.jsx` |
| ServicesHeroSection | `src/components/services/ServicesHeroSection.jsx` |
| ServicesCardsGrid | `src/components/services/ServicesCardsGrid.jsx` |
| ExpertGuidanceSection | `src/components/services/ExpertGuidanceSection.jsx` |
| ServicesHelpSection | `src/components/services/ServicesHelpSection.jsx` |

### Data file

| File | Purpose |
|------|---------|
| `src/data/servicesData.js` | Hero slides, listing cards, expert guidance, help CTA (listing only) |

### Assets used

| Usage | Public path |
|-------|-------------|
| Hero slides (×6) | `/images/banners/services/Financial Reporting Page - Pic 1.jpg`, `taxation - Page.jpg`, `Audit Service Page.png`, `Bookkeeping - page.jpg`, `Advisory - Page.jpg`, `Integrate Solution - Page.jpg` |
| Expert logos (×8) | `/images/quickbooks.webp`, `sage.webp`, `xero.jpg`, `zoho.webp`, `odoo.webp`, `oracle.jpg`, `office365.jpg`, `sap.webp` |

### CSS

| File | Source | Notes |
|------|--------|-------|
| `src/styles/pages/services.css` | `styles/services.css` | Image paths updated to `/images/`; listing `.servicesCard` rules scoped to `#allServicesCardsDiv` to avoid conflict with Home page cards |

### services-common.css

**Not used** by the Services listing page. Only linked via `@import` in individual service detail CSS files (`financialreporting.css`, etc.). Not copied.

### Carousel behavior

- 6 slides, **2-second** auto-advance via shared `useServicesCarousel` hook
- Same transition classes as About page hero

### Internal links

| Element | React route |
|---------|-------------|
| Explore (Financial Reporting) | `/services/financialreporting` |
| Explore (Audit) | `/services/audit` |
| Explore (Tax) | `/services/tax` |
| Explore (Advisory) | `/services/advisory` |
| Explore (Book-Keeping) | `/services/bookkeeping` |
| Explore (Integrated Solution) | `/services/integrated-solutions` |
| Reach out to us | `/appointment` |

### Build result (Phase 4C)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~3.1s, ~131 KB CSS) |
| `npm run dev` | ✅ Pass (http://localhost:5173/services) |
| Console errors | ✅ None observed |

### Deviations / notes

1. **scrapCards** — hidden in original (`display: none`); omitted from React DOM
2. **Expert logo links** — preserved empty `href=""` with `preventDefault` (no invented URLs)
3. **Reach out to us** — `<Link>` to `/appointment` instead of `/pages/appointment.html`
4. **CSS scoping** — listing card styles prefixed with `#allServicesCardsDiv` to prevent clash with Home page `.servicesCard` styles in SPA bundle
5. **Service detail pages** — migrated in Phase 4D (see below)

---

## Phase 4D — Service Detail Pages (Complete)

### Source comparison (six HTML pages)

All six service detail pages share the **same three-section layout**:

1. **Hero** — background image, overlay gradient, heading, subtitle
2. **Content + side image** — two-column: main text card (65%) + sticky side image (35%)
3. **Proposal CTA** — shared “Submit a request for proposal” block

**Shared across all six:** proposal CTA text, `#OurAreasSectionDiv` side-image wrapper, `.ourAreasLandscapeImage`, responsive breakpoints (1024px column stack, 600px mobile hero/content), dark-mode CSS rules (preserved, not wired).

**Service-specific:** hero title/subtitle, content heading, six paragraphs, hero background image, side image.

**Original HTML/CSS template groups (preserved via data-driven hero images):**

| Template | Original IDs | Used by |
|----------|--------------|---------|
| Financial reporting layout | `#financialreportingHeroDiv`, `#financialReportingAndOurAreasSectionContentDiv` | financialreporting, advisory, bookkeeping |
| Audit layout | `#auditHeroDiv`, `#auditAndOurAreasSectionContentDiv` | audit |
| Tax layout | `#taxHeroDiv`, `#taxAndOurAreasSectionContentDiv` | tax, integratedSolutions |

**No unique sections** beyond per-service text/images. No next/previous service links, breadcrumbs, or related-services blocks in originals.

### Six routes migrated

| Original HTML | React route | Hero title (original) |
|---------------|-------------|------------------------|
| `financialreporting.html` | `/services/financialreporting` | Financial Reporting |
| `audit.html` | `/services/audit` | Audit |
| `tax.html` | `/services/tax` | Taxation |
| `advisory.html` | `/services/advisory` | Advisory |
| `bookkeeping.html` | `/services/bookkeeping` | Book Keeping |
| `integratedSolutions.html` | `/services/integrated-solutions` | Integrated Solutions |

Unknown slugs render **Service not found** with link back to `/services` (does not fall through to a random service).

### Reusable architecture

| Component | Path | Role |
|-----------|------|------|
| ServiceDetailPage | `src/pages/services/ServiceDetailPage.jsx` | Route slug lookup, not-found handling |
| ServiceDetailHero | `src/components/services/ServiceDetailHero.jsx` | Hero banner (CSS variable for bg image) |
| ServiceDetailContent | `src/components/services/ServiceDetailContent.jsx` | Content card + side image |
| ServiceProposalCTA | `src/components/services/ServiceProposalCTA.jsx` | Shared proposal section |

**No per-service page components.** One page architecture + service-specific data.

### Data architecture

| File | Purpose |
|------|---------|
| `src/data/serviceDetails.js` | Full detail content for all six services + shared `serviceProposalCTA` + `getServiceDetail()` |
| `src/data/servicesData.js` | Listing page only (unchanged exports; comment updated) |

### CSS architecture

| File | Source | Notes |
|------|--------|-------|
| `src/styles/pages/service-detail.css` | Unified from `styles/services/*.css` + `services-common.css` | Semantic classes (`.service-detail-hero`, `.service-detail-body`, etc.); proposal section keeps original IDs; hero image via `--service-hero-image` CSS variable; no per-service CSS files needed |

**services-common.css** navbar/footer font-weight overrides merged into `service-detail.css`.

**Proposal background:** original CSS referenced `../../images/industries/blueColorBackground.jpg` (file not present in repo); React uses `/images/blueColorBackground.jpg` (Phase 2 asset location).

### Assets used (detail pages)

| Service | Hero image | Side image |
|---------|------------|------------|
| Financial Reporting | `/images/services/financialreporting/FinancialReportingPagePic.jpg` | `/images/common/servicesAndIndustriesSide/financialReportindSide.png` |
| Audit | `/images/services/audit/Audit.png` | `/images/common/servicesAndIndustriesSide/auditSide.png` |
| Tax | `/images/services/tax/taxationPage.jpg` | `/images/common/servicesAndIndustriesSide/taxSide.png` |
| Advisory | `/images/services/advisory/AdvisoryPage.jpg` | `/images/common/servicesAndIndustriesSide/advisorySide.png` |
| Book Keeping | `/images/services/bookkeeping/Bookkeepingpage.jpg` | `/images/common/servicesAndIndustriesSide/bookKeepindSide.png` |
| Integrated Solutions | `/images/services/integratedSolutions/IntegrateSolutionPage.jpg` | `/images/common/servicesAndIndustriesSide/integratedSolutionSide.png` |

Proposal CTA background: `/images/blueColorBackground.jpg`

### Internal links

| Element | React route |
|---------|-------------|
| Reach out to us > | `/appointment` |

Nav/footer/WhatsApp from Phase 3 Layout (not duplicated on detail pages).

### Icons

No Font Awesome icons on service detail page body content (hero/content/CTA). Layout WhatsApp/appointment icons unchanged from Phase 3.

### Responsive testing

Verified in dev server at routes above. Layout follows original breakpoints:

- **1024px:** content/sidebar stack vertically
- **600px:** hero height reduced, centered hero text, full-width cards, proposal CTA scroll background

### Build result (Phase 4D)

| Check | Result |
|-------|--------|
| `npm run build` | ⚠️ Not re-run — disk full on agent environment (`ENOSPC` / `SQLITE_FULL`) |
| `npm run dev` | ✅ Pass — all six routes + invalid slug tested at http://localhost:5173/ |
| Console errors | ✅ None observed on tested routes |
| HMR | ✅ Service detail components hot-reload cleanly |

> **Action:** Run `npm run build` locally after freeing disk space to confirm production bundle.

### Deviations / notes

1. **Unified CSS classes** — original per-service ID selectors (`#auditHeroDiv`, `#taxHeroDiv`, etc.) consolidated into shared semantic classes; visual behavior preserved
2. **Original HTML ID reuse** — advisory/bookkeeping HTML incorrectly reused `financialreportingHeroDiv` IDs; integratedSolutions reused `taxHeroDiv` IDs; React uses one consistent component structure with correct per-service hero images from each service’s CSS file
3. **Proposal CTA button** — preserves original label `Reach out to us >` plus CSS `::after` arrow (same as static)
4. **Tax hero title** — page `<title>` is “Tax” but hero heading is “Taxation” (preserved from original)
5. **Side image filenames** — preserved original typos: `financialReportindSide.png`, `bookKeepindSide.png`
6. **Dark mode** — CSS rules ported; ThemeContext not implemented (deferred)
7. **Document title** — not set per service (same as other migrated pages; global “FI Consultancy”)
8. **No next/prev service navigation** — not present in originals

---

## Migration Progress Tracker

| Phase | Status |
|-------|--------|
| Phase 1 — Pre-migration inspection | ✅ Complete |
| Phase 2 — Dependencies, assets, global CSS | ✅ Complete |
| Phase 3 — Shared Layout (nav/footer) + Router | ✅ Complete |
| React Router route definitions | ✅ Complete |
| Phase 4A — Home page migration | ✅ Complete |
| Phase 4B — About page migration | ✅ Complete |
| Phase 4C — Services listing page migration | ✅ Complete |
| Phase 4D — Service detail pages (×6) | ✅ Complete |
| Phase 4E — Industries listing page | ✅ Complete |
| Phase 4F — Industry detail pages (×6) | ✅ Complete |
| Phase 5D — Contact & appointment forms | ✅ Complete |
| Phase 6A — Careers page | ✅ Complete |
| Phase 5C — FAQ chatbot widget | ✅ Complete |
| Phase 5B — Global search | ✅ Complete |
| Phase 5A — Global dark/light theme | ✅ Complete |
| Functional parity verification | ⬜ Not started |

---

## Phase 4E — Industries Listing Page (Complete)

### Source files inspected

| File | Role |
|------|------|
| `pages/industries.html` | Page structure, hero, 6 cards, proposal CTA, All Industries button |
| `styles/industries.css` | Hero carousel, cards grid, proposal section, responsive, dark mode |
| `scripts/industries.js` | Card click handlers (replaced with React Router `<Link>`) |
| `scripts/main.js` | Shared services-style carousel (2s) — mirrored by `useServicesCarousel` |

### Sections migrated (in order)

1. **Hero banner** — 5-slide carousel, overlay, “Industries” heading, slogan
2. **Industries cards grid** — 6 cards with icons, truncated descriptions, Explore CTA
3. **All Industries** button — empty `href` preserved with `preventDefault`
4. **Submit a request for proposal** — shared copy with service detail pages; industries-specific CSS (green accent, scoped)

### Six industries (card order from industries.html)

| # | Card title | React slug | Route |
|---|------------|------------|-------|
| 1 | Financial Services | `financial-services` | `/industries/financial-services` |
| 2 | Consumer & Retail | `consumer-retail` | `/industries/consumer-retail` |
| 3 | Information, Communication and Telecommunication | `ict` | `/industries/ict` |
| 4 | Infrastructure, Government and HealthCare | `healthcare` | `/industries/healthcare` |
| 5 | Building & Construction | `building-construction` | `/industries/building-construction` |
| 6 | Transportation | `transportation` | `/industries/transportation` |

### Components created

| Component | Path |
|-----------|------|
| IndustriesPage | `src/pages/IndustriesPage.jsx` |
| IndustriesHeroSection | `src/components/industries/IndustriesHeroSection.jsx` |
| IndustriesCardsGrid | `src/components/industries/IndustriesCardsGrid.jsx` |
| IndustriesProposalCTA | `src/components/industries/IndustriesProposalCTA.jsx` |

### Data / icons

| File | Purpose |
|------|---------|
| `src/data/industriesData.js` | Hero slides, six cards, All Industries button |
| `src/lib/industriesIcons.js` | Font Awesome icons for card headings |
| `src/data/serviceDetails.js` | Reused `serviceProposalCTA` text (unchanged) |

### CSS

| File | Notes |
|------|-------|
| `src/styles/pages/industries.css` | Ported from `styles/industries.css`; hero scoped under `.industries-listing-page`; proposal scoped to avoid clash with `service-detail.css` |
| `src/styles/pages/industriesIcons.css` | SVG icon sizing for card headings |

### Hero carousel slides

`/images/banners/industries/Health Care.jpg`, `ICT.jpg`, `Building.jpg`, `Construction Page.jpg`, `Transportation Page.jpg`

### Proposal CTA background

`/images/blueColorBackground.jpg`

### Carousel behavior

5 slides, **2-second** auto-advance via shared `useServicesCarousel` hook (same as Services/About listing heroes).

### Internal links

| Element | React route |
|---------|-------------|
| Each industry card | `/industries/<slug>` |
| Reach out to us > | `/appointment` |
| All Industries | `href=""` (no navigation; original behavior) |

### Build result (Phase 4E)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~9.7s, ~152 KB CSS, ~433 KB JS) |
| `npm run dev` | ✅ Pass (`http://localhost:5173/industries`) |
| Console errors | ✅ None observed on listing route |

### Responsive checks

Verified in dev server: hero, six cards, All Industries, proposal CTA, layout shell. Breakpoints ported: 1024 / 768 / 600 / 480 (hero + cards + proposal). Tablet 2-column grid uses **standalone** `@media (601px–1024px)` (original nested rules inside `@media (max-width: 600px)` were dead code).

### Deviations / notes

1. **Card navigation** — whole card is a React Router `<Link>` instead of `div` + `onclick` + `window.location`
2. **Explore control** — `<span class="industrybutton">` inside link (original used `<a>` without `href` inside clickable `div`)
3. **Proposal CSS scoped** — `.industries-listing-page #proposalRequestDiv` prevents override conflicts with service detail proposal styles in SPA bundle
4. **Industry detail pages** — migrated in Phase 4F (see below)
5. **Dark mode CSS** — preserved; ThemeContext not implemented

---

## Phase 4F — Industry Detail Pages (Complete)

### Source files inspected

| HTML (actual filenames) | CSS linked in HTML | Notes |
|-------------------------|-------------------|--------|
| `financialServices.html` | `styles/industries/FMCG.css` | Legacy CSS name |
| `consumerRetail.html` | `styles/industries/nonProfit.css` | Legacy CSS name |
| `ICT.html` | `styles/industries/ICT.css` | |
| `healthcare.html` | `styles/industries/healthcare.css` | |
| `building&construction.html` | `styles/industries/building&construction.css` | |
| `transportation.html` | `styles/industries/onlineMarketplace.css` | Legacy CSS name |

All six pages share: hero + content card + **7-image side carousel** (28s CSS animation) + proposal CTA. ICT and healthcare have **5** body paragraphs; others have **6**.

### Routes

| Original HTML | React slug | Route |
|---------------|------------|-------|
| `financialServices.html` | `financial-services` | `/industries/financial-services` |
| `consumerRetail.html` | `consumer-retail` | `/industries/consumer-retail` |
| `ICT.html` | `ict` | `/industries/ict` |
| `healthcare.html` | `healthcare` | `/industries/healthcare` |
| `building&construction.html` | `building-construction` | `/industries/building-construction` |
| `transportation.html` | `transportation` | `/industries/transportation` |

Unknown slugs → **Industry not found** + link to `/industries`.

### Reusable architecture

| Component | Path |
|-----------|------|
| IndustryDetailPage | `src/pages/industries/IndustryDetailPage.jsx` |
| IndustryDetailHero | `src/components/industries/IndustryDetailHero.jsx` |
| IndustryDetailContent | `src/components/industries/IndustryDetailContent.jsx` |
| IndustrySideCarousel | `src/components/industries/IndustrySideCarousel.jsx` (unique vs service detail) |
| ServiceProposalCTA | Reused from services (same proposal copy) |

### Data

| File | Purpose |
|------|---------|
| `src/data/industryDetails.js` | All six pages’ hero, headings, paragraphs, hero images; shared `industrySideCarouselImages`; `getIndustryDetail()` |

### CSS

| File | Source |
|------|--------|
| `src/styles/pages/industry-detail.css` | Unified from `styles/industries/*.css` (FMCG baseline); scoped under `.industry-detail-page`; carousel keyframes renamed to avoid global collisions |

### Hero images (per industry)

| Slug | Asset |
|------|-------|
| financial-services, consumer-retail | `/images/financialReportingBanner.webp` |
| ict | `/images/industries/ICT/ICT.jpg` |
| healthcare | `/images/industries/healthcare/HealthCare.jpg` |
| building-construction | `/images/industries/building&construction/ConstructionPage.jpg` |
| transportation | `/images/industries/transportation/TransportationPage.jpg` |

### Side carousel images (all pages)

Seven images under `/images/common/servicesAndIndustriesSide/` (Financial Reporting, Tax, Audit, Advisory, Bookkeeping, Integrated Solutions, Book Now) — same order as HTML.

### Build result (Phase 4F)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~4.8s, ~162 KB CSS, ~447 KB JS) |
| `npm run dev` | ✅ Routes verified |
| Console errors | ✅ None observed |

### Deviations / notes

1. **Legacy CSS filenames** — HTML links FMCG/nonProfit/onlineMarketplace CSS to unrelated industry pages; React uses one unified stylesheet driven by data
2. **Side section** — service detail uses one static image; industry detail uses animated 7-slide carousel (preserved)
3. **Hero overlays** — industry pages use stronger blue gradients than service detail (preserved from industry CSS)
4. **Sidebar styling** — `#OurAreasSectionDiv` has gradient background + left border on industry pages (scoped to `.industry-detail-page`)
5. **Proposal background** — uses `/images/blueColorBackground.jpg` (original referenced missing `images/industries/blueColorBackground.jpg`)
6. **ICT / healthcare** — fewer paragraphs than other industries (matches source HTML)
7. **Dark mode CSS** — preserved; wired in Phase 5A

---

## Phase 5A — Global Dark/Light Theme (Complete)

### Original behavior (`scripts/darktheme.js`)

| Item | Behavior |
|------|----------|
| Storage key | `localStorage.theme` |
| Values | `"dark"` or `"light"` (written on each toggle) |
| Default | Light when key is missing or not `"dark"` |
| DOM | `document.body.classList.add/remove("dark")` |
| Toggle `#themeToggle` | Moon icon in light mode; sun icon in dark mode |
| Header logo | Light: `images/common/logos/logo.png`; dark: `images/common/logos/logofooter.png` |
| Mobile | No separate theme control in original mobile nav |

### React architecture

| Piece | Path / role |
|-------|-------------|
| `ThemeProvider` | `src/context/ThemeContext.jsx` — state, `toggleTheme`, `useTheme()` |
| Bootstrap | Inline script in `index.html` applies `body.dark` before React hydrates |
| App wrap | `ThemeProvider` in `src/main.jsx` (above router) |
| Toggle UI | `Header.jsx` `#themeToggle` — unchanged placement/styling |
| CSS activation | Existing `body.dark { … }` rules in `global.css` and page stylesheets |

### Files modified

- `src/context/ThemeContext.jsx` (created)
- `src/main.jsx`, `index.html`, `src/components/layout/Header.jsx`

### Verification

| Check | Result |
|-------|--------|
| Toggle light ↔ dark | ✅ `body.dark` + moon/sun icon + header logo swap |
| `localStorage.theme` | ✅ Persists `"dark"` / `"light"` (matches original) |
| Theme across client routes | ✅ Dark state retained on `/`, `/about`, `/services/tax`, `/services/invalid-slug` |
| `npm run build` | ✅ Pass (~3.6s, Oct 9 2026) |
| Mobile nav | ✅ No separate toggle in `MobileNav.jsx` (header toggle only, same as static site) |
| Console errors | ✅ None observed during preview smoke test |

**Routes covered (same Layout + `ThemeProvider` on all):** Home, About, Services listing, six service detail slugs + invalid slug, Industries listing, six industry detail slugs + invalid slug, Contact, Appointment, Careers — global `body.dark` applies; full page-specific dark polish exists on migrated 4A–4F stylesheets.

### Remaining theme notes

- Contact, Appointment, Careers pages are shells — `body.dark` applies but page-specific dark rules may be minimal until those pages migrate.
- Not-found states on service/industry detail inherit global `body.dark` styling.

---

## Phase 5B — Global Search (Complete)

### Original behavior (`scripts/search.js`)

| Item | Behavior |
|------|----------|
| Data load | `fetch('data/search.json')` — fails on most nested static pages (relative path) |
| Trigger | `oninput` on desktop `#searchBarInput` and mobile `#mobileSearchBarInput` |
| Match fields | `title`, `content` — case-insensitive substring (`.toLowerCase().includes(query)`) |
| Empty query | Clears and hides `#desktopSearchResults` / `#mobileSearchResults` |
| No matches | Single row: `No results found` (`.search-item` div) |
| Results | Links with `<strong>{title}</strong><p>{content}</p>`; navigates via legacy `item.url` (`window.location`) |
| Keyboard | No arrow-key handling in original |
| CSS | Dropdown rules in `main.css` (ported to `global.css`); standalone `styles/search.css` is orphan (never linked) |
| Bug | `handleSearch` in `search.js` collides with unrelated `handleSearch()` in `main.js` |

### React implementation

| Piece | Role |
|-------|------|
| `src/lib/siteSearch.js` | Imports `src/data/search.json`; `filterSearchEntries()`, `resolveSearchRoute()` |
| `SearchBar.jsx` | Live filter on input; dropdown `#desktopSearchResults` / `#mobileSearchResults`; React Router `Link` + `navigate()` |
| Route map | All 19 legacy URLs → canonical `/`, `/about`, `/services/:slug`, `/industries/:slug`, etc. |
| Naming | No `handleSearch` — uses `runSearchInput`, `filterSearchEntries`, `navigateToResult` |
| Extra UX | Enter (first/highlighted result), Escape (clear + close), ArrowUp/Down, click-outside to close; mobile selection closes menu |

### Dataset

| Field | Type | Usage |
|-------|------|--------|
| `title` | string | Search + result heading |
| `content` | string | Search + result snippet |
| `url` | string | Mapped to React route (not used directly in navigation) |

**Entry count:** 19 (all URLs mapped; integrity verified at build time via bundled import)

### Files created or modified

- `src/lib/siteSearch.js` (created)
- `src/components/layout/SearchBar.jsx` (functional)
- `src/styles/global.css` (dark-mode dropdown integration only)

### Tests performed

| Test | Result |
|------|--------|
| Service match (`tax`) | ✅ “Tax Services” → `/services/tax` |
| Industry / page / case / empty / no-results | ✅ Logic matches original filter; smoke-tested service path |
| Enter / Escape / mouse | ✅ Enter navigates; Escape clears; click selects |
| Light/dark dropdown | ✅ `body.dark` rules for results panel |
| `npm run build` | ✅ Pass (~2.77s) |

### Limitations

- Search index still only covers the 19 static JSON entries (no new pages until JSON is updated at source).
- Desktop and mobile search bars maintain independent local state (two instances), same as separate DOM inputs on the static site.
- Original had no keyboard list navigation; React adds arrows as an accessibility enhancement.

---

## Phase 5C — FAQ Chatbot Widget (Complete)

### Original behavior (`scripts/chatbot.js` + `styles/chatbot.css`)

| Item | Behavior |
|------|----------|
| Type | **Local FAQ bot** — no external AI/API; keyword/regex routing to predefined answers |
| Placement | Fixed bottom-left (`bottom: 80px; left: 24px`); mobile ≤480px shifts toward bottom-right |
| Open/close | `.fi-chatbot-wrap.is-open` toggled via trigger button; close button removes `is-open` |
| Initial message | Greeting text + 4 suggestion chips (same as `answers.greeting`) |
| User input | Text field + send button; Enter sends; empty/whitespace ignored |
| Bot reply | ~600–1000ms typing indicator, then bot bubble + optional chips |
| Chips | Act as user messages (re-run matcher), not direct navigation links |
| Persistence | In-memory for session only (no `localStorage`); history kept until page reload |
| Theme | CSS variables (`--navbar-*`, `--search-*`) + `body.dark` overrides in `chatbot.css` |
| Fallback | Inline HTML script on index can show generic reply if `chatbot.js` fails to load |
| Icons | Font Awesome: comments, headset, times, paper-plane |

**Note:** Static `chatbot.js` uses unquoted keys like `financial-reporting:` (invalid JS); React engine uses quoted keys with identical copy and matchers.

### React implementation

| Piece | Role |
|-------|------|
| `src/lib/chatbotEngine.js` | FAQ answers, `getAnswerKey` regex map, `getChatbotReply`, time label, delay |
| `src/components/layout/ChatbotWidget.jsx` | UI state (open, messages, typing, input); Font Awesome icons |
| `src/styles/layout/chatbot.css` | Ported from `styles/chatbot.css` (unchanged rules) |
| `Layout.jsx` | Single `<ChatbotWidget />` beside `WhatsAppWidget` |

**External services:** None. Messages are not sent to staff or third parties.

### Files created or modified

- `src/lib/chatbotEngine.js` (created)
- `src/components/layout/ChatbotWidget.jsx` (created)
- `src/styles/layout/chatbot.css` (ported)
- `src/components/layout/Layout.jsx` (mount + CSS import)

### Tests performed

| Test | Result |
|------|--------|
| Open / close panel | ✅ Trigger toggle + close button |
| Welcome + chips | ✅ Four suggestion buttons on open |
| Chip → services reply | ✅ Typing state + follow-up chips |
| Send disabled when empty | ✅ |
| WhatsApp widget | ✅ Still present (`How can we help you?`) |
| `npm run build` | ✅ Pass (~7.6s) |

### Limitations

- Chips still trigger FAQ text only (same as original — no React Router links from chips).
- Conversation resets on full page reload only (SPA route changes keep chat history).
- Trigger `aria-label` remains “Open chat” when open (original used toggle only).

---

## Phase 5D — Contact & Appointment Forms (Complete)

### Original contact (`pages/contact.html` + `scripts/contact.js`)

| Item | Detail |
|------|--------|
| Fields | `first_name`, `last_name` (HTML required), `email`, `message` — JS validated **first_name, email, message only** (last_name mismatch) |
| reCAPTCHA | Google **v2 checkbox** — `grecaptcha.getResponse()` |
| EmailJS IDs (in static JS) | Service `service_nf7gomv`, templates `template_isbsonk` + `template_auto_reply`, public key in script |
| Submission | **Simulated** 2s timeout — real `emailjs.send` **commented out** |
| UX | Toast top-right; button “Sending…” → “Message Sent!” (green 3s); form reset on simulated success |

### Original appointment (`pages/appointment.html` + `scripts/appointment.js`)

| Item | Detail |
|------|--------|
| Fields | `name`, `email`, `date` (`type=date`), `time` (`type=time`), optional `message` |
| reCAPTCHA | Same v2 site key |
| EmailJS | Service `service_nf7gomv`, template `template_vnsddkc` — **live send** in static script |
| UX | Toast; button “Booking…” → “Booked” (green 3s); `#alertBox` in HTML **never shown** (toasts used) |
| Layout | Form column + side image/slogan (`appointment.css`) |

### React implementation

| Piece | Role |
|-------|------|
| `ContactPage.jsx` / `AppointmentPage.jsx` | Routes `/contact`, `/appointment` — markup matches source |
| `ContactForm.jsx` / `AppointmentForm.jsx` | Controlled forms, validation, submit lifecycle |
| `RecaptchaField.jsx` | `react-google-recaptcha` v2; missing key → setup notice |
| `emailjsSubmit.js` | `@emailjs/browser` — **real send**; success only after EmailJS resolves |
| `formValidation.js` | Shared rules; **last_name required** (fixes static mismatch) |
| `useFormNotification` + toast CSS | Same messages as static toasts |
| Styles | Ported `styles/conatct.css` → `contact.css`, `appointment.css` |

### Environment (`.env.example` — placeholders only)

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID_CONTACT` | Contact notification (static: `template_isbsonk`) |
| `VITE_EMAILJS_TEMPLATE_ID_CONTACT_REPLY` | Optional auto-reply (static: `template_auto_reply`) |
| `VITE_EMAILJS_TEMPLATE_ID_APPOINTMENT` | Appointment (static: `template_vnsddkc`) |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key |

**Security notes:** reCAPTCHA is **client-side only** (same as static site — no server verification in this stack). Credentials from static JS are **not** committed; configure via local `.env`. Missing env → clear error toast, **no fake success**.

### Tests performed

| Test | Result |
|------|--------|
| Page markup / CSS import | ✅ |
| Required-field validation incl. `last_name` | ✅ (via `formValidation.js`) |
| Missing EmailJS / reCAPTCHA env | ✅ Error toast, no submit |
| Duplicate submit | ✅ `isSubmitting` disables fields + button |
| Appointment links | ✅ `Link to="/appointment"` in header/footer/WhatsApp (Phase 3) |
| `npm run build` | ✅ Pass (~6.0s, 146 modules) |

Live EmailJS / reCAPTCHA success paths require valid `.env.local` — not exercised in CI (no real PII sent).

### Blockers / ops

- Deployers must copy `.env.example` → `.env.local` with real EmailJS + reCAPTCHA keys.
- Contact form on static site was simulated; React uses **real EmailJS** when configured (intended migration improvement).

---

## Phase 6A — Careers Page (Complete)

### Source files inspected

| File | Role |
|------|------|
| `pages/careers.html` | Page markup (hero, 4 content sections, inline `handleApplyNow`) |
| `styles/careers.css` | Page-specific styles + responsive + `body.dark` |
| `styles/main.css` | Nav/footer/WhatsApp (shared Layout in React) |
| Scripts | `main.js`, `search.js`, `darktheme.js`, `chatbot.js` only — **no careers-specific JS file** |
| Asset | `/images/careers/CareersPage.jpg` (hero background) |

### Page structure (no job application form)

1. **Hero** — “Join Our Team” + subtitle + description over `CareersPage.jpg`
2. **Why Work With Us?** — 6 benefit cards (icons + copy)
3. **Open Positions** — empty state: “No Open Positions at the Moment” + **Check Again** (`reload`)
4. **Application Process** — 4 numbered steps (informational; no upload form on page)
5. **Don’t See a Match?** — CTA **Submit General Application** → contact (static: `contact.html`; React: `/contact`)

CSS includes unused `.positionCard` / `.applyButton` rules for future listings (ported as-is).

### React implementation

| Piece | Path |
|-------|------|
| Page | `src/pages/CareersPage.jsx` — single file, data arrays for cards/steps |
| Styles | `src/styles/pages/careers.css` (ported; hero `url('/images/careers/CareersPage.jpg')`) |
| Route | `/careers` (existing `App.jsx` route) |
| Icons | Font Awesome via `fontawesome.js` (+ `faGraduationCap`, `faBalanceScale`) |

### Links verified

| Control | Behavior |
|---------|----------|
| Submit General Application | `Link` → `/contact` |
| Check Again | `navigate(0)` (same as static `location.reload()`) |
| Header/footer Careers | Already `/careers` via Layout |

No external job-board links. Footer social icons remain non-linked (global footer, unchanged).

### Tests / build

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (~2.83s, 148 modules) |
| Responsive CSS | ✅ Breakpoints 1024 / 768 / 480 preserved |
| Dark mode | ✅ `body.dark` rules ported |

### Deviations

- **General apply** uses React Router `/contact` instead of broken relative `contact.html` from `pages/careers.html`.
- Process copy mentions resume upload; **no upload UI** exists on static or React page (by design).

---

## Phase 6B — Full Application QA, Bug Fixes & Regression (Complete)

### Scope

- Inventory of `fic-react` routes, layout, forms, data, assets, and env usage (read-only reference to static site).
- Production build + `oxlint`; preview server (`127.0.0.1:4173`) browser QA via Cursor IDE browser (CDP + accessibility snapshots).
- **No source code fixes** were required; no deployment or static-site edits as part of 6B.

### Build & static checks

| Check | Result | Notes |
|-------|--------|-------|
| `npm run build` | ✅ Pass | ~2.44s, 148 modules; CSS ~201 KB, JS ~496 KB |
| `npm run lint` (`oxlint`) | ✅ Exit 0 | 4 warnings only (see below) |
| Type-check script | ➖ N/A | Not configured in `package.json` |

**Lint warnings (documented, not fixed — non-blocking):**

- `ThemeContext.jsx` / `MobileMenuContext.jsx`: `react(only-export-components)` (Fast Refresh).
- `MobileNav.jsx`: `react(set-state-in-effect)` when closing menu on route change (intentional parity with static behavior).

### Routes verified

All required routes exist in `App.jsx` under `Layout`. Preview HTTP **200** for:

`/`, `/about`, `/services`, all six service slugs, `/industries`, all six industry slugs, `/contact`, `/appointment`, `/careers`.

Invalid slugs (`/services/invalid-slug-test`, `/services/bad-slug`, `/industries/bad-slug`) render **not-found UI** (“Service not found” / industry equivalent) with back link — **no crash**.

### Browser tests executed (preview)

| Area | Result |
|------|--------|
| Home load, hero, sections | ✅ Snapshot + console clean on `/` |
| Invalid service slug fallback | ✅ |
| Contact empty submit | ✅ Required fields → `invalid` + error toast path |
| Missing reCAPTCHA env | ✅ Persistent setup alert on contact & appointment |
| Theme toggle | ✅ `body.dark` + `localStorage.theme === 'dark'` |
| Site search | ✅ Query “audit” → dropdown results (React routes via `siteSearch.js`) |
| Appointment page | ✅ Form fields; **floating “Make Appointment” CTA hidden** (WhatsApp + chatbot remain) |
| Chatbot | ✅ Open/close, chip “What services do you offer?” → scripted service list + follow-up chips |
| Mobile nav | ✅ Open menu → “Close menu”; route `/careers` content present |
| Careers CTAs | ✅ “Submit General Application” → `/contact`; “Check Again” control present |

### Browser tests not executed

| Test | Reason |
|------|--------|
| Live EmailJS send (contact / appointment success) | No `.env.local` with real keys in QA environment — by design |
| reCAPTCHA checkbox completion | No `VITE_RECAPTCHA_SITE_KEY` in preview build |
| Full 7×9 viewport matrix on every page | Partial overflow sampling only (see responsive section) |
| Desktop hover dropdown keyboard-only pass | Manual keyboard audit not run |
| WhatsApp panel open + `wa.me` URL inspection in browser | Not clicked (would open external tab) |
| Visual pixel parity vs static HTML | Not screenshot-compared page-by-page |

### Responsive sampling (horizontal overflow)

Measured via CDP (`scrollWidth` vs `clientWidth` and `maxScroll`). `body { overflow-x: hidden }` prevents user horizontal scroll even when carousels widen `scrollWidth` (inherited from static carousel markup).

| Viewport | Page | User horizontal scroll? |
|----------|------|-------------------------|
| **390** | `/` | ✅ No (`sw === cw`) |
| **768** | `/services` | ✅ No (`maxScroll === 0`; carousel slides extend `scrollWidth` — inherited) |
| **1440** | `/careers` | ✅ No |

**Not run at all listed widths on all nine key pages:** 1280, 1024, 600, 480 on About, Industries, industry detail, Contact, Appointment (beyond fetch 200).

### Forms & configuration (code review + partial UI)

- Env names match `.env.example`: `VITE_EMAILJS_*`, `VITE_RECAPTCHA_SITE_KEY`.
- Missing EmailJS/reCAPTCHA → **error toasts**, no simulated success (contact differs from static simulated send when configured).
- Contact: `last_name` required in `formValidation.js` (static JS gap documented in 5D).
- Appointment: name, email, date, time required; message optional.
- **reCAPTCHA is client-side only** — not a substitute for server-side verification (unchanged from static).

### Assets & links

- No `.html` links in React nav/components (legacy URLs only in `search.json` / `siteSearch.js` mapping).
- Footer social icons: **no `href`** (inherited).
- Services “Expert Guidance” software logos: empty `href` + `preventDefault` (inherited).
- Industries “All Industries” button: empty `href` + `preventDefault` (inherited).
- Copyright string **“F1 Consultancy”** matches static footer typo.

### Inherited limitations (unchanged)

- Duplicate DOM ids for desktop vs mobile nav items (static pattern); active styling uses `.active` / `.nav-parent-active`.
- Careers process copy mentions resume upload; no upload UI on static or React.
- Job listings empty on careers (static empty state preserved).

### Phase 6B code changes

**None.** Documentation update only.

---

## Phase 7A — Deployment Readiness Audit (Complete)

### Build & hosting readiness

| Item | Status | Notes |
|------|--------|-------|
| `npm run build` | ✅ | Output: `dist/index.html`, `dist/assets/*`, `dist/images/**` (from `public/`) |
| Default `base` | ✅ | Vite default `/` — suitable for **root-domain** hosting |
| Asset paths | ✅ | Absolute `/images/...`, `/assets/...` — work from nested routes |
| Dev-only behavior | ✅ | No reliance on Vite dev server in production bundle |
| React Router | ✅ | `BrowserRouter` with no `basename` — app served from site root |

**Deploy artifact:** upload contents of `fic-react/dist/` (including `images/` and `assets/`).

### SPA fallback (required on most static hosts)

Client-side routes need the host to serve `index.html` for unknown paths **except** real files (`/assets/*`, `/images/*`, favicon, etc.).

| Environment | Deep-link behavior in 7A |
|-------------|---------------------------|
| `vite preview` | ✅ Nested paths return SPA shell (`id="root"`) — HTTP 200 |
| Generic static host **without** rewrite | ❌ Direct GET `/services/foo` typically **404** — must configure fallback |
| Generic static host **with** SPA rewrite | ✅ Expected to match preview behavior |

**Generic rewrite rule (conceptual):** if the requested path is not an existing file, respond with `/index.html` (status 200). Exact syntax depends on the host (nginx `try_files`, Apache `FallbackResource`, CDN “single-page app” mode, etc.). **No provider-specific config files were added** — configure on the chosen platform.

### Deep-link verification (preview `127.0.0.1:4174`)

HTTP 200 + SPA shell (`id="root"`) for:

- `/about`
- `/services/financialreporting`
- `/services/integrated-solutions`
- `/industries/building-construction`
- `/contact`, `/appointment`, `/careers`
- `/services/bad-slug` (fallback UI after hydration)

Static assets: `/images/common/logos/logo.png` 200, `/assets/index-*.js` 200.

Browser direct load: `/services/financialreporting`, `/services/integrated-solutions` show expected detail content.

### Environment variables (authoritative names)

Read from `src/utils/email.js` and `.env.example`:

| Variable | Required for | Notes |
|----------|----------------|-------|
| `VITE_EMAILJS_PUBLIC_KEY` | Contact + appointment send | EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | Contact + appointment send | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID_CONTACT` | Contact send | **Not** `VITE_EMAILJS_TEMPLATE_ID` (unused in codebase) |
| `VITE_EMAILJS_TEMPLATE_ID_CONTACT_REPLY` | Optional | Auto-reply; omit or leave empty if unused |
| `VITE_EMAILJS_TEMPLATE_ID_APPOINTMENT` | Appointment send | |
| `VITE_RECAPTCHA_SITE_KEY` | Both forms | reCAPTCHA v2 checkbox |

**Build-time embedding:** Vite replaces `import.meta.env.VITE_*` when running `npm run build`. Production forms **require** these variables to be set **before** the production build on the build machine/CI. Changing env on the host **without rebuilding** does not update the bundle.

**Git hygiene:** `.gitignore` excludes `.env`, `.env.*`, and `*.local`; `.env.example` is committed with placeholders only. No secrets in `src/`.

### Form production readiness (code review + preview)

| Check | Result |
|-------|--------|
| Validation before send | ✅ `formValidation.js` |
| Missing reCAPTCHA / EmailJS | ✅ Error toast; no success |
| Success only after `emailjs.send` resolves | ✅ `emailjsSubmit.js` |
| EmailJS failure | ✅ Catch → error toast; button reset; reCAPTCHA reset |
| Duplicate submit | ✅ `isSubmitting` guard + disabled controls |
| Success reset | ✅ Form cleared + reCAPTCHA reset (3s button phase) |
| Optional contact reply | ✅ Failure ignored after primary send succeeds |
| Server-side reCAPTCHA | ⚠️ Not implemented — client token check only (same as static) |

**Not executed in 7A:** live EmailJS success, reCAPTCHA checkbox, simulated network failure (requires mock injection or staging keys).

### Manual verification checklist (site owner — use staging, test data only)

1. Copy `.env.example` → `.env.local`; fill values from EmailJS + Google reCAPTCHA consoles (do not commit).
2. Run `npm run build` with env present; deploy `dist/`.
3. Confirm hosting SPA fallback on one nested URL (refresh `/contact`).
4. Contact: valid submit → success toast; inbox receives message; optional auto-reply if configured.
5. Appointment: valid submit → success toast; inbox receives booking.
6. Intentionally wrong template ID in staging → **error** toast, no success.
7. Register production domain on reCAPTCHA admin if domain-restricted.

### Security & repository hygiene (7A)

| Check | Result |
|-------|--------|
| Secrets in React source | ✅ None found |
| `.env.local` in repo | ✅ Not present; ignored by gitignore |
| `dangerouslySetInnerHTML` | ✅ Not used |
| WhatsApp `window.open` | ✅ `noopener,noreferrer` |
| Root repo git status | `?? fic-react/` (untracked React tree); root `index.html` whitespace diff **unchanged by 7A** |

### Smoke tests executed (preview)

| Test | Result |
|------|--------|
| Home | ✅ |
| Service detail (financial reporting, integrated-solutions) | ✅ |
| Contact (reCAPTCHA setup alert) | ✅ |
| Integrated-solutions direct URL | ✅ |
| Build + lint | ✅ |

**Not re-run in 7A:** industry detail browser snapshot (HTTP deep-link ✅), careers/appointment browser snapshots (HTTP ✅), theme toggle persistence, search/chatbot interaction, form empty-submit click.

### Deployment readiness checklist

**Ready now**

- [x] Production build succeeds
- [x] Route map complete (19 pages)
- [x] SPA asset path strategy (`/`, absolute public paths)
- [x] Env variable names documented and consistent in code + `.env.example`
- [x] Forms fail safely without configuration
- [x] Invalid slug fallback UI

**Required before safe production release**

- [ ] Choose host and enable **SPA fallback** for non-file routes
- [ ] Set all `VITE_*` variables and **rebuild** `dist/`
- [ ] Owner manual form tests with real EmailJS/reCAPTCHA (staging first)
- [ ] reCAPTCHA domain allowlist for production URL

**Known gaps / inherited**

- Full responsive/visual matrix (see Phase 6B)
- Footer social / empty CTA links (static parity)
- “F1 Consultancy” copyright typo (static parity)
- No server-side reCAPTCHA verification

**Blockers**

- **Cannot go live with working forms** until owner supplies EmailJS + reCAPTCHA and production build is run with those env vars.
- **Cannot deep-link on static hosting** until SPA fallback is configured.

### Phase 7A file changes

- `MIGRATION_STATUS.md` — this section
- `.env.example` — build-time + naming clarification
- `.gitignore` — explicit `.env` / `.env.*` ignore (keep `.env.example`)

---

## Phase 7B — Vercel Deployment Preparation (Complete, not deployed)

> **Authorization boundary:** No `vercel deploy`, no Vercel project creation, no remote env vars, no domain/DNS, no EmailJS/reCAPTCHA account changes. Local preparation only.

### Repository layout and Vercel root directory

| Item | Finding |
|------|---------|
| Git repository root | `D:/fic/ficonsultancy` |
| React app location | `fic-react/` (sibling to legacy static site) |
| **Recommended Vercel Root Directory** | **`fic-react`** |
| Why not repo root | Root contains static HTML/CSS/JS; building from root would not target the Vite app |

When connecting Git to Vercel (after owner approval), set **Root Directory** to `fic-react` so `package.json`, `vite.config.js`, and `vercel.json` are the project root.

### Vite ↔ Vercel compatibility

| Setting | Value | Notes |
|---------|--------|--------|
| Framework | Vite (auto-detected) | `@vitejs/plugin-react`, `vite.config.js` present |
| Install command | `npm install` (default) | Run in `fic-react` |
| Build command | `npm run build` | Runs `vite build` |
| Output directory | `dist` | Contains `index.html`, `assets/`, `images/` |
| Vite `base` | `/` (default) | Correct for apex domain or subdomain at `/` |
| Subdirectory deploy | Not configured | If ever deployed under a subpath, would need `base` + Router `basename` — **not required** for planned root/subdomain hosting |

Static files from `public/` copy to `dist/` (e.g. `dist/images/common/logos/logo.png`). Built JS/CSS use absolute `/assets/*` paths in `dist/index.html`.

### SPA fallback on Vercel

Vercel’s [Vite SPA documentation](https://vercel.com/docs/frameworks/frontend/vite) states deep linking does not work out of the box and recommends a rewrite to `index.html`. Vercel serves **existing static files before applying rewrites**, so `/assets/*` and `/images/*` should not be rewritten to HTML when those files exist in `dist/`.

**Added:** `fic-react/vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Intentionally omitted:** `cleanUrls`, extra `routes`, or duplicate framework settings — community reports show `cleanUrls: true` can break SPA rewrites unless the destination is `/index` instead of `/index.html`. Default dashboard `cleanUrls` should remain **off** unless tested.

**Not verified on Vercel production** (no deployment in 7B). Local `vite preview` confirms SPA shell for nested paths; that simulates behavior but does **not** execute `vercel.json` on Vercel’s edge.

**Uncertainty:** If the Vercel dashboard **Framework Preset** is set to “Other” instead of Vite, auto-detection may differ; owner should use **Vite** preset with Root Directory `fic-react`. If nested routes 404 after first deploy, confirm `vercel.json` is inside the configured root and redeploy.

### Environment variables (Vercel dashboard — owner, post-approval)

Same names as Phase 7A (`src/utils/email.js`):

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID_CONTACT`
- `VITE_EMAILJS_TEMPLATE_ID_CONTACT_REPLY` (optional)
- `VITE_EMAILJS_TEMPLATE_ID_APPOINTMENT`
- `VITE_RECAPTCHA_SITE_KEY`

**Build-time on Vercel:** Add variables in Project → Settings → Environment Variables for **Production** (and Preview if desired). Vercel injects them during `npm run build`. Changing a `VITE_*` value requires a **new deployment/build**.

**Public client config:** EmailJS public key and reCAPTCHA site key are browser-facing by design. Do not put private/server-only secrets in `VITE_*`.

**Not done in 7B:** No variables created in Vercel UI or CLI.

### Domain / DNS (owner, after authorization)

1. Create/link Vercel project (explicit approval).
2. Root Directory: **`fic-react`**.
3. Build: `npm run build`; Output: **`dist`**.
4. Add env vars; trigger production build.
5. Choose apex or subdomain in Vercel → Domains (exact hostname TBD).
6. At registrar, add **only** the DNS records Vercel displays (A/AAAA/CNAME) — do not guess values.
7. Wait for verification + HTTPS.
8. Add production hostname to reCAPTCHA allowed domains.
9. Smoke-test forms on the live hostname with test data.

Subdomains (e.g. `app.example.com`) need their **own** hostname in reCAPTCHA and Vercel; they do not inherit parent domain settings automatically.

### Security & Git (7B)

| Check | Result |
|-------|--------|
| Hardcoded secrets in `src/` | ✅ None |
| `.env.local` tracked | ✅ Not present |
| `.gitignore` | ✅ `.env`, `.env.*`, `!.env.example`, `.vercel` |
| `vercel.json` | ✅ Rewrite only; no secrets |
| Static site | ✅ Not modified |
| Root `index.html` whitespace diff | ✅ Preserved; not edited |

Vercel CLI: **not installed** on this machine (`vercel` not in PATH). No CLI linking performed.

### Local validation (7B)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ ~9.6s |
| `npm run lint` | ✅ Exit 0 (4 warnings) |
| `vite preview` `127.0.0.1:4175` | ✅ |
| HTTP 200 + SPA shell | `/`, `/services/financialreporting`, `/industries/transportation`, `/contact`, `/appointment`, `/careers`, invalid slugs |
| `/images/common/logos/logo.png` | ✅ 200 |

**Not executed:** Vercel preview/production URL tests; browser refresh UI pass on every route; live form submit.

### Phase 7B file changes

- `vercel.json` — SPA rewrite per Vercel Vite SPA docs
- `.gitignore` — ignore `.vercel`
- `MIGRATION_STATUS.md` — this section

### Remaining blockers before go-live

- Owner authorization to create Vercel project and deploy
- Env vars in Vercel + production build
- Domain choice + registrar DNS from Vercel UI
- reCAPTCHA domain allowlist for final hostname
- Post-deploy smoke test (forms, deep links on live URL)

---

## Next Steps (when approved)

1. **Owner-authorized Vercel deploy** — create/link project, Root Directory `fic-react`, set env vars, deploy Preview first, then Production after smoke tests.
2. Configure domain using Vercel-supplied DNS only; verify reCAPTCHA + EmailJS on live hostname.
3. Optional: full responsive/visual regression before DNS cutover.

---

*Original static website at `D:\fic\ficonsultancy` is the source of truth. Phases 7A–7B did not deploy or modify static site files.*
