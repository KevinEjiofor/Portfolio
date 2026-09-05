import { GetInTouch } from "@/components/get-in-touch"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ejiofor E. Kevin about software engineering roles, freelance work or collaboration on full-stack, backend and cloud projects.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Ejiofor E. Kevin",
    description:
      "Get in touch with Ejiofor E. Kevin about software engineering roles, freelance work or collaboration on full-stack, backend and cloud projects.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return <GetInTouch />
}

