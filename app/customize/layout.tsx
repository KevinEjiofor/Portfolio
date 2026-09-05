import type { Metadata } from "next"

// Internal theme playground: useful locally, but it should never appear in search results.
export const metadata: Metadata = {
  title: "Customize",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function CustomizeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
