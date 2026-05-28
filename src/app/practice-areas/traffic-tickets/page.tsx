import Link from "next/link"
import { FileText, CheckCircle2, ArrowLeft, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Traffic Ticket Defense Attorney Austin, TX",
  description: "Defend your driving record and CDL. Austin traffic ticket lawyer Jessica Bernstein represents drivers facing speeding tickets, CDL issues, and warrants.",
  alternates: {
    canonical: "https://atxcrimdefense.com/practice-areas/traffic-tickets",
  },
}

export default function TrafficTicketsPage() {
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
            Traffic ticket defense.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Protect your commercial driver&apos;s license, keep points off your driving record, and resolve traffic warrants in Austin and surrounding municipalities.
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
                Keep points off your license and prevent high insurance rates.
              </h2>
              <div className="font-sans text-[16px] leading-[24px] text-muted-foreground flex flex-col gap-md">
                <p>
                  Paying a traffic ticket in Texas is a plea of guilty. This results in an automatic conviction on your driving record. Convictions lead to points, surcharges, and increased insurance premiums. For commercial drivers, a single ticket can threaten your career.
                </p>
                <p>
                  Jessica Bernstein handles citations directly in Austin Municipal Court, Travis County Justice of the Peace courts, and surrounding municipalities. We argue to get tickets dismissed, deferred, or reduced to non-moving violations.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Commercial Driver&apos;s License (CDL) protection.
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-muted-foreground">
                CDL holders are subject to strict driving regulations. You are not eligible for standard deferred adjudication or defensive driving courses to dismiss a ticket. We represent professional drivers to dispute citations in court, auditing speed measurements (Lidar/Radar calibrations) and challenging officer observations.
              </p>

              <div className="my-sm border-l-4 border-accent pl-md italic text-sm text-muted-foreground leading-relaxed bg-muted/20 py-sm pr-sm rounded-r-md">
                &ldquo;Paying a traffic ticket is a voluntary guilty plea that stays on your driving record permanently. For commercial drivers (CDL), our goal is always to keep the citation off the record completely to preserve their livelihood.&rdquo;
                <span className="block font-sans font-semibold text-foreground text-xs mt-xs not-italic">— Attorney Jessica Bernstein</span>
              </div>
            </div>

            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Resolving outstanding traffic warrants.
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-muted-foreground">
                If you have an unpaid ticket that went past its deadline, a warrant has likely been issued for your arrest, and your license may be suspended under the OmniBase system. We can post attorney surety bonds to lift warrants immediately, allow you to clear license holds, and represent you on the underlying citations. You can check your active suspension details and requirements directly on the <a href="https://www.dps.texas.gov/section/driver-license/faq/section-4-license-eligibility-compliance-and-reinstatement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Texas DPS License Eligibility Portal</a>.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-md">
            {/* Quick Actions */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground mb-sm">
                Common Tickets We Defend
              </h3>
              <ul className="flex flex-col gap-sm text-xs text-muted-foreground">
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Speeding (Including construction zones)</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Reckless driving & lane changes</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Driving while license suspended (DWLI)</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Failure to present ID / sign citations</span>
                </li>
                <li className="flex items-start gap-xs">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>CDL logbook and weight violations</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-lg rounded-pill bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs py-2 shadow-level-2 cursor-pointer">
                <Link href="/contact">Defend your ticket</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
