import type { Metadata } from "next"
import "./globals.css"
import { siteConfig } from "@/content/site"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "UC Universidad Continental" }],
  creator: "UC Universidad Continental",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.seo.url || undefined,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-[var(--color-cream)] text-[var(--color-text)] antialiased flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}