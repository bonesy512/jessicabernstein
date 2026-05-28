import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center gap-md">
      <span className="text-xs font-semibold tracking-wider text-accent uppercase">404 Error</span>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-[-1.28px] text-foreground">
        Page not found.
      </h1>
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
        The page you are looking for does not exist, has been moved, or is temporarily unavailable.
      </p>
      <Button asChild className="rounded-pill shadow-level-2 mt-xs cursor-pointer">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
