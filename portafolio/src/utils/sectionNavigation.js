const SECTION_NAVIGATION_KEY = '__portfolioSectionNavigation'
const SECTION_NAVIGATION_TRACKER_KEY = '__portfolioSectionNavigationTracker'

export const NAVBAR_OFFSET = 108
export const SCROLL_SETTLE_THRESHOLD = 8
const MAX_SCROLL_WAIT = 1600

function stopSectionNavigationTracking() {
  const tracker = window[SECTION_NAVIGATION_TRACKER_KEY]

  if (!tracker) {
    return
  }

  if (tracker.frameId !== null) {
    window.cancelAnimationFrame(tracker.frameId)
  }

  if (tracker.timeoutId !== null) {
    window.clearTimeout(tracker.timeoutId)
  }

  delete window[SECTION_NAVIGATION_TRACKER_KEY]
}

export function startSectionNavigation(targetId, targetTop) {
  window[SECTION_NAVIGATION_KEY] = {
    targetId,
    targetTop,
    startedAt: Date.now(),
  }
}

export function getSectionNavigation() {
  return window[SECTION_NAVIGATION_KEY] ?? null
}

export function clearSectionNavigation() {
  stopSectionNavigationTracking()
  delete window[SECTION_NAVIGATION_KEY]
}

export function scrollToSectionId(sectionId, { updateHistory = false, historyMode = 'push' } = {}) {
  const target = document.getElementById(sectionId)

  if (!target) {
    return false
  }

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET)

  stopSectionNavigationTracking()
  startSectionNavigation(sectionId, top)

  if (updateHistory) {
    const method = historyMode === 'replace' ? 'replaceState' : 'pushState'
    const nextUrl = `${window.location.pathname}${window.location.search}#${sectionId}`
    window.history[method](window.history.state, '', nextUrl)
    window.dispatchEvent(new Event('sectionhashchange'))
  }

  if (Math.abs(window.scrollY - top) <= SCROLL_SETTLE_THRESHOLD) {
    clearSectionNavigation()
    return true
  }

  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  const startedAt = window.performance.now()

  const finishNavigation = () => {
    clearSectionNavigation()
  }

  const checkPosition = () => {
    const closeEnough = Math.abs(window.scrollY - top) <= SCROLL_SETTLE_THRESHOLD
    const timedOut = window.performance.now() - startedAt >= MAX_SCROLL_WAIT

    if (closeEnough || timedOut) {
      finishNavigation()
      return
    }

    window[SECTION_NAVIGATION_TRACKER_KEY].frameId = window.requestAnimationFrame(checkPosition)
  }

  window.scrollTo({ top, behavior })

  window[SECTION_NAVIGATION_TRACKER_KEY] = {
    frameId: window.requestAnimationFrame(checkPosition),
    timeoutId: window.setTimeout(finishNavigation, MAX_SCROLL_WAIT + 120),
  }

  return true
}
