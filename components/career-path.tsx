import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"

export function CareerPath() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Spark Strand",
      location: "Remote",
      period: "November 2025 - Present",
      type: "Full-time",
      description:
        "Developing and maintaining an integrated business management platform supporting HR operations, project management, payments, and client workflows.",
      achievements: [
        "Built scalable applications using Next.js, Supabase, and Clerk for authentication, API integration, and secure user management.",
        "Implemented responsive admin dashboards, communication systems, wallet/payment workflows, and mobile-friendly interfaces.",
        "Managed CI/CD pipelines, environment configurations, and deployment workflows using GitHub Actions.",
        "Improved code quality and debugging workflows using CodeRabbit and Greptile.",
        "Collaborated with cross-functional teams on testing, bug fixes, infrastructure improvements, and production deployments.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Clerk",
        "GitHub Actions",
        "CodeRabbit",
        "Greptile",
      ],
      links: [
        { label: "Spark Strand", url: "https://sparkstrand.com/en" },
        { label: "HRM", url: "https://hrm.sparkstrand.com/" },
        { label: "Kubana", url: "https://kanban.sparkstrand.com/" },
      ],
    },
    {
      title: "Software Engineer",
      company: "Vanly",
      location: "United Kingdom · Remote",
      period: "Freelance",
      type: "Freelance",
      description:
        "Developed and launched Vanly, a UK-based logistics and van delivery platform connecting customers with verified drivers through real-time booking, live tracking, and payout management.",
      achievements: [
        "Built cross-platform mobile applications using React Native (Expo) with a Laravel backend powering APIs, business logic, and database operations.",
        "Implemented live delivery tracking with the Google Maps API, driver earnings dashboards, booking management, and support workflows.",
        "Supported real-time logistics operations across multiple UK regions and reduced onboarding verification time through automated identity checks.",
        "Integrated Yoti identity verification, DVLA vehicle verification, and Stripe payment systems for secure onboarding, customer payments, and driver payouts.",
        "Managed containerized environments using Docker and handled App Store / Google Play deployments, responsive admin dashboards, CI/CD workflows, and staging/production environments using AWS Amplify and GitHub.",
        "Collaborated on feature development, performance optimization, infrastructure improvements, and scalable deployment workflows across web and mobile platforms.",
      ],
      technologies: [
        "React Native",
        "Expo",
        "Laravel",
        "Google Maps API",
        "Yoti",
        "DVLA",
        "Stripe",
        "Docker",
        "AWS Amplify",
        "GitHub",
      ],
      links: [
        { label: "Vanly Web", url: "https://vanlysystem.com/" },
        { label: "Vanly iOS", url: "https://apps.apple.com/gb/app/vanly/id6760961583" },
        { label: "Vanly Android", url: "https://play.google.com/store/apps/details?id=com.vanly.userapp" },
        { label: "Vanly Driver iOS", url: "https://apps.apple.com/gb/app/vanly-driver/id6760938420" },
        { label: "Vanly Driver Android", url: "https://play.google.com/store/apps/details?id=com.vanly.driver" },
      ],
    },
    {
      title: "Backend Engineer",
      company: "Miraton Matador Group",
      location: "Remote",
      period: "May 2024 - October 2025",
      type: "Full-time",
      description:
        "Collaborated with the backend engineering team to build and maintain fintech infrastructure, payment integrations, and notification systems for digital banking and exchange platforms.",
      achievements: [
        "Integrated multiple banking and payment providers including Providus Bank, Interswitch, PRUNE, Rafiki, and VertoFX to support local and cross-border transactions, FX settlement flows, wallet operations, payout systems, and virtual account management.",
        "Implemented reconciliation jobs and automated transaction monitoring systems to verify transaction statuses, detect failed or pending payments, and ensure accurate settlement across financial providers.",
        "Developed secure authentication, transaction validation, and real-time notification systems using JWT, Redis, OneSignal, Twilio, and Termii for SMS, email, push notifications, and WhatsApp communication.",
        "Managed backend services, PostgreSQL databases, Docker environments, and deployment workflows supporting scalable staging and production infrastructures for secure financial operations.",
        "Optimized APIs, improved backend performance, and collaborated on infrastructure enhancements to ensure system reliability, transaction integrity, and seamless customer experience across fintech products.",
        "Worked with cross-functional teams on debugging, compliance-related integrations, payment orchestration workflows, and production support for high-availability financial systems.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Docker",
        "OneSignal",
        "Twilio",
        "Termii",
        "Interswitch",
        "VertoFX",
      ],
      links: [
        { label: "Finarium", url: "https://thefinarium.com/login" },
        { label: "Shanono", url: "https://myshanonobank.com/" },
        { label: "Shanono iOS", url: "https://apps.apple.com/us/app/shanono-bank/id6753195294" },
        {
          label: "Shanono Android",
          url: "https://play.google.com/store/apps/details?id=com.shanono_mmg.shanono_mobile&hl=en",
        },
      ],
    },
    {
      title: "Cloud Engineer",
      company: "Semicolon Ventures",
      location: "Lagos, Nigeria",
      period: "January 2024 – March 2024",
      type: "Contract",
      description:
        "Implemented end-to-end DevOps solutions including AWS cloud architecture, GitHub Actions CI/CD pipelines, Docker containerization, Railway, Vercel, and automated deployment workflows.",
      achievements: [
        "Engineered robust infrastructure supporting containerized applications with load balancing.",
        "Maintained system reliability through continuous monitoring and optimization.",
        "Automated build, test, and deployment pipelines to accelerate release cycles.",
      ],
      technologies: ["AWS", "GitHub Actions", "Docker", "Railway", "Vercel", "CI/CD"],
    },
    {
      title: "Software Engineer",
      company: "Semicolon Africa",
      location: "Lagos, Nigeria",
      period: "April 2023 – April 2024",
      type: "Full-time",
      description:
        "Designed and deployed scalable microservices using Python (Django, Flask), Node.js, and Java (Spring Boot) to support cross-domain features and third-party integrations.",
      achievements: [
        "Improved system performance by 40% through SQL optimization, Redis/Memcached caching, and efficient code profiling.",
        "Built a secure, versioned API gateway with OAuth2/JWT authentication, rate limiting, and analytics for internal and external services.",
        "Containerized applications with Docker, managed deployments with Kubernetes, and automated workflows via CI/CD pipelines.",
        "Advocated TDD and enforced 90%+ test coverage, enhancing reliability and team productivity.",
        "Authored internal documentation and onboarding guides to streamline team scaling and knowledge sharing.",
        "Mentored junior developers and collaborated with DevOps, QA, and product teams to ensure timely, high-impact deliveries.",
      ],
      technologies: [
        "Python",
        "Django",
        "Flask",
        "Node.js",
        "Java",
        "Spring Boot",
        "Redis",
        "Memcached",
        "OAuth2",
        "JWT",
        "Docker",
        "Kubernetes",
      ],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-950/60">
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
            <Card key={index} className="border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
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
                        className="text-xs bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {experience.links && experience.links.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Live Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
