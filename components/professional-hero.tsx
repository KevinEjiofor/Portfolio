"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export function ProfessionalHero() {
  return (
    <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="outline" className="w-fit">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Available for opportunities
                </Badge>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white block">Hello, I'm</span>
                  <span className="text-blue-600 dark:text-blue-400 block">Alex Chen</span>
                </h1>

                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Senior Software Engineer
                </h2>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I build scalable web applications and digital solutions that drive business growth. With 5+ years of
                  experience, I specialize in modern JavaScript frameworks and cloud technologies.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>5+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 bg-transparent w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-full" />

                {/* Photo */}
                <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Your+Professional+Photo"
                    alt="Alex Chen - Software Engineer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                  <div className="text-center">
                    <div>5+</div>
                    <div className="text-xs">YRS</div>
                  </div>
                </div>

                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
