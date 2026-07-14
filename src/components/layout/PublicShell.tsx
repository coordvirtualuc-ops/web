'use client'

/**
 * PublicShell
 *
 * Componente cliente que envuelve los elementos del sitio público
 * (Header, Footer, WhatsAppButton, WelcomeMascot).
 *
 * Se oculta completamente cuando la ruta comienza con /studio,
 * de modo que el Studio editorial no tenga interferencias.
 *
 * No afecta ninguna ruta pública del sitio.
 */

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { WelcomeMascot } from '@/components/layout/WelcomeMascot'

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    // En /studio: renderiza los children directamente,
    // sin Header, Footer, WhatsAppButton ni WelcomeMascot.
    return <>{children}</>
  }

  return (
    <>
      <WelcomeMascot />
      <Header />
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
