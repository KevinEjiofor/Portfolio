import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"

export function CareerPath() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Spark Strand",
      location: "Greater London, United Kingdom · Remote",
      period: "October 2025 – Present",
      type: "Full-time",
      description:
        "Developing and maintaining an integrated business management platform supporting HR operations, project management, payments, and client workflows, and building client products including the Nicely Polished beauty e-commerce store.",
      achievements: [
        "Built scalable applications using Next.js, Supabase, and Clerk for authentication, API integration, and secure user management.",
        "Built Nicely Polished, a UK beauty e-commerce store supplying nail salons with polish, gels, and accessories from top brands, using a Next.js storefront on a Medusa commerce backend with Clerk authentication and Resend transactional email, deployed on Vercel.",
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
        "Medusa",
        "Resend",
        "Tailwind CSS",
        "Vercel",
        "GitHub Actions",
        "CodeRabbit",
        "Greptile",
      ],
      links: [
        { label: "Spark Strand", url: "https://sparkstrand.com/en" },
        { label: "HRM", url: "https://hrm.sparkstrand.com/" },
        { label: "Kubana", url: "https://kanban.sparkstrand.com/" },
        { label: "The Growth Machine", url: "https://marketing.sparkstrand.com" },
        { label: "Nicely Polished", url: "https://www.nicelypolished.co.uk/en/gb" },
      ],
    },
    {
      title: "Chief Technology Officer",
      company: "Vanly",
      location: "Lagos, Nigeria · Remote",
      period: "November 2024 – October 2025",
      type: "Full-time",
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
      title: "Senior Software Engineer",
      company: "Miraton Matador Group",
      location: "Lagos, Nigeria · Remote",
      period: "May 2023 – November 2024",
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
      title: "Software Engineer",
      company: "CosmicForge HealthNet",
      location: "Lagos, Nigeria · Remote",
      period: "February 2022 – May 2023",
      type: "Full-time",
      description:
        "Built and shipped CosmicForge HealthNet, a telemedicine platform connecting patients, doctors, pharmacies, and labs across Africa, spanning the public marketing site, the patient and doctor dashboard, the laboratory portal, and the mobile apps.",
      achievements: [
        "Developed the marketing site covering video, audio, and chat consultations, doctor availability and appointment tracking, self-service consultation pricing, subscription plans in USD and NGN, and prescriptions routed to partner pharmacies.",
        "Built the patient and doctor dashboard with role-based registration that switches the form by user type, specialty selection across 25 medical departments, international dialling codes for doctors, Google OAuth sign-in, and consultation management.",
        "Delivered the lab portal for digital test orders and result sharing between labs, doctors, and patients, with lab administrator accounts, invitation-based staff onboarding, and persistent sessions.",
        "Built the mobile apps for doctors and patients, giving doctors on-the-go access to consultations, appointments, and patient requests from the same backend as the web dashboard.",
        "Built and maintained the Node.js API serving the web and mobile clients, containerised with Docker and deployed to Heroku.",
        "Set up GitHub Actions CI/CD pipelines to build, containerise, and ship releases to staging and production.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "OAuth",
        "Docker",
        "GitHub Actions",
        "Heroku",
      ],
      links: [
        { label: "CosmicForge HealthNet", url: "https://www.cosmicforge-healthnet.com" },
        { label: "Patient Dashboard", url: "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient" },
        { label: "Doctor Dashboard", url: "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor" },
        { label: "Lab Portal", url: "https://lab.cosmicforge-healthnet.com/" },
      ],
    },
    {
      title: "Lead Software Engineer",
      company: "Leverpay",
      location: "Lagos, Nigeria · Remote",
      period: "January 2021 – February 2022",
      type: "Full-time",
      description:
        "Team lead for frontend and mobile engineering within a 10+ person team building Leverpay, a cross-platform crypto payments product spanning the web platform, landing page, and mobile application.",
      achievements: [
        "Led the frontend and mobile engineers, setting technical direction, breaking down features into deliverable tasks, reviewing code, and mentoring developers on the team.",
        "Implemented the Leverpay mobile application, building wallet, payment, and transaction flows so users could send, receive, and track crypto payments on the go.",
        "Built the web platform and landing page, keeping the user experience consistent across web and mobile through shared UI patterns and components.",
        "Integrated the web and mobile clients with backend services for authentication, wallet balances, transaction history, and payment processing.",
        "Worked closely with backend and cloud engineers to define and maintain stable API contracts. Frontend and backend teams operated on separate codebases with restricted cross-access, so all integration happened strictly through the API layer, keeping changes on either side from breaking the other.",
        "Owned QA testing across the stack, verifying functionality end-to-end from backend services through to the frontend and mobile experience before release.",
        "Managed mobile release cycles, preparing builds and coordinating testing and rollout of new versions.",
        "Collaborated across a large cross-functional engineering team to coordinate feature delivery, catch integration issues early, and keep releases stable.",
      ],
      technologies: [] as string[],
      links: [{ label: "Leverpay", url: "https://lever-pay.com/" }],
    },
    {
      title: "Software Engineer",
      company: "Supersoft Technology Limited",
      location: "Lagos, Nigeria · Hybrid",
      period: "August 2020 – January 2021",
      type: "Full-time",
      description:
        "Hardware-focused engineering role delivering POS systems and banking infrastructure for financial institutions, from on-site installation through to the software and deployment pipelines behind them.",
      achievements: [
        "Installed, configured, and maintained POS terminals and supporting hardware for banking clients, keeping in-branch and merchant transaction processing reliable in production.",
        "Worked directly with banking clients including Renmoney, UBA, GTBank, and Zenith Bank, delivering and supporting POS and banking infrastructure.",
        "Designed database structures supporting core banking operations and transaction data.",
        "Developed and deployed banking software and infrastructure improvements across multiple financial institutions.",
        "Built and maintained CI/CD pipelines to streamline deployment for banking systems.",
      ],
      technologies: ["POS Systems", "Hardware Setup & Maintenance", "Database Design", "Banking Infrastructure", "CI/CD"],
    },
    {
      title: "Technical Support Specialist",
      company: "Guaranty Trust Bank",
      location: "Lagos, Nigeria · Hybrid",
      period: "August 2019 – July 2020",
      type: "Internship",
      description:
        "Provided IT and hardware support to bank staff and acted as a technical point of contact for partners integrating with Guaranty Trust's banking APIs.",
      achievements: [
        "Provided first-line IT support to bank staff, troubleshooting internet connectivity and hardware issues to keep day-to-day branch operations running smoothly.",
        "Served as a technical point of contact for external developers and partners integrating with Guaranty Trust's banking APIs, explaining system architecture, access requirements, and integration workflows, and helping them work around common issues.",
        "Gained early hands-on exposure to how banking infrastructure and APIs operate in production, experience that directly shaped a later focus on backend and fintech engineering.",
      ],
      technologies: ["IT Support", "Hardware Troubleshooting", "Networking", "Banking APIs"],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-950/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Career Journey
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Professional Experience
          </h1>
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

                {experience.technologies.length > 0 && (
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
                )}

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
