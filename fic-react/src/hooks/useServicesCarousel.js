import { useCallback, useEffect, useRef, useState } from 'react'

const INTERVAL_MS = 2000

/**
 * Services-style page carousel — mirrors scripts/main.js (2s auto-advance).
 * Used by About, Services, and Industries listing pages.
 */
export function useServicesCarousel(slideCount) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)
  const [immediateVisible, setImmediateVisible] = useState(true)
  const intervalRef = useRef(null)

  const clearCarouselInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startCarousel = useCallback(() => {
    clearCarouselInterval()
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        setPreviousIndex(prev)
        return (prev + 1) % slideCount
      })
    }, INTERVAL_MS)
  }, [clearCarouselInterval, slideCount])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImmediateVisible(false)
      startCarousel()
    }, 200)

    return () => {
      clearTimeout(timeout)
      clearCarouselInterval()
    }
  }, [clearCarouselInterval, startCarousel])

  const getSlideClassName = (index) => {
    const classes = ['services-carousel-slide']
    if (index === currentIndex) classes.push('active')
    if (index === previousIndex && index !== currentIndex) classes.push('prev')
    if (index === 0 && immediateVisible) classes.push('immediate-visible')
    return classes.join(' ')
  }

  return { getSlideClassName }
}
