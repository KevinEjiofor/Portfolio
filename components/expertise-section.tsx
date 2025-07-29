import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ExpertiseSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 82 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 87 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 90 },
        { name: "Kubernetes", level: 75 },
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git", level: 95 },
        { name: "Testing (Jest/Cypress)", level: 88 },
        { name: "Agile/Scrum", level: 90 },
        { name: "System Design", level: 85 },
      ],
    },
  ]

  const technologies = [
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
    "Git",
    "Jest",
    "Cypress",
  ]

  return (
    <section id="expertise" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 sm:h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
