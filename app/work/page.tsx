import { WorkPortfolio } from "@/components/work-portfolio"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products Ejiofor E. Kevin has built and shipped, including Vanly logistics apps, Finarium and Shanono fintech platforms, CosmicForge HealthNet telemedicine, Leverpay crypto payments, and the Spark Strand SaaS suite.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Ejiofor E. Kevin",
    description:
      "Products Ejiofor E. Kevin has built and shipped, including Vanly logistics apps, Finarium and Shanono fintech platforms, CosmicForge HealthNet telemedicine, Leverpay crypto payments, and the Spark Strand SaaS suite.",
    url: "/work",
  },
}

export default function WorkPage() {
  return <WorkPortfolio />
}

