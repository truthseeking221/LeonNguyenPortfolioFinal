import Image, { type StaticImageData } from "next/image"
import { Reveal } from "@/components/reveal"

import logoBCG from "@/app/images/logos/BCG.png"
import logoPizza4Ps from "@/app/images/logos/Pizza 4Ps.png"
import logoDiag from "@/app/images/logos/Diag.png"
import logoMSB from "@/app/images/logos/MSB.png"
import logoKyber from "@/app/images/logos/Kyber.png"
import logoTymeBank from "@/app/images/logos/TymeBank.png"
import logoNODO from "@/app/images/logos/NODO.png"
import logoTravala from "@/app/images/logos/Travala.png"
import logoFewcha from "@/app/images/logos/Fewcha.png"
import logoSatang from "@/app/images/logos/Satang.png"
import logoEngineThemes from "@/app/images/logos/Engine Themes.png"
import logoYoloLabs from "@/app/images/logos/Yolo Labs.png"

const CLIENTS: { name: string; logo: StaticImageData }[] = [
  { name: "Boston Consulting Group", logo: logoBCG },
  { name: "TymeBank", logo: logoTymeBank },
  { name: "Pizza 4P's", logo: logoPizza4Ps },
  { name: "Diag", logo: logoDiag },
  { name: "MSB", logo: logoMSB },
  { name: "Kyber Network", logo: logoKyber },
  { name: "NODO", logo: logoNODO },
  { name: "Travala", logo: logoTravala },
  { name: "Fewcha Wallet", logo: logoFewcha },
  { name: "Satang", logo: logoSatang },
  { name: "Engine Themes", logo: logoEngineThemes },
  { name: "YOLO Lab Studio", logo: logoYoloLabs },
]

export function ClientLogos() {
  return (
    <section className="px-6 py-10 md:px-[200px] md:py-20 max-w-screen-2xl mx-auto">
      <Reveal variant="fade">
        <div className="mb-8 md:mb-12 flex items-center gap-4">
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 dark:text-muted-foreground/70 uppercase">
            Companies I&apos;ve worked with
          </p>
          <span className="h-px flex-1 bg-border/40" />
        </div>
      </Reveal>

      <Reveal delay={100} variant="fade">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-2 gap-y-2 md:gap-x-3 md:gap-y-3">
          {CLIENTS.map((client) => (
            <div key={client.name} className="relative aspect-[2/1] w-full">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 14vw, (min-width: 768px) 16vw, 30vw"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
