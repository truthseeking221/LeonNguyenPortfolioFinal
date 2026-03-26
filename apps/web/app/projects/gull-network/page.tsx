import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { TableOfContents } from "@/components/case-study/table-of-contents"
import { ImagePlaceholder } from "@/components/case-study/image-placeholder"
import cryptoImage from "../../images/Crypto.png"

export const metadata: Metadata = {
  title: "Gull Network — Case Study — Leon",
  description:
    "Brand, product, and character design for a meme-first DEX on Manta Network. A case study by Leon.",
}

const tocItems = [
  { id: "snapshot", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "challenge", label: "Challenge" },
  { id: "role", label: "Role" },
  { id: "objectives", label: "Objectives" },
  { id: "process", label: "Process" },
  { id: "discovery", label: "Discovery" },
  { id: "insights", label: "Insights" },
  { id: "principles", label: "Principles" },
  { id: "architecture", label: "Architecture" },
  { id: "exploration", label: "Exploration" },
  { id: "solution", label: "Solution" },
  { id: "brand", label: "Brand & Character" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
]

const contentRail = "mx-auto w-full max-w-[1100px] px-6 md:px-10 lg:px-14"
const sectionRail = `${contentRail} py-24 md:py-32`
const dividerRail = "mx-auto h-px w-[calc(100%-3rem)] max-w-[1100px] bg-border/30 md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)]"

export default function GullNetworkCaseStudy() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      <div className="xl:grid xl:grid-cols-[120px_1fr]">
        <aside className="hidden xl:block xl:pl-6">
          <TableOfContents items={tocItems} />
        </aside>
        <div className="min-w-0">

      {/* 1. Hero */}
      <section className={`${contentRail} relative pt-28 pb-16 md:pt-36 md:pb-24`}>
        <div className="flex items-center gap-3">
          <Badge variant="outline">DEX & Launchpad</Badge>
          <Badge variant="secondary">Shipped</Badge>
        </div>

        <h1 className="mt-6 text-[clamp(3.5rem,12vw,10rem)] leading-[0.88] font-medium tracking-tighter">
          Gull Network
        </h1>

        <p className="mt-6 max-w-[50ch] text-xl leading-relaxed font-light text-muted-foreground md:text-2xl">
          A seagull, an ocean, and a DEX that let anyone launch a token
          without writing a single line of code. This is the story of
          building a world that a meme community would actually live in.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border/40 pt-8 md:grid-cols-5 md:gap-x-12">
          {[
            { label: "Role", value: "Product Designer & Brand Lead" },
            { label: "Timeline", value: "Q1 to Q4 2024" },
            { label: "Scope", value: "0 to 1 Product + Brand" },
            { label: "Platform", value: "Web App (Manta)" },
            { label: "Status", value: "Launched & Rebranded" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase">{label}</p>
              <p className="mt-1.5 text-sm text-foreground/80">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:ml-[15%] md:text-lg">
          Manta Network needed a native DEX. Memecoin traders needed a
          home. GullSwap became both. The product handles token launches,
          liquidity pools, farm setup, and incentive management. The brand
          handles the reason anyone cares: a seagull mascot with 60+
          expressions, a gamified airdrop that verified real traders from
          three blockchains, and an ocean world you scroll through like
          a descent into the deep. Every surface balances personality
          with utility. That tension is the entire project.
        </p>

        <div className="mt-16">
          <figure className="group">
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-muted/20 aspect-[2.2/1]">
              <img
                src={cryptoImage.src}
                alt="GullSwap landing page with layered ocean environment"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground/35">
              GullSwap landing page with layered ocean environment
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. Snapshot */}
      <section id="snapshot" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">At a glance</p>
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {[
            { title: "Overview", content: "Gull Network is a native DEX and token launchpad on Manta Network that later expanded into omnichain AI infrastructure across 9 chains. I led the full product design and brand identity: mascot, visual system, DEX interface, gamified airdrop, landing page, and marketing asset suite." },
            { title: "The Tension", content: "DeFi infrastructure is serious. Meme culture is not. The product needed both: codeless token launches for non-technical project teams and a community experience fun enough that degens would screenshot it and post it. One audience demands reliability. The other demands personality." },
            { title: "What I Made", content: "A character system with 60+ variations. A DEX with codeless everything. A gamified airdrop verifying on-chain trading history. A landing page built as an environmental journey. Social templates, sticker packs, and the visual language that tied it all into a single recognizable world." },
            { title: "What Happened", content: "$3.7M raised. 109K Twitter followers. 900 VIP NFTs sold in 12 hours. Token launched on Gate.io and Finceptor. The seagull became the community identity. Manta endorsed GullSwap as their native DEX." },
            { title: "Tools & Methods", content: "Figma, character illustration, competitive audit across the Manta ecosystem, community sentiment analysis, meme culture research, and iterative prototyping across product and marketing surfaces." },
            { title: "What This Is Really About", content: "Can a DEX have a soul? Can infrastructure have personality without sacrificing credibility? Can a brand built for degens survive a pivot to enterprise AI? This project tested all three." },
          ].map(({ title, content }) => (
            <div key={title} className="border-t border-border/30 pt-5">
              <h3 className="text-sm font-medium tracking-tight">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground/60">{content}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={dividerRail} />

      {/* 3. Context */}
      <section id="context" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Context</p>
        <h2 className="mt-4 max-w-[20ch] text-3xl font-medium tracking-tight md:text-4xl">A chain without a heartbeat</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_0.7fr] md:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>Manta Network had the infrastructure. It did not have the life. No native DEX meant no place to list tokens, no liquidity pools to join, no farming incentives to chase. Projects that wanted to launch on Manta had to deploy their own smart contracts. Non-technical teams could not participate. The chain existed, but nothing moved.</p>
            <p>At the same time, memecoin communities across Ethereum, Solana, and BSC were generating enormous volume. The top 100 memecoins were powering some of the most active trading in crypto. But the platforms serving them were either dense terminal interfaces or empty hype pages. Nobody was building something that combined real DeFi utility with the energy that actually brings people in.</p>
            <p>GullSwap was built to fill both gaps at once. The native exchange Manta needed. The meme-first platform traders wanted. Infrastructure underneath. Personality on top. One product, two completely different reasons to use it.</p>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "$3.7M", label: "Total funds raised", accent: "oklch(0.72 0.16 160)" },
                { stat: "109K", label: "Twitter followers", accent: "oklch(0.65 0.15 260)" },
                { stat: "500M", label: "Total token supply", accent: "oklch(0.72 0.14 85)" },
                { stat: "9", label: "Chains supported", accent: "oklch(0.65 0.16 25)" },
              ].map(({ stat, label, accent }) => (
                <div key={label} className="group relative overflow-hidden rounded-lg border border-border/20 bg-muted/10 p-3 transition-colors hover:bg-muted/20">
                  <div className="absolute bottom-0 left-0 h-[2px] w-full" style={{ backgroundColor: accent, opacity: 0.3 }} />
                  <p className="text-lg font-medium tracking-tight" style={{ color: accent }}>{stat}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground/40">{label}</p>
                </div>
              ))}
            </div>
            <ImagePlaceholder label="[Insert Manta ecosystem positioning diagram]" caption="GullSwap as the native DEX in the Manta ecosystem" aspectRatio="aspect-[4/3]" variant="artifact" />
          </div>
        </div>
      </section>

      {/* 4. Challenge */}
      <section id="challenge" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">The Challenge</p>
        <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight md:text-4xl">Two audiences. One product. Zero precedent.</h2>
        <blockquote className="mt-12 max-w-[32ch] border-l-2 border-foreground/10 pl-6 text-2xl leading-snug font-light tracking-tight text-foreground/80 md:ml-[10%] md:text-3xl">
          &quot;We want to launch a token but our team is a community manager and a marketer. We need a button, not a GitHub repo.&quot;
          <cite className="mt-3 block font-mono text-[10px] font-normal tracking-wider text-muted-foreground/30 not-italic">Early project team</cite>
        </blockquote>
        <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
          {[
            { title: "The Infrastructure Problem", content: "GullSwap had to be the backbone of Manta's DeFi ecosystem. Codeless token launches. Automated farm listings. Sniper-proof liquidity. Flexible post-launch reward control. All of this had to work reliably beneath a brand that looked like it was built for fun, not finance." },
            { title: "The Audience Split", content: "Project teams needed professional tooling: token configuration, tokenomics, reward schedules. Memecoin traders needed invitations, points, leaderboards, and a mascot worth posting about. Neither group would use something designed for the other. Both had to feel like it was made for them." },
            { title: "The Brand Paradox", content: "Manta Network is serious infrastructure. GullSwap needed Manta's endorsement as the native DEX. But the product also needed to attract communities that rally around memes, not whitepapers. Too playful and Manta walks away. Too corporate and the traders never show up." },
            { title: "The Blank Canvas", content: "No reference existed for what we were building. A DEX that is also a meme brand. A mascot that works in sticker packs and on a farm management dashboard. A gamified airdrop that checks your actual trading history across three chains. Every design decision was a first." },
          ].map(({ title, content }) => (
            <div key={title}>
              <h3 className="text-sm font-medium tracking-wider text-muted-foreground/50 uppercase">{title}</h3>
              <p className="mt-3 max-w-[45ch] text-base leading-relaxed text-muted-foreground">{content}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <ImagePlaceholder label="[Insert visual showing the dual-audience problem space]" caption="The tension between infrastructure utility and meme culture appeal" aspectRatio="aspect-[21/9]" variant="hero" />
        </div>
      </section>

      {/* 5. Role */}
      <section id="role" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Role</p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">My surface area</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="text-sm font-medium text-foreground/80">Built</h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-muted-foreground">
              <li>Brand identity and the complete visual language</li>
              <li>Seagull mascot: 60+ expressions, 4 evolution stages, accessories</li>
              <li>GullGame airdrop interface and all user flows</li>
              <li>DEX interface: swap, pools, farms, staking, token launch</li>
              <li>Landing page with layered ocean environment</li>
              <li>Social templates, sticker pack, marketing asset system</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/80">Shaped</h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-muted-foreground">
              <li>Product strategy and feature scope with the founding team</li>
              <li>Airdrop mechanics, points math, and referral structure</li>
              <li>Token launch flow within smart contract constraints</li>
              <li>Campaign visual direction and social rollout</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/80">Pushed</h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-muted-foreground">
              <li>Meme-first branding as a legitimate community strategy</li>
              <li>Invite-only gating as a growth mechanic, not a barrier</li>
              <li>Character evolution tied to engagement, not just points</li>
              <li>Environmental storytelling on the landing page</li>
            </ul>
          </div>
        </div>
      </section>

      <div className={dividerRail} />

      {/* 6. Objectives */}
      <section id="objectives" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Objectives</p>
        <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">The scoreboard</h2>
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {[
            { category: "Community", items: ["A brand identity meme communities share without being asked", "GullGame filters real traders and creates invite-driven growth", "Social templates the community actually reuses"] },
            { category: "Business", items: ["Projects choose Manta because GullSwap makes launching easy", "Only native DEX on Manta Pacific, endorsed by the chain itself", "Brand narrative strong enough to carry IDO and IEO fundraising"] },
            { category: "Product", items: ["Codeless token launch, pool creation, and farm setup. No exceptions", "Sniper-proof LP listing on by default for every new token", "On-chain verification of memecoin trading across ETH, BSC, and Solana"] },
            { category: "Brand", items: ["One mascot that works in stickers, product UI, social, and merch", "Ocean theme that is instantly recognizable in a sea of dark-mode DEXs", "Personality that satisfies degens without embarrassing Manta"] },
            { category: "Usability", items: ["A non-technical team can launch a token and create a farm in under 10 minutes", "GullGame: wallet to points in under 2 minutes", "Landing page delivers the value prop in the first scroll"] },
            { category: "Growth", items: ["Invite system as a viral loop, not a marketing add-on", "Referral bonuses that reward depth, not just volume", "VIP NFT drop to lock in early believers"] },
          ].map(({ category, items }) => (
            <div key={category} className="rounded-xl border border-border/30 bg-muted/10 p-5">
              <h3 className="font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase">{category}</h3>
              <ul className="mt-3.5 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                {items.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Process */}
      <section id="process" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Process</p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">The sequence</h2>
        <div className="mt-14 md:mt-20">
          <div className="relative">
            <div className="absolute top-4 right-0 left-0 hidden h-px bg-border/40 md:block" />
            <div className="grid gap-8 md:grid-cols-6 md:gap-0">
              {[
                { phase: "01", title: "Map the territory", desc: "Audited competing DEXs, studied memecoin trader behavior across three chains, and mapped Manta's ecosystem gaps. Identified the two audiences and the tension between them." },
                { phase: "02", title: "Build the character", desc: "Developed the seagull from rough sketches to a modular system: expressions, items, poses, evolution stages. Designed the ocean world and locked the visual language." },
                { phase: "03", title: "Design the game", desc: "Created GullGame: multi-wallet connection, on-chain verification, points engine, invite mechanics, leaderboard, and the seagull evolution tied to engagement." },
                { phase: "04", title: "Design the exchange", desc: "Built the core DEX surfaces: swap, pools, farms, staking. Designed the codeless token launch flow where every DeFi configuration is a visual form, not a code editor." },
                { phase: "05", title: "Build the world", desc: "Designed the layered landing page, social template system, sticker pack, and marketing assets. Created a visual ecosystem the community could inhabit." },
                { phase: "06", title: "Ship and adapt", desc: "Launched GullGame, iterated on community feedback, supported the Gate.io and Finceptor token launches, then adapted everything for the Gull AI rebrand." },
              ].map(({ phase, title, desc }) => (
                <div key={phase} className="relative md:pr-6">
                  <div className="mb-4 hidden size-2 rounded-full bg-foreground/20 md:block" />
                  <span className="font-mono text-[10px] text-muted-foreground/30">{phase}</span>
                  <h3 className="mt-1.5 text-sm font-medium tracking-tight">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/50">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={dividerRail} />

      {/* 8. Discovery */}
      <section id="discovery" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Discovery</p>
        <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">Two worlds, one audit</h2>
        <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">The research had two fronts. First: what does the DeFi infrastructure landscape on Manta actually look like, and where are the gaps? Second: how do memecoin communities actually behave, and what would make them adopt a new platform?</p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {[
            { stat: "12+", label: "DEXs audited across chains", accent: "oklch(0.72 0.16 160)" },
            { stat: "3", label: "Blockchains mapped", accent: "oklch(0.65 0.15 260)" },
            { stat: "100", label: "Top memecoins reviewed", accent: "oklch(0.72 0.14 85)" },
            { stat: "4", label: "Audience segments", accent: "oklch(0.65 0.16 25)" },
          ].map(({ stat, label, accent }) => (
            <div key={label}>
              <p className="text-3xl font-medium tracking-tight md:text-4xl" style={{ color: accent }}>{stat}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/50">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.5fr_0.7fr] md:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground/80">The Market Gap</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Every DEX I audited fell into one of two categories. Dense dashboards built for power users. Or hype pages with no real product underneath. The pattern held across Manta, Solana, and BSC. Nobody was building something that combined genuine DeFi utility with the kind of personality that makes a community form.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/80">How Meme Communities Move</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">They travel in packs. They follow invite codes. They screenshot wins and post them. They rally around mascots, not features. They are deeply skeptical of new platforms but will commit fast once social proof crosses a threshold. The airdrop system had to respect this: filter real traders from bots, make verified users feel selected, not surveilled.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/80">What the Tech Demanded</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">On-chain verification across three chains meant multi-wallet connection. Codeless token launch had to map cleanly onto Manta&apos;s smart contract architecture. Sniper protection had to be the default, not a toggle. These constraints shaped every interface decision before a single screen was designed.</p>
            </div>
          </div>
          <div className="space-y-6">
            <ImagePlaceholder label="[Insert competitive audit matrix]" caption="Utility vs. personality across the DEX landscape" aspectRatio="aspect-square" variant="artifact" />
            <ImagePlaceholder label="[Insert memecoin community behavior map]" caption="How meme traders move across 3 chains" aspectRatio="aspect-[4/3]" variant="artifact" />
          </div>
        </div>

        {/* User segments */}
        <div className="mt-16">
          <h3 className="text-sm font-medium text-foreground/80">The Four Audiences</h3>
          <p className="mt-2 max-w-[55ch] text-xs leading-relaxed text-muted-foreground/50">Same product, completely different reasons to use it.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Memecoin Degen", desc: "Trades daily across ETH, BSC, and Solana. Chases alpha, hunts airdrops, posts wins. Motivated by exclusivity and status, not documentation.", adoption: 90, color: "#f59e0b" },
              { name: "Non-Tech Project Team", desc: "Has a community manager and a marketer, not a developer. Needs to launch a token, create a pool, and set up a farm. Judges everything by time-to-launch.", adoption: 60, color: "#3b82f6" },
              { name: "Yield Farmer", desc: "Follows APR across chains. Will bridge to Manta if the numbers are right. Needs reward visibility, schedule clarity, and no surprises.", adoption: 75, color: "#10b981" },
              { name: "Community Builder", desc: "Runs a Telegram or Discord server. Wants referral tools, invite codes, and shareable assets that make their community look active and growing.", adoption: 85, color: "#8b5cf6" },
            ].map(({ name, desc, adoption, color }) => (
              <div key={name} className="group relative overflow-hidden rounded-lg border border-border/30 bg-muted/10 p-4 transition-colors hover:bg-muted/20">
                <div className="absolute top-0 left-0 h-full w-[3px]" style={{ backgroundColor: color }} />
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-medium">{name}</h4>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/50">{desc}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[9px] text-muted-foreground/30">Engagement</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted/30">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${adoption}%`, backgroundColor: color, opacity: 0.6 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pain points + Barriers */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-foreground/80">What Kept Breaking</h3>
            <p className="mt-2 text-xs text-muted-foreground/50">Patterns from the competitive audit</p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Farm listing requires custom smart contracts", count: 9, max: 9 },
                { label: "No codeless path from idea to live token", count: 7, max: 9 },
                { label: "Snipers drain value on every new listing", count: 7, max: 9 },
                { label: "APRs locked at launch with no adjustment", count: 6, max: 9 },
                { label: "Every DEX looks and feels identical", count: 5, max: 9 },
                { label: "Airdrops overrun by bots, no verification", count: 5, max: 9 },
              ].map(({ label, count, max }) => (
                <div key={label} className="group">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground/60 transition-colors group-hover:text-foreground/70">{label}</span>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `oklch(0.65 0.18 ${30 + (1 - count / max) * 20})` }}>{count}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted/20">
                    <div
                      className="h-full rounded-full transition-all duration-500 group-hover:opacity-100"
                      style={{
                        width: `${(count / max) * 100}%`,
                        background: `linear-gradient(90deg, oklch(0.72 0.17 30), oklch(0.62 0.2 20))`,
                        opacity: 0.7 + (count / max) * 0.3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground/80">What Kept People Away</h3>
            <p className="mt-2 text-xs text-muted-foreground/50">Barriers to adoption for both audiences</p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Token launch requires a developer", count: 8, max: 8 },
                { label: "No personality in existing DEXs", count: 6, max: 8 },
                { label: "Airdrop fatigue from bot-infested drops", count: 6, max: 8 },
                { label: "Opaque reward timelines and mechanics", count: 5, max: 8 },
                { label: "Manta is young, perceived chain risk", count: 4, max: 8 },
              ].map(({ label, count, max }) => (
                <div key={label} className="group">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground/60 transition-colors group-hover:text-foreground/70">{label}</span>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `oklch(0.60 0.14 260)` }}>{count}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted/20">
                    <div
                      className="h-full rounded-full transition-all duration-500 group-hover:opacity-100"
                      style={{
                        width: `${(count / max) * 100}%`,
                        background: `linear-gradient(90deg, oklch(0.65 0.14 260), oklch(0.50 0.16 270))`,
                        opacity: 0.6 + (count / max) * 0.4,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <blockquote className="mt-16 max-w-[36ch] border-l-2 border-foreground/10 pl-6 text-lg leading-snug font-light tracking-tight text-foreground/70 md:ml-[10%] md:text-xl">
          &quot;Dark mode. Line charts. Token pairs. Every DEX is the same DEX with a different logo. Where is the thing that makes me want to tell my group chat?&quot;
          <cite className="mt-3 block font-mono text-[10px] font-normal tracking-wider text-muted-foreground/30 not-italic">Memecoin trader, community research</cite>
        </blockquote>
      </section>

      {/* 9. Insights */}
      <section id="insights" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Insights</p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Six things that shaped everything</h2>

        {/* Full-width stacked insight blocks */}
        <div className="mt-14 space-y-0 md:mt-20">
          {[
            { number: "01", title: "Communities form around characters, not charts", explanation: "Dogecoin. Pepe. Shiba. The strongest crypto communities are built around mascots, not metrics. A character gives people something to create with, share, and identify through. Without one, a DEX is infrastructure. With one, it is a culture.", response: "The seagull became the foundation. 60+ expressions, stickers, templates, in-product illustrations. A visual language the community could adopt, remix, and make their own.", quote: "\"I don't care about your AMM. If the mascot's fire, I'm in.\"", color: "oklch(0.72 0.16 160)" },
            { number: "02", title: "Exclusivity drives adoption faster than openness", explanation: "Invite-only felt risky. It also felt right. Memecoin traders are motivated by access. Being invited makes them feel chosen. The invite system doubled as a quality filter: only verified traders could generate codes. Scarcity created demand.", response: "Ten invite codes per verified user. Each used code grants bonus points. A percentage of invitees' points flows back. The viral loop is structural, not decorative.", quote: "\"If I can't get in, I want in more.\"", color: "oklch(0.65 0.15 260)" },
            { number: "03", title: "Wallets are better proof than passports", explanation: "KYC kills adoption in meme communities. But on-chain trading history is something traders show off. Verifying memecoin activity across ETH, BSC, and Solana was the perfect gate: proof of participation without surveillance.", response: "GullGame checks wallets across chains and scores trading history against the top 100 memecoins. Five points per qualifying transaction. Multipliers for diversity. Verification as status.", quote: "\"You're checking my actual trades? That's based. Most airdrops just check if I hold 0.01 ETH.\"", color: "oklch(0.72 0.14 85)" },
            { number: "04", title: "No developer means no product, unless you fix that", explanation: "The token launch tools are not a feature. They are the product. Non-technical teams are the primary customer for GullSwap's infrastructure layer. If launching requires Solidity, those teams stay on Ethereum and Solana where they already have engineers.", response: "Every DeFi configuration became a visual form with sensible defaults. Tokenomics, tax structure, airdrop allocation, burn mechanics. The interface generates the smart contract. The team never sees code.", quote: "\"We have a marketer and a community manager. That's the team. We need a launch button.\"", color: "oklch(0.65 0.16 25)" },
            { number: "05", title: "Fair launch is not a tagline. It is a mechanism.", explanation: "Every project team in the research had been front-run. Snipers watch the mempool and buy tokens in the first block after liquidity appears. On some launches, bots grabbed 40% of supply before the community could react.", response: "Sniper-proof listing is on by default. You cannot disable it. A protection window prevents front-running on every new token. This is not a setting. It is the architecture.", quote: "\"Snipers grabbed 40% of our supply in the first block. The community was furious.\"", color: "oklch(0.70 0.15 350)" },
            { number: "06", title: "Progress people can see is progress people share", explanation: "A number going up is forgettable. A seagull growing accessories is a story. By tying the points system to character evolution, we turned engagement metrics into social content. Users screenshot their status. They post it. They tell their group chat.", response: "Four evolution stages: Infant, Teen, Adult, Old. Each stage adds visual accessories. Shades. A hat. A fishing rod. A cane. The most shared feature in the entire product.", quote: "\"I just hit Adult. My seagull has a fishing rod. This is unironically the best airdrop I've done.\"", color: "oklch(0.68 0.14 200)" },
          ].map(({ number, title, explanation, response, quote, color }) => (
            <div key={number} className="group border-t border-border/20 py-10 md:py-14">
              {/* Row: Large number + content */}
              <div className="grid gap-6 md:grid-cols-[4.5rem_1fr] md:gap-10">
                {/* Big number */}
                <span className="text-[3.5rem] leading-none font-medium tracking-tighter md:text-[4.5rem]" style={{ color, opacity: 0.18 }}>{number}</span>

                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="max-w-[30ch] text-lg font-medium tracking-tight md:text-xl">{title}</h3>

                  {/* Quote pulled out with visual weight */}
                  <div className="relative pl-5">
                    <div className="absolute top-0 left-0 h-full w-[3px] rounded-full" style={{ backgroundColor: color, opacity: 0.4 }} />
                    <p className="text-base leading-relaxed font-light tracking-tight text-foreground/60 italic md:text-lg">{quote}</p>
                  </div>

                  {/* Two-column: observation + response */}
                  <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                    <div>
                      <p className="font-mono text-[9px] tracking-wider text-muted-foreground/30 uppercase">Observation</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground/60">{explanation}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] tracking-wider text-muted-foreground/30 uppercase">What we did</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground/50">{response}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature mapping — horizontal bar format instead of heatmap table */}
        <div className="mt-16 border-t border-border/20 pt-14">
          <h3 className="text-sm font-medium text-foreground/80">Where Each Feature Lands</h3>
          <p className="mt-2 max-w-[55ch] text-xs text-muted-foreground/50">Priority by audience. Not everything matters equally to everyone.</p>
          <div className="mt-8 space-y-6">
            {[
              { feature: "Invite system", segments: [{ label: "Degen", value: 90 }, { label: "Builder", value: 85 }, { label: "Farmer", value: 40 }, { label: "Project", value: 20 }] },
              { feature: "Codeless launch", segments: [{ label: "Project", value: 95 }, { label: "Farmer", value: 50 }, { label: "Builder", value: 45 }, { label: "Degen", value: 15 }] },
              { feature: "Sniper protection", segments: [{ label: "Project", value: 95 }, { label: "Farmer", value: 85 }, { label: "Degen", value: 50 }, { label: "Builder", value: 40 }] },
              { feature: "Seagull evolution", segments: [{ label: "Degen", value: 95 }, { label: "Builder", value: 90 }, { label: "Farmer", value: 15 }, { label: "Project", value: 10 }] },
              { feature: "Social templates", segments: [{ label: "Builder", value: 95 }, { label: "Degen", value: 80 }, { label: "Project", value: 45 }, { label: "Farmer", value: 10 }] },
            ].map(({ feature, segments }) => (
              <div key={feature}>
                <p className="text-xs font-medium text-foreground/70">{feature}</p>
                <div className="mt-2.5 flex items-center gap-1.5">
                  {segments.map(({ label, value }) => (
                    <div key={label} className="group/bar relative">
                      <div
                        className="h-6 rounded-[4px] transition-opacity duration-200 hover:opacity-100"
                        style={{
                          width: `${Math.max(value * 1.8, 24)}px`,
                          backgroundColor: label === "Degen" ? "oklch(0.72 0.16 85)" : label === "Project" ? "oklch(0.60 0.14 260)" : label === "Farmer" ? "oklch(0.68 0.16 160)" : "oklch(0.65 0.14 300)",
                          opacity: value > 60 ? 0.5 : 0.2,
                        }}
                      />
                      <span className="absolute -bottom-4 left-0 text-[8px] text-muted-foreground/30 opacity-0 transition-opacity group-hover/bar:opacity-100">{label} {value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-[9px] text-muted-foreground/35">
            {[
              { label: "Degen", color: "oklch(0.72 0.16 85)" },
              { label: "Project Team", color: "oklch(0.60 0.14 260)" },
              { label: "Yield Farmer", color: "oklch(0.68 0.16 160)" },
              { label: "Community Builder", color: "oklch(0.65 0.14 300)" },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="h-2.5 w-5 rounded-[2px]" style={{ backgroundColor: color, opacity: 0.5 }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Principles */}
      <section id="principles" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Principles</p>
        <h2 className="mt-4 max-w-[20ch] text-3xl font-medium tracking-tight md:text-4xl">Six beliefs that held the work together</h2>
        <div className="mt-14 md:mt-20">
          {[
            { number: "01", title: "Personality is load-bearing", desc: "The seagull is not a logo. It is the reason people come, the thing they share, and the identity they adopt. In meme culture, brand personality is infrastructure. Remove it and the community collapses, regardless of what the smart contracts can do." },
            { number: "02", title: "Prove it with wallets, not paperwork", desc: "On-chain history is the only credential this audience respects. Check trades, not IDs. Make verification feel like showing off, not filling out forms. If the gating mechanism feels like surveillance, no one passes through it voluntarily." },
            { number: "03", title: "Every feature ships without code", desc: "If a project team needs an engineer, the product has failed at its job. Token launch, pool creation, farm setup, reward configuration. All of it through visual interfaces with sensible defaults. Code exists underneath. Nobody should ever see it." },
            { number: "04", title: "Protection comes before profit", desc: "Sniper-proof listings are not a premium feature. They are the architecture. A DEX that allows its users to get front-run on launch day will never recover the trust it lost. Fair launch is a structural decision, not a marketing message." },
            { number: "05", title: "If it is not shareable, it is not designed", desc: "Every engagement mechanic should produce something worth screenshotting. Evolving seagulls. Milestone badges. Leaderboard positions. The output of participation should be social content. Points are numbers. Characters are stories." },
            { number: "06", title: "Build a world, not a page", desc: "The landing page scrolls from sky to beach to shore to underwater. That is not decoration. It is a narrative device. Environmental depth creates memorability that flat section layouts cannot. When someone remembers the ocean, they remember GullSwap." },
          ].map(({ number, title, desc }) => (
            <div key={number} className="grid items-baseline border-t border-border/20 py-8 md:grid-cols-[3rem_1fr_2fr] md:gap-8 md:py-10">
              <span className="font-mono text-xs text-muted-foreground/20">{number}</span>
              <h3 className="mt-2 text-lg font-medium tracking-tight md:mt-0">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground/60 md:mt-0">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={dividerRail} />

      {/* 11. Architecture */}
      <section id="architecture" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Architecture</p>
        <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">Three layers, one world</h2>
        <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">GullSwap is not one product. It is three experiences sharing a single brand. The GullGame is the community layer. The DEX is the utility layer. The landing page is the brand layer. Each serves a different intent. Each has its own entry point. The seagull and the ocean connect all three.</p>
        <div className="mt-14 space-y-8">
          <ImagePlaceholder label="[Insert information architecture diagram]" caption="Three layers: brand, community, and utility under one roof" aspectRatio="aspect-[21/9]" variant="hero" />
          <div className="grid gap-8 md:grid-cols-2">
            <ImagePlaceholder label="[Insert GullGame user flow]" caption="GullGame: wallet connection to seagull evolution" aspectRatio="aspect-[4/3]" variant="artifact" />
            <ImagePlaceholder label="[Insert DEX token launch flow]" caption="Token launch: configuration to live trading" aspectRatio="aspect-[4/3]" variant="artifact" />
          </div>
        </div>
        <p className="mt-12 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:ml-[15%]">The architecture had to let each layer exist independently. A trader could use GullGame without ever touching the DEX. A project team could launch a token without knowing the mascot exists. But the moment you see the seagull anywhere, you know where you are. That recognition is the thread.</p>
      </section>

      {/* 12. Exploration */}
      <section id="exploration" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Exploration</p>
        <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">Finding the right weight</h2>
        <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">Three directions. Each represented a different answer to the same question: how much personality can infrastructure carry before it stops being taken seriously?</p>
        <div className="mt-14">
          <h3 className="text-sm font-medium text-foreground/80">The Three Directions</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ImagePlaceholder label="[Direction A: clean utility]" caption="A: Minimal. Professional. Forgettable." aspectRatio="aspect-[3/4]" variant="screen" />
            <ImagePlaceholder label="[Direction B: maximum meme]" caption="B: Loud. Memorable. Nobody trusts it." aspectRatio="aspect-[3/4]" variant="screen" />
            <ImagePlaceholder label="[Direction C: layered world]" caption="C: A world with tools inside it." aspectRatio="aspect-[3/4]" variant="screen" />
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-foreground/80">What Did Not Survive</h3>
            <p className="mt-3 max-w-[45ch] text-sm leading-relaxed text-muted-foreground">Direction A was competent and empty. It looked like the DEXs we audited. No community would form around it. Direction B was unforgettable and unserious. The meme-maximalist approach made the infrastructure tools feel like a joke. Project teams would never trust it with real money.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/80">What Became the Product</h3>
            <p className="mt-3 max-w-[45ch] text-sm leading-relaxed text-muted-foreground">Direction C found the balance. The ocean world creates identity. The mascot anchors the brand. But the tools stay clean. Personality lives in the environment and the character system, not in the interface chrome. The DEX dashboard is professional. The world around it is not.</p>
          </div>
        </div>
        <div className="mt-12">
          <ImagePlaceholder label="[Insert mascot evolution from sketch to final]" caption="The seagull: from first sketch to final character system" aspectRatio="aspect-[2.5/1]" variant="hero" />
        </div>
      </section>

      {/* 13. Solution */}
      <section id="solution" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Solution</p>
        <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">What we shipped</h2>

        <div className="mt-16 grid items-center gap-10 md:mt-24 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <span className="font-mono text-[10px] text-muted-foreground/25">01</span>
            <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">GullGame Airdrop System</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Connect wallets on Ethereum, BSC, and Solana. The system checks your memecoin trading history against the top 100 tokens. Qualify, and you get 10 invite codes, a points score, and a seagull that evolves as you engage. The entry point for most users.</p>
            <div className="mt-4 border-l-2 border-foreground/10 pl-4">
              <p className="text-xs leading-relaxed text-muted-foreground/50"><span className="font-medium text-muted-foreground/70">Why this matters:</span> Codes are exclusive to verified traders. The invite itself carries status. Not spam. Currency.</p>
            </div>
          </div>
          <ImagePlaceholder label="[Insert GullGame interface]" caption="GullGame: wallet verification, points, and invite system" aspectRatio="aspect-[4/3]" variant="screen" />
        </div>

        <div className="mt-20 grid items-center gap-10 md:mt-32 md:grid-cols-[1.5fr_0.8fr] md:gap-16">
          <ImagePlaceholder label="[Insert codeless token launch flow]" caption="Codeless token launch with tokenomics configuration" aspectRatio="aspect-[4/3]" variant="screen" className="order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <span className="font-mono text-[10px] text-muted-foreground/25">02</span>
            <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">Codeless Token Launch</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Name, supply, tax structure, airdrop allocation, burn mechanics. All configured through visual forms. The platform generates the smart contract. No GitHub. No Solidity. A live token with configurable tokenomics in minutes.</p>
            <div className="mt-4 border-l-2 border-foreground/10 pl-4">
              <p className="text-xs leading-relaxed text-muted-foreground/50"><span className="font-medium text-muted-foreground/70">Why this matters:</span> Every field has a sensible default. Launch with just a name and supply. Expand complexity only when you need it.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <ImagePlaceholder label="[Insert farms and pools interface]" caption="Farm management with flexible reward controls" aspectRatio="aspect-[2.2/1]" variant="hero" />
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <span className="font-mono text-[10px] text-muted-foreground/25">03</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">Automated Farms and Pools</h3>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">Add incentives through a visual interface. Farms auto-list. Rewards can be boosted anytime by depositing more tokens. This was the differentiator no other DEX on Manta offered: post-launch reward adjustment. APR as a dial, not a one-time setting.</p>
              <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                <p className="text-xs leading-relaxed text-muted-foreground/50"><span className="font-medium text-muted-foreground/70">Why this matters:</span> No manual review. No waiting period. Incentive deposited, farm listed. Meme tokens move fast. The infrastructure has to keep up.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 md:mt-32 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <span className="font-mono text-[10px] text-muted-foreground/25">04</span>
            <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">Sniper-Proof LP Listing</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">When liquidity goes live, a protection window blocks front-running bots. On GullSwap, fair launch is not copy on a landing page. It is an on-chain mechanism that cannot be disabled. Every new token gets it. No exceptions.</p>
            <div className="mt-4 border-l-2 border-foreground/10 pl-4">
              <p className="text-xs leading-relaxed text-muted-foreground/50"><span className="font-medium text-muted-foreground/70">Why this matters:</span> Protection is default, not optional. A trust decision baked into the architecture, not a feature toggle.</p>
            </div>
          </div>
          <ImagePlaceholder label="[Insert sniper protection flow]" caption="Sniper-proof listing protecting new token launches" aspectRatio="aspect-[4/3]" variant="screen" />
        </div>

        <div className="mt-20 grid items-center gap-10 md:mt-32 md:grid-cols-[1.5fr_0.8fr] md:gap-16">
          <ImagePlaceholder label="[Insert landing page with ocean layers]" caption="Landing page: descending from sky to seafloor" aspectRatio="aspect-[4/3]" variant="screen" className="order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <span className="font-mono text-[10px] text-muted-foreground/25">05</span>
            <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">The Ocean Landing Page</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Not sections on a page. A descent. Sky and clouds give way to beach and lighthouse, then shoreline with waves, then underwater with coral and sea creatures. Each content section, Vision, USP, Roadmap, Tokenomics, Team, Ecosystem, lives in its own layer. Scrolling is the narrative.</p>
            <div className="mt-4 border-l-2 border-foreground/10 pl-4">
              <p className="text-xs leading-relaxed text-muted-foreground/50"><span className="font-medium text-muted-foreground/70">Why this matters:</span> People remember environments. They forget section layouts. The ocean is the brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Brand & Character */}
      <section id="brand" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Brand & Character</p>
        <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight md:text-4xl">The seagull is the product</h2>
        <blockquote className="mt-12 max-w-[32ch] border-l-2 border-foreground/10 pl-6 text-xl leading-snug font-light tracking-tight text-foreground/80 md:ml-[10%] md:text-2xl">
          &quot;The seagull stopped my scroll. The invite code kept me. The points brought me back.&quot;
          <cite className="mt-3 block font-mono text-[10px] font-normal tracking-wider text-muted-foreground/30 not-italic">Early GullGame participant</cite>
        </blockquote>
        <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {[
            { title: "Modular Mascot", content: "One base body. Swappable expressions: angry, shock, flex, cry, sneakers, drama, sleepy, and 50+ more. Swappable items: shades, hat, cane, fishing rod. Swappable poses: flying, snorkeling, riding, flexing. Infinite content from a single character framework." },
            { title: "Evolution System", content: "Four stages mapped to engagement. Infant is bare. Teen earns shades. Adult gets a hat and fishing rod. Old carries a cane. Each stage is a milestone people photograph and post. The most organically shared feature in the entire product." },
            { title: "The Ocean World", content: "A layered illustration system: sky, clouds, beach, lighthouse, shoreline, waves, coral, submarines, fish. Each element is a standalone asset, combinable for landing pages, social templates, or product illustrations. The world is the design system." },
            { title: "Template Engine", content: "Five categories: Promotional, Educational, Announcement, Celebration, and Meme. Every template uses the mascot, ocean backgrounds, and consistent type treatment. A recognizable visual language the team and community can both produce with." },
            { title: "60+ Stickers", content: "Stonks. Fire. Barf. Fight. Drama. Oof. Sleepy. Cry. Stare. Each sticker became part of the community's daily vocabulary on Telegram and Discord. The brand reinforced itself in every conversation, without anyone thinking of it as branding." },
            { title: "Color and Type", content: "Ocean blues and sky tones for the foundation. Warm beach accents for actions and highlights. Bold condensed headlines. The visual language is energetic without chaos. Playful without being childish. Alive without being loud." },
          ].map(({ title, content }) => (
            <div key={title}>
              <h3 className="text-sm font-medium text-foreground/80">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground/60">{content}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-8">
          <ImagePlaceholder label="[Insert mascot expression sheet: 60+ variations]" caption="The seagull system: expressions, items, poses, evolution stages" aspectRatio="aspect-[21/9]" variant="hero" />
          <div className="grid gap-8 md:grid-cols-3">
            <ImagePlaceholder label="[Insert social template examples]" caption="Template system across five content categories" aspectRatio="aspect-square" variant="artifact" />
            <ImagePlaceholder label="[Insert sticker pack selection]" caption="60+ reactions for community use" aspectRatio="aspect-square" variant="artifact" />
            <ImagePlaceholder label="[Insert ocean environment layers]" caption="The layered ocean: sky to seafloor" aspectRatio="aspect-square" variant="artifact" />
          </div>
        </div>
      </section>

      <div className={dividerRail} />

      {/* 15. Outcomes */}
      <section id="outcomes" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Outcomes</p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">What the numbers say</h2>
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {[
            { metric: "$3.7M", label: "Raised across private, KOL, and public rounds", type: "Fundraising", accent: "oklch(0.72 0.16 160)" },
            { metric: "109K", label: "Followers built through meme-first brand strategy", type: "Audience", accent: "oklch(0.65 0.15 260)" },
            { metric: "900", label: "VIP NFTs sold out in 12 hours", type: "Early Signal", accent: "oklch(0.72 0.14 85)" },
            { metric: "60+", label: "Mascot variations across product, social, and stickers", type: "Brand Depth", accent: "oklch(0.65 0.16 25)" },
          ].map(({ metric, label, type, accent }) => (
            <div key={type} className="group relative overflow-hidden rounded-xl border border-border/30 bg-muted/10 p-6 transition-colors hover:bg-muted/20">
              <div className="absolute top-0 left-0 h-[3px] w-full" style={{ backgroundColor: accent, opacity: 0.5 }} />
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase">{type}</p>
              <p className="mt-3 text-3xl font-medium tracking-tight md:text-4xl" style={{ color: accent }}>{metric}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/50">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-sm font-medium text-foreground/80">The Full Delivery</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">A DEX with codeless token launch, automated farms, sniper-proof liquidity, and flexible rewards. A gamified airdrop verifying on-chain history across three chains. A brand system with 60+ mascot variations, five template categories, a sticker pack, and an environmental landing page. Token launched on Gate.io and Finceptor. VIP NFTs sold in 12 hours. Brand later adapted for the Gull AI rebrand.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/80">What the Community Proved</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The seagull was adopted without instruction. Community members made their own memes from the character. The evolution system drove organic sharing on Twitter. The invite mechanic generated real word-of-mouth, not bot accounts. Project teams named the codeless launch as the reason they chose GullSwap. Manta Network endorsed it as their native DEX.</p>
          </div>
        </div>
      </section>

      {/* 16. Reflection */}
      <section id="reflection" className={sectionRail}>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">Reflection</p>
        <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">What I carry forward</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground/80">What Landed</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Building the character before the interface felt backwards for a DeFi product. It was the best decision in the project. The seagull gave the community something to rally around before the product even existed. Codeless tooling removed the biggest objection from project teams. And the environmental landing page made the brand stick in a market where everything else looks the same.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/80">What Stayed Open</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The rebrand to Gull AI tested whether a meme-born brand can pivot to enterprise infrastructure. The original community did not necessarily follow. Whether personality built for degens translates to credibility for institutions is still unresolved. That tension may not have an answer.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground/80">What I Would Try Next</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Gamification of the DEX itself, not just the airdrop. Trading streaks. Community challenges. Collaborative achievements that extend the game mechanics into the core product. And a character builder. Let the community create their own seagull variations. Turn the mascot from a brand asset into a platform.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/80">The Lesson</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Brand and product are the same thing in crypto. The mascot was not decoration on a DEX. It was the reason people came and the identity they adopted. When every product offers similar yields and similar features, the brand is the moat. Building a brand means building a world people choose to inhabit, not just a tool they have to use.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={dividerRail} />

      {/* 17. Next / CTA */}
      <section className={`${contentRail} py-24 md:py-40`}>
        <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg">Most projects ask for an interface. This one asked for a world. A seagull sketch became a community identity. A codeless form became the reason projects chose Manta. That is the kind of problem worth solving.</p>
        <div className="mt-16 border-t border-border/30 pt-10">
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 uppercase">Next case study</p>
          <Link href="/projects/nodo-ai" className="group mt-4 block">
            <h3 className="text-[clamp(2rem,6vw,5rem)] leading-[0.9] font-medium tracking-tighter text-foreground/30 transition-colors duration-300 group-hover:text-foreground/60">
              NODO AI
              <ArrowUpRight className="mb-1 ml-2 inline-block size-[0.25em] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </h3>
          </Link>
          <p className="mt-4 max-w-[40ch] text-sm text-muted-foreground/40">Making autonomous yield infrastructure feel clear enough to trust with real money.</p>
        </div>
        <div className="mt-24 md:mt-32">
          <p className="text-base text-muted-foreground md:text-lg">Interested in working together?</p>
          <a href="mailto:leondesigner221@gmail.com" className="mt-3 inline-block font-mono text-sm tracking-wide text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground/60">leondesigner221@gmail.com</a>
        </div>
      </section>

      <footer className={`${contentRail} border-t border-border/30 py-8`}>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground/30">&copy; 2026 Leon</span>
          <span className="text-xs text-muted-foreground/30">Built with quiet intention</span>
        </div>
      </footer>

        </div>
      </div>
    </main>
  )
}
