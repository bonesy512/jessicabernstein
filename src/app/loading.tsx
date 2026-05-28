export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full gap-sm">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-accent" />
      <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Loading...</span>
    </div>
  )
}
