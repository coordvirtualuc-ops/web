/**
 * Layout específico para /studio
 *
 * Layout anidado que envuelve todas las páginas bajo /studio.
 * No incluye Header, Footer, WhatsAppButton ni WelcomeMascot.
 *
 * Aplica overrides de CSS para que Sanity Studio tenga scroll completo
 * sin interferencia de los estilos globales del sitio público.
 *
 * El root layout (app/layout.tsx) provee <html> y <body>,
 * pero PublicShell oculta los componentes del sitio cuando la ruta es /studio.
 */

import type { Metadata } from 'next'
import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio'

export const viewport = studioViewport

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Studio UC",
  robots: {
    index: false,
    follow: false,
  },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        Override de estilos para /studio:
        - Restaura overflow en html y body que globals.css limita con overflow-x: clip
        - Sanity Studio gestiona su propio scroll interno
        - El fondo del sitio público (--color-cream) se reemplaza por el del Studio
      */}
      <style>{`
        html:has(#sanity-studio-root),
        body:has(#sanity-studio-root) {
          overflow: auto !important;
          overflow-x: hidden !important;
          background: #101010 !important;
          min-height: 100vh;
          height: 100%;
        }
        /* Sanity Studio ocupa toda la altura disponible */
        #sanity-studio-root {
          min-height: 100vh;
          height: 100%;
        }
      `}</style>
      <div id="sanity-studio-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </>
  )
}
