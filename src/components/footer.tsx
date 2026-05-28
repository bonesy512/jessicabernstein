import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Shield } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-card text-card-foreground transition-colors duration-200" id="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Narrative */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Jessica Bernstein<span className="text-destructive font-bold">.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Austin-based criminal defense lawyer providing aggresive court advocacy and compassionate client care. Committed to protecting your record, license, and freedom.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/atxcrimdefense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/atx_criminal_defense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
              Firm Info
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Attorney Bernstein
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Case Results & Wins
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Legal Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Payment Plans & Financing
                </Link>
              </li>
              <li>
                <a
                  href="https://secure.lawpay.com/pages/law-office-of-jessica-bernstein/operating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  LawPay Client Portal
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
              Defense Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/practice-areas/dwi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  DWI & DUI Defense
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/traffic-tickets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Traffic Ticket Defense
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/felonies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Felonies & Misdemeanors
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/jail-release" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium text-destructive">
                  24-Hour Jail Release
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Practice Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-foreground">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground block">Law Office of Jessica Bernstein</span>
                  820 W 10th St.<br />Austin, TX 78701
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:5128872028" className="hover:text-foreground transition-colors">
                  (512) 887-2028
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:jessica@atxcrimdefense.com" className="hover:text-foreground transition-colors">
                  jessica@atxcrimdefense.com
                </a>
              </li>
              <li className="text-xs text-muted-foreground pt-1 border-t border-border/50">
                <span className="font-medium text-foreground block">Hours:</span>
                Monday - Friday: 9am - 5pm<br />
                Closed Weekends (Jail line open 24/7)
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-border/60">
          <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6">
            <Shield className="inline-block h-3.5 w-3.5 mr-1 text-muted-foreground/60 align-text-top" />
            <strong>Attorney Advertising Disclaimer:</strong> The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Use of, and access to, this website or any of the links or resources contained within the site do not create an attorney-client relationship between the reader, user, or browser and the Law Office of Jessica Bernstein. You should contact an attorney to obtain advice with respect to any particular legal matter. Principal office located at 820 W 10th St., Austin, Texas 78701.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Law Office of Jessica Bernstein. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Formulated in Austin, Texas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
