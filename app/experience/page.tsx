import { CareerPath } from "@/components/career-path"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The career path of Ejiofor E. Kevin, from banking IT support at Guaranty Trust Bank and POS infrastructure at Supersoft, to leading frontend at Leverpay, then CosmicForge HealthNet, Miraton Matador Group, Vanly and Spark Strand.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Ejiofor E. Kevin",
    description:
      "The career path of Ejiofor E. Kevin, from banking IT support at Guaranty Trust Bank and POS infrastructure at Supersoft, to leading frontend at Leverpay, then CosmicForge HealthNet, Miraton Matador Group, Vanly and Spark Strand.",
    url: "/experience",
  },
}

export default function ExperiencePage() {
  return <CareerPath />
}

