import Link from "next/link"
import { ShieldAlert, CheckCircle2, ArrowLeft, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Felony & Misdemeanor Defense Attorney Austin, TX",
  description: "Protect your record and your future. Aggressive defense against drug charges, assault, and domestic violence. Contact Austin attorney Jessica Bernstein.",
  alternates: {
    canonical: "https://atxcrimdefense.com/practice-areas/felonies",
  },
}

export default function FeloniesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Back link */}
      <div className="px-4 sm:px-6 lg:px-8 pt-md mx-auto max-w-7xl w-full text-left">
        <Link href="/practice-areas" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to practice areas</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Defense Specialization</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            Felony & misdemeanor defense.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Representing clients facing serious charges in Central Texas. From grand jury presentations to trial defense, we advocate for dismissals, reductions, and clean records.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-3xl items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 flex flex-col gap-lg text-left">
            <div className="flex flex-col gap-sm">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Strategic representation when everything is at stake.
              </h2>
              <div className="font-sans text-[16px] leading-[24px] text-muted-foreground flex flex-col gap-md">
                <p>
                  A felony conviction has life-altering consequences, including substantial prison sentences, significant fines, and the permanent loss of civil rights (such as voting and firearm ownership). Misdemeanors, while less severe, still carry jail time and create a permanent criminal record that can limit employment and housing.
                </p>
                <p>
                  At the Law Office of Jessica Bernstein, we prepare every felony and misdemeanor case with meticulous detail. We investigate the legality of searches, interview witnesses, analyze digital forensics, and challenge the prosecutor&apos;s legal assertions.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Grand Jury representation: Stopping cases early.
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-muted-foreground">
                In Texas, all felony charges must be presented to a grand jury for indictment. This is a critical stage. We compile grand jury packets—documents detailing mitigating circumstances, character letters, and conflicting evidence—to convince the grand jury to issue a &quot;No Bill,&quot; which effectively dismisses the felony charge before it is ever formally filed in district court.
              </p>

              <div className="my-sm border-l-4 border-accent pl-md italic text-sm text-muted-foreground leading-relaxed bg-muted/20 py-sm pr-sm rounded-r-md">
                &ldquo;A felony charge doesn&apos;t have to result in an indictment. Presenting a comprehensive grand jury packet before the state files formal charges is often our best opportunity to secure a No Bill.&rdquo;
                <span className="block font-sans font-semibold text-foreground text-xs mt-xs not-italic">— Attorney Jessica Bernstein</span>
              </div>
            </div>

            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Expunctions and Non-Disclosures.
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-muted-foreground">
                If your case was dismissed, you completed pretrial diversion, or you were acquitted at trial, the arrest record still exists. Under the <a href="https://statutes.capitol.texas.gov/Docs/CR/htm/CR.55.htm" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Texas Code of Criminal Procedure Chapter 55</a>, you may be eligible for a formal expunction (which completely erases the arrest record) or a petition for non-disclosure (which seals the record from public view, such as employer background checks).
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-md">
            {/* Common Charges List */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground mb-sm">
                Charges We Defend
              </h3>
              <ul className="flex flex-col gap-sm text-xs text-muted-foreground">
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Drug Possession:</strong> Controlled substances, marijuana, intent to distribute.</span>
                </li>
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Assault & Family Violence:</strong> Misdemeanor assault, domestic battery, felony strangulation.</span>
                </li>
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Theft & Property Crimes:</strong> Burglary, larceny, shoplifting, criminal mischief.</span>
                </li>
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Weapons Charges:</strong> Unlawful carrying, felon in possession of a firearm.</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-lg rounded-pill bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs py-2 shadow-level-2 cursor-pointer">
                <Link href="/contact">Defend your case</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
