import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ArrowLeft } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Travis County Criminal Defense Blog & Legal Guides | Austin, TX",
  description: "Read informative, plain-English legal guides on Austin jail release processes, blood test search warrants, and grand jury packets by Attorney Jessica Bernstein.",
  alternates: {
    canonical: "https://atxcrimdefense.com/blog",
  },
  openGraph: {
    title: "Travis County Criminal Defense Blog & Legal Guides | Austin, TX",
    description: "Read informative, plain-English legal guides on Austin jail release processes, blood test search warrants, and grand jury packets by Attorney Jessica Bernstein.",
    url: "/blog",
  },
}

const POSTS = [
  {
    slug: "how-to-get-someone-out-of-travis-county-jail",
    title: "How to get someone out of jail in Travis County: The attorney bond advantage.",
    category: "Jail Release Guide",
    summary: "Securing a jail release in Travis County requires either waiting for a magistrate to set bail or hiring a criminal defense attorney to write an attorney bond. An attorney bond is the fastest method to secure release because it bypasses the magistrate queue, while applying the bond fee directly toward your overall legal representation.",
    date: "May 28, 2026",
  },
  {
    slug: "travis-county-dwi-blood-tests",
    title: "Travis County DWI blood tests: Challenging the evidence in Austin.",
    category: "DWI Defense Guide",
    summary: "Challenging a Travis County DWI blood test involves auditing the 15-day ALR hearing deadline, testing the calibration records of the gas chromatograph at the Austin DPS lab, and identifying constitutional violations in the blood warrant. Defending a DWI charge starts with attacking the scientific integrity and police procedures of the blood draw itself.",
    date: "May 28, 2026",
  },
  {
    slug: "travis-county-grand-jury-felony-defense",
    title: "Defending Austin felony charges: The power of the Travis County grand jury packet.",
    category: "Felony Defense Guide",
    summary: "In Texas, felony charges must be presented to a grand jury for indictment, usually within a 3-month window from arrest. Hiring an Austin felony defense lawyer allows you to submit a grand jury packet—a collection of mitigation evidence—to persuade the grand jury to issue a \"No Bill,\" dismissing the charges before indictment.",
    date: "May 28, 2026",
  },
]

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Top navigation helper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-md">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to home</span>
        </Link>
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Title Section */}
        <div className="text-left max-w-3xl flex flex-col gap-xs mb-xl">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">Legal Resources</span>
          <h1 className="font-serif text-4xl sm:text-[48px] sm:leading-[48px] font-semibold tracking-[-2.4px] text-foreground mb-sm">
            Legal guides & resources.
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Read plain-English legal guides and news on criminal defense, jail release procedures, and Texas grand juries from the Law Office of Jessica Bernstein.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {POSTS.map((post) => (
            <Card 
              key={post.slug} 
              className="flex flex-col h-full bg-card border border-border shadow-level-3 rounded-md hover:translate-y-[-2px] transition-all duration-200 p-6 md:p-8 gap-4 text-left"
            >
              <CardHeader className="p-0 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-sm">
                  <span className="text-xs font-semibold tracking-wider text-accent uppercase font-serif">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <CardTitle className="font-serif text-lg font-semibold tracking-tight text-foreground line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {post.summary}
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-auto pt-2">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-xs font-medium text-foreground hover:text-accent hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read full guide</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
