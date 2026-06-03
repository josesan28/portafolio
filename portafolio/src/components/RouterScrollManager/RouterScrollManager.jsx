import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  clearSectionNavigation,
  scrollToSectionId,
} from '../../utils/sectionNavigation'

const SCROLL_STORAGE_PREFIX = '__portfolioScroll:'
let hasHandledInitialLoad = false

function getScrollStorageKey(location) {
  return `${SCROLL_STORAGE_PREFIX}${location.pathname}${location.search}`
}

function isReloadNavigation() {
  const navigationEntry = window.performance
    .getEntriesByType('navigation')
    .find((entry) => entry.entryType === 'navigation')

  return navigationEntry?.type === 'reload'
}

export default function RouterScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const storageKey = getScrollStorageKey(location)

    const persistScrollPosition = () => {
      window.sessionStorage.setItem(storageKey, String(window.scrollY))
    }

    persistScrollPosition()

    window.addEventListener('scroll', persistScrollPosition, { passive: true })
    window.addEventListener('beforeunload', persistScrollPosition)

    return () => {
      persistScrollPosition()
      window.removeEventListener('scroll', persistScrollPosition)
      window.removeEventListener('beforeunload', persistScrollPosition)
    }
  }, [location])

  useLayoutEffect(() => {
    const isInitialLoad = !hasHandledInitialLoad
    hasHandledInitialLoad = true

    if (isInitialLoad && isReloadNavigation()) {
      const savedScrollPosition = window.sessionStorage.getItem(
        getScrollStorageKey(location),
      )

      if (savedScrollPosition !== null) {
        clearSectionNavigation()
        window.scrollTo({
          top: Number(savedScrollPosition),
          behavior: 'auto',
        })
        return undefined
      }
    }

    const scrollToTarget = () => {
      if (location.hash) {
        const elementId = location.hash.replace('#', '')
        const behavior =
          location.state?.scrollBehavior === 'auto' ? 'auto' : undefined

        if (scrollToSectionId(elementId, { behavior })) {
          return
        }
      }

      clearSectionNavigation()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    scrollToTarget()

    return () => {
      clearSectionNavigation()
    }
  }, [location])

  return null
}
