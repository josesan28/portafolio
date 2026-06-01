import { useEffect, useRef } from 'react'
import './CursorGlow.css'

const DESKTOP_MEDIA_QUERY = '(min-width: 1024px) and (pointer: fine)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glowElement = glowRef.current

    if (!glowElement) {
      return undefined
    }

    const desktopMedia = window.matchMedia(DESKTOP_MEDIA_QUERY)
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY)

    if (!desktopMedia.matches || reducedMotionMedia.matches) {
      return undefined
    }

    let frameId = null
    let isPointerVisible = false

    const pointer = {
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    }

    const updateGlowPosition = () => {
      pointer.currentX += (pointer.targetX - pointer.currentX) * 0.14
      pointer.currentY += (pointer.targetY - pointer.currentY) * 0.14

      glowElement.style.transform = `translate3d(${pointer.currentX}px, ${pointer.currentY}px, 0) translate(-50%, -50%)`

      if (
        Math.abs(pointer.targetX - pointer.currentX) > 0.1 ||
        Math.abs(pointer.targetY - pointer.currentY) > 0.1
      ) {
        frameId = window.requestAnimationFrame(updateGlowPosition)
      } else {
        frameId = null
      }
    }

    const scheduleUpdate = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateGlowPosition)
    }

    const handlePointerMove = (event) => {
      pointer.targetX = event.clientX
      pointer.targetY = event.clientY

      if (!isPointerVisible) {
        isPointerVisible = true
        glowElement.classList.add('cursor-glow--visible')
      }

      scheduleUpdate()
    }

    const handlePointerLeave = () => {
      isPointerVisible = false
      glowElement.classList.remove('cursor-glow--visible')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}