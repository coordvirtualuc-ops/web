import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { footerNavigation } from "@/content/navigation"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-black)] text-[var(--color-cream)]/90 border-t border-[var(--color-wine)]/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Bloque Identidad Institucional */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* Logo Único a Color - Con fondo claro sutil para que no se pierda */}
            <div className="inline-flex items-center bg-white/90 p-2 rounded-xl border border-white/10">
              <Image
                src="/images/logo.png" 
                alt="Logo UC Universidad Continental"
                width={200}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm italic text-[#EFEFEF]/60 font-medium">
              "{siteConfig.tagline}"
            </p>
            <p className="text-sm text-[#EFEFEF]/70 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Grupo de Navegación: Institución */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[var(--color-red)] pl-3 mb-4">
              Institución
            </h3>
            <ul className="space-y-3">
              {footerNavigation.institucion.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#EFEFEF]/75 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Grupo de Navegación: Oferta Académica */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[var(--color-red)] pl-3 mb-4">
              Oferta Académica
            </h3>
            <ul className="space-y-3">
              {footerNavigation.ofertaAcademica.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#EFEFEF]/75 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloque Datos de Contacto y Horarios */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[var(--color-red)] pl-3 mb-4">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-[#EFEFEF]/75">
              <li>
                <span className="block font-semibold text-white mb-1">Dirección:</span>
                <span className="text-xs leading-tight block">{siteConfig.address.fullAddress}</span>
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Teléfono:</span>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Correo:</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-xs hover:text-white break-all transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Horarios:</span>
                <span className="block text-xs">{siteConfig.schedule.weekdays}</span>
                <span className="block text-xs">{siteConfig.schedule.saturdays}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de Copyright e Info Secundaria */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFEFEF]/50">
          <p className="text-center sm:text-left">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-center sm:text-right">
            Sitio desarrollado por{" "}
            <span className="font-semibold text-[#EFEFEF]/80 transition-colors hover:text-white">
              Somos Lázaro
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}