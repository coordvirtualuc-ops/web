import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/content/site"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { WelcomeMascot } from "@/components/layout/WelcomeMascot"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "UC Universidad Continental | Universidad en Tepic, Nayarit",
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
    title: "UC Universidad Continental | Universidad en Tepic, Nayarit",
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
    <html lang="es" className={`scroll-smooth ${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--color-cream)] text-[var(--color-text)] antialiased flex flex-col font-sans">
        <WelcomeMascot />
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