import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SectionHashTracker({ sectionIds }) {
  const location = useLocation()

  useEffect(() => {
    const isHomeRoute = location.pathname === '/' || location.pathname === '/proyectos'

    if (!isHomeRoute) {
      return undefined
    }

    const visibilityById = new Map()
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const updateHash = () => {
      const visibleSections = [...visibilityById.entries()].filter(([, ratio]) => ratio > 0)

      if (!visibleSections.length) {
        return
      }

      const [activeId] = visibleSections.sort((a, b) => b[1] - a[1])[0]
      const nextHash = `#${activeId}`

      if (window.location.hash !== nextHash) {
        window.history.replaceState(window.history.state, '', `${location.pathname}${nextHash}`)
        window.dispatchEvent(new Event('sectionhashchange'))
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityById.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          )
        })

        updateHash()
      },
      {
        root: null,
        rootMargin: '-120px 0px -42% 0px',
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
      }
    )

    sections.forEach((section) => {
      visibilityById.set(section.id, 0)
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [location.pathname, sectionIds])

  return null
}
