"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

export interface TOCItem {
  id: string
  label: string
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = React.useState("")

  React.useEffect(() => {
    const sectionEls = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    )

    for (const el of sectionEls) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Table of contents" className="fixed top-1/2 -translate-y-1/2">
      <ul className="flex flex-col gap-3">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={cn(
                "block font-mono text-[10px] tracking-wider uppercase transition-all duration-300",
                activeId === id
                  ? "translate-x-1 text-foreground/70"
                  : "text-foreground/30 hover:text-foreground/50"
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
