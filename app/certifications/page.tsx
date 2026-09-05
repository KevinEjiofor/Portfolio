import { CertificationsSection } from "@/components/certifications-section"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Academic and professional credentials held by Ejiofor E. Kevin, including a Higher National Diploma in Computer Science, NYSC national service, and Henley Business School and Semicolon programs.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications — Ejiofor E. Kevin",
    description:
      "Academic and professional credentials held by Ejiofor E. Kevin, including a Higher National Diploma in Computer Science, NYSC national service, and Henley Business School and Semicolon programs.",
    url: "/certifications",
  },
}

export default function CertificationsPage() {
  return <CertificationsSection />
}

