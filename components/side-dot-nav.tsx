"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Certifications", href: "/certifications" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]

export function SideDotNav() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0) // 0..1 within current page

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      const doc = document.documentElement
      const max = (doc.scrollHeight || 0) - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      setScrollProgress(p)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  if (!mounted) return null

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  const activeIndex = Math.max(
    0,
    navItems.findIndex((i) => isActive(i.href)),
  )

  // Each row is 20px (h-5) with 12px gap (gap-3) → step = 32px
  const ROW = 20
  const GAP = 12
  const STEP = ROW + GAP
  const TOTAL = navItems.length * ROW + (navItems.length - 1) * GAP
  // Fill height: from top to current dot center (+ROW/2), plus extra inside the current page based on scroll
  const baseFill = activeIndex * STEP + ROW / 2
  const nextFill = activeIndex < navItems.length - 1 ? STEP : 0
  const fillHeight = Math.min(TOTAL, baseFill + nextFill * scrollProgress)

  return (
    <nav
      aria-label="Page navigation"
      className="fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="relative" style={{ height: TOTAL }}>
        {/* Vertical connecting track */}
        <span
          aria-hidden
          className="absolute right-[9px] top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-800"
        />
        {/* Animated progress fill */}
        <span
          aria-hidden
          className="absolute right-[9px] top-0 w-px bg-gray-900 dark:bg-white transition-[height] duration-300 ease-out"
          style={{ height: fillHeight }}
        />

        <ul className="relative flex flex-col gap-3">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <li key={item.href} className="group relative flex items-center justify-end">
                {/* Tooltip / label */}
                <span
                  className={`pointer-events-none absolute right-7 whitespace-nowrap rounded-md border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black px-2.5 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-sm transition-all duration-200 ${
                    active
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {item.label}
                </span>

                <Link
                  href={item.href}
                  aria-label={`Go to ${item.label}`}
                  aria-current={active ? "page" : undefined}
                  className="relative flex h-5 w-5 items-center justify-center"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      active
                        ? "h-3 w-3 bg-gray-900 dark:bg-white ring-4 ring-gray-900/15 dark:ring-white/15 scale-100"
                        : "h-2 w-2 bg-gray-300 dark:bg-neutral-700 group-hover:bg-gray-700 dark:group-hover:bg-gray-300 group-hover:scale-110"
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
