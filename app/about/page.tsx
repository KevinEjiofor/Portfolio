import { AboutMe } from "@/components/about-me"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ejiofor E. Kevin, a software engineer building maintainable full-stack products across fintech, logistics and healthtech, with a focus on scalable backends and clean architecture.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Ejiofor E. Kevin",
    description:
      "About Ejiofor E. Kevin, a software engineer building maintainable full-stack products across fintech, logistics and healthtech, with a focus on scalable backends and clean architecture.",
    url: "/about",
  },
}

export default function AboutPage() {
  return <AboutMe />
}

