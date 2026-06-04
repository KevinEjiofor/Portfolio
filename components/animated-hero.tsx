"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Camera } from "lucide-react"
import { useTheme } from "next-themes"
import { MagneticElement } from "@/components/magnetic-elements"
import { useAccessibility } from "@/components/accessibility-provider"
import Image from "next/image"


export function AnimatedHero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [imageError, setImageError] = useState(false)
  const { theme } = useTheme()
  const { settings, prefersReducedMotion } = useAccessibility()
  const fullText = "Ejiofor E. Kevin"

  // You can easily change this to your own image URL
  const profileImage = "/placeholder.svg?height=200&width=200&text=Your+Photo"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  const shouldAnimate = !settings.reducedMotion && !prefersReducedMotion

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      {shouldAnimate && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-600/30 dark:to-orange-600/30 rounded-full blur-3xl animate-float-slower"></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 dark:from-green-600/30 dark:to-blue-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            {/* Avatar Container with Animated Border */}
            <div
              className={`relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full p-1 ${
                shouldAnimate
                  ? "bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient-shift"
                  : "bg-gradient-to-r from-primary to-blue-600"
              }`}
            >
              {/* Inner Circle */}
              <div className="w-full h-full rounded-full bg-background p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-muted">
                  {!imageError ? (
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Ejiofor E. Kevin - Software Engineer"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-blue-600/20">
                      <Camera className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-muted-foreground" />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-xs sm:text-sm font-medium">{imageError ? "Add Photo" : ""}</div>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-background shadow-lg">
                  <div
                    className={`w-full h-full bg-green-400 rounded-full ${shouldAnimate ? "animate-pulse" : ""}`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Floating Elements around Avatar */}
            {shouldAnimate && (
              <>
                <div
                  className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-4 right-4 w-4 h-4 bg-purple-500/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute -bottom-2 -right-2 w-5 h-5 bg-pink-500/30 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-4 -left-4 w-3 h-3 bg-green-500/30 rounded-full animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </>
            )}
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="block text-muted-foreground text-lg sm:text-xl lg:text-2xl font-normal mb-2">
              Hello, I'm
            </span>
            <span className="relative inline-block">
              <span
                className={`bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent ${
                  shouldAnimate ? "animate-gradient-shift" : ""
                }`}
              >
                {text}
              </span>
              {showCursor && shouldAnimate && (
                <span className="inline-block w-1 h-16 sm:h-20 lg:h-24 bg-primary dark:bg-blue-400 ml-2 animate-pulse"></span>
              )}
            </span>
          </h1>

          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Full-Stack Software Engineer</span>
          </div>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Passionate about building scalable web applications and solving complex problems with clean, efficient code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up-delay">
          <MagneticElement strength={0.4}>
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden"
              data-card
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </MagneticElement>
          <MagneticElement strength={0.4}>
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 hover:border-primary dark:hover:border-blue-400 bg-transparent"
              data-card
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:animate-bounce" />
                Download Resume
              </span>
            </Button>
          </MagneticElement>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in-up-delay-2">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/alexchen" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alexchen" },
            { icon: Mail, label: "Email", href: "mailto:alex.chen@email.com" },
          ].map((social, index) => (
            <MagneticElement key={social.label} strength={0.5}>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 group relative overflow-hidden hover:bg-muted transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-card
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-6 w-6 transition-all duration-300 group-hover:scale-125 group-hover:text-primary dark:group-hover:text-blue-400" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </a>
              </Button>
            </MagneticElement>
          ))}
        </div>
      </div>
    </section>
  )
}
