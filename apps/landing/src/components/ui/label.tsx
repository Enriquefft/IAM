import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/cn"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-label font-medium text-text-secondary leading-none peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
