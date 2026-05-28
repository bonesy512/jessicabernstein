"use client"

import * as React from "react"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("App boundary error caught:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center gap-md">
      <div className="h-10 w-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-sm">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
        Something went wrong.
      </h2>
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
        An unexpected error occurred while loading this page. Please try refreshing or return to the main dashboard.
      </p>
      <div className="flex items-center justify-center gap-sm mt-xs">
        <Button onClick={() => reset()} className="rounded-pill shadow-level-2 cursor-pointer">
          Try again
        </Button>
        <Button asChild variant="outline" className="rounded-pill cursor-pointer">
          <a href="/">Go to Home</a>
        </Button>
      </div>
    </div>
  )
}
