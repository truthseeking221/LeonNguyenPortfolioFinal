import type { Metadata } from "next"
import aboutPortraitImage from "../images/Leon - About.png"
import { AboutClient } from "@/components/about-client"

export const metadata: Metadata = {
  title: "About — Leon",
  description:
    "Product designer and builder. Ten years across fintech, DeFi, and neobanking.",
}

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const CHAPTERS = [
  {
    year: "2019",
    conviction: "Being the only designer teaches you everything",
    context:
      "At Incognito Chain I was the sole design lead. Website, mobile app, and the Node hardware, their first physical product. Managed a team of three, built the design process from scratch, and took a privacy platform from pre-launch to 50K+ users. When there's no one to hand off to, you learn what actually matters.",
  },
  {
    year: "2020",
    conviction: "Healthcare raised my standards permanently",
    context:
      "At Diag, I designed diagnostic flows where unclear interactions could delay medical results. Stakes that high change you. You test more, assume less, and never call something done until you\u2019ve watched real people use it.",
  },
  {
    year: "2021",
    conviction: "Systems beat screens",
    context:
      "At Satang, a Thai crypto exchange, I saw that screens without a system behind them create debt the moment a team grows. I started building design systems and token architectures before touching any interface.",
  },
  {
    year: "2022",
    conviction: "Five million users changed everything",
    context:
      "TymeBank\u2019s crypto feature shipped to over 5M users in South Africa. At that scale, every design choice is a bet on real behavior. I learned to cut scope and measure what actually moved onboarding completion.",
  },
  {
    year: "2023",
    conviction: "I started building what I designed",
    context:
      "The gap between design intent and shipped code bothered me enough to learn Next.js. At Gull Network, I designed the DEX interface, the brand system, and the token launchpad. Then I helped build it.",
  },
  {
    year: "2024",
    conviction: "Research killed our assumptions. Good.",
    context:
      "At NODO, I ran usability research with 24 participants to understand how people outside crypto perceive AI managed vaults. The findings killed half our design assumptions and shaped a product that made sense to its actual audience.",
  },
] as const

const TOOLS = [
  { name: "Figma", why: "Where ideas become testable" },
  { name: "Claude", why: "Where ambiguity becomes structure" },
  { name: "Cursor", why: "Where design becomes real" },
  { name: "Linear", why: "Where intention becomes momentum" },
] as const

const READING = [
  { title: "The Heart of the Buddha’s Teaching", author: "Thich Nhat Hanh" },
  { title: "The Shape of Design", author: "Frank Chimero" },
  { title: "Thinking in Systems", author: "Donella Meadows" },
] as const

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <AboutClient 
        dashboardFirstImage={aboutPortraitImage}
        chapters={CHAPTERS}
        tools={TOOLS}
        reading={READING}
      />
    </main>
  )
}
