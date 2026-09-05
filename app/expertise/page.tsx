import { ExpertiseSection } from "@/components/expertise-section"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "The technical toolkit of Ejiofor E. Kevin: Java and Spring Boot, Node.js, TypeScript, Next.js and React, React Native, PostgreSQL, Docker and Kubernetes, on AWS, Google Cloud and Heroku.",
  alternates: { canonical: "/expertise" },
  openGraph: {
    title: "Expertise — Ejiofor E. Kevin",
    description:
      "The technical toolkit of Ejiofor E. Kevin: Java and Spring Boot, Node.js, TypeScript, Next.js and React, React Native, PostgreSQL, Docker and Kubernetes, on AWS, Google Cloud and Heroku.",
    url: "/expertise",
  },
}

export default function ExpertisePage() {
  return <ExpertiseSection />
}

