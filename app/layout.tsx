import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { SideDotNav } from "@/components/side-dot-nav"
import { ScrollPageNavigator } from "@/components/scroll-page-navigator"
import { StructuredData } from "@/components/structured-data"
import { site, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  // Every relative URL below (canonicals, OG images) resolves against this.
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.jobTitle}`,
    // Sub-pages set only their own name; the person's name always stays in the tab.
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    site.name,
    ...site.alternateNames,
    "software engineer",
    "full-stack developer",
    "backend engineer",
    "Java developer",
    "Spring Boot",
    "Next.js developer",
    "React Native developer",
    "cloud engineer",
    "Lagos",
    "Nigeria",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.jobTitle}`,
    description: site.description,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.jobTitle}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the token Google Search Console gives
  // you, then click Verify there. Without it the property stays unverified.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}

// Browser chrome (address bar, scrollbars, form controls) follows the active theme
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <SideDotNav />
            <ScrollPageNavigator />
            <main className="pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
