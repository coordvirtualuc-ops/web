import * as React from "react"
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/content/site"
import { createWhatsAppLink } from "@/lib/whatsapp"

export function ContactMapSection() {
  const whatsappUrl = createWhatsAppLink()

  return (
    <Section id="contacto" padding="lg" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--color-wine)] mb-4">
            Estamos para acompañarte
          </h2>
          <p className="text-lg text-[var(--color-text)]/80 text-balance mx-auto">
            Visita nuestras instalaciones o contáctanos por cualquiera de nuestros canales. Nuestro equipo de admisiones está listo para guiarte.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Info de contacto editorial */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 lg:pr-8">
            <AnimatedReveal direction="right" delay={0.1} className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-red)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text)] text-lg mb-1">{siteConfig.name}</h4>
                  <p className="text-[var(--color-text)]/80 leading-relaxed text-sm">
                    {siteConfig.address.street}, {siteConfig.address.neighborhood}, {siteConfig.address.city}, {siteConfig.address.state}<br />
                    <span className="text-[var(--color-text)]/60 text-xs mt-1 block">Referencia: {siteConfig.address.reference}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-red)]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text)] text-lg mb-1">WhatsApp directo</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-wine)] hover:text-[var(--color-red)] font-medium transition-colors">
                    {siteConfig.contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-red)]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text)] text-lg mb-1">Líneas de atención</h4>
                  <div className="flex flex-col gap-1">
                    {siteConfig.contact.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="text-[var(--color-text)]/80 hover:text-[var(--color-red)] transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-red)]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text)] text-lg mb-1">Correo electrónico</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-text)]/80 hover:text-[var(--color-red)] transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-red)]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text)] text-lg mb-1">Horario de atención</h4>
                  <p className="text-[var(--color-text)]/80 text-sm mb-1">{siteConfig.schedule.weekdays}</p>
                  <p className="text-[var(--color-text)]/80 text-sm">{siteConfig.schedule.saturdays}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  href="https://maps.google.com/?q=UC+Universidad+Continental+Calle+Oaxaca+220+Col+Centro+Tepic+Nayarit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="outline" 
                  className="w-full sm:w-auto border-[var(--color-wine)] text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Abrir en Google Maps
                </Button>
              </div>

            </AnimatedReveal>
          </div>

          {/* Mapa Embebido */}
          <div className="lg:col-span-7 h-[320px] lg:h-[480px] w-full mt-8 lg:mt-0 relative z-0">
            <AnimatedReveal direction="left" delay={0.2} className="w-full h-full">
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-[var(--color-wine)]/10 bg-[var(--color-cream)]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.00239653841!2d-104.90338052473012!3d21.50762608026421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736fbd481de53%3A0x3f4ec8e5498aa832!2sUC%20Universidad%20Continental!5e0!3m2!1ses-419!2smx!4v1782506720515!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de UC Universidad Continental en Tepic, Nayarit"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </div>
    </Section>
  )
}
