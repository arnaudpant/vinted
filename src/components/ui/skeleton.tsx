import { cn } from "@/lib/utils"

// eslint-disable-next-line react-refresh/only-export-components
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export default  Skeleton
