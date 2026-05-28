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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle theme"
              className="h-9 w-9 text-muted-foreground hover:text-foreground cursor-pointer rounded-sm"
              id="theme-toggle-btn"
            >
              {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Urgent Jail Release Button (Pinned) */}
          <Button
            asChild
            variant="destructive"
            className="font-medium text-xs sm:text-sm bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm cursor-pointer shadow-level-2"
            id="nav-cta-jail-release"
          >
            <Link href="tel:5128872028" className="flex items-center gap-1.5 px-3 py-1.5">
              <Phone className="h-3.5 w-3.5 animate-pulse" />
              <span>Jail Release: (512) 887-2028</span>
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-muted-foreground hover:text-foreground rounded-sm"
                  aria-label="Open menu"
                  id="mobile-nav-trigger"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-border bg-card text-card-foreground p-6">
              <SheetTitle className="font-serif text-lg font-semibold tracking-tight mb-6 text-foreground">
                Jessica Bernstein.
              </SheetTitle>
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Navigation</span>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium py-1 transition-colors hover:text-foreground ${isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-border">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase font-serif">Practice Areas</span>
                  {PRACTICE_AREAS.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium py-1 transition-colors hover:text-foreground ${isActive(area.href) ? "text-foreground" : "text-muted-foreground"
                        }`}
                    >
                      {area.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-4 pt-6 border-t border-border mt-auto">
                  <Button
                    asChild
                    variant="destructive"
                    className="w-full justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm"
                  >
                    <a href="tel:5128872028" className="flex items-center justify-center gap-2 py-2">
                      <Phone className="h-4 w-4" />
                      <span>Call 24/7 Jail Release</span>
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground text-center">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                    <span>Jail release services available 24/7.</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
