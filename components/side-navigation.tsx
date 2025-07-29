"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Code, Briefcase, Clock, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: Clock, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-2">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-xl transition-all duration-300 group relative ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              <item.icon className="w-5 h-5" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </div>
            </Button>
          ))}

          {/* Theme Toggle */}
          <div className="border-t border-gray-700 pt-2 mt-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-12 h-12 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
