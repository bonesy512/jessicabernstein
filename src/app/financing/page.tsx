import Link from "next/link"
import { CreditCard, ShieldCheck, Wallet, BadgeAlert, ArrowUpRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Payment Plans & Financing | Criminal Defense Austin",
  description: "We offer affordable flat-rate legal fees and flexible financing options. Split your retainer into monthly payments via LawPay and Affirm.",
  alternates: {
    canonical: "https://atxcrimdefense.com/financing",
  },
}

const FAQS = [
  {
    question: "How do payment plans work at your firm?",
    answer: "We partner with LawPay and Affirm to offer flexible client financing. When you choose to pay through Affirm, they will pay our firm the full retainer amount upfront to start working on your case, while you pay Affirm back in monthly installments. We also accept standard client-funded monthly payment plans on a case-by-case basis.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, and Discover), debit cards, e-checks/ACH, bank wire transfers, cash, and financing through Affirm.",
  },
  {
    question: "Do you charge flat fees or hourly rates?",
    answer: "For criminal defense representation (such as DWIs, misdemeanors, and felonies) and traffic ticket defense, we charge transparent flat fees. This means you will know the exact cost of your representation upfront, with no unexpected hourly bills, phone call charges, or travel expenses.",
  },
  {
    question: "Is there a penalty for paying off my Affirm plan early?",
    answer: "No, there are no prepayment penalties or hidden fees with Affirm. You can pay off your balance early to reduce any accrued interest.",
  },
  {
    question: "Can I use a credit card belonging to a family member?",
    answer: "Yes, family members can pay your legal fees. We require the cardholder to sign a third-party payment authorization form, which can be completed securely online via our LawPay portal.",
  },
]

export default function FinancingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Legal Fees</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            Payment plans & financing.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            We believe high-quality criminal defense should be accessible. We offer transparent flat-rate pricing and flexible monthly payment plans.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-3xl items-start">
          
          {/* Main Info (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-lg text-left">
            <h2 className="font-serif text-2xl sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-1.28px] text-foreground">
              Defense you need, on terms you can afford.
            </h2>
            
            <div className="font-sans text-[16px] leading-[24px] text-muted-foreground flex flex-col gap-md">
              <p>
                Legal fees can be a sudden, unplanned expense. To ensure you can secure experienced legal representation immediately when facing charges, we partner with **LawPay** and **Affirm** to offer structured client financing options.
              </p>
              <p>
                Our payment plans allow you to split your retainer into manageable monthly payments. During your free consultation, we will assess your case, quote a transparent flat fee, and walk you through the signup process.
              </p>
            </div>

            {/* Visual Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-sm">
              <div className="flex items-start gap-xs bg-background border border-border p-md rounded-md shadow-level-2">
                <CreditCard className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-xxs text-left">
                  <span className="font-serif font-bold text-sm text-foreground">All Cards Accepted</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Pay securely using Visa, MasterCard, Amex, Discover, or e-checks directly via our encrypted online portal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-xs bg-background border border-border p-md rounded-md shadow-level-2">
                <Wallet className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-xxs text-left">
                  <span className="font-serif font-bold text-sm text-foreground">Affirm Payment Plans</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Check your eligibility in seconds without affecting your credit score, and select a 3, 6, or 12-month payment option.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Section */}
            <div className="flex flex-col gap-sm mt-lg">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-accent" />
                <span>Frequently asked questions.</span>
              </h3>
              
              <Accordion type="single" collapsible className="w-full mt-xs">
                {FAQS.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                    <AccordionTrigger className="font-serif font-semibold text-sm hover:no-underline text-foreground hover:text-accent text-left py-md">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-md">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar / CTA Cards (Right Column - Level 4 floating shadow) */}
          <div className="lg:col-span-5 flex flex-col gap-md">
            {/* Pay Portal Card */}
            <div className="bg-background border border-border rounded-md shadow-level-4 p-md flex flex-col gap-sm text-left">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
                Client Payment Portal
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If you are an existing client and wish to make a payment or complete your retainer setup, click below to open our secure LawPay portal.
              </p>
              
              <div className="flex flex-col gap-xs mt-xs">
                <Button asChild className="w-full rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs py-2 shadow-level-2 cursor-pointer">
                  <a 
                    href="https://secure.lawpay.com/pages/law-office-of-jessica-bernstein/operating" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <span>Secure Payment Portal</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <div className="text-[10px] text-muted-foreground text-center">
                  Payments are processed securely via SSL-encrypted legal standards.
                </div>
              </div>
            </div>

            {/* Retainer Note */}
            <div className="bg-muted border border-border rounded-md shadow-level-2 p-md flex items-start gap-sm">
              <BadgeAlert className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-xxs text-left">
                <span className="font-serif font-bold text-xs text-foreground">Retainer Policy</span>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We cannot begin active court representation, file motions, or write bonds until a formal retainer agreement is signed and the deposit/retainer is paid in full.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
