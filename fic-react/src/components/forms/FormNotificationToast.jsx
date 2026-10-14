import '../../styles/components/form-notification.css'

export default function FormNotificationToast({ notification }) {
  if (!notification) return null

  return (
    <div
      className={`form-notification form-notification--${notification.type}`}
      role="status"
      aria-live="polite"
    >
      {notification.message}
    </div>
  )
}
