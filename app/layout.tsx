import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { SideDotNav } from "@/components/side-dot-nav"
import { ScrollPageNavigator } from "@/components/scroll-page-navigator"

export const metadata: Metadata = {
  title: "Ejiofor E. Kevin - Senior Software Engineer",
  description: "Senior Software Engineer specializing in full-stack development and modern web technologies",
  generator: "v0.dev",
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
