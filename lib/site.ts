/**
 * Single source of truth for site-wide SEO values.
 *
 * The canonical host is www.kevinejiofor.com. Serve the bare apex (kevinejiofor.com)
 * as a 301 redirect to it rather than as a second copy of the site, otherwise search
 * engines index both and split the ranking between them.
 *
 * NEXT_PUBLIC_SITE_URL overrides this for previews and staging.
 */
const FALLBACK_URL = "https://www.kevinejiofor.com"

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, "")
  // Vercel exposes the production domain at build time.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`
  return FALLBACK_URL
}

export const siteUrl = resolveSiteUrl()

export const site = {
  url: siteUrl,
  name: "Ejiofor E. Kevin",
  // Variants people actually type into Google.
  alternateNames: ["Ejiofor Ekenedilichukwu Kevin", "Kevin Ejiofor", "Ejiofor Kevin"],
  jobTitle: "Software Engineer",
  tagline: "Software Engineer — full-stack, backend and cloud",
  description:
    "Ejiofor E. Kevin is a software engineer with 3+ years building full-stack products across fintech, logistics, healthtech and SaaS. Java and Spring Boot, Node.js, Next.js and React, React Native, on AWS, Google Cloud and Heroku.",
  email: "ejioforkelvin@gmail.com",
  location: { city: "Lagos", country: "NG", countryName: "Nigeria" },
  image: "/assets/profilePic.webp",
  ogImage: "/og.png",
  socials: {
    github: "https://github.com/KevinEjiofor",
    linkedin: "https://www.linkedin.com/in/kevin-ejiofor-476487283",
  },
  employer: { name: "Spark Strand", url: "https://sparkstrand.com/en" },
  alumniOf: [
    { name: "Abia State Polytechnic, Aba" },
    { name: "Semicolon Africa", url: "https://semicolon.africa" },
    { name: "Henley Business School, University of Reading" },
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Backend Development",
    "Java",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React",
    "React Native",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "CI/CD",
  ],
} as const

/** Pages included in the sitemap, ordered by importance. */
export const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/expertise", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/certifications", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
]
