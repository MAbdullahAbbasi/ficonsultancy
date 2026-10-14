import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

const MobileMenuContext = createContext(null)

export function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  useBodyScrollLock(isOpen)

  const openMenu = useCallback(() => setIsOpen(true), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])

  const value = useMemo(
    () => ({ isOpen, openMenu, closeMenu, toggleMenu }),
    [isOpen, openMenu, closeMenu, toggleMenu],
  )

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export function useMobileMenu() {
  const ctx = useContext(MobileMenuContext)
  if (!ctx) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider')
  }
  return ctx
}
