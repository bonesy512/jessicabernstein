import Link from "next/link"
import { Scale, CheckCircle2, Award, Clock, ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Case Results & Court Victories | Austin Criminal Lawyer",
  description: "Review recent criminal defense case outcomes and court dismissals achieved by Austin attorney Jessica Bernstein. DWI, felonies, and misdemeanor wins.",
  alternates: {
    canonical: "https://atxcrimdefense.com/results",
  },
}

const RESULTS_LIST = [
  {
    charge: "DWI — 2nd Offense",
    court: "Travis County Court at Law",
    details: "Blood test reported BAC of 0.17. We filed a motion to suppress based on illegal detention past the scope of the traffic stop. State dismissed charges prior to hearing.",
    outcome: "DISMISSED",
  },
  {
    charge: "Felony Possession of Controlled Substance",
    court: "Travis County District Court",
    details: "Client faced 2-10 years in state prison. We audited the police search warrant affidavit and demonstrated material falsehoods in the probable cause description.",
    outcome: "DISMISSED BY GRAND JURY (NO BILL)",
  },
  {
    charge: "Assault Bodily Injury — Family Violence",
    court: "Travis County Court at Law",
    details: "Allegations of physical altercation. We conducted an independent investigation, compiled statements showing self-defense, and negotiated complete rejection of prosecution.",
    outcome: "CASE DISMISSED",
  },
  {
    charge: "Commercial Driver (CDL) — Speeding 18 MPH Over",
    court: "Austin Municipal Court",
    details: "Speeding ticket threatened client's commercial driving career. We audited the lidar calibration records and worked out deferred adjudication to keep record clean.",
    outcome: "DISMISSED VIA DEFERRAL",
  },
  {
    charge: "Misdemeanor Theft (Value $750 - $2,500)",
    court: "Travis County Court at Law",
    details: "Accusations of shoplifting. We secured client's entry into a pretrial diversion program, resulting in dismissal and immediate eligibility for arrest record expunction.",
    outcome: "DISMISSED (EXPUNCTION READY)",
  },
  {
    charge: "Felony Aggravated Assault with Deadly Weapon",
    court: "Travis County District Court",
    details: "Charge carries up to 20 years in prison. We presented comprehensive exculpatory evidence to the grand jury showing a lack of intent, obtaining a dismissal.",
    outcome: "NO BILL",
  },
]

export default function ResultsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Back link */}
      <div className="px-4 sm:px-6 lg:px-8 pt-md mx-auto max-w-7xl w-full text-left">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Track Record</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            Our recent case outcomes.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Review anonymized criminal defense victories achieved for clients in Austin and surrounding Travis County courtrooms. Prior outcomes do not guarantee future success.
          </p>
        </div>
      </section>

      {/* Results List Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {RESULTS_LIST.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-background border border-border p-lg rounded-md shadow-level-3 text-left"
              >
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center justify-between gap-sm mb-xxs">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{item.court}</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {item.outcome}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                    {item.charge}.
                  </h3>

                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-xxs">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-background border-b border-border">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-md">
          <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
            Discuss your case with Jessica Bernstein.
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Every case is unique. Contact us today to discuss your charges, evaluate the evidence, and map out a strategic legal defense plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm mt-xs">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-pill bg-primary text-primary-foreground hover:bg-primary/90 px-xl py-3 font-semibold shadow-level-2 text-sm"
            >
              Request Free Consultation
            </Link>
            <a
              href="tel:5128872028"
              className="inline-flex items-center justify-center rounded-pill border border-border bg-transparent text-foreground hover:bg-muted px-xl py-3 font-medium text-sm gap-2"
            >
              <span>Call (512) 887-2028</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
