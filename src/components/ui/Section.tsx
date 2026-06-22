import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  background?: "default" | "light" | "dark" | "wine" | "muted"
  padding?: "sm" | "md" | "lg" | "xl"
  containerClassName?: string
}

export function Section({
  id,
  background = "default",
  padding = "md",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    default: "bg-[#F8F5F2] text-[#242424]",
    light: "bg-white text-[#242424]",
    dark: "bg-[#111111] text-[#F8F5F2]",
    wine: "bg-[#550f2a] text-[#F8F5F2]",
    muted: "bg-[#EFEFEF] text-[#242424]",
  }

  const paddings = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-20",
    lg: "py-16 md:py-28",
    xl: "py-24 md:py-36",
  }

  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}