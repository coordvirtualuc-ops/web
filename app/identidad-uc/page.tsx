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
    <div>
      {/* Esto mantiene todo el diseño original de la página */}
      
      
      {/* Contenedor para centrar tu botón al final de la página */}
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <a 
          href="/reglamento.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            backgroundColor: '#550f2a',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Ver Documento PDF
        </a>
      </div>
    </div>
  )
}
