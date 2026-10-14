import { useMobileMenu } from '../../context/MobileMenuContext'

export default function MenuBackdrop() {
  const { isOpen, closeMenu } = useMobileMenu()

  return (
    <div
      className={`menuBackdrop${isOpen ? ' active' : ''}`}
      aria-hidden={!isOpen}
      onClick={closeMenu}
    />
  )
}
