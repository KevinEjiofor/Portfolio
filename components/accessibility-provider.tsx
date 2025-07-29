"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface AccessibilitySettings {
  reducedMotion: boolean
  highContrast: boolean
  largeText: boolean
  focusIndicators: boolean
  cursorEffects: boolean
  autoplay: boolean
  animationSpeed: "slow" | "normal" | "fast"
  announcements: boolean
}

interface AccessibilityContextType {
  settings: AccessibilitySettings
  updateSetting: <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => void
  resetSettings: () => void
  prefersReducedMotion: boolean
}

const defaultSettings: AccessibilitySettings = {
  reducedMotion: false,
  highContrast: false,
  largeText: false,
  focusIndicators: true,
  cursorEffects: true,
  autoplay: true,
  animationSpeed: "normal",
  announcements: true,
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check system preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches) {
        updateSetting("reducedMotion", true)
      }
    }

    mediaQuery.addEventListener("change", handleChange)

    // Load saved settings
    const savedSettings = localStorage.getItem("accessibility-settings")
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings({ ...defaultSettings, ...parsed })
      } catch (error) {
        console.error("Failed to parse accessibility settings:", error)
      }
    } else if (mediaQuery.matches) {
      // If no saved settings but user prefers reduced motion, enable it
      setSettings((prev) => ({ ...prev, reducedMotion: true }))
    }

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    // Apply settings to document
    const root = document.documentElement

    // Reduced motion
    if (settings.reducedMotion || prefersReducedMotion) {
      root.style.setProperty("--animation-duration", "0.01s")
      root.classList.add("reduce-motion")
    } else {
      root.style.removeProperty("--animation-duration")
      root.classList.remove("reduce-motion")
    }

    // High contrast
    if (settings.highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    // Large text
    if (settings.largeText) {
      root.classList.add("large-text")
    } else {
      root.classList.remove("large-text")
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add("enhanced-focus")
    } else {
      root.classList.remove("enhanced-focus")
    }

    // Animation speed
    root.style.setProperty(
      "--animation-speed",
      settings.animationSpeed === "slow" ? "2" : settings.animationSpeed === "fast" ? "0.5" : "1",
    )

    // Save settings
    localStorage.setItem("accessibility-settings", JSON.stringify(settings))
  }, [settings, prefersReducedMotion])

  const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }))

    // Announce changes to screen readers
    if (settings.announcements) {
      const announcement = `${key.replace(/([A-Z])/g, " $1").toLowerCase()} ${value ? "enabled" : "disabled"}`
      announceToScreenReader(announcement)
    }
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    announceToScreenReader("Accessibility settings reset to default")
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        updateSetting,
        resetSettings,
        prefersReducedMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}
