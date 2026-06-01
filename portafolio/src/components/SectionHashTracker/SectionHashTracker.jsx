import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
      const hashOffset = Math.max(120, Math.floor(window.innerHeight * 0.35))
      const candidates = sections
        .map((section) => {
          const rect = section.getBoundingClientRect()

          return {
            id: section.id,
            top: rect.top,
            bottom: rect.bottom,
          }
        })
        .filter(({ bottom }) => bottom > hashOffset)

      if (!candidates.length) {
        return
      }

      const activeSection =
        candidates
          .filter(({ top }) => top <= hashOffset)
          .sort((a, b) => b.top - a.top)[0] ||
        candidates.sort((a, b) => a.top - b.top)[0]

      setHash(activeSection.id)
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
