import Link from "next/link"
import { Clock, Phone, AlertTriangle, ArrowLeft, ShieldAlert, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "24-Hour Jail Release Attorney Austin, TX",
  description: "Get someone out of Travis County Jail. 24/7 jail release bonds written by Austin criminal defense attorney Jessica Bernstein. Call (512) 887-2028.",
  alternates: {
    canonical: "https://atxcrimdefense.com/practice-areas/jail-release",
  },
}

export default function JailReleasePage() {
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
          <span className="text-xs font-semibold tracking-wider text-destructive uppercase font-serif">Urgent Assistance</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            24-Hour jail release in Austin.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Is a family member or friend locked up in Travis County Jail? We write attorney bonds to secure immediate release, bypassing traditional bondsmen waiting times.
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
                How attorney-backed jail release works.
              </h2>
              <div className="font-sans text-[16px] leading-[24px] text-muted-foreground flex flex-col gap-md">
                <p>
                  When someone is arrested in Austin, they are taken to the Travis County Jail (located in downtown Austin at 509 W 11th St. or the Del Valle facility). Normally, they must wait in a holding cell until a magistrate judge sets their bond—a process that can take up to 12 to 24 hours.
                </p>
                <p>
                  <strong>By hiring a criminal defense attorney to write an attorney bond, we can bypass this delay.</strong> We can submit a bond application directly to a judge, obtain their signature, and secure their release from custody, often saving hours of holding cell time.
                </p>
              </div>
            </div>

            {/* Comparison */}
            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Why use an Attorney Bond instead of a Bail Bondsman?
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Using an attorney bond has significant legal and financial advantages over traditional commercial bail bonds:
              </p>

              <div className="my-sm border-l-4 border-destructive/80 pl-md italic text-sm text-muted-foreground leading-relaxed bg-destructive/5 py-sm pr-sm rounded-r-md">
                &ldquo;Bypassing the magistrate backlog is the primary reason to use an attorney bond. We can contact judges directly to sign release orders, saving families hours of agonizing wait time in holding.&rdquo;
                <span className="block font-sans font-semibold text-foreground text-xs mt-xs not-italic">— Attorney Jessica Bernstein</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mt-xs">
                <div className="bg-background border border-border p-md rounded-md shadow-level-2 flex flex-col gap-xs">
                  <span className="font-serif font-bold text-accent text-sm">1. Double-Duty Funds</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A commercial bondsman charges a non-refundable 10-15% fee that goes strictly to their profit. An attorney bond fee is applied directly toward your legal defense representation. You secure release AND hire your lawyer simultaneously.
                  </p>
                </div>
                <div className="bg-background border border-border p-md rounded-md shadow-level-2 flex flex-col gap-xs">
                  <span className="font-serif font-bold text-accent text-sm">2. Speed of Release</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Commercial bondsmen must wait until a magistrate sets the bond amount. As attorneys, we can contact judges immediately to get bonds signed, avoiding magistrate backlogs.
                  </p>
                </div>
              </div>
            </div>

            {/* Step by Step Timeline */}
            <div className="flex flex-col gap-sm mt-sm">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                The jail release timeline.
              </h3>
              <ol className="flex flex-col gap-md mt-xs relative border-l border-border pl-md ml-xs">
                <li className="relative">
                  <div className="absolute h-3 w-3 bg-destructive rounded-full -left-[23px] top-1.5" />
                  <span className="font-serif font-semibold text-foreground text-sm block">Step 1: Contact Us Immediately</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Call our jail release line at (512) 887-2028. We will search the <a href="https://www.tcsheriff.org/inmate-jail-info/inmate-search" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Travis County Inmate Locator</a>, pull the booking records, confirm the arrest details, and check if bonds have been set.
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute h-3 w-3 bg-accent rounded-full -left-[23px] top-1.5" />
                  <span className="font-serif font-semibold text-foreground text-sm block">Step 2: Bond Compilation</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We compile the personal history details, background checks, and submit the attorney bond papers directly to a Travis County judge for signing.
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute h-3 w-3 bg-accent rounded-full -left-[23px] top-1.5" />
                  <span className="font-serif font-semibold text-foreground text-sm block">Step 3: Judicial Signature & Release</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Once the judge signs the bond order, we deliver it to the jailer. The jail will process the paperwork and release the individual (typically takes 2-4 hours).
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-md">
            {/* Urgent Phone Card */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-md shadow-level-3 p-md flex flex-col gap-sm">
              <div className="flex items-center gap-xs font-serif font-semibold text-destructive text-base">
                <AlertTriangle className="h-5 w-5 animate-pulse" />
                <span>Urgent 24/7 Jail Line</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If someone is currently booked in the Travis County Jail, call us immediately. Do not pay a bondsman.
              </p>
              <Button asChild variant="destructive" className="w-full rounded-sm bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer text-sm py-2 shadow-level-2">
                <a href="tel:5128872028" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call (512) 887-2028</span>
                </a>
              </Button>
            </div>

            {/* Austin Jail Locations */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md flex flex-col gap-sm">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
                Travis County Jail Info
              </h3>
              <div className="text-xs text-muted-foreground leading-relaxed flex flex-col gap-xs">
                <p>
                  <strong>Travis County Jail (Central Booking)</strong><br />
                  509 W 11th St. Austin, TX 78701<br />
                  Phone: (512) 854-4180
                </p>
                <p>
                  <strong>Travis County Correctional Complex (TCCC)</strong><br />
                  3614 Bill Price Rd. Del Valle, TX 78617<br />
                  Phone: (512) 854-4180
                </p>
                <div className="pt-xs border-t border-border/50">
                  <a href="https://www.tcsheriff.org/inmate-jail-info/inmate-search" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium block">
                    TCSO Inmate Search Tool &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
