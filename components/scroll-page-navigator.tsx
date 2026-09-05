"use client"

import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export const PAGE_ORDER = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/certifications", label: "Certifications" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

/** Fired on window while a page-to-page pull gesture is in progress (progress 0 clears it). */
export const PAGE_PULL_EVENT = "portfolio:page-pull"

export interface PagePullDetail {
  direction: "next" | "prev" | null
  href: string | null
  progress: number // 0..1
}

type Direction = "next" | "prev"
type Source = "scroll" | "touch" | "key"

// Gesture tuning
const WHEEL_PULL_PX = 360 // extra wheel travel at an edge that completes the gesture
const TOUCH_PULL_PX = 140 // finger travel past an edge that completes the gesture
const SHOW_AFTER = 0.06 // progress before the hint becomes visible
const EDGE_SETTLE_MS = 450 // ignore wheel momentum right after arriving at an edge
const WHEEL_GAP_RESET_MS = 300 // a pause this long starts a fresh gesture
const NAV_COOLDOWN_MS = 1500 // ignore gestures right after a navigation
const KEY_CONFIRM_MS = 1500 // second key press must arrive within this window
const HIDE_AFTER_MS: Record<Source, number> = { scroll: 700, touch: 1500, key: KEY_CONFIRM_MS }
const EDGE_TOLERANCE_PX = 2

interface Ui {
  direction: Direction | null
  label: string
  source: Source
  progress: number
  visible: boolean
}

const IDLE_UI: Ui = { direction: null, label: "", source: "scroll", progress: 0, visible: false }

const isAtTop = () => window.scrollY <= EDGE_TOLERANCE_PX
const isAtBottom = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight
  return max <= 0 || window.scrollY >= max - EDGE_TOLERANCE_PX
}
const isTypingTarget = (t: EventTarget | null) => {
  const el = t as HTMLElement | null
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable)
}
const isInteractiveTarget = (t: EventTarget | null) =>
  !!(t as HTMLElement | null)?.closest?.("button, a, input, textarea, select, [role='button']")
// Never change page while a dialog (e.g. the certificate viewer) is open.
const overlayOpen = () =>
  !!document.querySelector(
    '[role="dialog"][data-state="open"], [role="alertdialog"][data-state="open"], body[data-scroll-locked]',
  )
const wheelDeltaY = (e: WheelEvent) =>
  e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY

function hintFor(source: Source, progress: number) {
  if (source === "key") return "Press again for"
  if (source === "touch") return progress >= 1 ? "Release to open" : "Keep pulling for"
  return "Keep scrolling for"
}

/**
 * Page-to-page navigation from the edges of a page.
 *
 * Reaching the bottom (or top) of a page never navigates by itself. The visitor has to
 * keep scrolling, pull with a finger, or press a key a second time while already at the
 * edge; a hint with a progress bar shows what is about to happen and how far along the
 * gesture is. Momentum that carried the page to the edge is ignored, and nothing fires
 * while a dialog is open or a form field is focused.
 */
