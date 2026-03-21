import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { TableOfContents } from "@/components/case-study/table-of-contents"
import { ImagePlaceholder } from "@/components/case-study/image-placeholder"

export const metadata: Metadata = {
  title: "GoTyme GoalSave · Case Study · Leon",
  description:
    "Designing a savings product for TymeBank's Philippines market. Built around how people actually save. A product design case study by Leon.",
}

const tocItems = [
  { id: "snapshot", label: "Overview" },
  { id: "setting", label: "Setting" },
  { id: "challenge", label: "The Challenge" },
  { id: "found", label: "What We Found" },
  { id: "approach", label: "Approach" },
  { id: "product", label: "The Product" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
]

const contentRail = "mx-auto w-full max-w-[1100px] px-6 md:px-10 lg:px-14"
const sectionRail = `${contentRail} py-24 md:py-32`
const dividerRail = "mx-auto h-px w-[calc(100%-3rem)] max-w-[1100px] bg-border/30 md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)]"

export default function GoTymeSavingsCaseStudy() {
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
              <Badge variant="outline">Fintech · Savings</Badge>
              <Badge variant="secondary">Shipped</Badge>
            </div>

            <h1 className="mt-6 text-[clamp(3rem,10vw,8.5rem)] leading-[0.88] font-medium tracking-tighter">
              GoTyme<br />GoalSave
            </h1>

            <p className="mt-6 max-w-[50ch] text-xl leading-relaxed font-light text-muted-foreground md:text-2xl">
              A savings experience for the Philippines. Small amounts, real
              goals, and a system that keeps going even when you forget.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border/40 pt-8 md:grid-cols-5 md:gap-x-12">
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Platform", value: "iOS & Android" },
                { label: "Market", value: "Philippines" },
                { label: "Initiative", value: "TymeX" },
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
              GoTyme Bank is TymeBank&apos;s Philippines brand. The market was
              different from South Africa in almost every way that mattered:
              different financial habits, different trust levels, different
              reasons people kept money in cash. GoalSave is the savings product
              at the center of it, a goal-based account built to make saving
              feel like part of daily life rather than something to do later.
            </p>

            <div className="mt-16">
              <ImagePlaceholder
                label="[Insert: GoalSave dashboard showing multiple goals — Paris trip, School fees, New car — each with a progress bubble and saved amount]"
                caption="GoalSave dashboard. Multiple goals, each with its own progress and identity."
                aspectRatio="aspect-[2.2/1]"
                variant="hero"
              />
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
                    "A goal-based savings account inside the GoTyme Bank app. Users create named goals, set targets and deadlines, and save toward them through automated transfers, card round-ups, or manual deposits. Interest up to 9% annually.",
                },
                {
                  title: "The Market",
                  content:
                    "The Philippines has high mobile banking adoption but historically low formal savings rates. Many Filipinos keep money in cash, lend it to family, or pool it in community groups. Digital savings products were either too rigid or too unfamiliar to stick.",
                },
                {
                  title: "What I Designed",
                  content:
                    "The full GoalSave experience: goal creation, target and deadline setting, Auto-Save configuration, Save the Change round-up feature, dashboard states across all progress scenarios, Smart Save suggestions, withdrawal flow, and close-goal flow.",
                },
                {
                  title: "The Core Question",
                  content:
                    "Most savings apps are built for people who have already decided to save. GoalSave had to work for people who intend to save but rarely find the right moment. How do you take the recurring decision out of saving without making people feel like their money is running on autopilot they did not choose?",
                },
                {
                  title: "The Interest Angle",
                  content:
                    "Up to 9% annual interest gave users something cash savings could never match. The product had to surface this in a way that felt real, not like a rate buried in a product sheet. The returns are there. The experience just had to make them visible.",
                },
                {
                  title: "The Automation Bet",
                  content:
                    "A user who sets up Auto-Save during goal creation is far more likely to reach their goal than one who saves manually, because they never have to remember to. The product guides new users toward that setup from the first screen, not as an optional upgrade you find later in settings.",
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

          {/* 3. Setting */}
          <section id="setting" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Setting
            </p>
            <h2 className="mt-4 max-w-[26ch] text-3xl font-medium tracking-tight md:text-4xl">
              A new market, and a different relationship with money
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_0.7fr] md:gap-20">
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  TymeBank&apos;s expansion into the Philippines came through
                  GoTyme Bank, a joint venture built for a market of over 70
                  million active mobile users. Most of them had a working
                  relationship with money but not with banks.
                </p>
                <p>
                  The Philippines is not a country with low financial awareness.
                  People manage money constantly: sending remittances, running
                  small businesses, splitting household costs across family
                  networks. What was missing was a formal place to put money
                  with a genuine reason to leave it there. Cash stayed liquid
                  because it needed to. Banks felt distant.
                </p>
                <p>
                  GoTyme entered that space as a bank that had to earn the
                  habit before anything else. Savings was the product most
                  likely to do that. Not for any strategic reason. Just because
                  Filipinos already wanted to save, and the problem had nothing
                  to do with wanting.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      stat: "9%",
                      label: "Maximum annual interest on GoalSave accounts",
                      accent: "oklch(0.75 0.18 145)",
                    },
                    {
                      stat: "₱0",
                      label: "Minimum balance to open a GoalSave goal",
                      accent: "oklch(0.70 0.16 220)",
                    },
                    {
                      stat: "3",
                      label: "Ways to save: Auto-Save, Save the Change, manual deposit",
                      accent: "oklch(0.82 0.16 60)",
                    },
                    {
                      stat: "PH",
                      label: "First market outside South Africa for TymeBank",
                      accent: "oklch(0.65 0.14 30)",
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
                  label="[Insert: Goal creation screen — naming a goal 'Paris Trip' with image selection]"
                  caption="Users name and personalize each goal before setting any numbers. The name alone changes how attached they feel to it."
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
              </div>
            </div>
          </section>

          {/* 4. The Challenge */}
          <section id="challenge" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              The Challenge
            </p>
            <h2 className="mt-4 max-w-[30ch] text-3xl font-medium tracking-tight md:text-4xl">
              People don&apos;t fail to save because they don&apos;t want to.
              The moment just never quite arrives.
            </h2>
            <div className="mt-12 space-y-16 md:mt-16">
              <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:gap-16">
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    A savings account is something most people understand.
                    Open it. Put money in. Watch it grow. The mechanics are
                    not complicated.
                  </p>
                  <p>
                    The problem is that saving competes with everything else
                    money is doing. Rent. Groceries. The unexpected expense.
                    The thing that feels more urgent right now. Every time
                    someone opens a savings app intending to transfer something,
                    life has usually already spent it.
                  </p>
                  <p>
                    This is not about not knowing how. And it is not too many
                    taps. It is a timing problem. There is always something more
                    urgent, and the savings decision waits for a moment that
                    keeps not arriving.
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-muted/10 p-6">
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 uppercase">
                    What wasn&apos;t working
                  </p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Generic savings accounts with no named purpose",
                      "Manual transfers requiring willpower each time",
                      "No feedback on whether users were on track",
                      "No acknowledgment when life interrupted progress",
                      "Interest rates buried in fine print, never felt",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/25" />
                        <span className="text-sm leading-relaxed text-muted-foreground/55">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground/80">
                  An informal model that already works
                </h3>
                <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
                  Filipinos have long run their own savings infrastructure
                  informally. The <em>paluwagan</em> is a rotating savings
                  group where members contribute fixed amounts and take turns
                  receiving the pot. It is widespread, trusted, and culturally
                  embedded. It works not because it is convenient, but because
                  the commitment is social and pre-made. You do not decide each
                  week whether to save. You decided when you joined.
                </p>
                <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
                  GoalSave did not need to teach anyone to value saving. It
                  just needed to let them decide once.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <ImagePlaceholder
                label="[Insert: Auto-Save setup screen — frequency options (daily, weekly, monthly), amount field, projected reach date]"
                caption="Auto-Save setup. The decision made once, so it does not need to be made again."
                aspectRatio="aspect-[21/9]"
                variant="hero"
              />
            </div>
          </section>

          <div className={dividerRail} />

          {/* 5. What We Found */}
          <section id="found" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              What We Found
            </p>
            <h2 className="mt-4 max-w-[26ch] text-3xl font-medium tracking-tight md:text-4xl">
              Three things that determine whether someone actually saves
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              The design was not built around flows. It was built around the
              places where saving tends to quietly fall apart.
            </p>

            <div className="mt-14 space-y-14 md:mt-20">
              <div className="grid gap-8 md:grid-cols-[80px_1fr] md:gap-12">
                <p
                  className="text-[4.5rem] leading-none font-medium tracking-tighter"
                  style={{ color: "oklch(0.75 0.18 145)", opacity: 0.15 }}
                >
                  01
                </p>
                <div>
                  <h3 className="text-lg font-medium tracking-tight md:text-xl">
                    A goal without a name is easy to abandon
                  </h3>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
                    When savings live in a generic account, withdrawing from it
                    feels neutral. When the account is named &quot;School fees
                    for Mia&quot; or &quot;Paris trip,&quot; the same withdrawal
                    carries weight. Naming has nothing to do with aesthetics.
                    When your savings have a name, taking money out of them
                    feels like a small betrayal. That is not a design trick.
                    That is just how people work.
                  </p>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground/60">
                    Every GoalSave gets a name, an optional custom photo, and
                    its own progress view. In the app, each goal is its own
                    thing: its own balance, its own progress, its own identity.
                    Not a folder inside a bigger folder.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-[80px_1fr] md:gap-12">
                <p
                  className="text-[4.5rem] leading-none font-medium tracking-tighter"
                  style={{ color: "oklch(0.70 0.16 220)", opacity: 0.15 }}
                >
                  02
                </p>
                <div>
                  <h3 className="text-lg font-medium tracking-tight md:text-xl">
                    Willpower is a poor substitute for automation
                  </h3>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
                    The users most likely to reach their savings goals are not
                    the most disciplined. They are the ones who automate early
                    and never have to decide again. One setup decision is much
                    easier to make than fifty-two. Manual saving requires an
                    active choice every time, and there are always competing
                    demands for that same choice.
                  </p>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground/60">
                    Auto-Save was designed not as a feature option but as the
                    primary path. During goal creation, the flow naturally leads
                    users toward setting up a recurring transfer before they
                    reach the dashboard. Users who skip it can return later,
                    but the path did not suggest that skipping was a good idea.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-[80px_1fr] md:gap-12">
                <p
                  className="text-[4.5rem] leading-none font-medium tracking-tighter"
                  style={{ color: "oklch(0.82 0.16 60)", opacity: 0.15 }}
                >
                  03
                </p>
                <div>
                  <h3 className="text-lg font-medium tracking-tight md:text-xl">
                    Progress that says nothing fails silently
                  </h3>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
                    A progress bar at 60% tells you where you are. It does not
                    tell you if that is enough. Users who fall behind do not
                    always give up on their goal. They just stop opening the
                    app, because opening it started to feel bad. The product
                    needed to say something useful when things were not going
                    well, and not make the user feel like it was their fault.
                  </p>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground/60">
                    GoalSave has distinct states for everything that actually
                    happens when someone is saving toward a goal: on track,
                    ahead, behind, near the deadline, past it, and done. Each
                    state has its own message and its own next action. The
                    product never just shows a number. It always tells you
                    what it means.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Approach */}
          <section id="approach" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Approach
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
              Four principles that guided every decision
            </h2>

            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
              {[
                {
                  label: "Make the goal feel real before asking for a commitment",
                  body: "Before asking users to set up Auto-Save, the flow first asked them to name their goal and choose an image. The name and the image come before the numbers. A user who has already spent 30 seconds on that is more committed to what follows. It was not ordered this way for flow. It was ordered this way because it works.",
                  note: "This adds a step before any money moves. The bet was that someone who has already named their goal is more likely to finish setting it up than someone who was asked for a number first.",
                  accent: "oklch(0.75 0.18 145)",
                },
                {
                  label: "Automate the default, not the exception",
                  body: "In most savings products, manual transfers are the default and automation is buried somewhere in settings. GoalSave inverted that. Setting up Auto-Save was where the creation flow was always heading. Users who wanted to skip it could, but the path did not suggest skipping was a good idea. The product was designed for what people actually do, not what they plan to.",
                  note: "The copy mattered a lot here. The flow had to feel like a suggestion, not a push. Users needed to feel they were choosing to automate.",
                  accent: "oklch(0.70 0.16 220)",
                },
                {
                  label: "Turn spending into saving, without requiring a decision each time",
                  body: "Save the Change rounds up every GoTyme card purchase and moves the difference to a GoalSave. A ₱47 coffee becomes ₱50, and ₱3 goes to savings. No action required after setup. Small amounts build up without the user ever needing to think about it again.",
                  note: "Save the Change only activates for one GoalSave at a time. Redirecting it requires an active choice: a small speed bump that keeps the connection between spending and saving visible.",
                  accent: "oklch(0.82 0.16 60)",
                },
                {
                  label: "Acknowledge setbacks without amplifying them",
                  body: "A product that responds to missed targets with silence is one users stop opening. GoalSave was designed with 12 distinct progress states, from zero balance with no rules set, all the way to a goal achieved after the deadline. Each has a specific message and a specific next action. The language was written to be honest without being discouraging: 'You'll get there' over 'You're behind.'",
                  note: "The hardest state to write: a user who missed their target date but still has money in the goal. The message had to reframe the deadline as flexible without making goals feel meaningless.",
                  accent: "oklch(0.65 0.14 30)",
                },
              ].map(({ label, body, note, accent }) => (
                <div key={label} className="border-t border-border/20 pt-6">
                  <div
                    className="mb-5 h-0.5 w-8"
                    style={{ backgroundColor: accent, opacity: 0.5 }}
                  />
                  <h3 className="max-w-[34ch] text-base font-medium leading-snug tracking-tight">
                    {label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                  <p className="mt-3 border-l border-border/30 pl-3 text-xs leading-relaxed text-muted-foreground/45">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <ImagePlaceholder
                label="[Insert: Smart Save suggestion screen — 'Set up a ₱500 weekly auto-save to meet your target goal by July 2022']"
                caption="Smart Save calculates the right recurring amount to reach a goal on time. It removes the 'how much should I save?' question entirely."
                aspectRatio="aspect-[21/9]"
                variant="hero"
              />
            </div>
          </section>

          <div className={dividerRail} />

          {/* 7. The Product */}
          <section id="product" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              The Product
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-medium tracking-tight md:text-4xl">
              One savings account. Built to feel like yours.
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              GoalSave is not really one thing. It is three different ways to
              save, layered so that something is usually happening even when
              nothing feels like it.
            </p>

            {/* Creating a Goal */}
            <div className="mt-20 grid items-start gap-10 md:mt-28 md:grid-cols-[1.2fr_1fr] md:gap-16">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground/25">
                  01
                </span>
                <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                  Creating a goal
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Goal creation starts with a name and an image, not an amount.
                  The first screen asks what you are saving for, not how much.
                  Users can pick from a library of savings images or upload
                  their own. By the time they reach the numbers, the goal
                  already feels real.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Target amount and deadline are both optional. A user can open
                  a GoalSave with nothing but a name. The structure can come
                  later, once the goal is real enough to commit to.
                </p>
                <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                  <p className="text-xs leading-relaxed text-muted-foreground/50">
                    <span className="font-medium text-muted-foreground/70">
                      Why optional targets:
                    </span>{" "}
                    Asking for a target amount right away means asking people
                    to think about numbers before they have decided they want
                    the thing. The goal comes first.
                  </p>
                </div>
              </div>
              <ImagePlaceholder
                label="[Insert: Goal naming screen — 'Paris trip' in text input, savings image grid with travel photos below]"
                caption="The first step in creating a goal is giving it a name, not a number."
                aspectRatio="aspect-[3/4]"
                variant="screen"
              />
            </div>

            {/* Auto-Save */}
            <div className="mt-20 md:mt-32">
              <ImagePlaceholder
                label="[Insert: Auto-Save setup — ₱500 weekly, frequency tabs (daily/weekly/monthly), calendar picker, projected completion date]"
                caption="Auto-Save setup. The product suggests an amount based on the target. Users confirm or adjust."
                aspectRatio="aspect-[2.5/1]"
                variant="hero"
              />
              <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/25">
                    02
                  </span>
                  <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                    Auto-Save
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Auto-Save schedules a recurring transfer from a GoTyme
                    Everyday Account to a GoalSave, daily, weekly, or monthly.
                    If a target and deadline are set, Smart Save calculates
                    the exact amount needed to reach the goal on time and
                    pre-fills it as a suggestion. Users confirm or adjust.
                  </p>
                  <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                    <p className="text-xs leading-relaxed text-muted-foreground/50">
                      When Auto-Save fails due to insufficient balance, the
                      app does not ignore it. It notifies the user and asks
                      if they want to reschedule. That is the whole response:
                      &quot;We weren&apos;t able to complete your auto-save
                      this week. Want to try again?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Save the Change */}
            <div className="mt-20 grid items-start gap-10 md:mt-32 md:grid-cols-[1fr_1.3fr] md:gap-16">
              <ImagePlaceholder
                label="[Insert: Save the Change explainer — ₱47 purchase rounds up to ₱50, ₱3 goes to GoalSave]"
                caption="Save the Change. Every card purchase rounds up, and the difference moves to savings."
                aspectRatio="aspect-[3/4]"
                variant="screen"
              />
              <div>
                <span className="font-mono text-[10px] text-muted-foreground/25">
                  03
                </span>
                <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                  Save the Change
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Every purchase made with the GoTyme card gets rounded up to
                  the nearest peso, and the difference transfers to a designated
                  GoalSave. No action required after setup. The feature runs
                  in the background, so saving becomes a side effect of
                  spending rather than a separate act.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The round-up amount can be set to the nearest ₱1, ₱5, ₱10,
                  ₱25, or ₱50. Smaller amounts feel effortless. Larger ones
                  start to feel like real progress.
                </p>
                <div className="mt-4 border-l-2 border-foreground/10 pl-4">
                  <p className="text-xs leading-relaxed text-muted-foreground/50">
                    Save the Change only activates for one GoalSave at a time.
                    Redirecting it to a different goal requires an active
                    choice, which keeps users aware of where their spare change
                    is going. That awareness seems worth the one extra step.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress States */}
            <div className="mt-20 md:mt-32">
              <h3 className="text-sm font-medium text-foreground/80">
                Progress states
              </h3>
              <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
                The GoalSave dashboard does not show a static balance. It shows
                where you stand. Twelve distinct states cover everything that
                actually happens when someone is saving toward a goal: from a
                fresh account with nothing set up, through on-track, behind,
                near the deadline, past it, and finally to the goal itself.
                Each state has its own message, written to meet the user where
                they are rather than where the product wishes they were.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <ImagePlaceholder
                  label="[Insert: 'You're on track' — 66% progress, target July 2022, affirming message]"
                  caption="On track. Affirms without over-celebrating."
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
                <ImagePlaceholder
                  label="[Insert: 'Nearly there!' — 88% progress, suggestion to save change to cross the line]"
                  caption="Nearly there. Specific action, not generic encouragement."
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
                <ImagePlaceholder
                  label="[Insert: 'Your target date was 2 days ago' — 50% progress, gentle redirect with auto-save suggestion]"
                  caption="Missed deadline. Honest without being discouraging."
                  aspectRatio="aspect-[3/4]"
                  variant="screen"
                />
                <ImagePlaceholder
                  label="[Insert: Goal achieved celebration state — confetti, final balance shown]"
                  caption="Goal achieved. The moment the product builds toward."
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
            <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight md:text-4xl">
              A savings product shaped around how people already live
            </h2>

            <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {[
                {
                  metric: "3",
                  label:
                    "Auto-Save, Save the Change, and manual deposits. Three ways to save, each built for a different kind of person.",
                  type: "Flexibility",
                  accent: "oklch(0.75 0.18 145)",
                },
                {
                  metric: "12",
                  label:
                    "Distinct progress states. The product has something useful to say at every point in the savings journey, not just when things are going well.",
                  type: "Responsiveness",
                  accent: "oklch(0.70 0.16 220)",
                },
                {
                  metric: "9%",
                  label:
                    "Annual interest. Enough to make formal savings meaningfully more attractive than keeping money in cash.",
                  type: "Return",
                  accent: "oklch(0.82 0.16 60)",
                },
                {
                  metric: "1×",
                  label:
                    "Decision required to automate. Once Auto-Save is running, users never need to think about saving again to keep moving toward the goal.",
                  type: "Automation",
                  accent: "oklch(0.65 0.14 30)",
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
                  What GoalSave changed about how saving worked
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The most significant shift was not in the feature set. It
                  was in the mental model. Previous savings products asked
                  people to manage money. GoalSave asked them to name something
                  they wanted and then stepped out of the way. There is a real
                  difference between those two things.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  That distinction matters especially in a market where distrust
                  of formal banking runs alongside a genuine desire to save.
                  GoalSave was not asking users to trust a bank with their
                  savings discipline. It was giving them a tool to exercise
                  the discipline they already had.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/80">
                  Why the layered approach mattered
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Not every GoTyme user saves the same way. Some prefer to set
                  it and forget it. Auto-Save is for them. Some save in small,
                  invisible increments. Save the Change is for them. Some want
                  direct control and deposit when it feels right. All three
                  coexist without hierarchy. The product does not judge how
                  saving happens. It just makes sure it does.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Reflection */}
          <section id="reflection" className={sectionRail}>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground/40 uppercase">
              Reflection
            </p>
            <h2 className="mt-4 max-w-[26ch] text-3xl font-medium tracking-tight md:text-4xl">
              Designing for behavior is different from designing for function
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    Where the work paid off
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    The progress states were the most time-consuming part of
                    the design, and the most underestimated by everyone outside
                    the team. A progress bar at 42% means nothing without
                    context. Is 42% good? Bad? Normal for this point in time?
                    Investing in those 12 states meant the dashboard always
                    had something useful to tell the user, not just something
                    to display. A product that does not say anything useful
                    when you are behind is a product you quietly stop checking.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What the paluwagan taught me
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    The deeper I looked at why informal savings groups work in
                    the Philippines, the more it changed how I thought about
                    product defaults. The paluwagan works because the commitment
                    is structural, not motivational. You do not rely on feeling
                    like saving. The system relies on you. GoalSave&apos;s
                    Auto-Save was the closest formal version of that: you set
                    it up once, and the system takes over.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What stayed hard
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Writing the off-track states was genuinely difficult. The
                    language had to acknowledge reality without shame.
                    &quot;That&apos;s OK. You&apos;ll get there&quot; risks
                    feeling hollow. &quot;You&apos;re behind&quot; risks feeling
                    accusatory. The right tone sat somewhere between honest and
                    encouraging, and there was no clear rule for where that
                    line was. Finding it took more iteration than anything
                    visual. That surprised me.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80">
                    What I&apos;d explore next
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Social savings was not something we built. GoalSave is
                    private by design. But shared goals are worth exploring:
                    two people saving toward the same target, with visibility
                    into each other&apos;s progress. The accountability that
                    comes from saving with someone is one of the paluwagan&apos;s
                    most powerful mechanics. I have not seen it done well in
                    any digital savings product.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className={dividerRail} />

          {/* 10. Next / CTA */}
          <section className={`${contentRail} py-24 md:py-40`}>
            <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Most people who wanted to save already knew how. GoalSave just
              made it harder to stop.
            </p>
            <div className="mt-16 border-t border-border/30 pt-10">
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 uppercase">
                Next case study
              </p>
              <Link href="/projects/tymebank-crypto" className="group mt-4 block">
                <h3 className="text-[clamp(2rem,6vw,5rem)] leading-[0.9] font-medium tracking-tighter text-foreground/30 transition-colors duration-300 group-hover:text-foreground/60">
                  TymeBank Crypto
                  <ArrowUpRight className="mb-1 ml-2 inline-block size-[0.25em] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </h3>
              </Link>
              <p className="mt-4 max-w-[40ch] text-sm text-muted-foreground/40">
                South Africa&apos;s first regulated bank to offer native crypto
                trading. Built for people who had never bought a coin.
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
