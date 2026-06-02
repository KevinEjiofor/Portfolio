"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Camera } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [imageError, setImageError] = useState(false)
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-600/30 dark:to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 dark:from-green-600/30 dark:to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            {/* Avatar Container with Border */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full p-1 bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
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
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-background shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="block text-muted-foreground text-lg sm:text-xl lg:text-2xl font-normal mb-2">
              Hello, I'm
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {text}
              </span>
              {showCursor && (
                <span className="inline-block w-1 h-16 sm:h-20 lg:h-24 bg-primary dark:bg-blue-400 ml-2 animate-pulse"></span>
              )}
            </span>
          </h1>

          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Full-Stack Software Engineer</span>
          </div>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Passionate about building scalable web applications and solving complex problems with clean, efficient code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Get In Touch
            </span>
          </Button>
          <Button variant="outline" size="lg" className="group bg-transparent">
            <span className="flex items-center">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download Resume
            </span>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Mail, label: "Email", href: "mailto:alex.chen@email.com" },
          ].map((social, index) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              className="h-12 w-12 group hover:bg-muted transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <social.icon className="h-6 w-6 transition-all duration-300 group-hover:scale-125 group-hover:text-primary" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