export function ScrollPageNavigator() {
  const router = useRouter()
  const pathname = usePathname()
  const index = PAGE_ORDER.findIndex((p) => p.href === pathname)

  const [ui, setUi] = useState<Ui>(IDLE_UI)

  const gesture = useRef<{ direction: Direction | null; progress: number; source: Source }>({
    direction: null,
    progress: 0,
    source: "scroll",
  })
  const edgeSince = useRef<{ top: number | null; bottom: number | null }>({ top: null, bottom: null })
  const lastWheelAt = useRef(0)
  const lastNavAt = useRef(0)
  const keyArmedAt = useRef(0)
  const touch = useRef<{ y: number; top: boolean; bottom: boolean } | null>(null)
  const hideTimer = useRef<number | null>(null)
  const frame = useRef<number | null>(null)

  const targetFor = useCallback(
    (direction: Direction) => (index === -1 ? null : (PAGE_ORDER[direction === "next" ? index + 1 : index - 1] ?? null)),
    [index],
  )

  const broadcast = (direction: Direction | null, href: string | null, progress: number) =>
    window.dispatchEvent(new CustomEvent<PagePullDetail>(PAGE_PULL_EVENT, { detail: { direction, href, progress } }))

  const reset = useCallback(() => {
    const active = gesture.current.direction !== null
    gesture.current = { direction: null, progress: 0, source: "scroll" }
    keyArmedAt.current = 0
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
    if (frame.current) {
      cancelAnimationFrame(frame.current)
      frame.current = null
    }
    if (active) {
      setUi((u) => ({ ...u, progress: 0, visible: false }))
      broadcast(null, null, 0)
    }
  }, [])

  const paint = useCallback(
    (direction: Direction, source: Source, progress: number) => {
      const target = targetFor(direction)
      if (!target) return
      const p = Math.min(1, Math.max(0, progress))
      gesture.current = { direction, progress: p, source }
      if (frame.current) cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        frame.current = null
        setUi({ direction, label: target.label, source, progress: p, visible: p >= SHOW_AFTER })
        broadcast(direction, target.href, p)
      })
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(reset, HIDE_AFTER_MS[source])
    },
    [targetFor, reset],
  )

  const navigate = useCallback(
    (direction: Direction) => {
      const target = targetFor(direction)
      if (!target) return
      lastNavAt.current = performance.now()
      reset()
      router.push(target.href)
    },
    [targetFor, reset, router],
  )

  // Fresh page: start the cooldown, treat any current edge as "just arrived", clear gestures.
  useEffect(() => {
    const now = performance.now()
    lastNavAt.current = now
    edgeSince.current = { top: isAtTop() ? now : null, bottom: isAtBottom() ? now : null }
    lastWheelAt.current = 0
    touch.current = null
    reset()
  }, [pathname, reset])

  useEffect(() => {
    if (index === -1) return

    const busy = () => performance.now() - lastNavAt.current < NAV_COOLDOWN_MS || overlayOpen()

    const onScroll = () => {
      const now = performance.now()
      const top = isAtTop()
      const bottom = isAtBottom()
      edgeSince.current.top = top ? (edgeSince.current.top ?? now) : null
      edgeSince.current.bottom = bottom ? (edgeSince.current.bottom ?? now) : null
      if (!top && !bottom) reset()
    }

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      if (busy()) return
      const now = performance.now()
      const dy = wheelDeltaY(e)
      const direction: Direction | null = dy > 0 && isAtBottom() ? "next" : dy < 0 && isAtTop() ? "prev" : null
      if (!direction || !targetFor(direction)) {
        reset()
        return
      }
      const since = direction === "next" ? edgeSince.current.bottom : edgeSince.current.top
      if (since === null || now - since < EDGE_SETTLE_MS) {
        lastWheelAt.current = now
        return
      }
      const g = gesture.current
      const fresh = g.direction !== direction || g.source !== "scroll" || now - lastWheelAt.current > WHEEL_GAP_RESET_MS
      lastWheelAt.current = now
      const progress = (fresh ? 0 : g.progress) + Math.abs(dy) / WHEEL_PULL_PX
      if (progress >= 1) navigate(direction)
      else paint(direction, "scroll", progress)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || isTypingTarget(e.target)) return
      if (e.key === " " && isInteractiveTarget(e.target)) return
      if (busy()) return
      const down = e.key === "PageDown" || e.key === "ArrowDown" || e.key === " "
      const up = e.key === "PageUp" || e.key === "ArrowUp"
      const direction: Direction | null = down && isAtBottom() ? "next" : up && isAtTop() ? "prev" : null
      if (!direction || !targetFor(direction)) return
      e.preventDefault()
      const now = performance.now()
      const armed = gesture.current.direction === direction && gesture.current.source === "key"
      if (armed && now - keyArmedAt.current < KEY_CONFIRM_MS) {
        navigate(direction)
      } else {
        keyArmedAt.current = now
        paint(direction, "key", 0.5)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY
      touch.current = y === undefined ? null : { y, top: isAtTop(), bottom: isAtBottom() }
    }
    const onTouchMove = (e: TouchEvent) => {
      const start = touch.current
      if (!start || busy()) return
      const y = e.touches[0]?.clientY ?? start.y
      const dy = start.y - y // positive when swiping up
      const direction: Direction | null =
        dy > 0 && start.bottom && isAtBottom() ? "next" : dy < 0 && start.top && isAtTop() ? "prev" : null
      if (!direction || !targetFor(direction)) {
        reset()
        return
      }
      paint(direction, "touch", Math.abs(dy) / TOUCH_PULL_PX)
    }
    const onTouchEnd = () => {
      const g = gesture.current
      touch.current = null
      if (g.direction && g.source === "touch" && g.progress >= 1) navigate(g.direction)
      else reset()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd)
    window.addEventListener("touchcancel", onTouchEnd)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("touchcancel", onTouchEnd)
    }
  }, [index, targetFor, paint, navigate, reset])

  const isPrev = ui.direction === "prev"
  const Chevron = isPrev ? ChevronUp : ChevronDown

  return (
    <div
      aria-live="polite"
      className={`fixed left-1/2 z-40 w-max max-w-[92vw] -translate-x-1/2 transition-all duration-200 ${
        isPrev ? "top-20" : "bottom-6"
      } ${
        ui.visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : `pointer-events-none opacity-0 ${isPrev ? "-translate-y-2" : "translate-y-2"}`
      }`}
    >
      <button
        type="button"
        tabIndex={ui.visible ? 0 : -1}
        onClick={() => ui.direction && navigate(ui.direction)}
        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-lg backdrop-blur transition-colors hover:text-gray-900 dark:border-neutral-800 dark:bg-black/80 dark:text-gray-300 dark:hover:text-white sm:text-sm"
      >
        <Chevron className={`h-4 w-4 ${ui.progress >= 1 ? "" : "animate-bounce"}`} />
        <span>
          {hintFor(ui.source, ui.progress)} <strong className="text-gray-900 dark:text-white">{ui.label}</strong>
        </span>
      </button>
      <div className="mx-4 mt-1.5 h-1 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-gray-900 transition-[width] duration-75 ease-out dark:bg-white"
          style={{ width: `${ui.progress * 100}%` }}
        />
      </div>
    </div>
  )
}
