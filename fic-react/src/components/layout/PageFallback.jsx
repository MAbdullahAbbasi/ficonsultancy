/** Shown while lazy-loaded route chunks download. */
export default function PageFallback() {
  return (
    <div
      className="page-fallback"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    />
  )
}
