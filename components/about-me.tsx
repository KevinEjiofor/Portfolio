import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Target, Award } from "lucide-react"

export function AboutMe() {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional user experiences.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focusing on solutions that drive business value and measurable outcomes.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Staying current with emerging technologies and industry best practices.",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Building Digital Solutions That Matter
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software engineer with a strong foundation in computer science and a proven track record of
            delivering high-quality applications that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <p>
                  I began my career in software development after graduating from UC Berkeley with a degree in Computer
                  Science. What started as curiosity about how things work has evolved into a passion for creating
                  digital solutions that make a difference.
                </p>
                <p>
                  Over the past 5 years, I've had the privilege of working with both startups and established companies,
                  contributing to products that serve millions of users. I specialize in full-stack development with a
                  particular focus on React, Node.js, and cloud technologies.
                </p>
                <p>
                  When I'm not coding, I enjoy mentoring junior developers, contributing to open-source projects, and
                  staying up-to-date with the latest developments in web technologies and software architecture.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
