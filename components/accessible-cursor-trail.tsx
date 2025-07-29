"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"
import { useAccessibility } from "@/components/accessibility-provider"

interface TrailPoint {
  x: number
  y: number
  id: number
  timestamp: number
}

interface CursorPosition {
  x: number
  y: number
}

export function AccessibleCursorTrail() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const { settings, prefersReducedMotion } = useAccessibility()
  const animationRef = useRef<number>()
  const lastUpdateRef = useRef<number>(0)

  // Don't render cursor effects if disabled or reduced motion is preferred
  const shouldShowEffects = settings.cursorEffects && !settings.reducedMotion && !prefersReducedMotion

  useEffect(() => {
    if (!shouldShowEffects) {
      setIsVisible(false)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [shouldShowEffects])

  useEffect(() => {
    if (!shouldShowEffects || !isVisible) return

    const updateTrail = (timestamp: number) => {
      const throttleRate = settings.animationSpeed === "slow" ? 32 : settings.animationSpeed === "fast" ? 8 : 16

      if (timestamp - lastUpdateRef.current > throttleRate) {
        setTrailPoints((prevPoints) => {
          const newPoint: TrailPoint = {
            x: mousePosition.x,
            y: mousePosition.y,
            id: timestamp,
            timestamp,
          }

          const maxPoints = settings.animationSpeed === "slow" ? 10 : settings.animationSpeed === "fast" ? 30 : 20
          const updatedPoints = [newPoint, ...prevPoints.slice(0, maxPoints - 1)]
          return updatedPoints.filter((point) => timestamp - point.timestamp < 1000)
        })
        lastUpdateRef.current = timestamp
      }
      animationRef.current = requestAnimationFrame(updateTrail)
    }

    animationRef.current = requestAnimationFrame(updateTrail)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, isVisible, shouldShowEffects, settings.animationSpeed])

  if (!shouldShowEffects || !isVisible) return null

  const speedMultiplier = settings.animationSpeed === "slow" ? 2 : settings.animationSpeed === "fast" ? 0.5 : 1

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Main Cursor Follower */}
      <div
        className="absolute w-4 h-4 rounded-full transition-all ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transitionDuration: `${100 * speedMultiplier}ms`,
          background:
            theme === "dark"
              ? settings.highContrast
                ? "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 100%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.4) 100%)"
              : settings.highContrast
                ? "radial-gradient(circle, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 100%)"
                : "radial-gradient(circle, rgba(37, 99, 235, 0.8) 0%, rgba(124, 58, 237, 0.4) 100%)",
          boxShadow: settings.highContrast
            ? theme === "dark"
              ? "0 0 20px rgba(255, 255, 255, 0.8)"
              : "0 0 20px rgba(0, 0, 0, 0.8)"
            : theme === "dark"
              ? "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)"
              : "0 0 15px rgba(37, 99, 235, 0.4), 0 0 30px rgba(124, 58, 237, 0.2)",
        }}
      />

      {/* Trail Points */}
      {trailPoints.map((point, index) => {
        const age = Date.now() - point.timestamp
        const opacity = Math.max(0, 1 - age / 1000)
        const scale = Math.max(0.1, 1 - index * 0.05)
        const delay = index * 0.02 * speedMultiplier

        return (
          <div
            key={point.id}
            className="absolute rounded-full transition-all ease-out"
            style={{
              left: point.x - 6,
              top: point.y - 6,
              width: 12 * scale,
              height: 12 * scale,
              opacity: opacity * 0.7,
              transitionDuration: `${200 * speedMultiplier}ms`,
              background: settings.highContrast
                ? theme === "dark"
                  ? `radial-gradient(circle, rgba(255, 255, 255, ${opacity * 0.8}) 0%, rgba(255, 255, 255, ${opacity * 0.4}) 100%)`
                  : `radial-gradient(circle, rgba(0, 0, 0, ${opacity * 0.8}) 0%, rgba(0, 0, 0, ${opacity * 0.4}) 100%)`
                : theme === "dark"
                  ? `radial-gradient(circle, rgba(59, 130, 246, ${opacity * 0.6}) 0%, rgba(147, 51, 234, ${opacity * 0.3}) 100%)`
                  : `radial-gradient(circle, rgba(37, 99, 235, ${opacity * 0.6}) 0%, rgba(124, 58, 237, ${opacity * 0.3}) 100%)`,
              transform: `scale(${scale})`,
              transitionDelay: `${delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}
