import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export function TimelineExperience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Leading development of scalable web applications serving 2M+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Led migration to cloud-native architecture",
        "Mentored 5 junior developers and improved team productivity by 30%",
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
        "Built and maintained web applications from concept to deployment. Collaborated with design and product teams to deliver user-centric solutions.",
      achievements: [
        "Developed 3 major product features from scratch",
        "Improved application performance by 60%",
        "Implemented comprehensive testing strategy reducing bugs by 45%",
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "GCP", "JavaScript"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "Contract",
      description:
        "Created responsive web applications and interactive user interfaces for various clients across different industries.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Increased client satisfaction scores by 25%",
        "Established reusable component library",
      ],
      technologies: ["React", "JavaScript", "SASS", "WordPress", "PHP"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10 mb-4">
            Career Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through different roles and companies, building expertise and delivering impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-800 border-4 border-cyan-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Experience Card */}
                <Card className="flex-1 bg-slate-800/50 border-gray-700 hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
                            {experience.title}
                          </h3>
                          <p className="text-xl text-purple-400 font-semibold">{experience.company}</p>
                        </div>

                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                          <Badge variant="outline" className="border-gray-600 text-gray-300 w-fit">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed">{experience.description}</p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-300">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 text-gray-400">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-300">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
