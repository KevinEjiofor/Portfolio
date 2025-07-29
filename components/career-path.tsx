import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function CareerPath() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Leading development of scalable web applications serving 2M+ users. Architecting microservices infrastructure and mentoring junior developers to improve team productivity.",
      achievements: [
        "Reduced API response time by 40% through optimization and caching strategies",
        "Led migration to cloud-native architecture, improving system reliability by 99.9%",
        "Mentored 5 junior developers, resulting in 30% improvement in team productivity",
        "Implemented automated testing pipeline, reducing deployment bugs by 60%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description:
        "Built and maintained web applications from concept to deployment. Collaborated closely with design and product teams to deliver user-centric solutions that drove business growth.",
      achievements: [
        "Developed 3 major product features from scratch, increasing user engagement by 45%",
        "Improved application performance by 60% through code optimization and lazy loading",
        "Implemented comprehensive testing strategy, reducing production bugs by 45%",
        "Established CI/CD pipeline, reducing deployment time from hours to minutes",
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "GCP", "JavaScript"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "Contract",
      description:
        "Created responsive web applications and interactive user interfaces for various clients across different industries, focusing on performance and user experience.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Increased client satisfaction scores by 25% through improved communication",
        "Established reusable component library, reducing development time by 30%",
        "Optimized website performance, achieving 95+ Lighthouse scores",
      ],
      technologies: ["React", "JavaScript", "SASS", "WordPress", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Career Journey
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through different roles and companies, building expertise and delivering measurable impact
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Building className="w-4 h-4" />
                      <span className="font-medium text-sm sm:text-base">{experience.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{experience.location}</span>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                  {experience.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
