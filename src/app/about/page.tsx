import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Award, BookOpen, ShieldCheck, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Attorney Jessica Bernstein | Austin Criminal Defense Lawyer",
  description: "Learn about Jessica Bernstein's legal credentials, University of Texas trial training, and client-first philosophy defending Austin citizens.",
  alternates: {
    canonical: "https://atxcrimdefense.com/about",
  },
  openGraph: {
    title: "About Attorney Jessica Bernstein | Austin Criminal Defense Lawyer",
    description: "Learn about Jessica Bernstein's legal credentials, University of Texas trial training, and client-first philosophy defending Austin citizens.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">Biography</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            About attorney Jessica Bernstein.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            A dedicated criminal defense lawyer defending Travis County residents with direct representation, trial experience, and unwavering advocacy.
          </p>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-3xl items-start">
          
          {/* Attorney Portrait and Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <div className="relative w-full h-[480px] rounded-lg overflow-hidden border border-border shadow-level-3">
              <Image
                src="/jbernstein.jpg"
                alt="Jessica Bernstein, Austin Criminal Defense Attorney"
                fill
                className="object-cover object-top"
                sizes="(max-w-7xl) 100vw, 500px"
              />
            </div>
            
            {/* Quick Credentials Card */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground mb-sm">
                Bar Admissions & Licenses
              </h3>
              <ul className="flex flex-col gap-sm text-sm text-muted-foreground">
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>State Bar of Texas, License #24093085</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Austin Criminal Defense Lawyers Association (ACDLA)</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Texas Criminal Defense Lawyers Association (TCDLA)</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Statewide DWI presenter &amp; invited trainer, Travis County Public Defender&apos;s Office</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Biography Text content */}
          <div className="lg:col-span-7 flex flex-col gap-lg text-left">
            <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
              Aggressive in the court. Compassionate to the client.
            </h2>
            
            <div className="font-sans text-[16px] leading-[24px] text-muted-foreground flex flex-col gap-md">
              <p>
                Jessica Bernstein founded her Austin law firm on a simple principle: every client deserves an attorney who is not only skilled in the law but is also accessible and ready to listen. She takes the &ldquo;counselor&rdquo; part of &ldquo;attorney and counselor at law&rdquo; seriously — striving to ensure that her clients find themselves, at the conclusion of representation, in a better overall position to move on and put this chapter behind them. She believes in providing realistic expectations while fighting zealously for the best possible outcome.
              </p>

              <p>
                Born and raised in Houston, Jessica moved to Austin in 2004 and received her undergraduate degree in the Plan II Honors program from the University of Texas in 2007. She went on to earn her law degree, also from the University of Texas, in 2011. She practices criminal defense in Austin and the surrounding area — Travis, Williamson, and Hays Counties.
              </p>

              <p>
                Jessica knows the local criminal justice system intimately. She has presented to a statewide audience on the topic of DWI and has been invited to help train new attorneys in the Travis County Public Defender&apos;s Office. She knows how local prosecutors operate, how judges view specific charges, and how to spot structural errors in police reports.
              </p>

              <p>
                Jessica is also one of Austin&apos;s leading attorneys providing <Link href="/practice-areas/jail-release" className="text-accent hover:underline font-semibold">attorney-backed bonds</Link>. When an individual is arrested in Travis County, Jessica can write a bond to secure their jail release within hours, waiving the typical bondsman premium while immediately establishing a defense strategy. An additional trial fee is <strong className="text-foreground">never</strong> charged.
              </p>

              <p>
                In her free time, Jessica enjoys reading, working as a kickboxing trainer, and travelling to national parks and abroad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mt-sm border-t border-border pt-lg">
              {/* Education */}
              <div className="flex flex-col gap-xs">
                <div className="flex items-center gap-xs font-serif font-semibold text-foreground">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span>Education</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>J.D.</strong>, University of Texas School of Law, 2011<br />
                  <strong>B.A.</strong>, Plan II Honors Program, University of Texas at Austin, 2007
                </p>
              </div>

              {/* Distinctions */}
              <div className="flex flex-col gap-xs">
                <div className="flex items-center gap-xs font-serif font-semibold text-foreground">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Recognition</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Statewide DWI speaker &amp; educator<br />
                  Invited trainer, Travis County Public Defender&apos;s Office
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-sm mt-md">
              <Button asChild className="rounded-pill bg-primary text-primary-foreground hover:bg-primary/90 px-lg py-3 cursor-pointer shadow-level-2">
                <Link href="/contact">Schedule consultation</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-pill border-border hover:bg-muted text-foreground px-lg py-3 cursor-pointer">
                <a href="mailto:jessica@atxcrimdefense.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Attorney Bernstein</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (Polarity Flip to Soft Canvas bg) */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-4xl text-left flex flex-col gap-lg">
          <h2 className="font-serif text-3xl font-semibold tracking-[-1.28px] text-foreground text-center">
            How we defend our clients.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-sm">
            <div className="flex flex-col gap-xs bg-card p-md border border-border rounded-md shadow-level-2">
              <div className="text-accent font-serif text-lg font-semibold">01. Direct Access.</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will not be passed off. You get your attorney&apos;s direct line, ensuring immediate replies to your texts and calls at every step.
              </p>
            </div>

            <div className="flex flex-col gap-xs bg-card p-md border border-border rounded-md shadow-level-2">
              <div className="text-accent font-serif text-lg font-semibold">02. Detail Auditing.</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We review police reports, blood results, and video footage line-by-line. If police procedures were violated, we argue to suppress evidence.
              </p>
            </div>

            <div className="flex flex-col gap-xs bg-card p-md border border-border rounded-md shadow-level-2">
              <div className="text-accent font-serif text-lg font-semibold">03. Trial Readiness.</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We prepare every case with the expectation of going to trial. This rigorous approach gives us leverage in negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
