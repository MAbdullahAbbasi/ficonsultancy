import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useMobileMenu } from '../../context/MobileMenuContext'
import { useTheme } from '../../context/ThemeContext'
import { images } from '../../config/assets'
import {
  mainNavItems,
  serviceNavItems,
  industryNavItemsDesktop,
  servicePath,
  industryPath,
} from '../../data/navigation'
import SearchBar from './SearchBar'

function desktopNavClass({ isActive }) {
  return isActive ? 'listsnav active' : 'listsnav'
}

export default function Header() {
  const { isOpen, toggleMenu } = useMobileMenu()
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const isServicesActive = location.pathname.startsWith('/services')
  const isIndustriesActive = location.pathname.startsWith('/industries')

  return (
    <nav className="navdiv">
      <div className="navInnerdivs" id="navresponsiveIcons">
        <div
          className="menu-icon"
          id="openMenu"
          role="button"
          tabIndex={0}
          aria-label="Open menu"
          style={{ display: isOpen ? 'none' : 'flex' }}
          onClick={toggleMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleMenu()
            }
          }}
        >
          &#9776;
        </div>
        <div
          className="menu-icon menu-close-icon"
          id="closeMenu"
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          style={{ display: isOpen ? 'flex' : 'none' }}
          onClick={toggleMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleMenu()
            }
          }}
        >
          &#10005;
        </div>
      </div>

      <div className="navInnerdivs" id="navfirstdiv">
        <h1 className="navh1">
          <Link to="/">
            <img
              src={isDark ? images.logos.headerDark : images.logos.header}
              alt="FI Consultancy Logo"
              id="headerlogo"
            />
          </Link>
        </h1>
      </div>

      <div className="navInnerdivs" id="navlinksdiv">
        <ul id="lists">
          <li>
            <NavLink to="/" end className={desktopNavClass} id="home">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={desktopNavClass} id="about">
              About
            </NavLink>
          </li>

          <li
            className={`listsnav${isServicesActive ? ' nav-parent-active' : ''}`}
            id="servicesNavItem"
          >
            <NavLink to="/services" className={desktopNavClass} id="services">
              Services
            </NavLink>

            <div id="servicesDropDownDiv">
              {serviceNavItems.map((item) => (
                <span key={item.slug}>
                  <Link
                    to={servicePath(item.slug)}
                    className="serviceslistsnav"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </li>

          <li
            className={`listsnav${isIndustriesActive ? ' nav-parent-active' : ''}`}
            id="industriesNavItem"
          >
            <NavLink to="/industries" className={desktopNavClass}>
              Industries
            </NavLink>

            <div id="industriesDropDownDiv">
              {industryNavItemsDesktop.map((item) => (
                <span key={item.slug}>
                  <Link
                    to={industryPath(item.slug)}
                    className="industrieslistsnav"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </li>

          {mainNavItems
            .filter((item) => !['home', 'about'].includes(item.navId))
            .map((item) => (
              <li key={item.navId}>
                <NavLink
                  to={item.to}
                  className={desktopNavClass}
                  id={item.navId}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      <SearchBar id="searchBarInput" variant="desktop" />

      <div className="navInnerdivs" id="themeToggleDiv">
        <button
          type="button"
          id="themeToggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>
      </div>

      <div className="navInnerdivs" id="appointmentBtnDiv">
        <Link to="/appointment" id="MakeAppointment" className="make-appointment-link">
          Make Appointment
        </Link>
      </div>
    </nav>
  )
}
