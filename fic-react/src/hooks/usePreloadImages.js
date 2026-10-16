import { useEffect } from 'react'

/** Prefetch image URLs in the background (browser cache). */
export function usePreloadImages(urls) {
  useEffect(() => {
    const unique = [...new Set(urls.filter(Boolean))]
    unique.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [urls])
}
