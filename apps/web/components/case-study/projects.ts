"use client"

export interface CaseStudyProject {
  id: string
  title: string
  subtitle: string
  category: string
  href: string
}

export const PROJECTS: CaseStudyProject[] = [
  {
    id: "nodo-ai",
    title: "NODO AI",
    subtitle: "Designing an AI-powered DeFi protocol",
    category: "DeFi Infrastructure",
    href: "/projects/nodo-ai",
  },
  {
    id: "tymebank-crypto",
    title: "TymeBank Crypto",
    subtitle: "Bringing crypto to a mass-market banking app in an emerging market",
    category: "Fintech / Retail",
    href: "/projects/tymebank-crypto",
  },
  {
    id: "gotyme-savings",
    title: "GoTyme Savings",
    subtitle: "Gamifying financial habits for Southeast Asia",
    category: "Fintech / Neobank",
    href: "/projects/gotyme-savings",
  },
  {
    id: "gull-network",
    title: "Gull Network",
    subtitle: "DeFi ecosystem for L3 blockchain",
    category: "Web3 / DeFi",
    href: "/projects/gull-network",
  },
  {
    id: "love-birds",
    title: "Love Birds",
    subtitle: "Modernizing the dating app experience",
    category: "Consumer / Mobile",
    href: "/projects/love-birds",
  },
]

export function getCaseStudyNavigation(currentProject: string) {
  const currentIndex = PROJECTS.findIndex((project) => project.id === currentProject)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex

  return {
    currentIndex: safeIndex,
    currentProject: PROJECTS[safeIndex]!,
    prevProject: PROJECTS[(safeIndex - 1 + PROJECTS.length) % PROJECTS.length]!,
    nextProject: PROJECTS[(safeIndex + 1) % PROJECTS.length]!,
    totalProjects: PROJECTS.length,
  }
}

export function formatProjectPosition(index: number) {
  return (index + 1).toString().padStart(2, "0")
}
