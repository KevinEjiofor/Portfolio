"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

export function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" />
      <div className="absolute top-1/2 left-20 w-2 h-32 bg-gradient-to-b from-cyan-400/50 to-transparent" />

      <div
        className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
              <Sparkles className="w-3 h-3 mr-1" />
              Available for work
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-300">Hello, I'm</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200">Creative Developer</h2>
              <p className="text-lg text-gray-400 max-w-lg">
                I craft digital experiences that blend beautiful design with powerful functionality. Specializing in
                modern web technologies and user-centered solutions.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Work Together
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 bg-transparent"
            >
              <Download className="mr-2 w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Content - Profile */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 animate-spin-slow">
              <div className="rounded-full bg-slate-900 p-4">
                <div className="w-80 h-80 rounded-full overflow-hidden relative">
                  <Image
                    src="/placeholder.svg?height=320&width=320&text=Your+Photo"
                    alt="Alex Chen"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">5+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
