import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useMobileMenu } from '../../context/MobileMenuContext'
import {
  mainNavItems,
  serviceNavItems,
  industryNavItemsMobile,
  servicePath,
  industryPath,
} from '../../data/navigation'
import {
  mobileIndustryIcons,
  mobileServiceIcons,
} from '../../lib/mobileNavIcons'
import SearchBar from './SearchBar'

const MIN_SWIPE_DISTANCE = 50

function mobileNavClass({ isActive }) {
  return isActive ? 'listsrespnav active' : 'listsrespnav'
}

export default function MobileNav() {
  const { isOpen, closeMenu } = useMobileMenu()
  const location = useLocation()
  const navRef = useRef(null)
  const touchStartRef = useRef({ x: 0, y: 0 })

  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  const isServicesActive = location.pathname.startsWith('/services')
  const isIndustriesActive = location.pathname.startsWith('/industries')

  useEffect(() => {
    closeMenu()
    setServicesOpen(false)
    setIndustriesOpen(false)
  }, [location.pathname, closeMenu])

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = {
      x: e.changedTouches[0].screenX,
      y: e.changedTouches[0].screenY,
    }
  }, [])

  const handleTouchEnd = useCallback(
    (e) => {
      const deltaX = touchStartRef.current.x - e.changedTouches[0].screenX
      const deltaY = touchStartRef.current.y - e.changedTouches[0].screenY

      if (
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > MIN_SWIPE_DISTANCE &&
        deltaX > 0
      ) {
        closeMenu()
      }
    },
    [closeMenu],
  )

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    nav.addEventListener('touchstart', handleTouchStart, { passive: true })
    nav.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      nav.removeEventListener('touchstart', handleTouchStart)
      nav.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchEnd])

  const toggleServices = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setServicesOpen((prev) => !prev)
  }

  const toggleIndustries = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setIndustriesOpen((prev) => !prev)
  }

  const handleNavLinkClick = () => {
    closeMenu()
  }

  return (
    <nav
      ref={navRef}
      className={`responsiveNavdiv${isOpen ? ' active' : ''}`}
      id="responsiveNavbardiv"
    >
      <div className="navRespInnerdivs" id="navlinksrespdiv">
        <SearchBar id="mobileSearchBarInput" variant="mobile" />

        <ul id="resplists">
          <li className="listitemsResp">
            <NavLink
              to="/"
              end
              className={mobileNavClass}
              id="home"
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>

          <li className="listitemsResp">
            <NavLink
              to="/about"
              className={mobileNavClass}
              id="about"
              onClick={handleNavLinkClick}
            >
              About
            </NavLink>
          </li>

          <li className="listitemsResp" id="servicesRespNavItem">
            <a
              href="/services"
              className={`listsrespnav${isServicesActive ? ' active nav-parent-active' : ''}`}
              id="services"
              onClick={toggleServices}
            >
              Services{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                id="servicesDropdownArrow"
                className={servicesOpen ? 'rotated' : ''}
              />
            </a>
            <ul
              id="servicesRespDropDownDiv"
              className={`servicesRespDropdown${servicesOpen ? ' active' : ''}`}
            >
              {serviceNavItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={servicePath(item.slug)}
                    className="serviceslistsrespnav"
                    onClick={handleNavLinkClick}
                  >
                    <FontAwesomeIcon
                      icon={mobileServiceIcons[item.mobileIcon]}
                    />{' '}
                    {item.mobileLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="listitemsResp" id="industriesRespNavItem">
            <a
              href="#"
              className={`listsrespnav${isIndustriesActive ? ' active nav-parent-active' : ''}`}
              id="industries"
              onClick={toggleIndustries}
            >
              Industries{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                id="industriesDropdownArrow"
                className={industriesOpen ? 'rotated' : ''}
              />
            </a>
            <ul
              id="industriesRespDropDownDiv"
              className={`industriesRespDropdown${industriesOpen ? ' active' : ''}`}
            >
              {industryNavItemsMobile.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={industryPath(item.slug)}
                    className="industrieslistsrespnav"
                    onClick={handleNavLinkClick}
                  >
                    <FontAwesomeIcon
                      icon={mobileIndustryIcons[item.mobileIcon]}
                    />{' '}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {mainNavItems
            .filter((item) => !['home', 'about'].includes(item.navId))
            .map((item) => (
              <li className="listitemsResp" key={item.navId}>
                <NavLink
                  to={item.to}
                  className={mobileNavClass}
                  id={item.navId}
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
        </ul>

        <div className="mobileAppointmentBtn">
          <Link
            to="/appointment"
            id="MakeAppointmentMobile"
            className="make-appointment-link"
            onClick={handleNavLinkClick}
          >
            Make Appointment
          </Link>
        </div>
      </div>
    </nav>
  )
}
