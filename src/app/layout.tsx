import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jbernstein.vercel.app/"),
  title: {
    default: "Law Office of Jessica Bernstein | Austin Criminal Defense Lawyer",
    template: "%s | Law Office of Jessica Bernstein"
  },
  description: "Experienced Austin criminal defense attorney specializing in DWI defense, traffic tickets, felonies, and 24-hour Travis County jail release. Call (512) 887-2028 today.",
  keywords: ["Austin Criminal Defense Attorney", "Jessica Bernstein Lawyer", "Austin DWI Defense", "Traffic Tickets Austin", "Travis County Jail Release", "Criminal Lawyer Austin"],
  openGraph: {
    title: "Law Office of Jessica Bernstein | Austin Criminal Defense Lawyer",
    description: "Experienced Austin criminal defense attorney specializing in DWI defense, traffic tickets, felonies, and 24-hour Travis County jail release.",
    url: "https://atxcrimdefense.com",
    siteName: "Law Office of Jessica Bernstein",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/1549143_orig.jpg",
        width: 1200,
        height: 630,
        alt: "Law Office of Jessica Bernstein - Austin Criminal Defense",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Office of Jessica Bernstein | Austin Criminal Defense Lawyer",
    description: "Experienced Austin criminal defense attorney specializing in DWI defense, traffic tickets, felonies, and 24-hour Travis County jail release.",
    images: ["/1549143_orig.jpg"],
  },
  alternates: {
    canonical: "https://atxcrimdefense.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Law Office of Jessica Bernstein",
  "image": "https://atxcrimdefense.com/jbernstein.jpg",
  "url": "https://atxcrimdefense.com",
  "telephone": "+1-512-887-2028",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "48"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "820 W 10th St.",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.2730",
    "longitude": "-97.7490"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/atxcrimdefense",
    "https://www.instagram.com/atx_criminal_defense",
    "https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="w-full min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
