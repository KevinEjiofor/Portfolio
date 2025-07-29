"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

export function AnimatedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { theme } = useTheme()

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      glowColor: "from-blue-500 to-purple-500",
      darkGlowColor: "from-blue-400 to-purple-400",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Supports multiple project views and integrations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      glowColor: "from-green-500 to-cyan-500",
      darkGlowColor: "from-green-400 to-cyan-400",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Machine learning platform for business intelligence with predictive analytics, data visualization, and automated reporting capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "FastAPI", "TensorFlow", "React", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      glowColor: "from-pink-500 to-orange-500",
      darkGlowColor: "from-pink-400 to-orange-400",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-purple-400/10 dark:from-violet-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl animate-spin-reverse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up-delay">
            A showcase of my recent work, demonstrating expertise in full-stack development, system design, and modern
            web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group relative transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${theme === "dark" ? project.darkGlowColor : project.glowColor} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-background rounded-lg">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Overlay with animated gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${theme === "dark" ? project.darkGlowColor : project.glowColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Floating Action Buttons */}
                  <div
                    className={`absolute top-4 right-4 flex gap-2 transform transition-all duration-500 ${hoveredProject === index ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                  >
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 backdrop-blur-sm bg-background/80 hover:bg-background"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 backdrop-blur-sm bg-background/80 hover:bg-background"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${theme === "dark" ? project.darkGlowColor : project.glowColor} animate-pulse`}
                    ></div>
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs transition-all duration-300 ${
                          hoveredProject === index
                            ? "animate-bounce-subtle border-primary/50 text-primary dark:border-blue-400/50 dark:text-blue-400"
                            : ""
                        }`}
                        style={{
                          animationDelay: hoveredProject === index ? `${techIndex * 0.1}s` : "0s",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r ${theme === "dark" ? project.darkGlowColor : project.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                ></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
