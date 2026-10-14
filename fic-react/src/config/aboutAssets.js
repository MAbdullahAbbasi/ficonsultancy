/**
 * About page image assets — mapped from pages/about.html.
 */
const img = (path) => `/images/${path}`

export const aboutAssets = {
  heroSlides: [
    img('banners/about/About.jpg'),
    img('banners/about/About us-1.jpg'),
    img('banners/about/About us-2.jpg'),
    img('banners/about/About Us-4.jpg'),
  ],
  whoWeAre: img('about/WhoweareSidePic.jpg'),
}

export default aboutAssets
