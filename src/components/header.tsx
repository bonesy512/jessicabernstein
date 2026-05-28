"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Phone, AlertTriangle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/financing", label: "Financing" },
  { href: "/contact", label: "Contact" },
]

const PRACTICE_AREAS = [
  { href: "/practice-areas", label: "All Services" },
  { href: "/practice-areas/dwi", label: "DWI Defense" },
  { href: "/practice-areas/traffic-tickets", label: "Traffic Tickets" },
  { href: "/practice-areas/felonies", label: "Felonies & Misdemeanors" },
  { href: "/practice-areas/jail-release", label: "24-Hour Jail Release" },
]

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex flex-col max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 gap-3">
        {/* Row 1: Logo & Triggers Wrapper */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight hover:opacity-95 text-foreground transition-opacity"
              id="nav-logo"
            >
              Jessica Bernstein<span className="text-destructive font-bold">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle shifted here for unified mobile grouping */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title="Toggle theme"
                className="h-9 w-9 text-muted-foreground hover:text-foreground cursor-pointer rounded-sm"
                id="theme-toggle-btn-mobile"
              >
                {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground rounded-sm"
                    aria-label="Open menu"
                    id="mobile-nav-trigger"
                  />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-border bg-card text-card-foreground p-6 flex flex-col h-[100dvh]" style={{ maxWidth: "300px" }}>
                <SheetTitle className="font-serif text-lg font-semibold tracking-tight mb-6 text-foreground">
                  Jessica Bernstein.
                </SheetTitle>
                <div className="flex flex-col gap-8 flex-grow overflow-y-auto pr-2 mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground/80 uppercase mb-2">Navigation</span>
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full py-3 text-lg font-medium tracking-wide transition-colors hover:text-foreground text-left border-b border-border/40 last:border-0 ${isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                          }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1 pt-6 border-t border-border">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground/80 uppercase font-serif mb-2">Practice Areas</span>
                    {PRACTICE_AREAS.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full py-3 text-base font-medium transition-colors hover:text-foreground text-left border-b border-border/40 last:border-0 ${isActive(area.href) ? "text-foreground" : "text-muted-foreground"
                          }`}
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-6 pb-10 border-t border-border mt-auto w-full max-w-xs mx-auto justify-center items-center text-center">
                  <Button
                    asChild
                    variant="destructive"
                    className="w-full h-12 justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm text-base font-semibold shadow-level-2"
                  >
                    <a href="tel:5128872028" className="flex items-center justify-center gap-2 w-full h-full">
                      <Phone className="h-4 w-4" />
                      <span>Call 24/7 Jail Release</span>
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/85 text-center mt-1">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                    <span>Jail release services available 24/7.</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Nav (Hidden Site-Wide in favor of Hamburger Menu) */}
        <nav className="hidden">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-home"
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/about") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-about"
          >
            About
          </Link>

          {/* Practice Areas Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 text-muted-foreground focus:outline-none cursor-pointer">
              Practice Areas <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 mt-1 border-border shadow-level-3 bg-card text-card-foreground">
              {PRACTICE_AREAS.map((area) => (
                <DropdownMenuItem key={area.href} className="cursor-pointer hover:bg-muted p-0">
                  <Link href={area.href} className="w-full px-2 py-1.5 block">
                    {area.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/reviews"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/reviews") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-reviews"
          >
            Reviews
          </Link>
          <Link
            href="/results"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/results") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-results"
          >
            Results
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/blog") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-blog"
          >
            Blog
          </Link>
          <Link
            href="/financing"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/financing") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-financing"
          >
            Financing
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${isActive("/contact") ? "text-foreground" : "text-muted-foreground"
              }`}
            id="nav-link-contact"
          >
            Contact
          </Link>
        </nav>

        {/* Row 2: Emergency Button (Full width on mobile/desktop stacked) */}
        <div className="w-full flex items-center justify-center">
          {/* Urgent Jail Release Button */}
          <Button
            asChild
            variant="destructive"
            className="w-full max-w-xs justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm font-semibold gap-2 flex text-sm py-2.5 shadow-level-1"
            id="nav-cta-jail-release"
          >
            <Link href="tel:5128872028" className="flex items-center gap-1.5 px-3 py-1.5 justify-center">
              <Phone className="h-3.5 w-3.5 animate-pulse" />
              <span>Jail Release: (512) 887-2028</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
