"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"

export function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features real-time inventory management, advanced search, and seamless checkout experience.",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Full Stack",
    },
    {
      title: "AI Task Manager",
      description:
        "Intelligent project management tool with AI-powered task prioritization, team collaboration features, and predictive analytics for better project outcomes.",
      image: "/placeholder.svg?height=400&width=600&text=AI+Task+Manager",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "AI/ML",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Comprehensive analytics platform with real-time data visualization, custom reporting, and interactive charts. Built for enterprise-scale data processing.",
      image: "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
      technologies: ["Vue.js", "D3.js", "Python", "Redis", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Data Viz",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10 mb-4">
            Featured Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Project
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects that demonstrate my expertise in modern web development and problem-solving
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2 bg-slate-800/50 rounded-2xl border border-gray-700">
            {projects.map((project, index) => (
              <Button
                key={index}
                variant={activeProject === index ? "default" : "ghost"}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeProject === index
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {project.category}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <Card className="relative bg-slate-800/50 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={projects[activeProject].image || "/placeholder.svg"}
                    alt={projects[activeProject].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Play className="w-5 h-5 mr-2" />
                        Preview
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                {projects[activeProject].category}
              </Badge>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-200">{projects[activeProject].title}</h3>

              <p className="text-lg text-gray-400 leading-relaxed">{projects[activeProject].description}</p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-300">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                asChild
              >
                <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                asChild
              >
                <a href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
