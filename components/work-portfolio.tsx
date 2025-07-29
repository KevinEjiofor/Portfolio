import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function WorkPortfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced search functionality, and seamless checkout experience.",
      image: "/placeholder.svg?height=300&width=500&text=E-Commerce+Platform",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Project Management Dashboard",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Built for teams to track progress and manage workflows efficiently.",
      image: "/placeholder.svg?height=300&width=500&text=Project+Management",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics platform with real-time data visualization, custom reporting, and interactive charts. Designed for enterprise-scale data processing and insights.",
      image: "/placeholder.svg?height=300&width=500&text=Analytics+Dashboard",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization",
    },
  ]

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
