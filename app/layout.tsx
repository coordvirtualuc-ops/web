import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/content/site"
import { PublicShell } from "@/components/layout/PublicShell"

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ucuniversidadcontinental.edu.mx"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UC Universidad Continental | Universidad en Tepic, Nayarit",
    template: "%s | UC Universidad Continental",
  },
  description: "UC Universidad Continental ofrece programas académicos con enfoque humanista, acompañamiento cercano y formación profesional en Tepic, Nayarit.",
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "UC Universidad Continental" }],
  creator: "UC Universidad Continental",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    title: "UC Universidad Continental | Universidad en Tepic, Nayarit",
    description: "UC Universidad Continental ofrece programas académicos con enfoque humanista, acompañamiento cercano y formación profesional en Tepic, Nayarit.",
    siteName: "UC Universidad Continental",
  },
  twitter: {
    card: "summary_large_image",
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
        <PublicShell>
          {children}
        </PublicShell>
      </body>
    </html>
  )
}