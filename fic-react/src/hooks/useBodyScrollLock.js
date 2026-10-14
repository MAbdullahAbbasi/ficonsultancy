import { useEffect, useRef } from 'react'

/**
 * Mirrors original main.js body scroll lock when mobile menu is open.
 */
export function useBodyScrollLock(locked) {
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (!locked) return

    scrollYRef.current = window.scrollY
    document.body.style.top = `-${scrollYRef.current}px`
    document.body.classList.add('menuOpen')

    return () => {
      const scrollY = scrollYRef.current
      document.body.classList.remove('menuOpen')
      document.body.style.top = ''
      window.scrollTo(0, scrollY)
    }
  }, [locked])
}
