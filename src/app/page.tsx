import Link from "next/link"
import Image from "next/image"
import { Shield, Clock, Award, CheckCircle2, Scale, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* 1. HERO SECTION (Soft Canvas background) */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl flex items-center justify-center border-b border-border bg-background" id="hero-section">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-3xl items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-md text-left">
            <div className="inline-flex items-center gap-xs rounded-pill bg-muted px-3 py-1 text-xs font-medium text-muted-foreground w-fit border border-border shadow-level-1">
              <Shield className="h-3.5 w-3.5 text-accent" />
              <span>Austin Criminal Defense Attorney</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground" id="hero-title">
              Austin criminal defense. When everything is on the line.
            </h1>

            <p className="font-sans text-lg sm:text-[18px] sm:leading-[28px] text-muted-foreground max-w-2xl leading-relaxed">
              If you or a loved one are facing criminal charges in Central Texas, every hour matters. We provide aggressive representation, proactive trial strategies, and direct access to your attorney.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-sm mt-xs">
              <Button asChild className="rounded-pill bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-[16px] leading-[24px] px-lg py-3 cursor-pointer shadow-level-2">
                <Link href="/contact">Schedule free consultation</Link>
              </Button>

              <Button asChild variant="outline" className="rounded-pill border-border bg-transparent hover:bg-muted text-foreground font-medium text-[16px] leading-[24px] px-lg py-3 cursor-pointer">
                <Link href="tel:5128872028" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call (512) 887-2028</span>
                </Link>
              </Button>
            </div>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm mt-md pt-md border-t border-border/80">
              <div className="flex items-center gap-xs">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-xs text-muted-foreground">Travis County Court Access</span>
              </div>
              <div className="flex items-center gap-xs">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-xs text-muted-foreground">Affordable financing options</span>
              </div>
              <div className="flex items-center gap-xs">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-xs text-muted-foreground">No additional trial fee. Ever.</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Card */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] rounded-lg overflow-hidden border border-border shadow-level-3">
            <Image
              src="/1549143_orig.jpg"
              alt="Travis County Courthouse in Austin, Texas"
              fill
              priority
              className="object-cover"
              sizes="(max-w-7xl) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-lg text-white">
              <span className="font-serif text-sm tracking-wider uppercase text-accent-foreground font-medium mb-1">Travis County Court</span>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Representing clients directly in local Austin and Central Texas courtrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Pure White background) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-card border-b border-border" id="services-section">
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-xl">
          <div className="text-left max-w-3xl flex flex-col gap-xs">
            <span className="text-xs font-semibold tracking-wider text-accent uppercase">Practice Areas</span>
            <h2 className="font-serif text-3xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
              Austin defense representation. Focused and strategic.
            </h2>
            <p className="font-sans text-[16px] leading-[24px] text-muted-foreground">
              We focus on a selective caseload to ensure each client receives direct attorney communication and a custom-tailored courtroom defense plan.
            </p>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mt-sm">
            {/* DWI */}
            <Card className="flex flex-col h-full bg-background border border-border shadow-level-3 rounded-md hover:translate-y-[-2px] transition-all duration-200 p-6 md:p-8 gap-4 text-left">
              <CardHeader className="p-0 flex flex-col gap-2">
                <div className="h-9 w-9 rounded-sm bg-muted flex items-center justify-center text-foreground">
                  <Scale className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif text-lg font-semibold tracking-tight text-foreground">DWI Defense.</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protect your driver&apos;s license and your clean record. We handle ALR hearings, breath and blood test challenges, and complete DWI trial defense.
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-auto pt-2">
                <Link href="/practice-areas/dwi" className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </CardFooter>
            </Card>

            {/* Jail Release */}
            <Card className="flex flex-col h-full bg-background border border-border shadow-level-3 rounded-md hover:translate-y-[-2px] transition-all duration-200 border-destructive/20 p-6 md:p-8 gap-4 text-left">
              <CardHeader className="p-0 flex flex-col gap-2">
                <div className="h-9 w-9 rounded-sm bg-destructive/10 flex items-center justify-center text-destructive">
                  <Clock className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif text-lg font-semibold tracking-tight text-foreground">Jail Release.</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Secure fast 24-hour jail release. Hiring an attorney bond allows us to waive bond wait times and represent you in court immediately.
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-auto pt-2">
                <Link href="/practice-areas/jail-release" className="text-xs font-medium text-destructive hover:underline inline-flex items-center gap-1">
                  <span>Urgent release info</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </CardFooter>
            </Card>

            {/* Traffic Tickets */}
            <Card className="flex flex-col h-full bg-background border border-border shadow-level-3 rounded-md hover:translate-y-[-2px] transition-all duration-200 p-6 md:p-8 gap-4 text-left">
              <CardHeader className="p-0 flex flex-col gap-2">
                <div className="h-9 w-9 rounded-sm bg-muted flex items-center justify-center text-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif text-lg font-semibold tracking-tight text-foreground">Traffic Tickets.</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Defend CDLs, speeding tickets, and failure to identify citations. Keep points off your record and preserve your professional driving privileges.
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-auto pt-2">
                <Link href="/practice-areas/traffic-tickets" className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </CardFooter>
            </Card>

            {/* Felonies */}
            <Card className="flex flex-col h-full bg-background border border-border shadow-level-3 rounded-md hover:translate-y-[-2px] transition-all duration-200 p-6 md:p-8 gap-4 text-left">
              <CardHeader className="p-0 flex flex-col gap-2">
                <div className="h-9 w-9 rounded-sm bg-muted flex items-center justify-center text-foreground">
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif text-lg font-semibold tracking-tight text-foreground">Felony Defense.</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategic defense against drug offenses, domestic issues, assault, and property crimes. Grand jury representation, expunctions, and non-disclosure files.
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-auto pt-2">
                <Link href="/practice-areas/felonies" className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. POLARITY FLIPPED URGENT JAIL RELEASE BAND (Deep Slate background) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-4xl bg-[#0f172a] text-slate-100 border-b border-border" id="urgent-band">
        <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-xl">
          <div className="max-w-3xl flex flex-col gap-xs text-left">
            <span className="text-xs font-semibold tracking-wider text-destructive uppercase">Jail Release Assistance</span>
            <h2 className="font-serif text-3xl font-semibold tracking-[-1.28px] text-white">
              Under arrest in Travis County? Call now.
            </h2>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              If someone you care about has been arrested in Austin, do not wait for a bail bondsman. We write attorney bonds, meaning we can clear jail release and handle the defense directly. Our jail release line is open 24/7.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-sm w-full md:w-auto">
            <Button asChild variant="destructive" className="rounded-sm bg-destructive text-destructive-foreground hover:bg-destructive/90 px-xl py-4 font-semibold shadow-level-2 cursor-pointer">
              <a href="tel:5128872028" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Call (512) 887-2028</span>
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-sm bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 px-xl py-4 font-medium cursor-pointer">
              <Link href="/practice-areas/jail-release">Jail release process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS & REVIEWS SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background" id="testimonials-section">
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-md text-left">
            <div className="flex flex-col gap-xs max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">Reviews</span>
              <h2 className="font-serif text-3xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
                Honest feedback from our clients.
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-pill border-border bg-transparent text-foreground hover:bg-muted self-start sm:self-auto cursor-pointer">
              <Link href="/reviews">View all reviews</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Review 1 */}
            <div className="bg-white dark:bg-slate-900 border border-border shadow-level-2 p-md rounded-md flex flex-col justify-between min-h-[180px]">
              <p className="text-sm text-foreground leading-relaxed italic">
                &ldquo;Jessica got my DWI charge dismissed in Travis County. She kept me updated at every stage of the case and was always available to answer my calls. I highly recommend her.&rdquo;
              </p>
              <div className="mt-md pt-sm border-t border-border/60 flex justify-between items-center">
                <span className="text-xs font-semibold text-foreground">M. Davis, Austin TX</span>
                <span className="text-xs text-accent font-serif font-medium">5.0 Star Google Review</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white dark:bg-slate-900 border border-border shadow-level-2 p-md rounded-md flex flex-col justify-between min-h-[180px]">
              <p className="text-sm text-foreground leading-relaxed italic">
                &ldquo;When my brother was arrested, Jessica was able to get him released from custody within hours through an attorney bond. She immediately took over his case and got a great result.&rdquo;
              </p>
              <div className="mt-md pt-sm border-t border-border/60 flex justify-between items-center">
                <span className="text-xs font-semibold text-foreground">S. Rodriguez, Round Rock</span>
                <span className="text-xs text-accent font-serif font-medium">5.0 Star Avvo Review</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white dark:bg-slate-900 border border-border shadow-level-2 p-md rounded-md flex flex-col justify-between min-h-[180px]">
              <p className="text-sm text-foreground leading-relaxed italic">
                &ldquo;Professional, direct, and aggressive in court. Jessica handled my felony possession charge and worked out a dismissal. She saved my professional career.&rdquo;
              </p>
              <div className="mt-md pt-sm border-t border-border/60 flex justify-between items-center">
                <span className="text-xs font-semibold text-foreground">R. Carter, Austin TX</span>
                <span className="text-xs text-accent font-serif font-medium">5.0 Star Google Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 RECENT CASE OUTCOMES SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-muted border-t border-b border-border" id="recent-results-section">
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-md text-left">
            <div className="flex flex-col gap-xs max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">Track Record</span>
              <h2 className="font-serif text-3xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
                Recent court victories. Proven defense.
              </h2>
              <p className="font-sans text-[16px] leading-[24px] text-muted-foreground">
                A selection of recent dismissals, reductions, and favorable resolutions achieved for clients in Austin and Travis County courtrooms.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-pill border-border bg-transparent text-foreground hover:bg-muted self-start sm:self-auto cursor-pointer">
              <Link href="/results" className="flex items-center gap-1">
                <span>View all case results</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Outcome 1 */}
            <div className="bg-background border border-border shadow-level-3 p-md rounded-md flex flex-col justify-between text-left">
              <div className="flex flex-col gap-xs">
                <div className="flex items-center justify-between gap-sm mb-xxs">
                  <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Travis County Court at Law</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    DISMISSED
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold tracking-tight text-foreground">
                  DWI — 2nd Offense.
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-xxs">
                  Blood test reported BAC of 0.17. We challenged the detention scope past the traffic stop, obtaining a dismissal prior to the suppression hearing.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="bg-background border border-border shadow-level-3 p-md rounded-md flex flex-col justify-between text-left">
              <div className="flex flex-col gap-xs">
                <div className="flex items-center justify-between gap-sm mb-xxs">
                  <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Travis County District Court</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    NO BILL (DISMISSED)
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold tracking-tight text-foreground">
                  Felony Drug Possession.
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-xxs">
                  Faced up to 10 years in prison. We audited the warrant affidavit for material falsehoods, resulting in a grand jury refusal to indict.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="bg-background border border-border shadow-level-3 p-md rounded-md flex flex-col justify-between text-left">
              <div className="flex flex-col gap-xs">
                <div className="flex items-center justify-between gap-sm mb-xxs">
                  <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Travis County Court at Law</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    CASE DISMISSED
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold tracking-tight text-foreground">
                  Assault Family Violence.
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-xxs">
                  Presented comprehensive self-defense evidence and witness statements directly to prosecutors, securing a full dismissal of all charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINANCING CALLOUT (Level 4 float shadow and Soft Canvas bg) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-muted border-t border-border" id="financing-cta">
        <div className="mx-auto max-w-5xl bg-card border border-border rounded-lg shadow-level-4 p-lg sm:p-2xl flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="flex flex-col gap-xs text-left max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
              Accessible legal defense. Clear payment plans.
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              We offer flat-rate pricing and flexible payment options through LawPay and Affirm. You can spread the cost of your retainer over monthly installments.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-sm w-full sm:w-auto">
            <Button asChild className="rounded-pill bg-primary text-primary-foreground hover:bg-primary/90 px-xl py-3 font-semibold shadow-level-2 cursor-pointer">
              <Link href="/financing">View financing options</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-pill hover:bg-muted text-muted-foreground hover:text-foreground font-medium text-xs py-2 cursor-pointer">
              <a href="https://secure.lawpay.com/pages/law-office-of-jessica-bernstein/operating" target="_blank" rel="noopener noreferrer">
                Access client portal
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
