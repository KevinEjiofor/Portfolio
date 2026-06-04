"use client"

import { useRouter, usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

const order = [
  "/",
  "/about",
  "/expertise",
  "/certifications",
  "/work",
  "/experience",
  "/contact",
]

const NAV_COOLDOWN_MS = 1200
const WHEEL_THRESHOLD = 1
const TOUCH_THRESHOLD = 30

export function ScrollPageNavigator() {
  const router = useRouter()
  const pathname = usePathname()
  const lastNavAt = useRef(0)
  const wheelAccum = useRef(0)
  const touchStartY = useRef<number | null>(null)
  const touchAccum = useRef(0)

  useEffect(() => {
    // Reset when page changes
    wheelAccum.current = 0
    touchAccum.current = 0
    touchStartY.current = null
    lastNavAt.current = Date.now()
  }, [pathname])

  useEffect(() => {
    const idx = order.indexOf(pathname)
    if (idx === -1) return

    const isAtTop = () => window.scrollY <= 1
    const isAtBottom = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      return scrollableHeight <= 0 || window.scrollY >= scrollableHeight - 1
    }

    const goNext = () => {
      if (idx < order.length - 1) {
        lastNavAt.current = Date.now()
        wheelAccum.current = 0
        touchAccum.current = 0
        router.push(order[idx + 1])
      }
    }
    const goPrev = () => {
      if (idx > 0) {
        lastNavAt.current = Date.now()
        wheelAccum.current = 0
        touchAccum.current = 0
        router.push(order[idx - 1])
        // Position at top after navigation; the new page mounts fresh anyway.
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (Date.now() - lastNavAt.current < NAV_COOLDOWN_MS) return
      const dy = e.deltaY
      // Only count delta when we're at an edge in the matching direction
      if (dy > 0 && isAtBottom()) {
        wheelAccum.current = Math.max(0, wheelAccum.current) + dy
        if (wheelAccum.current > WHEEL_THRESHOLD) goNext()
      } else if (dy < 0 && isAtTop()) {
        wheelAccum.current = Math.min(0, wheelAccum.current) + dy
        if (wheelAccum.current < -WHEEL_THRESHOLD) goPrev()
      } else {
        // Drift back toward zero when not at an edge
        wheelAccum.current = 0
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (Date.now() - lastNavAt.current < NAV_COOLDOWN_MS) return
      const target = e.target as HTMLElement | null
      // Don't hijack typing in inputs/textareas
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return
      if (
        (e.key === "PageDown" || e.key === "ArrowDown" || e.key === " ") &&
        isAtBottom()
      ) {
        e.preventDefault()
        goNext()
      } else if (
        (e.key === "PageUp" || e.key === "ArrowUp") &&
        isAtTop()
      ) {
        e.preventDefault()
        goPrev()
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null
      touchAccum.current = 0
    }
    const onTouchMove = (e: TouchEvent) => {
      if (Date.now() - lastNavAt.current < NAV_COOLDOWN_MS) return
      if (touchStartY.current === null) return
      const y = e.touches[0]?.clientY ?? touchStartY.current
      const dy = touchStartY.current - y // positive when swiping up
      if (dy > 0 && isAtBottom()) {
        touchAccum.current = dy
        if (touchAccum.current > TOUCH_THRESHOLD) goNext()
      } else if (dy < 0 && isAtTop()) {
        touchAccum.current = dy
        if (touchAccum.current < -TOUCH_THRESHOLD) goPrev()
      }
    }
    const onTouchEnd = () => {
      touchStartY.current = null
      touchAccum.current = 0
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("keydown", onKey)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd)

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [pathname, router])

  return null
}

