import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Apple, Smartphone, HeartPulse, Stethoscope } from "lucide-react"
import { GitHubIcon } from "@/components/brand-icons"
import Image from "next/image"

export function WorkPortfolio() {
  const projects = [
    {
      title: "Spark Strand",
      description:
        "Integrated business management platform supporting HR operations, project management, payments, and client workflows. Built scalable apps with Next.js, Supabase, and Clerk for secure user management and API integration.",
      image: "/assets/emblem.png",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["Next.js", "TypeScript", "Supabase", "Clerk", "Tailwind CSS", "GitHub Actions"],
      liveUrl: "https://sparkstrand.com/en",
      githubUrl: "",
      category: "SaaS Platform",
      company: "Spark Strand",
    },
    {
      title: "HRM",
      description:
        "Human Resource Management dashboard with employee operations, communication systems, and mobile-friendly interfaces. Includes admin dashboards, role-based access, and automated workflows.",
      image: "/assets/emblem.png",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["Next.js", "Supabase", "Clerk", "Tailwind CSS"],
      liveUrl: "https://hrm.sparkstrand.com/",
      githubUrl: "",
      category: "Web Application",
      company: "Spark Strand",
    },
    {
      title: "Kubana",
      description:
        "Client and project workflow product with wallet/payment workflows, communication systems, and responsive dashboards. Deployed via GitHub Actions CI/CD pipelines with automated environment configurations.",
      image: "/assets/emblem.png",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["Next.js", "Supabase", "Clerk", "GitHub Actions"],
      liveUrl: "https://kanban.sparkstrand.com/",
      githubUrl: "",
      category: "SaaS Platform",
      company: "Spark Strand",
    },
    {
      title: "The Growth Machine",
      description:
        "Lead pipeline and business growth platform covering the full lead lifecycle: business leads and contacts with outreach tracking, automatic import of newly registered UK companies from Companies House, and job postings from companies in the pipeline. Adds email and ad campaign management, newsletter subscribers, scheduled social media posts and comments, article publishing with peer review, AI-powered SEO keyword research, and analytics reporting.",
      image: "/assets/emblem.png",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["React", "Vite", "Supabase", "Resend", "Tailwind CSS"],
      liveUrl: "https://marketing.sparkstrand.com",
      githubUrl: "",
      category: "Marketing · CRM",
      company: "Spark Strand",
    },
    {
      title: "Vanly",
      description:
        "UK-based logistics and van delivery platform connecting customers with verified drivers through real-time booking, live tracking, and payout management. React Native mobile apps with a Laravel backend, integrated with Yoti, DVLA, and Stripe. Released to the Apple App Store and Google Play.",
      image: "/assets/company-footer-logo0.svg",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["React Native", "Expo", "Laravel", "Stripe", "Google Maps API", "Docker", "AWS Amplify", "App Store", "Google Play"],
      liveUrl: "https://vanlysystem.com/",
      githubUrl: "",
      category: "Mobile · Logistics",
      company: "Vanly",
      stores: [
        { label: "iOS", icon: Apple, url: "https://apps.apple.com/gb/app/vanly/id6760961583" },
        {
          label: "Android",
          icon: Smartphone,
          url: "https://play.google.com/store/apps/details?id=com.vanly.userapp",
        },
      ],
    },
    {
      title: "Vanly Driver",
      description:
        "Driver-facing companion app for the Vanly platform with earnings dashboards, booking management, identity verification, and live job tracking. Published on iOS App Store and Google Play.",
      image: "/assets/company-footer-logo0.svg",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["React Native", "Expo", "Laravel", "Yoti", "DVLA", "Stripe", "App Store", "Google Play"],
      liveUrl: "https://apps.apple.com/gb/app/vanly-driver/id6760938420",
      githubUrl: "",
      category: "Mobile App",
      company: "Vanly",
      stores: [
        {
          label: "iOS",
          icon: Apple,
          url: "https://apps.apple.com/gb/app/vanly-driver/id6760938420",
        },
        {
          label: "Android",
          icon: Smartphone,
          url: "https://play.google.com/store/apps/details?id=com.vanly.driver",
        },
      ],
    },
    {
      title: "Vanly Website",
      description:
        "Marketing landing page for the Vanly platform with a conversion-focused hero, how-it-works flow, van categories with load specs, driver recruitment, and App Store / Google Play download CTAs. Built with the Next.js App Router and deployed on AWS Amplify behind CloudFront.",
      image: "/assets/company-footer-logo0.svg",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["Next.js", "React", "TypeScript", "CSS", "AWS Amplify", "CloudFront"],
      liveUrl: "https://www.vanlysystem.com/",
      githubUrl: "",
      category: "Landing Page",
      company: "Vanly",
    },
    {
      title: "Finarium",
      description:
        "Digital banking and exchange platform with fintech infrastructure, payment integrations, and notification systems. Integrated Providus Bank, Interswitch, PRUNE, Rafiki, and VertoFX for local and cross-border transactions. Hosted on AWS and released to the Apple App Store and Google Play.",
      image: "/assets/Fibarium.png",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      imagePadding: "p-3" as const,
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JWT", "Docker", "AWS", "VertoFX", "Interswitch", "App Store", "Google Play"],
      liveUrl: "https://thefinarium.com/login",
      githubUrl: "",
      category: "Fintech",
      company: "Miraton Matador Group",
    },
    {
      title: "Shanono",
      description:
        "Mobile-first digital wallet and payment app with secure authentication, real-time notifications, virtual account management, and FX settlement flows. Hosted on AWS and available on iOS and Android, with reconciliation jobs and automated transaction monitoring.",
      image: "/assets/shanonno.jpeg",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS", "OneSignal", "Twilio", "Termii", "App Store", "Google Play"],
      liveUrl: "https://myshanonobank.com/",
      githubUrl: "",
      category: "Fintech · Mobile",
      company: "Miraton Matador Group",
      stores: [
        {
          label: "iOS",
          icon: Apple,
          url: "https://apps.apple.com/us/app/shanono-bank/id6753195294",
        },
        {
          label: "Android",
          icon: Smartphone,
          url: "https://play.google.com/store/apps/details?id=com.shanono_mmg.shanono_mobile&hl=en",
        },
      ],
    },
    {
      title: "CosmicForge HealthNet",
      description:
        "Telemedicine platform connecting patients, doctors, pharmacies, and labs across Africa. Marketing site covering video, audio, and chat consultations, doctor availability and appointment tracking, self-service consultation pricing, subscription plans in USD and NGN, and prescriptions routed to partner pharmacies. Backed by a Node.js API containerised with Docker and shipped to Heroku through GitHub Actions CI/CD.",
      image: "/assets/cos.png",
      imageFit: "contain" as const,
      imageBg: "bg-white",
      imagePadding: "p-10" as const,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Docker", "GitHub Actions", "Heroku"],
      liveUrl: "https://www.cosmicforge-healthnet.com",
      githubUrl: "",
      category: "HealthTech",
      company: "CosmicForge HealthNet",
    },
    {
      title: "CosmicForge Dashboard",
      description:
        "Patient and doctor portal for the CosmicForge network. Role-based registration switches the form by user type, adding specialty selection across 25 medical departments and international dialling codes for doctors, alongside Google OAuth sign-in and consultation management. Talks to a Node.js backend deployed to Heroku via Dockerised GitHub Actions pipelines.",
      image: "/assets/cos.png",
      imageFit: "contain" as const,
      imageBg: "bg-white",
      imagePadding: "p-10" as const,
      technologies: ["Next.js", "React", "TypeScript", "OAuth", "Tailwind CSS", "Node.js", "Docker", "GitHub Actions", "Heroku"],
      liveUrl: "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient",
      githubUrl: "",
      category: "Web Application",
      company: "CosmicForge HealthNet",
      portals: [
        {
          label: "Patient sign-up",
          icon: HeartPulse,
          url: "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient",
        },
        {
          label: "Doctor sign-up",
          icon: Stethoscope,
          url: "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor",
        },
      ],
    },
    {
      title: "CosmicForge Lab Portal",
      description:
        "Laboratory portal for the CosmicForge network, handling digital test orders and result sharing between labs, doctors, and patients. Supports lab administrator accounts, invitation-based staff onboarding, and persistent sessions, served by the same Dockerised Node.js backend on Heroku.",
      image: "/assets/cos.png",
      imageFit: "contain" as const,
      imageBg: "bg-white",
      imagePadding: "p-10" as const,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Docker", "GitHub Actions", "Heroku"],
      liveUrl: "https://lab.cosmicforge-healthnet.com/",
      githubUrl: "",
      category: "Lab Portal",
      company: "CosmicForge HealthNet",
    },
    {
      title: "Leverpay",
      description:
        "Cross-platform crypto payments product delivered across a web platform, landing page, and mobile application. Led the frontend and mobile team within a 10+ person engineering team, implemented the mobile app's wallet and payment flows, integrated with the backend and cloud teams strictly through versioned API contracts, and owned end-to-end QA from backend services through to the web and mobile experience before each release.",
      image: "/assets/leverpay.png",
      imageFit: "contain" as const,
      imageBg: "bg-black",
      technologies: ["Crypto Payments", "Web Platform", "Mobile App", "REST APIs", "QA Testing"],
      liveUrl: "https://lever-pay.com/",
      githubUrl: "",
      category: "Crypto · Fintech",
      company: "Leverpay",
    },
  ]

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world products I've built and shipped — spanning fintech, crypto, logistics, healthtech, and SaaS platforms across web and
            mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-neutral-800 overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="block"
              >
                <div
                  className={`relative h-40 sm:h-48 overflow-hidden ${
                    (project as any).imageBg ?? "bg-gray-100 dark:bg-neutral-900"
                  }`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`${
                      (project as any).imageFit === "contain"
                        ? `object-contain ${(project as any).imagePadding ?? "p-8"}`
                        : "object-cover"
                    } group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <span>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Site
                          </span>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GitHubIcon className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </a>

              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      {project.title}
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </CardTitle>
                  <Badge variant="outline" className="text-xs whitespace-nowrap">
                    {project.category}
                  </Badge>
                </div>
                {project.company && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{project.company}</p>
                )}
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
                      className="text-xs bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.portals && project.portals.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.portals.map((portal, portalIndex) => {
                      const Icon = portal.icon
                      return (
                        <a
                          key={portalIndex}
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {portal.label}
                        </a>
                      )
                    })}
                  </div>
                )}

                {project.stores && project.stores.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stores.map((store, storeIndex) => {
                      const Icon = store.icon
                      return (
                        <a
                          key={storeIndex}
                          href={store.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {store.label}
                        </a>
                      )
                    })}
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
