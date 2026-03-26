import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { TableOfContents } from "@/components/case-study/table-of-contents"
import { ImagePlaceholder } from "@/components/case-study/image-placeholder"
import { FigmaEmbed } from "@/components/case-study/figma-embed"
import cryptoImage from "../../images/Crypto.png"

export const metadata: Metadata = {
  title: "TymeBank Crypto · Case Study · Leon",
  description:
    "Designing a crypto buying feature inside a regulated South African bank. A product design case study by Leon.",
}

const tocItems = [
  { id: "snapshot", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "insight", label: "Insight" },
  { id: "decisions", label: "Decisions" },
  { id: "solution", label: "Solution" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
  { id: "prototype", label: "Prototype" },
]

const contentRail = "mx-auto w-full max-w-[1100px] px-6 md:px-10 lg:px-14"
const sectionRail = `${contentRail} py-24 md:py-32`
const dividerRail = "mx-auto h-px w-[calc(100%-3rem)] max-w-[1100px] bg-border/30 md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)]"

export default function TymeBankCryptoCaseStudy() {
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
              <Badge variant="outline">Fintech · Crypto</Badge>
              <Badge variant="secondary">Shipped</Badge>
            </div>

            <h1 className="mt-6 text-[clamp(3rem,10vw,8.5rem)] leading-[0.88] font-medium tracking-tighter">
              TymeBank<br />Crypto
            </h1>

            <p className="mt-6 max-w-[50ch] text-xl leading-relaxed font-light text-muted-foreground md:text-2xl">
              South Africa&apos;s first regulated bank to offer crypto trading
              inside its own app. Built for people who had never
              bought a coin.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border/40 pt-8 md:grid-cols-5 md:gap-x-12">
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Platform", value: "iOS & Android" },
                { label: "Market", value: "South Africa" },
                { label: "Integration", value: "Paxos API" },
                { label: "Status", value: "Shipped" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground/80">{value}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:ml-[15%] md:text-lg">
              TymeBank partnered with Paxos, a US-regulated crypto
              infrastructure provider, to handle custody, settlement, and
              compliance in the background. The task was to make all of
              that disappear: a banking experience that happened to
              let you buy Bitcoin, not a crypto product bolted onto a bank.
            </p>

            <div className="mt-16">
              <figure className="group">
                <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-muted/20 aspect-[4/3]">
                  <img
                    src={cryptoImage.src}
                    alt="TymeBank Crypto inside the TymeBank mobile app"
                    className="h-fit w-fit object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground/35">
                  TymeBank Crypto inside the TymeBank mobile app
                </figcaption>
              </figure>
            </div>
          </section>

          {/* 2. Snapshot */}
          <section id="snapshot" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              At a glance
            </p>
            <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
              {[
                {
                  title: "The Product",
                  content:
                    "A crypto buy/sell feature embedded natively in TymeBank's mobile app. Users can trade Bitcoin, Ethereum, Litecoin, Bitcoin Cash, Paxos USD, and Paxos Gold, funded directly from their TymeBank EveryDay account, starting from R50.",
                },
                {
                  title: "The Challenge",
                  content:
                    "TymeBank's core users are not crypto traders. Many had never bought digital assets. The product had to work for someone unfamiliar with wallets, custody, or coin pricing, while satisfying FSCA regulatory requirements and Paxos integration constraints.",
                },
                {
                  title: "What I Designed",
                  content:
                    "The full buy/sell lifecycle: discovery on the home screen, story-format onboarding, coin selection and detail, amount entry with live balance impact, order confirmation, success state, and all error and edge-case flows. On iOS and Android.",
                },
                {
                  title: "The Central Bet",
                  content:
                    "Trust had to be built at the moment of entering an amount, not in the onboarding screens. The bet: make the transaction legible. Real-time balance, live price, honest disclaimers. That would do more than any onboarding screen.",
                },
                {
                  title: "Paxos Integration",
                  content:
                    "Paxos handles all custody, settlement, and compliance infrastructure. The UX never surfaces this. Users interact entirely with TymeBank's brand, design system, and account data. The abstraction was intentional: users trust TymeBank, not an unfamiliar US fintech.",
                },
                {
                  title: "Regulatory Context",
                  content:
                    "South Africa's FSCA required explicit risk disclosure, age-gating at 18+, and biometric identity verification before trading. Each compliance gate was designed as a moment in the experience, not a legal wall in front of the product.",
                },
              ].map(({ title, content }) => (
                <div key={title} className="border-t border-border/30 pt-5">
                  <h3 className="text-sm font-medium tracking-tight">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground/60">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className={dividerRail} />

          {/* 3. Context */}
          <section id="context" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Context
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
              A digital bank, a new asset class, and a market that had no clean route in
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_0.7fr] md:gap-20">
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  TymeBank is South Africa&apos;s first fully digital bank:
                  branchless, mobile-first, and built around affordability.
                  Its core base includes first-time account holders, the newly
                  banked, and people whose primary financial interface is their
                  phone.
                </p>
                <p>
                  In 2020 and 2021, South Africa had one of the highest crypto
                  adoption rates on the continent. But the access path was
                  fragmented: offshore exchanges, separate apps, manual bank
                  transfers, and pricing in USD. There was no clean route for
                  someone who wanted to buy R500 of Bitcoin from their salary
                  account on a Tuesday afternoon.
                </p>
                <p>
                  TymeBank saw the gap. Partnering with Paxos allowed them to
                  embed custody and settlement infrastructure without building it
                  themselves. The design task was to put TymeBank on top of all
                  of it, so the user would see one thing: their bank, letting
                  them buy Bitcoin.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      stat: "R50",
                      label: "Minimum purchase",
                      accent: "oklch(0.88 0.18 86)",
                    },
                    {
                      stat: "6",
                      label: "Coins available at launch",
                      accent: "oklch(0.60 0.16 250)",
                    },
                    {
                      stat: "1st",
                      label: "SA licensed bank with native crypto",
                      accent: "oklch(0.70 0.16 155)",
                    },
                    {
                      stat: "2",
                      label: "Platforms: iOS and Android",
                      accent: "oklch(0.68 0.14 30)",
                    },
                  ].map(({ stat, label, accent }) => (
                    <div
                      key={label}
                      className="group relative overflow-hidden rounded-lg border border-border/20 bg-muted/10 p-3 transition-colors hover:bg-muted/20"
                    >
                      <div
                        className="absolute bottom-0 left-0 h-[2px] w-full"
                        style={{ backgroundColor: accent, opacity: 0.35 }}
                      />
                      <p
                        className="text-lg font-medium tracking-tight"
                        style={{ color: accent }}
                      >
                        {stat}
                      </p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground/40">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <ImagePlaceholder
                  label="[Insert home screen showing Crypto card in context]"
                  caption="Crypto surfaced as a first-class product on the TymeBank home screen"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
              </div>
            </div>
          </section>

          {/* 4. Problem */}
          <section id="problem" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Problem
            </p>
            <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight md:text-4xl">
              Crypto isn&apos;t complicated to use. It&apos;s complicated to trust.
            </h2>
            <blockquote className="mt-12 max-w-[32ch] border-l-2 border-foreground/10 pl-6 text-2xl leading-snug font-light tracking-tight text-foreground/80 md:ml-[10%] md:text-3xl">
              &quot;I don&apos;t know what happens to my money after I press buy. Does it leave my account? Can I get it back?&quot;
              <cite className="mt-3 block font-mono text-[10px] font-normal tracking-wider text-muted-foreground/30 not-italic">
                Mass-market banking user, pre-launch
              </cite>
            </blockquote>
            <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
              {[
                {
                  title: "The User Problem",
                  content:
                    "TymeBank's core demographic had not bought crypto before. For many, this would be a first exposure to digital assets. The product had to work for someone who doesn't know what a wallet address is, has never seen a price chart, and isn't sure if buying Bitcoin means they could lose access to rent money.",
                },
                {
                  title: "The Regulatory Problem",
                  content:
                    "South Africa's FSCA mandated explicit risk disclosure before any trade. Age verification at 18+ was non-negotiable. Biometric identity checks were required before a user could access crypto. These weren't optional guardrails. They were legal requirements that had to be embedded into the flow without making it feel like a compliance exercise.",
                },
                {
                  title: "The Integration Problem",
                  content:
                    "Paxos prices are live and indicative. Settlement happens at confirmation, not entry. The price a user sees when typing an amount may not be the price they transact at. This is true for every crypto product, but it had to be communicated clearly to users who had no prior context for how crypto settlement works.",
                },
                {
                  title: "The Product Problem",
                  content:
                    "Too simplified and the product feels dishonest. Too detailed and it becomes a compliance document dressed as an app. The balance was not between beginner mode and expert mode. It was about putting the right information at the exact moment it was needed, and withholding everything else.",
                },
              ].map(({ title, content }) => (
                <div key={title}>
                  <h3 className="text-sm font-medium tracking-wider text-muted-foreground/50 uppercase">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[45ch] text-base leading-relaxed text-muted-foreground">
                    {content}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <ImagePlaceholder
                label="[Insert risk disclosure screen + age gate error screen side by side]"
                caption="Compliance gates designed as moments, not walls. Clear language and a forward path for each one."
                aspectRatio="aspect-[21/9]"
                variant="hero"
              />
            </div>
          </section>

          <div className={dividerRail} />

          {/* 5. Insight */}
          <section id="insight" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Insight
            </p>
            <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight md:text-4xl">
              The trust problem lives in the amount field
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Users understood the concept of buying crypto. They hesitated at
              the moment of entering a number. Not because of complexity, but
              because they couldn&apos;t see what would happen to their bank account.
            </p>

            <div className="mt-14 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-20">
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    Where Abandonment Actually Happened
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Users got through the onboarding stories. They selected a
                    coin. They tapped Buy. Then they stopped at the amount
                    screen. The anxiety was not about crypto. It was about their
                    bank balance. They didn&apos;t know how much would leave their
                    account, or when, or if they could reverse it.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    This meant the onboarding screens, no matter how well-written,
                    could not solve the trust problem. The trust problem was
                    transactional, not educational. It needed to be resolved inside
                    the buy flow itself, at the exact moment the user was most
                    uncertain.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    The First Purchase Is the Only Metric That Matters
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Getting someone to make a first purchase, even R50 of
                    Bitcoin, was more important than designing for active traders.
                    Portfolio management, advanced chart timeframes, and coin
                    switching were all available. But they weren&apos;t the
                    conversion lever. First-buy completion was.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    This shaped every priority: reduce friction at the amount
                    screen, surface balance impact before commitment, set honest
                    price expectations, and make the confirmation screen feel
                    like a receipt, not a risk disclosure.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border border-border/30 bg-muted/10 p-6">
                  <p
                    className="font-mono text-[10px] tracking-wider uppercase"
                    style={{ color: "oklch(0.88 0.18 86)", opacity: 0.7 }}
                  >
                    The design bet
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/70">
                    Show users exactly what happens to their balance before they
                    confirm. Real-time. In rand. Without them having to calculate
                    anything.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground/60">
                    A live &quot;Before / After&quot; balance bar at the top of
                    the buy screen, updating as they type. Not a warning.
                    A transparency mechanism.
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-muted/10 p-6">
                  <p
                    className="font-mono text-[10px] tracking-wider uppercase"
                    style={{ color: "oklch(0.60 0.16 250)", opacity: 0.7 }}
                  >
                    ZAR first, always
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/60">
                    Users enter &quot;R500&quot; not &quot;0.00053 BTC.&quot; The
                    coin equivalent is secondary. Rand literacy is
                    universal. Satoshi literacy is not.
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-muted/10 p-6">
                  <p
                    className="font-mono text-[10px] tracking-wider uppercase"
                    style={{ color: "oklch(0.70 0.16 155)", opacity: 0.7 }}
                  >
                    Compliance as experience
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/60">
                    Each eligibility gate, age, identity, terms, gets its own
                    screen with a human explanation and a clear path forward.
                    Regulation doesn&apos;t have to feel like punishment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Decisions */}
          <section id="decisions" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Decisions
            </p>
            <h2 className="mt-4 max-w-[20ch] text-3xl font-medium tracking-tight md:text-4xl">
              Five calls that shaped the experience
            </h2>

            <div className="mt-14 space-y-0 md:mt-20">
              {[
                {
                  number: "01",
                  title: "The balance bar instead of a warning",
                  observation:
                    "Warning messages about insufficient balance appear after a user commits. They punish intent rather than informing it. The real anxiety isn't about making a mistake. It's about not knowing what's coming before you decide.",
                  decision:
                    "A persistent &quot;Before / After&quot; bar sits at the top of the amount screen and updates as the user types. Before pressing any button, they can already see how their balance changes. Impact moves from post-error to pre-decision.",
                  tradeoff:
                    "The bar had to be prominently placed at the expense of screen real estate in an already constrained mobile layout. The amount input and keyboard take up most of the viewport. Compact but legible, with no room to negotiate.",
                  color: "oklch(0.88 0.18 86)",
                },
                {
                  number: "02",
                  title: "Live price with an honest disclaimer",
                  observation:
                    "Crypto prices move. Showing a live price and then transacting at a different price feels like bait-and-switch to users who don't understand indicative pricing. This is a structural feature of crypto settlement, not a product decision. But it had to be communicated as if it were one.",
                  decision:
                    "The current price (&quot;1 BTC = R 943,254.23&quot;) is shown prominently in the navigation bar, visible throughout the flow. A persistent disclaimer below the amount input reads: &quot;Price may change by the time you confirm.&quot; The price is live. The transaction locks at confirmation. Both are true.",
                  tradeoff:
                    "Some users interpreted the disclaimer as uncertainty or unreliability. The phrasing had to be neutral enough to set expectations without creating anxiety. &quot;Price may change&quot; is softer than &quot;price will change&quot; but still honest.",
                  color: "oklch(0.60 0.16 250)",
                },
                {
                  number: "03",
                  title: "Compliance gates as separate screens",
                  observation:
                    "Bundling age checks, identity verification, and T&C acceptance into a single pre-entry modal is standard practice. It also means users encounter all three barriers at once, before they understand what the product does or why they want it.",
                  decision:
                    "Each compliance requirement is handled as a distinct screen with its own explanation. An under-18 user sees: &quot;We love that you&apos;re ready to get into crypto already, but according to regulations, you&apos;ll have to wait until you&apos;re 18.&quot; An unverified user is told exactly how to fix it, in-app selfie check or kiosk fingerprint scan, with a direct CTA. Error codes appear for support escalation.",
                  tradeoff:
                    "Separating gates into individual screens adds steps to the ineligible-user path. The bet was that context-appropriate explanations would reduce support contacts more than consolidation would reduce friction.",
                  color: "oklch(0.70 0.16 155)",
                },
                {
                  number: "04",
                  title: "Story-format FTUE with a crypto-native CTA",
                  observation:
                    "TymeBank already used a horizontal swipe story format elsewhere in the app for product introductions. Crypto was being introduced to users who had no prior context for trading, but many were already familiar with the story pattern from social media and from other TymeBank surfaces.",
                  decision:
                    "The first-time user experience uses three story cards: value proposition, funding method, and market awareness. The CTA at the end: &quot;To the moon&quot;, crypto slang, familiar to enthusiasts, harmless to newcomers. The final screen before the coin list: &quot;Ready for lift off!&quot; with eligibility information and a &quot;Get started&quot; CTA that accepts the terms.",
                  tradeoff:
                    "Using playful crypto language risked feeling tone-deaf to users who were cautious about crypto. The bet was that users who got through the story screens were already curious enough to appreciate the signal that the team understood the space.",
                  color: "oklch(0.68 0.14 30)",
                },
                {
                  number: "05",
                  title: "Error states that don't conflate failures",
                  observation:
                    "In financial products, &quot;something went wrong&quot; is not an error message. It is the beginning of a trust collapse. A user who receives an unhelpful error after trying to buy Bitcoin with their savings has lost confidence in the bank, not just the feature.",
                  decision:
                    "Each failure mode has its own screen, its own explanation, and its own error code for support escalation. A failed API call is separated from a compliance block, which is separated from a connectivity failure, which is separated from an account on debit hold. Language is plain: &quot;We weren&apos;t able to complete the purchase. Try again later, or contact us on 0860 999 119.&quot;",
                  tradeoff:
                    "Mapping every failure state separately added significant design and content scope. The alternative, a single generic error screen, would have been faster to build and catastrophically worse for user trust in a financial context.",
                  color: "oklch(0.62 0.18 22)",
                },
              ].map(({ number, title, observation, decision, tradeoff, color }) => (
                <div
                  key={number}
                  className="group border-t border-border/20 py-10 md:py-14"
                >
                  <div className="grid gap-6 md:grid-cols-[4rem_1fr] md:gap-10">
                    <span
                      className="text-[3.5rem] leading-none font-medium tracking-tighter md:text-[4.5rem]"
                      style={{ color, opacity: 0.15 }}
                    >
                      {number}
                    </span>
                    <div className="space-y-6">
                      <h3 className="max-w-[36ch] text-lg font-medium tracking-tight md:text-xl">
                        {title}
                      </h3>
                      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                        <div>
                          <p className="font-mono text-[9px] tracking-wider text-muted-foreground/30 uppercase">
                            Observation
                          </p>
                          <p
                            className="mt-2 text-sm leading-relaxed text-muted-foreground/60"
                            dangerouslySetInnerHTML={{ __html: observation }}
                          />
                        </div>
                        <div>
                          <p className="font-mono text-[9px] tracking-wider text-muted-foreground/30 uppercase">
                            Decision
                          </p>
                          <p
                            className="mt-2 text-sm leading-relaxed text-muted-foreground/60"
                            dangerouslySetInnerHTML={{ __html: decision }}
                          />
                        </div>
                        <div>
                          <p className="font-mono text-[9px] tracking-wider text-muted-foreground/30 uppercase">
                            Trade-off
                          </p>
                          <p
                            className="mt-2 text-sm leading-relaxed text-muted-foreground/50"
                            dangerouslySetInnerHTML={{ __html: tradeoff }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className={dividerRail} />

          {/* 7. Solution */}
          <section id="solution" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Solution
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
              Every screen, every state. Inside the bank.
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              The product covers every step from first exposure to completed
              transaction. Paxos runs underneath. The user sees TymeBank,
              all the way through.
            </p>

            {/* Flow 1: Discovery */}
            <div className="mt-16 grid items-start gap-10 md:mt-24 md:grid-cols-[1.2fr_1fr] md:gap-16">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground/25">
                  01
                </span>
                <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                  Discovery
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A Crypto card appears on the home screen, &quot;Buy and sell
                  cryptocurrencies directly from your account,&quot; alongside a
                  story thumbnail in the top navigation row. Both are passive
                  entry points. Users who aren&apos;t interested never need to
                  interact with them. Users who tap get the FTUE.
                </p>
                <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                  <p className="text-xs leading-relaxed text-muted-foreground/50">
                    <span className="font-medium text-muted-foreground/70">
                      Why not more prominent:
                    </span>{" "}
                    Crypto is an opt-in product. Surfacing it aggressively on
                    the home screen of a bank app would undermine trust for
                    users not interested in trading.
                  </p>
                </div>
              </div>
              <ImagePlaceholder
                label="[Insert home screen: Crypto card + stories entry point]"
                caption="Crypto as a card and story thumbnail on the home screen"
                aspectRatio="aspect-[3/4]"
                variant="screen"
              />
            </div>

            {/* Flow 2: FTUE */}
            <div className="mt-20 md:mt-32">
              <ImagePlaceholder
                label="[Insert 3 story cards side by side: value prop, buy from account, market updates]"
                caption="Three-card onboarding using TymeBank's existing story format"
                aspectRatio="aspect-[2.5/1]"
                variant="hero"
              />
              <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/25">
                    02
                  </span>
                  <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                    First-time experience
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Three story cards introduce the product: what it does, how
                    funding works, and that real-time market data is available.
                    The final screen, &quot;Ready for lift off!&quot;, sets eligibility
                    expectations (18+, verified account) and captures T&C
                    acceptance before handing off to the coin list.
                  </p>
                  <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                    <p className="text-xs leading-relaxed text-muted-foreground/50">
                      The risk disclosure and T&C screens appear once,
                      before a user&apos;s first trade. They never appear again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow 3: Coin List + Detail */}
            <div className="mt-20 grid items-start gap-10 md:mt-32 md:grid-cols-[1fr_1.3fr] md:gap-16">
              <ImagePlaceholder
                label="[Insert coin list screen: Bitcoin, Ethereum, Paxos USD, etc.]"
                caption="Available coins with live ZAR price, sparkline, and percentage change"
                aspectRatio="aspect-[3/4]"
                variant="screen"
              />
              <div>
                <span className="font-mono text-[10px] text-muted-foreground/25">
                  03
                </span>
                <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                  Coin selection and detail
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The coin list shows Bitcoin, Ethereum, Litecoin, Bitcoin Cash,
                  Paxos USD, and Paxos Gold. Each row displays the coin&apos;s
                  current ZAR price, a mini sparkline, and the percentage change
                  at a glance: enough to decide whether to look closer.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Tapping a coin opens the detail view: a price chart with
                  1H / 24H / 1W / 1M / 1Y timeframes, a USD toggle, percentage
                  change relative to the selected window, and a brief
                  &quot;About&quot; section for users who want context on the
                  asset itself. The Buy CTA is persistent at the bottom.
                </p>
                <ImagePlaceholder
                  label="[Insert Bitcoin detail screen: chart 1H view with Buy CTA]"
                  caption="Coin detail with price chart, timeframe selector, and Buy CTA"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                  className="mt-6"
                />
              </div>
            </div>

            {/* Flow 4: Buy */}
            <div className="mt-20 md:mt-32">
              <ImagePlaceholder
                label="[Insert buy screen: R 0.00 empty, R 500 valid, R 0.1 over balance, three states side by side]"
                caption="Buy flow amount screen: empty, valid, and over-balance states"
                aspectRatio="aspect-[2.5/1]"
                variant="hero"
              />
              <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/25">
                    04
                  </span>
                  <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                    The buy flow
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Users enter an amount in rand using a custom numpad. The
                    Before / After balance bar updates live at the top. The coin
                    equivalent and market price are shown below the input.
                    Validation is inline: empty state, minimum violation (R50),
                    maximum violation, and over-balance, each with a specific,
                    non-alarming message.
                  </p>
                  <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                    <p className="text-xs leading-relaxed text-muted-foreground/50">
                      The custom numpad removes the system keyboard entirely.
                      This was intentional: it eliminates accidental decimal
                      placement and keeps the user in a controlled input
                      environment for a financial transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow 5: Confirmation + Success */}
            <div className="mt-20 grid items-start gap-10 md:mt-32 md:grid-cols-[1.2fr_1fr] md:gap-16">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground/25">
                  05
                </span>
                <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                  Confirmation and success
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The summary screen shows: rand amount, source account
                  (TymeBank EveryDay), coin value in BTC, locked market price,
                  and timestamp. A final disclaimer before the &quot;Confirm
                  purchase&quot; CTA. After confirmation, an animated success
                  screen shows the final amounts received.
                </p>
                <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                  <p className="text-xs leading-relaxed text-muted-foreground/50">
                    <span className="font-medium text-muted-foreground/70">
                      Key principle:
                    </span>{" "}
                    The summary screen is a receipt, not a last-chance warning.
                    All the relevant information is displayed, but the framing
                    is confirmatory: this is what you are buying, this is where
                    it comes from, this is the price.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <ImagePlaceholder
                  label="[Insert summary screen: R500, EveryDay account, BTC 0.00071]"
                  caption="Order summary with locked price before confirmation"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
              </div>
            </div>

            {/* Sell + Error states */}
            <div className="mt-20 md:mt-32">
              <h3 className="text-sm font-medium text-foreground/80">
                Sell flow and error states
              </h3>
              <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
                The sell flow mirrors the buy flow with coin quantity as the
                input denomination: the balance bar shows BTC before/after
                rather than ZAR. Every failure mode has its own screen, API
                failure, connectivity loss, age gate, unverified profile,
                account on debit hold. Each includes a human-readable
                explanation and an error code for support.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <ImagePlaceholder
                  label="[Insert sell screen: BTC 0.00 input]"
                  caption="Sell flow with coin quantity input"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
                <ImagePlaceholder
                  label="[Insert age gate error: 18+ required]"
                  caption="Age gate with human language and error code"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
                <ImagePlaceholder
                  label="[Insert unverified profile gate]"
                  caption="Profile verification required, with a clear resolution path"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
                <ImagePlaceholder
                  label="[Insert technical failure screen]"
                  caption="Technical failure with support contact and error code"
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
              </div>
            </div>
          </section>

          <div className={dividerRail} />

          {/* 8. Outcome */}
          <section id="outcome" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Outcome
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
              South Africa&apos;s first. Built into the bank, not bolted on.
            </h2>

            <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {[
                {
                  metric: "1st",
                  label:
                    "Licensed South African bank to offer native in-app crypto trading",
                  type: "Market",
                  accent: "oklch(0.88 0.18 86)",
                },
                {
                  metric: "R50",
                  label:
                    "Minimum entry. Lower than any standalone SA crypto exchange at launch.",
                  type: "Accessibility",
                  accent: "oklch(0.60 0.16 250)",
                },
                {
                  metric: "6",
                  label:
                    "Coins available at launch across BTC, ETH, LTC, BCH, USDP, PAXG",
                  type: "Breadth",
                  accent: "oklch(0.70 0.16 155)",
                },
                {
                  metric: "0",
                  label:
                    "Paxos surfaces visible to the user. Full TymeBank experience, end to end.",
                  type: "Abstraction",
                  accent: "oklch(0.68 0.14 30)",
                },
              ].map(({ metric, label, type, accent }) => (
                <div
                  key={type}
                  className="group relative overflow-hidden rounded-xl border border-border/30 bg-muted/10 p-6 transition-colors hover:bg-muted/20"
                >
                  <div
                    className="absolute top-0 left-0 h-[3px] w-full"
                    style={{ backgroundColor: accent, opacity: 0.5 }}
                  />
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase">
                    {type}
                  </p>
                  <p
                    className="mt-3 text-3xl font-medium tracking-tight md:text-4xl"
                    style={{ color: accent }}
                  >
                    {metric}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-sm font-medium text-foreground/80">
                  What the Launch Proved
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The product launched as a pilot with a controlled cohort before
                  broader rollout. The primary signal was first-purchase completion
                  rate. Not portfolio size. Not trading volume. The R50 minimum and
                  ZAR-first interface were intentional bets on a first-buy market,
                  not an active-trader market.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/80">
                  What the Paxos Integration Enabled
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Building on Paxos infrastructure meant TymeBank didn&apos;t need
                  to build its own custody layer, settlement system, or compliance
                  engine. This compressed the time to launch and removed regulatory
                  risk from the product team. The design challenge was making a
                  three-party arrangement (user, TymeBank, Paxos) feel like a
                  two-party transaction.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Reflection */}
          <section id="reflection" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Reflection
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
              Trust is not a feature you add. It&apos;s the architecture.
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What Worked
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    The decision to treat the amount screen as the primary trust
                    surface, rather than the onboarding, was the right call.
                    Every element of that screen was designed to answer the
                    question users actually had: &quot;What happens to my bank
                    account?&quot; Real-time balance impact, live price, min/max
                    constraints, and a disclaimer about price lock at
                    confirmation all exist to answer that single question.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    ZAR-first denominations throughout the entire flow removed
                    a cognitive burden that would have disproportionately
                    impacted first-time buyers. Users never had to convert
                    mentally. They entered a number they understood.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What Stayed Hard
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Indicative pricing is hard to communicate without sounding
                    evasive. The disclaimer &quot;Price may change by the time
                    you confirm&quot; is accurate but unsatisfying. In a
                    regulated banking environment, users expect the number they
                    see to be the number they pay. This is a structural feature
                    of crypto settlement, not a design failure. Explaining that
                    in two lines without creating anxiety remains an unsolved
                    problem.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What I&apos;d Explore Next
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A portfolio view with P&amp;L over time. The design accommodated
                    it in Phase 2 but it didn&apos;t ship with the pilot. For
                    users who make a first purchase, seeing their holding grow
                    or shrink relative to their buy price is the thing that
                    converts them from first-buyers to active users.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Price alerts and recurring buys (rand-cost averaging) were
                    also on the product backlog. Both are high-value for a
                    market where many users are paid monthly and want to
                    participate systematically rather than reactively.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What This Changed in My Thinking
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Designing financial products in a regulated environment is
                    designing for the distance between what users understand
                    and what they need to feel certain about. Every information
                    hierarchy decision, every default, every word choice either
                    builds or erodes the confidence that makes someone willing
                    to put real money into something new. The compliance
                    requirements weren&apos;t obstacles to the product. They were
                    the reason the product could exist in the first place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className={dividerRail} />

          {/* 10. Prototype */}
          <section id="prototype" className="py-24 md:py-32">
            <div className={contentRail}>
              <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
                Prototype
              </p>
              <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
                Walk through the flows
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground/70 md:text-lg">
                Three interactive prototypes covering the core journeys: onboarding
                and first purchase, portfolio management, and the sell flow. Click
                through each to experience the trust architecture in action.
              </p>
            </div>

            <div className="mt-14 space-y-10">
              <div>
                <p className={`${contentRail} mb-4 font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase`}>
                  Flow 1 — Onboarding &amp; First Buy
                </p>
                <FigmaEmbed
                  src="https://embed.figma.com/proto/O2jD267TqtyharU5WbNyBW/SA-CRYPTO?node-id=6276-233416&viewport=1350%2C744%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6276%3A233416&show-proto-sidebar=1&page-id=6276%3A232672&embed-host=share"
                  title="TymeBank Crypto — Onboarding & First Buy"
                />
              </div>

              <div>
                <p className={`${contentRail} mb-4 font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase`}>
                  Flow 2 — Portfolio &amp; Holdings
                </p>
                <FigmaEmbed
                  src="https://embed.figma.com/proto/O2jD267TqtyharU5WbNyBW/SA-CRYPTO?node-id=6545-240049&viewport=1350%2C744%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6545%3A240049&show-proto-sidebar=1&page-id=6276%3A232672&embed-host=share"
                  title="TymeBank Crypto — Portfolio & Holdings"
                />
              </div>

              <div>
                <p className={`${contentRail} mb-4 font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase`}>
                  Flow 3 — Sell Flow
                </p>
                <FigmaEmbed
                  src="https://embed.figma.com/proto/O2jD267TqtyharU5WbNyBW/SA-CRYPTO?node-id=6545-241076&viewport=1350%2C744%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6545%3A241076&show-proto-sidebar=1&page-id=6276%3A232672&embed-host=share"
                  title="TymeBank Crypto — Sell Flow"
                />
              </div>
            </div>
          </section>

          <div className={dividerRail} />

          {/* 11. Next / CTA */}
          <section className={`${contentRail} py-24 md:py-40`}>
            <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Bringing crypto to a mass-market banking app in a regulated
              African market is not a UX problem. It&apos;s a trust problem
              with a UX solution. The product shipped. The architecture holds.
            </p>
            <div className="mt-16 border-t border-border/30 pt-10">
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 uppercase">
                Next case study
              </p>
              <Link href="/projects/nodo-ai" className="group mt-4 block">
                <h3 className="text-[clamp(2rem,6vw,5rem)] leading-[0.9] font-medium tracking-tighter text-foreground/30 transition-colors duration-300 group-hover:text-foreground/60">
                  NODO AI
                  <ArrowUpRight className="mb-1 ml-2 inline-block size-[0.25em] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </h3>
              </Link>
              <p className="mt-4 max-w-[40ch] text-sm text-muted-foreground/40">
                Making autonomous yield infrastructure feel clear enough to
                trust with real money.
              </p>
            </div>
            <div className="mt-24 md:mt-32">
              <p className="text-base text-muted-foreground md:text-lg">
                Interested in working together?
              </p>
              <a
                href="mailto:hello@leon.design"
                className="mt-3 inline-block font-mono text-sm tracking-wide text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground/60"
              >
                hello@leon.design
              </a>
            </div>
          </section>

          <footer className={`${contentRail} border-t border-border/30 py-8`}>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground/30">
                &copy; 2026 Leon
              </span>
              <span className="text-xs text-muted-foreground/30">
                Built with quiet intention
              </span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
