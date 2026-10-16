import { useCallback, useEffect, useRef, useState } from 'react'

const INTERVAL_MS = 5000

/**
 * Home hero carousel — mirrors scripts/main.js (5s auto-advance, dot navigation).
 */
export function useHeroCarousel(slideCount) {
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

  const goToSlide = useCallback(
    (index) => {
      setPreviousIndex(currentIndex)
      setCurrentIndex(index)
      startCarousel()
    },
    [currentIndex, startCarousel],
  )

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
    const classes = ['carousel-slide']
    if (index === currentIndex) classes.push('active')
    if (index === previousIndex && index !== currentIndex) classes.push('prev')
    if (index === 0 && immediateVisible) classes.push('immediate-visible')
    return classes.join(' ')
  }

  return {
    currentIndex,
    previousIndex,
    immediateVisible,
    goToSlide,
    getSlideClassName,
  }
}
