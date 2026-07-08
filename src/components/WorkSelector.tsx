"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workCategories, siteConfig } from "@/data/projects";

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname.startsWith(href);
}

export function WorkSelector() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site navigation"
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-border/50 bg-ink/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-3xl items-stretch justify-center px-3 py-2 md:max-w-4xl md:px-6 md:py-3">
        <div className="flex flex-1 items-center justify-center gap-1 md:gap-2">
          {workCategories.map((category) => {
            const active = isActive(category.href, pathname);
            return (
              <Link
                key={category.id}
                href={category.href}
                prefetch
                className={`flex-1 px-2 py-2.5 text-center text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 md:px-4 md:py-3 md:text-xs md:tracking-[0.2em] ${
                  active
                    ? "bg-accent/15 text-accent"
                    : "text-cream-muted hover:bg-surface/80 hover:text-cream"
                }`}
              >
                {category.label}
              </Link>
            );
          })}
        </div>

        <div className="mx-2 w-px self-stretch bg-border/50 md:mx-3" />

        <div className="flex items-center gap-1 md:gap-2">
          <Link
            href="/about/"
            prefetch
            className={`px-3 py-2.5 text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 md:px-4 md:py-3 md:text-xs md:tracking-[0.2em] ${
              pathname.startsWith("/about")
                ? "text-accent"
                : "text-cream-muted hover:text-cream"
            }`}
          >
            About
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="px-3 py-2.5 text-[10px] tracking-[0.18em] uppercase text-cream-muted transition-colors duration-200 hover:text-cream md:px-4 md:py-3 md:text-xs md:tracking-[0.2em]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
