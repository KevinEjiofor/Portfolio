"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

interface CursorState {
  x: number
  y: number
  isHovering: boolean
  hoverType: "default" | "button" | "link" | "card"
}

export function InteractiveCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    hoverType: "default",
  })
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number; timestamp: number }>>([])
  const { theme } = useTheme()
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }))
    }

    const handleMouseDown = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        timestamp: Date.now(),
      }
      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      let hoverType: CursorState["hoverType"] = "default"

      if (target.tagName === "BUTTON" || target.closest("button")) {
        hoverType = "button"
      } else if (target.tagName === "A" || target.closest("a")) {
        hoverType = "link"
      } else if (target.closest(".card, [data-card]")) {
        hoverType = "card"
      }

      setCursor((prev) => ({
        ...prev,
        isHovering: true,
        hoverType,
      }))
    }

    const handleMouseLeave = () => {
      setCursor((prev) => ({
        ...prev,
        isHovering: false,
        hoverType: "default",
      }))
    }

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .card, [data-card]")
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter as EventListener)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter as EventListener)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  const getCursorStyles = () => {
    const baseSize = cursor.isHovering ? 40 : 20
    const baseOpacity = cursor.isHovering ? 0.8 : 0.6

    switch (cursor.hoverType) {
      case "button":
        return {
          width: baseSize,
          height: baseSize,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(59, 130, 246, 0.4) 100%)"
              : "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(37, 99, 235, 0.4) 100%)",
          boxShadow:
            theme === "dark"
              ? "0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)"
              : "0 0 25px rgba(16, 185, 129, 0.5), 0 0 50px rgba(37, 99, 235, 0.3)",
        }
      case "link":
        return {
          width: baseSize,
          height: baseSize,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(236, 72, 153, 0.4) 100%)"
              : "radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(219, 39, 119, 0.4) 100%)",
          boxShadow:
            theme === "dark"
              ? "0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)"
              : "0 0 25px rgba(147, 51, 234, 0.5), 0 0 50px rgba(219, 39, 119, 0.3)",
        }
      case "card":
        return {
          width: baseSize + 10,
          height: baseSize + 10,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, rgba(239, 68, 68, 0.4) 100%)"
              : "radial-gradient(circle, rgba(217, 119, 6, 0.8) 0%, rgba(220, 38, 38, 0.4) 100%)",
          boxShadow:
            theme === "dark"
              ? "0 0 35px rgba(245, 158, 11, 0.6), 0 0 70px rgba(239, 68, 68, 0.4)"
              : "0 0 30px rgba(217, 119, 6, 0.5), 0 0 60px rgba(220, 38, 38, 0.3)",
        }
      default:
        return {
          width: baseSize,
          height: baseSize,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(147, 51, 234, 0.3) 100%)"
              : "radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, rgba(124, 58, 237, 0.3) 100%)",
          boxShadow:
            theme === "dark"
              ? "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.2)"
              : "0 0 15px rgba(37, 99, 235, 0.3), 0 0 30px rgba(124, 58, 237, 0.2)",
        }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Main Interactive Cursor */}
      <div
        ref={cursorRef}
        className="absolute rounded-full transition-all duration-200 ease-out mix-blend-difference"
        style={{
          left: cursor.x - (cursor.isHovering ? 20 : 10),
          top: cursor.y - (cursor.isHovering ? 20 : 10),
          ...getCursorStyles(),
          transform: `scale(${cursor.isHovering ? 1.2 : 1})`,
        }}
      />

      {/* Click Ripples */}
      {ripples.map((ripple) => {
        const age = Date.now() - ripple.timestamp
        const progress = age / 1000
        const scale = 1 + progress * 3
        const opacity = Math.max(0, 1 - progress)

        return (
          <div
            key={ripple.id}
            className="absolute rounded-full border-2 animate-ping"
            style={{
              left: ripple.x - 15,
              top: ripple.y - 15,
              width: 30,
              height: 30,
              borderColor:
                theme === "dark" ? `rgba(59, 130, 246, ${opacity * 0.8})` : `rgba(37, 99, 235, ${opacity * 0.8})`,
              transform: `scale(${scale})`,
              opacity: opacity * 0.6,
              animationDuration: "1s",
            }}
          />
        )
      })}

      {/* Magnetic Field Effect */}
      <div
        className="absolute rounded-full transition-all duration-300 ease-out"
        style={{
          left: cursor.x - 50,
          top: cursor.y - 50,
          width: 100,
          height: 100,
          background:
            theme === "dark"
              ? "radial-gradient(circle, transparent 60%, rgba(59, 130, 246, 0.05) 100%)"
              : "radial-gradient(circle, transparent 60%, rgba(37, 99, 235, 0.05) 100%)",
          opacity: cursor.isHovering ? 1 : 0,
          transform: `scale(${cursor.isHovering ? 1.5 : 1})`,
        }}
      />
    </div>
  )
}
