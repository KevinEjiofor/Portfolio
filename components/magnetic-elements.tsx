"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface MagneticProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticElement({ children, strength = 0.3, className = "" }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      if (distance < 100) {
        const force = (100 - distance) / 100
        setPosition({
          x: deltaX * strength * force,
          y: deltaY * strength * force,
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    document.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  )
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number; vx: number; vy: number }>>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()
  const animationRef = useRef<number>()

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      id: i,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
    setParticles(initialParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate attraction to mouse
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let newVx = particle.vx
          let newVy = particle.vy

          if (distance < 200 && distance > 0) {
            const force = ((200 - distance) / 200) * 0.02
            newVx += (dx / distance) * force
            newVy += (dy / distance) * force
          }

          // Add some randomness
          newVx += (Math.random() - 0.5) * 0.01
          newVy += (Math.random() - 0.5) * 0.01

          // Damping
          newVx *= 0.99
          newVy *= 0.99

          let newX = particle.x + newVx
          let newY = particle.y + newVy

          // Boundary collision
          if (newX < 0 || newX > window.innerWidth) {
            newVx *= -0.8
            newX = Math.max(0, Math.min(window.innerWidth, newX))
          }
          if (newY < 0 || newY > window.innerHeight) {
            newVy *= -0.8
            newY = Math.max(0, Math.min(window.innerHeight, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => {
        const distanceToMouse = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + Math.pow(mousePosition.y - particle.y, 2),
        )
        const opacity = Math.max(0.1, Math.min(0.8, (200 - distanceToMouse) / 200))
        const size = Math.max(2, Math.min(8, (200 - distanceToMouse) / 25))

        return (
          <div
            key={particle.id}
            className="absolute rounded-full transition-all duration-100"
            style={{
              left: particle.x - size / 2,
              top: particle.y - size / 2,
              width: size,
              height: size,
              background:
                theme === "dark"
                  ? `radial-gradient(circle, rgba(59, 130, 246, ${opacity}) 0%, rgba(147, 51, 234, ${opacity * 0.5}) 100%)`
                  : `radial-gradient(circle, rgba(37, 99, 235, ${opacity}) 0%, rgba(124, 58, 237, ${opacity * 0.5}) 100%)`,
              boxShadow:
                theme === "dark"
                  ? `0 0 ${size * 2}px rgba(59, 130, 246, ${opacity * 0.5})`
                  : `0 0 ${size * 2}px rgba(37, 99, 235, ${opacity * 0.5})`,
            }}
          />
        )
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle, index) => {
          return particles.slice(index + 1).map((otherParticle, otherIndex) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
            )

            if (distance < 150) {
              const opacity = Math.max(0, (150 - distance) / 150) * 0.3

              return (
                <line
                  key={`${particle.id}-${otherParticle.id}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke={theme === "dark" ? `rgba(59, 130, 246, ${opacity})` : `rgba(37, 99, 235, ${opacity})`}
                  strokeWidth={1}
                  opacity={opacity}
                />
              )
            }
            return null
          })
        })}
      </svg>
    </div>
  )
}
