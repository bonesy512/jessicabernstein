import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Austin Defense Attorney Jessica Bernstein",
  description: "Schedule a free legal consultation or request 24-hour jail release. Get direct attorney representation. Call (512) 887-2028.",
  alternates: {
    canonical: "https://atxcrimdefense.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
