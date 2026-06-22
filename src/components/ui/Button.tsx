import * as React from "react"
import Link, { LinkProps } from "next/link"
import { cn } from "@/lib/utils"

// Propiedades compartidas entre botón y enlace
interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
  // Eliminamos 'children' de aquí porque ya viene incluido en los tipos nativos de React
}

// Propiedades exclusivas cuando funciona como <button>
interface ButtonAsButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never // Forzamos a que no exista href
}

// Propiedades exclusivas cuando funciona como <Link>
interface ButtonAsLinkProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  href: string // Obligatorio si es un enlace
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer"

    const variants = {
      primary: "bg-[#8c002a] text-[#F8F5F2] hover:bg-[#550f2a] focus-visible:ring-[#8c002a]",
      secondary: "bg-[#550f2a] text-[#F8F5F2] hover:bg-[#111111] focus-visible:ring-[#550f2a]",
      outline:
        "border-2 border-[#8c002a] text-[#8c002a] bg-transparent hover:bg-[#8c002a] hover:text-[#F8F5F2] focus-visible:ring-[#8c002a]",
      ghost: "text-[#242424] hover:bg-[#EFEFEF] focus-visible:ring-[#242424]",
      dark: "bg-[#111111] text-[#F8F5F2] hover:bg-[#242424] focus-visible:ring-[#111111]",
    }

    const sizes = {
      sm: "h-9 px-4 text-xs md:text-sm",
      md: "h-11 px-6 text-sm md:text-base",
      lg: "h-13 px-8 text-base md:text-lg tracking-wide",
    }

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    // Si pasamos href, renderizamos el Link de Next.js
    if ("href" in props && props.href !== undefined) {
      const { href, ...linkProps } = props as ButtonAsLinkProps
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...linkProps}
        >
          {children}
        </Link>
      )
    }

    // De lo contrario, renderizamos un botón HTML normal
    const { ...buttonProps } = props as ButtonAsButtonProps
    return (
      <button
        type={buttonProps.type || "button"}
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"