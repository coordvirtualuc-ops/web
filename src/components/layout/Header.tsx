"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigationItems } from "@/content/navigation"
import { Button } from "@/components/ui/Button"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const whatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EFEFEF] bg-[#F8F5F2]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Oficial */}
        <Link href="/" className="flex items-center select-none" onClick={closeMenu}>
          <Image
            src="/images/logo.png" 
            alt="Logo UC Universidad Continental"
            width={280} 
            height={70}
            priority
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => item.children && setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-red)]",
                  item.children && "cursor-default"
                )}
                onClick={(e) => item.children && e.preventDefault()}
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute left-0 top-full w-60 rounded-xl border border-[var(--color-muted)] bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-cream)] hover:text-[var(--color-red)] transition-colors"
                      onClick={closeMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href={createWhatsAppLink(WHATSAPP_MESSAGES.ucVirtual)} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="shadow-sm">
            UC Virtual
          </Button>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="sm" className="shadow-md shadow-[var(--color-red)]/20">
            Solicitar información
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text)] hover:bg-[var(--color-muted)] hover:text-[var(--color-red)] lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="border-b border-[#EFEFEF] bg-white lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl absolute w-full left-0">
          <div className="space-y-1 px-4 pb-6 pt-3 sm:px-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="border-b border-[#EFEFEF]/50 last:border-none py-1">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-base font-medium text-[var(--color-text)]"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-[var(--color-text)] transition-transform",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="mt-1 space-y-1 bg-[#F8F5F2] rounded-lg pl-4 pr-2 py-2 border border-[#EFEFEF]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-red)]"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-red)]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-3">
              <Button href={createWhatsAppLink(WHATSAPP_MESSAGES.ucVirtual)} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full">
                UC Virtual
              </Button>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full shadow-lg shadow-[var(--color-red)]/20">
                Solicitar información
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}