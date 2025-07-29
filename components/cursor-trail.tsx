"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

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

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const animationRef = useRef<number>()
  const lastUpdateRef = useRef<number>(0)

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    const updateTrail = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current > 16) {
        // 60fps throttling
        setTrailPoints((prevPoints) => {
          const newPoint: TrailPoint = {
            x: mousePosition.x,
            y: mousePosition.y,
            id: timestamp,
            timestamp,
          }

          const updatedPoints = [newPoint, ...prevPoints.slice(0, 19)] // Keep last 20 points
          return updatedPoints.filter((point) => timestamp - point.timestamp < 1000) // Remove points older than 1s
        })
        lastUpdateRef.current = timestamp
      }
      animationRef.current = requestAnimationFrame(updateTrail)
    }

    if (isVisible) {
      animationRef.current = requestAnimationFrame(updateTrail)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Main Cursor Follower */}
      <div
        className="absolute w-4 h-4 rounded-full transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.4) 100%)"
              : "radial-gradient(circle, rgba(37, 99, 235, 0.8) 0%, rgba(124, 58, 237, 0.4) 100%)",
          boxShadow:
            theme === "dark"
              ? "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)"
              : "0 0 15px rgba(37, 99, 235, 0.4), 0 0 30px rgba(124, 58, 237, 0.2)",
        }}
      />

      {/* Trail Points */}
      {trailPoints.map((point, index) => {
        const age = Date.now() - point.timestamp
        const opacity = Math.max(0, 1 - age / 1000)
        const scale = Math.max(0.1, 1 - index * 0.05)
        const delay = index * 0.02

        return (
          <div
            key={point.id}
            className="absolute rounded-full transition-all duration-200 ease-out"
            style={{
              left: point.x - 6,
              top: point.y - 6,
              width: 12 * scale,
              height: 12 * scale,
              opacity: opacity * 0.7,
              background:
                theme === "dark"
                  ? `radial-gradient(circle, rgba(59, 130, 246, ${opacity * 0.6}) 0%, rgba(147, 51, 234, ${opacity * 0.3}) 100%)`
                  : `radial-gradient(circle, rgba(37, 99, 235, ${opacity * 0.6}) 0%, rgba(124, 58, 237, ${opacity * 0.3}) 100%)`,
              transform: `scale(${scale})`,
              transitionDelay: `${delay}s`,
            }}
          />
        )
      })}

      {/* Particle Trail */}
      {trailPoints.slice(0, 10).map((point, index) => {
        if (index % 3 !== 0) return null // Show every 3rd point as particle

        const age = Date.now() - point.timestamp
        const opacity = Math.max(0, 1 - age / 800)
        const randomOffset = {
          x: (Math.random() - 0.5) * 20,
          y: (Math.random() - 0.5) * 20,
        }

        return (
          <div
            key={`particle-${point.id}`}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: point.x + randomOffset.x,
              top: point.y + randomOffset.y,
              opacity: opacity * 0.8,
              background: theme === "dark" ? `rgba(34, 197, 94, ${opacity})` : `rgba(16, 185, 129, ${opacity})`,
              boxShadow:
                theme === "dark"
                  ? `0 0 10px rgba(34, 197, 94, ${opacity * 0.5})`
                  : `0 0 8px rgba(16, 185, 129, ${opacity * 0.4})`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        )
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === "dark" ? "rgba(59, 130, 246, 0.6)" : "rgba(37, 99, 235, 0.5)"} />
            <stop offset="100%" stopColor={theme === "dark" ? "rgba(147, 51, 234, 0.2)" : "rgba(124, 58, 237, 0.2)"} />
          </linearGradient>
        </defs>
        {trailPoints.slice(0, -1).map((point, index) => {
          const nextPoint = trailPoints[index + 1]
          if (!nextPoint) return null

          const age = Date.now() - point.timestamp
          const opacity = Math.max(0, 1 - age / 1000) * 0.3

          return (
            <line
              key={`line-${point.id}`}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke="url(#trailGradient)"
              strokeWidth={2 * opacity}
              opacity={opacity}
              className="transition-opacity duration-200"
            />
          )
        })}
      </svg>
    </div>
  )
}
