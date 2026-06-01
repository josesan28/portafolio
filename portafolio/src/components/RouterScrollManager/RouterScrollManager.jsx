import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAVBAR_OFFSET = 108

export default function RouterScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const elementId = location.hash.replace('#', '')
        const target = document.getElementById(elementId)

        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
          window.scrollTo({ top, behavior: 'smooth' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    const frameId = window.requestAnimationFrame(scrollToTarget)
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash])

  return null
}
