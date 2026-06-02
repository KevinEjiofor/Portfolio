import { Badge } from "@/components/ui/badge"
import { Code2, Server, Layout, Smartphone, Database, Cloud, ShieldCheck, Wrench } from "lucide-react"

export function ExpertiseSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["JavaScript", "TypeScript", "Java", "Python", "Go", "Rust", "Dart", "PHP"],
    },
    {
      title: "Backend",
      icon: Server,
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        "Spring Boot",
        "Spring",
        "Django",
        "Express.js",
        "Node.js",
        "Axum",
        "Actix Web",
        "NestJS",
        "Laravel",
      ],
    },
    {
      title: "Frontend",
      icon: Layout,
      gradient: "from-pink-500 to-rose-500",
      skills: ["Next.js", "React.js", "Vue.js", "Angular", "Material UI", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      gradient: "from-violet-500 to-purple-500",
      skills: ["Flutter", "React Native"],
    },
    {
      title: "Database",
      icon: Database,
      gradient: "from-amber-500 to-orange-500",
      skills: ["MongoDB", "MySQL", "Neon", "PostgreSQL", "Prisma", "Supabase"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-sky-500 to-indigo-500",
      skills: [
        "Docker",
        "GitHub Actions",
        "AWS",
        "Railway",
        "Render",
        "Vercel",
        "CI/CD Pipelines",
        "Jenkins",
      ],
    },
    {
      title: "Authentication & APIs",
      icon: ShieldCheck,
      gradient: "from-red-500 to-pink-500",
      skills: ["Clerk", "JWT", "OAuth2", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Tools",
      icon: Wrench,
      gradient: "from-lime-500 to-green-500",
      skills: ["Git", "GitHub", "Postman", "Swagger", "CodeRabbit", "Greptile"],
    },
  ]

  return (
    <section
      id="expertise"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent mb-4 sm:mb-6">
            Skills &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 to-gray-100 dark:from-white/10 dark:to-white/5 hover:from-transparent hover:to-transparent transition-all duration-300"
              >
                {/* Animated gradient border on hover */}
                <span
                  className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative h-full rounded-2xl bg-white dark:bg-neutral-950 p-5 sm:p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg shadow-black/5`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
