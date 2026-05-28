import Link from "next/link"
import { Scale, Clock, ShieldAlert, FileText, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Criminal Defense Practice Areas | Austin, TX",
  description: "Browse the criminal defense services offered by Jessica Bernstein, including DWI defense, 24-hour attorney bonds, and pre-indictment grand jury representation.",
  alternates: {
    canonical: "https://atxcrimdefense.com/practice-areas",
  },
  openGraph: {
    title: "Criminal Defense Practice Areas | Austin, TX",
    description: "Browse the criminal defense services offered by Jessica Bernstein, including DWI defense, 24-hour attorney bonds, and pre-indictment grand jury representation.",
    url: "/practice-areas",
  },
}

const SERVICES = [
  {
    href: "/practice-areas/dwi",
    title: "DWI & DUI Defense.",
    description: "In Texas, a DWI carries severe penalties, including license suspension, fines, and jail time. We represent clients at ALR hearings to protect driving privileges and audit blood/breath tests for structural errors.",
    icon: Scale,
    btnText: "DWI defense strategies",
  },
  {
    href: "/practice-areas/jail-release",
    title: "24-Hour Jail Release.",
    description: "If a loved one is arrested in Travis County, we can bypass bondsmen delays. Jessica Bernstein writes attorney bonds to secure immediate jail release and handles the criminal defense concurrently.",
    icon: Clock,
    btnText: "Urgent jail release info",
    urgent: true,
  },
  {
    href: "/practice-areas/felonies",
    title: "Felonies & Misdemeanors.",
    description: "Aggressive defense against a range of criminal charges including drug possession, assault, domestic issues, grand jury investigations, expunctions, and non-disclosure requests.",
    icon: ShieldAlert,
    btnText: "Felony defense details",
  },
  {
    href: "/practice-areas/traffic-tickets",
    title: "Traffic Tickets & CDL Protection.",
    description: "Keep points off your license. We defend speeding tickets, failure to yield, CDL citations, and assist in obtaining Occupational Driver's Licenses (ODL) if your license has been suspended.",
    icon: FileText,
    btnText: "Traffic ticket resolution",
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Legal representation</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            Our defense practice areas.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Focused, experienced advocacy in Austin courtrooms. We investigate cases, suppress faulty evidence, and protect your clean record.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <Card 
                  key={service.href} 
                  className={`flex flex-col justify-between bg-background border border-border rounded-md shadow-level-3 hover:translate-y-[-2px] transition-all duration-200 p-6 md:p-8 gap-4 text-left ${
                    service.urgent ? "border-destructive/20 ring-1 ring-destructive/10" : ""
                  }`}
                >
                  <CardHeader className="p-0 flex flex-col gap-2">
                    <div className={`h-10 w-10 rounded-sm flex items-center justify-center ${
                      service.urgent ? "bg-destructive/10 text-destructive" : "bg-muted text-foreground"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="font-serif text-xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0 mt-auto pt-2">
                    <Link 
                      href={service.href} 
                      className={`text-sm font-medium hover:underline inline-flex items-center gap-1.5 ${
                        service.urgent ? "text-destructive" : "text-accent"
                      }`}
                    >
                      <span>{service.btnText}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Immediate Call To Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-background border-b border-border">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-md">
          <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
            Do not speak to investigators. Get legal advice first.
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-2xl leading-relaxed">
            In any criminal inquiry, everything you say will be parsed by prosecutors. Contact our office immediately to defend your rights and ensure your interests are represented.
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
              <Clock className="h-4 w-4 text-accent" />
              <span>Call (512) 887-2028</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
