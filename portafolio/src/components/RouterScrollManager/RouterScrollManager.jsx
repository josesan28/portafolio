import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  clearSectionNavigation,
  scrollToSectionId,
} from '../../utils/sectionNavigation'

export default function RouterScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const elementId = location.hash.replace('#', '')

        if (scrollToSectionId(elementId)) {
          return
        }
      }

      clearSectionNavigation()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    const frameId = window.requestAnimationFrame(scrollToTarget)

    return () => {
      clearSectionNavigation()
      window.cancelAnimationFrame(frameId)
    }
  }, [location.pathname, location.hash])

  return null
}
