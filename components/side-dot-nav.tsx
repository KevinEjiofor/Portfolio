"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  PAGE_ORDER,
  PAGE_PULL_EVENT,
  type PagePullDetail,
} from "@/components/scroll-page-navigator";

const NO_PULL: PagePullDetail = { direction: null, href: null, progress: 0 };

// Each row is 20px (h-5) with a 12px gap (gap-3)
const ROW = 20;
const GAP = 12;
const STEP = ROW + GAP;
const TOTAL = PAGE_ORDER.length * ROW + (PAGE_ORDER.length - 1) * GAP;

/**
 * Right-hand page dots. The line fills to the current page's dot, creeps halfway toward
 * the next dot as the visitor scrolls through the page, and closes the remaining gap
 * while they pull past the bottom edge, so the dot that is about to become active grows
 * as the gesture progresses.
 */
export function SideDotNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0..1 within the current page
  const [pull, setPull] = useState<PagePullDetail>(NO_PULL);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight || 0) - window.innerHeight;
      setScrollProgress(
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setPull(NO_PULL);
    const onPull = (e: Event) =>
      setPull((e as CustomEvent<PagePullDetail>).detail);
    window.addEventListener(PAGE_PULL_EVENT, onPull);
    return () => window.removeEventListener(PAGE_PULL_EVENT, onPull);
  }, [pathname]);

  if (!mounted) return null;

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const activeIndex = Math.max(
    0,
    PAGE_ORDER.findIndex((i) => isActive(i.href)),
  );
  const hasNext = activeIndex < PAGE_ORDER.length - 1;

  const activeCenter = activeIndex * STEP + ROW / 2;
  const pageFill = hasNext ? (STEP / 2) * scrollProgress : 0;
  const pullFill =
    hasNext && pull.direction === "next" ? (STEP / 2) * pull.progress : 0;
  const fillHeight = Math.min(TOTAL, activeCenter + pageFill + pullFill);

  return (
    <>
      {/* Reading progress for screens without the dot rail. Scrollbars are hidden
          site-wide, so this is the only position indicator below the lg breakpoint. */}
      <div
        aria-hidden
        className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-transparent lg:hidden"
      >
        <div
          className="h-full bg-gray-900 dark:bg-white transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

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
          {/* Progress fill */}
          <span
            aria-hidden
            className="absolute right-[9px] top-0 w-px bg-gray-900 dark:bg-white transition-[height] duration-150 ease-out"
            style={{ height: fillHeight }}
          />

          <ul className="relative flex flex-col gap-3">
            {PAGE_ORDER.map((item) => {
              const active = isActive(item.href);
              const pulling =
                !active && pull.href === item.href && pull.progress > 0;
              return (
                <li
                  key={item.href}
                  className="group relative flex items-center justify-end"
                >
                  {/* Tooltip / label */}
                  <span
                    className={`pointer-events-none absolute right-7 whitespace-nowrap rounded-md border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black px-2.5 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-sm transition-all duration-200 ${
                      active || pulling
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
                      className={`block rounded-full transition-[background-color,transform,box-shadow] duration-150 ${
                        active
                          ? "h-3 w-3 bg-gray-900 dark:bg-white ring-4 ring-gray-900/15 dark:ring-white/15"
                          : pulling
                            ? "h-2 w-2 bg-gray-800 dark:bg-gray-200 ring-4 ring-gray-900/10 dark:ring-white/10"
                            : "h-2 w-2 bg-gray-300 dark:bg-neutral-700 group-hover:bg-gray-700 dark:group-hover:bg-gray-300 group-hover:scale-110"
                      }`}
                      style={
                        pulling
                          ? { transform: `scale(${1 + 0.6 * pull.progress})` }
                          : undefined
                      }
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
