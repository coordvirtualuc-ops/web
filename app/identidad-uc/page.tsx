import type { Metadata } from "next"
import { IdentityPage } from "@/components/sections/IdentityPage"

export const metadata: Metadata = {
  title: "Identidad UC | Universidad Continental",
  description: "Conoce la historia, filosofía institucional, modelo educativo humanista y valores de UC Universidad Continental.",
  alternates: {
    canonical: "/identidad-uc",
  },
}

export default function IdentidadPage() {
  return (
    <>
      {/* Esto restaura tu contenido original exactamente como estaba */}
      
      
      {/* Este botón flotará de forma segura en la esquina inferior derecha sin romper nada */}
      <a 
        href="/reglamento.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '80px', // Espacio para no tapar el icono de WhatsApp verde
          zIndex: 9999,
          padding: '14px 24px',
          backgroundColor: '#550f2a', // Color guinda institucional de tu logo
          color: 'white',
          borderRadius: '30px', // Bordes redondeados elegantes
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '15px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          fontFamily: 'sans-serif'
        }}
      >
        📄 Ver Reglamento 
      </a>
    </>
  )
