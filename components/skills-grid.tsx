"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SkillsGrid() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 82 },
      ],
    },
    {
      title: "Backend Development",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      color: "from-green-400 to-cyan-500",
      skills: [
        { name: "AWS", level: 87 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 78 },
        { name: "CI/CD", level: 90 },
      ],
    },
    {
      title: "Design & Tools",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Git", level: 95 },
        { name: "Jest", level: 88 },
        { name: "Cypress", level: 82 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10 mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-slate-800/50 border-gray-700 hover:bg-slate-800/70 transition-all duration-300 group"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <Progress
                        value={hoveredCategory === categoryIndex ? skill.level : 0}
                        className="h-2 bg-gray-700"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-200 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Vue.js",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Kubernetes",
              "GraphQL",
              "REST APIs",
              "Tailwind CSS",
              "Figma",
              "Git",
              "Jest",
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors px-4 py-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
