import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSectionNavigation } from '../../utils/sectionNavigation'

const NAVBAR_OFFSET = 108
const HASH_SYNC_THRESHOLD = 8

export default function SectionHashTracker({ sectionIds }) {
  const location = useLocation()

  useEffect(() => {
    const isHomeRoute = location.pathname === '/'

    if (!isHomeRoute) {
      return undefined
    }

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const setHash = (sectionId) => {
      const nextHash = `#${sectionId}`

      if (window.location.hash !== nextHash) {
        window.history.replaceState(window.history.state, '', `${location.pathname}${nextHash}`)
        window.dispatchEvent(new Event('sectionhashchange'))
      }
    }

    const updateHash = () => {
      const activeNavigation = getSectionNavigation()

      if (activeNavigation) {
        const distanceToTarget = Math.abs(window.scrollY - activeNavigation.targetTop)

        if (distanceToTarget > HASH_SYNC_THRESHOLD) {
          return
        }
      }

      const activationLine = NAVBAR_OFFSET + 32
      const sectionRects = sections.map((section) => {
        const rect = section.getBoundingClientRect()

        return {
          id: section.id,
          top: rect.top,
          bottom: rect.bottom,
          distance: Math.abs(rect.top - activationLine),
        }
      })

      const intersectingSection = sectionRects.find(
        ({ top, bottom }) => top <= activationLine && bottom > activationLine,
      )

      const nearestSection =
        intersectingSection ||
        sectionRects
          .filter(({ bottom }) => bottom > 0)
          .sort((a, b) => a.distance - b.distance)[0]

      if (!nearestSection) {
        return
      }

      setHash(nearestSection.id)
    }

    let frameId = null

    const scheduleUpdate = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateHash()
      })
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    updateHash()

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [location.pathname, sectionIds])

  return null
}
