"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

export function AnimatedSkills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { theme } = useTheme()

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-400 to-cyan-400",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-green-500 to-emerald-500",
      darkColor: "from-green-400 to-emerald-400",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel", "Netlify", "GitHub Actions"],
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Jest", "Cypress", "Figma", "Postman", "Linux", "Agile", "REST APIs"],
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 dark:from-pink-600/20 dark:to-orange-600/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up-delay">
            A comprehensive toolkit built through years of hands-on experience and continuous learning in the
            ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="h-full group relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme === "dark" ? category.darkColor : category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg">
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${theme === "dark" ? category.darkColor : category.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
                ></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme === "dark" ? category.darkColor : category.color} animate-pulse`}
                  ></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs transition-all duration-300 hover:scale-110 ${
                        hoveredCard === index ? "animate-bounce-subtle shadow-lg" : ""
                      }`}
                      style={{
                        animationDelay: hoveredCard === index ? `${skillIndex * 0.05}s` : "0s",
                        animationDuration: "0.6s",
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Floating Particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${theme === "dark" ? category.darkColor : category.color} rounded-full animate-float-particle`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
