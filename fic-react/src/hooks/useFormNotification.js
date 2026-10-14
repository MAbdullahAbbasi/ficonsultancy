import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Toast notifications matching scripts/contact.js and scripts/appointment.js behavior.
 */
export function useFormNotification() {
  const [notification, setNotification] = useState(null)
  const hideTimerRef = useRef(null)

  const clearNotification = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
    setNotification(null)
  }, [])

  const showNotification = useCallback(
    (message, type = 'error') => {
      clearNotification()
      setNotification({ message, type, id: Date.now() })

      hideTimerRef.current = setTimeout(() => {
        setNotification(null)
      }, type === 'success' ? 5000 : 5000)
    },
    [clearNotification],
  )

  useEffect(() => () => clearNotification(), [clearNotification])

  return { notification, showNotification, clearNotification }
}
