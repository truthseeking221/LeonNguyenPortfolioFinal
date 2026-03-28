"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import {
  PROJECTS,
  formatProjectPosition,
  getCaseStudyNavigation,
} from "./projects"

interface ProjectNavProps {
  currentProject: string
}

export function ProjectNav({ currentProject }: ProjectNavProps) {
  const [isSwitcherOpen, setIsSwitcherOpen] = React.useState(false)
  const switcherRef = React.useRef<HTMLDivElement>(null)
  const desktopRail =
    "mx-auto flex h-12 w-full max-w-[1100px] items-center justify-between px-6 md:px-10 lg:px-14"

  const { currentIndex, currentProject: activeProject, prevProject, nextProject, totalProjects } =
    getCaseStudyNavigation(currentProject)

  React.useEffect(() => {
    if (!isSwitcherOpen) {
      return
    }

    function onPointerDown(event: MouseEvent) {
      if (
        switcherRef.current &&
        event.target instanceof Node &&
        !switcherRef.current.contains(event.target)
      ) {
        setIsSwitcherOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSwitcherOpen(false)
      }
    }

    document.addEventListener("mousedown", onPointerDown)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isSwitcherOpen])

  const positionLabel = `${formatProjectPosition(currentIndex)} / ${formatProjectPosition(
    totalProjects - 1
  )}`

  return (
    <>
      <div className="border-b border-border/15 bg-background md:hidden">
        <div className="mx-auto flex h-11 max-w-[1340px] items-center justify-center px-6">
          <div className="text-center">
            <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
              Project {positionLabel}
            </p>
            <p className="mt-0.5 text-[11px] font-medium tracking-tight text-foreground/75">
              {activeProject.title}
            </p>
          </div>
        </div>
      </div>

      <nav className="sticky top-16 z-[58] hidden border-b border-border/15 bg-background md:block">
        <div className="xl:grid xl:grid-cols-[120px_1fr]">
          <div aria-hidden className="hidden xl:block" />

          <div className={desktopRail}>
            <div ref={switcherRef} className="relative flex min-w-0 shrink-0 justify-start">
            <button
              type="button"
              aria-expanded={isSwitcherOpen}
              aria-controls="case-study-switcher"
              onClick={() => setIsSwitcherOpen((open) => !open)}
              className={cn(
                "group inline-flex max-w-[26rem] items-center gap-3 rounded-full border px-4 py-2 text-left transition-all duration-300",
                "border-border/20 bg-background hover:border-black/10 hover:bg-white",
                isSwitcherOpen && "border-black/10 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              )}
            >
              <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/40 uppercase tabular-nums transition-colors duration-300 group-hover:text-muted-foreground/55">
                {positionLabel}
              </span>
              <span className="truncate text-sm font-medium tracking-tight text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                {activeProject.title}
              </span>
              <ChevronDown
                className={cn(
                  "size-3.5 shrink-0 text-muted-foreground/45 transition-[transform,color] duration-300 group-hover:text-foreground/60",
                  isSwitcherOpen && "rotate-180"
                )}
              />
            </button>

            {isSwitcherOpen && (
              <div
                id="case-study-switcher"
                className="absolute left-0 top-full z-20 mt-3 w-[min(28rem,calc(100vw-4rem))] rounded-[24px] border border-border/20 bg-background p-2 shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="px-3 pb-2 pt-1">
                  <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
                    All Case Studies
                  </p>
                </div>

                <div className="space-y-1">
                  {PROJECTS.map((project, index) => {
                    const isActive = project.id === currentProject

                    return (
                      <Link
                        key={project.id}
                        href={project.href}
                        onClick={() => setIsSwitcherOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex items-center justify-between rounded-[18px] px-3 py-3 transition-colors",
                          isActive
                            ? "bg-foreground/[0.04]"
                            : "hover:bg-foreground/[0.03]"
                        )}
                      >
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/30 uppercase tabular-nums">
                              {formatProjectPosition(index)}
                            </span>
                            <span
                              className={cn(
                                "truncate text-sm font-medium tracking-tight",
                                isActive ? "text-foreground" : "text-foreground/80"
                              )}
                            >
                              {project.title}
                            </span>
                          </div>
                          <p className="mt-1 truncate pl-7 text-xs text-muted-foreground/45">
                            {project.category}
                          </p>
                        </div>

                        <span className="ml-4 shrink-0">
                          {isActive ? (
                            <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
                              Current
                            </span>
                          ) : (
                            <ArrowUpRight className="size-3.5 text-muted-foreground/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          )}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={prevProject.href}
                className="group inline-flex items-center gap-2 rounded-full border border-border/20 bg-background px-3 py-2 text-muted-foreground/55 transition-all duration-300 hover:border-black/10 hover:bg-white hover:text-foreground"
                aria-label={`Previous project: ${prevProject.title}`}
              >
                <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                <span className="hidden font-mono text-[10px] tracking-[0.18em] uppercase lg:inline">
                  Prev
                </span>
              </Link>

              <Link
                href={nextProject.href}
                className="group inline-flex items-center gap-2 rounded-full border border-border/20 bg-background px-3 py-2 text-muted-foreground/55 transition-all duration-300 hover:border-black/10 hover:bg-white hover:text-foreground"
                aria-label={`Next project: ${nextProject.title}`}
              >
                <span className="hidden font-mono text-[10px] tracking-[0.18em] uppercase lg:inline">
                  Next
                </span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
