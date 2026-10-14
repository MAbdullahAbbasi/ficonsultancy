/**
 * Asset path strategy for FI Consultancy React app.
 *
 * All static images live in public/images/ (copied from the original site).
 * Reference them with absolute public paths — never use ../../images/ in components.
 *
 * @example
 *   <img src={images.logo} alt="FI Consultancy" />
 *   style={{ backgroundImage: `url('${images.banners.home.landing1}')` }}
 */

const img = (path) => `/images/${path}`

export const images = {
  favicon: img('logoFI.jpg'),
  logos: {
    header: img('common/logos/logo.png'),
    headerDark: img('common/logos/logofooter.png'),
    footer: img('common/logos/logofooter.png'),
    light: img('common/logos/logoLight.png'),
    dark: img('common/logos/logoDark.png'),
  },
}

export default images
