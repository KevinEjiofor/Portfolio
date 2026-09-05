import { CareerPath } from "@/components/career-path"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The career path of Ejiofor E. Kevin, from cloud engineering at Semicolon Ventures through backend engineering at Miraton Matador Group to software engineering at Spark Strand.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Ejiofor E. Kevin",
    description:
      "The career path of Ejiofor E. Kevin, from cloud engineering at Semicolon Ventures through backend engineering at Miraton Matador Group to software engineering at Spark Strand.",
    url: "/experience",
  },
}

export default function ExperiencePage() {
  return <CareerPath />
}

