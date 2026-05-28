import Link from "next/link"
import { Scale, CheckCircle2, AlertOctagon, HelpCircle, Phone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "DWI & DUI Defense Attorney Austin, TX",
  description: "Arrested for DWI in Travis County? You have 15 days to save your license. Contact Austin attorney Jessica Bernstein to defend your rights and license.",
  alternates: {
    canonical: "https://atxcrimdefense.com/practice-areas/dwi",
  },
}

export default function DwiPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Back to practice areas */}
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
            DWI defense in Austin.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Arrested for driving while intoxicated in Central Texas? We audit blood testing logs, challenge traffic stops, and defend your driver&apos;s license at ALR hearings.
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
                You have 15 days to protect your driver&apos;s license.
              </h2>
              <div className="font-sans text-[16px] leading-[24px] text-muted-foreground flex flex-col gap-md">
                <p>
                  Upon being arrested for a DWI in Texas, the officer will likely confiscate your driver&apos;s license and issue a temporary paper permit (DIC-25). <strong>You have exactly 15 days from the date of arrest to request an Administrative License Revocation (ALR) hearing through the <a href="https://www.dps.texas.gov/section/driver-license/administrative-license-revocation-alr-program" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Texas Department of Public Safety (DPS)</a>.</strong>
                </p>
                <p>
                  If you fail to request this hearing within the 15-day window, your driver&apos;s license will be automatically suspended. Requesting this hearing halts the suspension process until the hearing occurs. Jessica Bernstein represents clients at ALR hearings to cross-examine arresting officers and audit their testimonies.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Challenging the evidence.
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                A DWI arrest is not an automatic conviction. We look for procedural errors, faulty assumptions, and scientific inaccuracies in the state&apos;s evidence:
              </p>

              <div className="my-sm border-l-4 border-accent pl-md italic text-sm text-muted-foreground leading-relaxed bg-muted/20 py-sm pr-sm rounded-r-md">
                &ldquo;In my experience, field sobriety tests are often administered in environments that fail NHTSA standards—making a detailed review of the officer&apos;s dashcam and bodycam footage the single most critical step in a Travis County DWI defense.&rdquo;
                <span className="block font-sans font-semibold text-foreground text-xs mt-xs not-italic">— Attorney Jessica Bernstein</span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-xs">
                <li className="flex items-start gap-xs bg-background border border-border p-sm rounded-md shadow-level-2 text-sm text-muted-foreground">
                  <AlertOctagon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Reasonable Suspicion</strong>
                    Did the officer have a valid legal reason to pull you over, or was it an illegal traffic stop?
                  </div>
                </li>
                <li className="flex items-start gap-xs bg-background border border-border p-sm rounded-md shadow-level-2 text-sm text-muted-foreground">
                  <AlertOctagon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Field Sobriety Audits</strong>
                    Did the officer administer tests (HGN, Walk & Turn, One-Leg Stand) according to NHTSA guidelines?
                  </div>
                </li>
                <li className="flex items-start gap-xs bg-background border border-border p-sm rounded-md shadow-level-2 text-sm text-muted-foreground">
                  <AlertOctagon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Breathalyzer Auditing</strong>
                    Was the Intoxilyzer 9000 machine calibrated and maintained according to state regulations?
                  </div>
                </li>
                <li className="flex items-start gap-xs bg-background border border-border p-sm rounded-md shadow-level-2 text-sm text-muted-foreground">
                  <AlertOctagon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block">Blood Warrants</strong>
                    Were the blood draws handled properly, and did police secure a valid warrant before taking a sample?
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Occupational Driver&apos;s Licenses (ODL).
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                If your license is suspended, we can petition the court for an <Link href="/practice-areas/traffic-tickets" className="text-accent hover:underline font-semibold">Occupational Driver&apos;s License (ODL)</Link>. This is a restricted license that permits you to drive to work, school, and perform essential household tasks. We will compile the petition, represent you in court, and secure the ODL order.
              </p>
            </div>
          </div>

          {/* Sidebar Cards */}
          <div className="lg:col-span-4 flex flex-col gap-md">
            {/* Urgent Warning */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-md shadow-level-2 p-md">
              <div className="flex items-center gap-xs font-serif font-semibold text-destructive mb-xs text-base">
                <AlertOctagon className="h-5 w-5" />
                <span>15-Day License Clock</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Do not lose your driving privileges by default. Contact us within 15 days of your arrest, and we will handle the ALR filing.
              </p>
              <Button asChild variant="destructive" className="w-full mt-sm rounded-sm bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer text-xs py-1.5 shadow-level-2">
                <a href="tel:5128872028">Request ALR filing — Call now</a>
              </Button>
            </div>

            {/* DWI Penalties */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground mb-sm">
                Texas DWI Penalties (1st Offense)
              </h3>
              <ul className="flex flex-col gap-sm text-xs text-muted-foreground">
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Fine:</strong> Up to $2,000 (excluding state fees)</span>
                </li>
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Jail Time:</strong> 3 to 180 days in Travis County Jail</span>
                </li>
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>License Suspension:</strong> 90 days up to 1 year</span>
                </li>
                <li className="flex items-start gap-xs">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Deep Impact:</strong> Permanently visible on standard background checks.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
