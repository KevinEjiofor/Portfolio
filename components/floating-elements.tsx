"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-pulse" />
      <div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-32 left-40 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 right-20 w-2 h-40 bg-gradient-to-b from-purple-400/30 to-transparent" />
      <div
        className="absolute bottom-20 right-1/4 w-28 h-28 border border-pink-400/20 rotate-12 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Mouse Follower */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
