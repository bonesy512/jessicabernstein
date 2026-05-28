import Link from "next/link"
import Script from "next/script"
import { Star, ArrowUpRight, ShieldCheck, Heart, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Client Reviews & Testimonials",
  description: "Read reviews from former clients of criminal defense attorney Jessica Bernstein. Verified reviews from Google and Avvo.",
  alternates: {
    canonical: "https://atxcrimdefense.com/reviews",
  },
}

const STATIC_REVIEWS = [
  {
    author: "James M.",
    text: "Jessica Bernstein is an outstanding attorney. I was arrested for a DWI in Austin, and she took charge immediately. Her attorney bond got me out of jail quickly, and she eventually secured a dismissal. She saved my driver's license and kept my record clean.",
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Linda T.",
    text: "When my daughter was arrested, we were in a complete panic. We called Jessica in the middle of the night, and she was calm, reassuring, and extremely professional. She wrote the bond and had my daughter home by morning. She fought hard in court and got the charges reduced.",
    rating: 5,
    source: "Avvo Review",
  },
  {
    author: "Marcus K.",
    text: "Professional, direct, and aggressive. Jessica represents you directly—no junior associates. She managed my felony drug charge with extreme strategic care, spotting errors in the police arrest warrant that forced the prosecutor to dismiss the case. I am forever grateful.",
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Sofia R.",
    text: "Jessica saved my CDL. I received a speeding citation in Travis County that would have cost me my job. She went to court for me, found calibration issues with the officer's radar, and got the ticket deferred. Worth every penny.",
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Brian O.",
    text: "Excellent communication. Jessica always answered my texts and calls, even on weekends. She walked me through the court process step-by-step and resolved my misdemeanor charges without any jail time or permanent conviction.",
    rating: 5,
    source: "Avvo Review",
  },
]

export default function ReviewsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* 1. Script Injections */}
      {/* Avvo Badges Script */}
      <Script 
        src="https://www.avvo.com/assets/badges-v2.js" 
        strategy="afterInteractive" 
      />
      {/* Google Review Widget Script */}
      <Script 
        src="https://grwapi.net/widget.min.js" 
        strategy="afterInteractive" 
      />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl sm:py-5xl bg-background border-b border-border">
        <div className="mx-auto max-w-7xl text-left flex flex-col gap-xs">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Testimonials</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground">
            Client reviews & ratings.
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl leading-relaxed mt-xs">
            Read verified feedback from individuals we have represented in Austin. Our goal is absolute legal excellence and client-first communication.
          </p>
        </div>
      </section>

      {/* Reviews Main Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4xl bg-card border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-3xl items-start">
          
          {/* Static Written Reviews (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-md text-left">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-xs">
              Verified client testimonials.
            </h2>
            
            <div className="flex flex-col gap-md">
              {STATIC_REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-background border border-border rounded-md shadow-level-2 p-md">
                  <div className="flex items-center gap-1 mb-xs text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs font-medium text-foreground">
                    <span>— {review.author}</span>
                    <span className="text-accent font-serif">{review.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Widgets & Profile Links (Right Column - FORCED LIGHT STYLE) */}
          <div className="lg:col-span-4 flex flex-col gap-md">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-xs text-left">
              Live widgets.
            </h2>

            {/* Direct Profiles Card */}
            <div className="bg-background border border-border rounded-md shadow-level-2 p-md flex flex-col gap-sm text-left">
              <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
                Direct Profiles
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click below to view our complete profile histories and leave direct feedback:
              </p>
              <div className="flex flex-col gap-xs mt-xs">
                <a
                  href="https://reviewthis.biz/lawoffice-jessicabernstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline flex items-center justify-between border border-border p-sm rounded-md hover:bg-muted"
                >
                  <span>Google Reviews Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
                <a
                  href="https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline flex items-center justify-between border border-border p-sm rounded-md hover:bg-muted"
                >
                  <span>Avvo Professional Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Google Review Widget - FORCED LIGHT THEMED CARD */}
            <div className="bg-white dark:bg-slate-100 border border-slate-200 dark:border-slate-300 shadow-level-3 p-md rounded-md flex flex-col items-center justify-center text-slate-900">
              <h3 className="font-serif text-xs font-semibold tracking-wider uppercase text-slate-950 mb-md">
                Live Google Review Feed
              </h3>
              
              <div className="w-full text-center py-2 min-h-[160px]">
                {/* Embedded Widget */}
                <div 
                  className="review-widget_net mx-auto text-slate-900" 
                  data-uuid="38b47d71-a483-4678-a5d2-caf138ef3541" 
                  data-template="9" 
                  data-filter="" 
                  data-lang="en" 
                  data-theme="light"
                >
                  <center>
                    <a href="https://www.review-widget.net/" target="_blank" rel="noopener">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://grwapi.net/assets/spinner/spin.svg" title="Google Review Widget" alt="Review Widget" className="mx-auto" />
                    </a>
                  </center>
                </div>
              </div>
            </div>

            {/* Avvo Badges - FORCED LIGHT THEMED CARD */}
            <div className="bg-white dark:bg-slate-100 border border-slate-200 dark:border-slate-300 shadow-level-3 p-md rounded-md flex flex-col gap-md items-center justify-center text-slate-900">
              <h3 className="font-serif text-xs font-semibold tracking-wider uppercase text-slate-950 text-center">
                Avvo Ratings & Badges
              </h3>
              
              {/* Badge 1: Rating */}
              <div className="w-full flex justify-center py-1 min-h-[80px]">
                <div 
                  className="avvo_badge" 
                  data-type="rating" 
                  data-specialty="55" 
                  data-target="https://www.avvo.com/professional_badges/4093085" 
                  data-version="1"
                >
                  <div className="avvo_content">
                    <a rel="me" target="_blank" href="https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html?utm_campaign=avvo_rating&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo" className="text-slate-700 hover:text-slate-900 hover:underline text-xs">
                      Lawyer Jessica Bernstein
                    </a> | 
                    <a target="_blank" href="https://www.avvo.com/criminal-defense-lawyer/tx/austin.html?utm_campaign=avvo_rating&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo" className="text-slate-700 hover:text-slate-900 hover:underline text-xs">
                      Featured Attorney Criminal Defense
                    </a>
                  </div>
                </div>
              </div>

              {/* Badge 2: Reviews */}
              <div className="w-full flex justify-center py-1 min-h-[80px]">
                <div 
                  className="avvo_badge" 
                  data-type="reviews" 
                  data-specialty="55" 
                  data-target="https://www.avvo.com/professional_badges/4093085"
                >
                  <div className="avvo_content">
                    <a rel="me" target="_blank" href="https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html?utm_campaign=avvo_review_badge&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo" className="text-slate-700 hover:text-slate-900 hover:underline text-xs">
                      Lawyer Jessica Bernstein
                    </a> | 
                    <a target="_blank" href="https://www.avvo.com/criminal-defense-lawyer/tx/austin.html?utm_campaign=avvo_review_badge&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo" className="text-slate-700 hover:text-slate-900 hover:underline text-xs">
                      Lawyer Criminal Defense
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
