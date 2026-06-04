"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
                  <span className="text-blue-600 dark:text-blue-400 block">Ejiofor E. Kevin</span>
                </h1>

                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Software Engineer
                </h2>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      A passionate software engineer with a keen eye for crafting efficient solutions. I specialize in Java, Python, JavaScript, and modern frameworks like Spring Boot, Django, Flask, and Node.js to build robust backend systems and intuitive frontend applications. I thrive on dissecting complex problems, finding elegant solutions, and implementing them in a way that enhances user experience. I'm committed to collaborative teamwork and always eager to engage in meaningful conversations about software development.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Lagos Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>3+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-gray-300 dark:border-gray-600 bg-transparent w-full sm:w-auto"
              >
                <a
                  href="/file/Ejiofor%20E.%20Kevin_resume.pdf.pdf"
                  download="Ejiofor E. Kevin - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
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
                <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden bg-gray-100 dark:bg-neutral-900 shadow-xl">
                  <Image
                    src="/assets/profilePic.png"
                    alt="Ejiofor E. Kevin - Software Engineer"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                    priority
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                  <div className="text-center">
                    <div>3+</div>
                    <div className="text-xs">YRS</div>
                  </div>
                </div>

                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white dark:bg-neutral-900 rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-200 dark:border-neutral-800">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">30+</div>
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
