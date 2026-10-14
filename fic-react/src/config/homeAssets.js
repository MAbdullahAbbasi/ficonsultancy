/**
 * Home page image assets — mapped from index.html to public paths.
 */
const img = (path) => `/images/${path}`

export const homeAssets = {
  heroSlides: [
    img('banners/home/Landing page- Pic-1.jpg'),
    img('banners/home/Landing Page -Pic 2.jpg'),
    img('banners/home/Landing Page - Pic-3.jpg'),
    img('banners/home/Landing Page-1.jpg'),
  ],
  about: img('home/AboutUsLandingPage.jpg'),
  services: {
    financialReporting: img('financialReporting.jpg'),
    bookkeeping: img('pexels-cottonbro-4107100.jpg'),
    advisory: img('pexels-shkrabaanthony-5816299.jpg'),
    tax: img('pexels-n-voitkevich-6863336.jpg'),
    audit: img('pexels-leeloothefirst-8970297.jpg'),
    integratedSolutions: img('pexels-kindelmedia-7688333.jpg'),
  },
}

export default homeAssets
