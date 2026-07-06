"use client"

import * as React from "react"
import Image from "next/image"
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight, HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { createWhatsAppLink } from "@/lib/whatsapp"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { siteConfig } from "@/content/site"
import { MAP_IFRAME_SRC, MAP_GOOGLE_MAPS_LINK } from "@/components/sections/ContactMapSection"

export function ContactPage() {
  // Form State
  const [nombre, setNombre] = React.useState("")
  const [telefono, setTelefono] = React.useState("")
  const [correo, setCorreo] = React.useState("")
  const [motivo, setMotivo] = React.useState("")
  const [mensaje, setMensaje] = React.useState("")
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const contactWpUrl = createWhatsAppLink(
    "Hola, quiero contactar a UC Universidad Continental."
  )

  const orientationWpUrl = createWhatsAppLink(
    "Hola, necesito orientación sobre UC Universidad Continental."
  )

  const handleScrollToMap = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById("ubicacion-seccion")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Submit Handler con validación
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!nombre.trim()) {
      newErrors.nombre = "El nombre completo es requerido"
    }
    if (!telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    } else if (!/^[0-9\s-+()]{8,15}$/.test(telefono.trim())) {
      newErrors.telefono = "Por favor ingresa un teléfono válido"
    }
    if (!motivo) {
      newErrors.motivo = "Selecciona un motivo de contacto"
    }
    if (!mensaje.trim()) {
      newErrors.mensaje = "Escribe tu consulta o mensaje"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    const emailText = correo.trim() ? correo.trim() : "No especificado"

    const fullMessage = `Hola, quiero contactar a UC Universidad Continental.

Nombre: ${nombre.trim()}
Teléfono: ${telefono.trim()}
Correo: ${emailText}
Motivo: ${motivo}
Mensaje: ${mensaje.trim()}`

    const whatsappUrl = createWhatsAppLink(fullMessage)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  // Leer datos de forma segura
  const addressText = siteConfig?.address?.fullAddress || "Por confirmar"
  const referenceText = siteConfig?.address?.reference || ""
  const whatsappNumber = siteConfig?.contact?.whatsapp || "Por confirmar"
  const phoneNumbers = siteConfig?.contact?.phones || []
  const emailAddress = siteConfig?.contact?.email || "Por confirmar"
  const weekdayHours = siteConfig?.schedule?.weekdays || "Por confirmar"
  const saturdayHours = siteConfig?.schedule?.saturdays || "Por confirmar"

  const contactCards = [
    {
      title: "WhatsApp",
      value: whatsappNumber,
      link: createWhatsAppLink("Hola, quiero contactar a UC Universidad Continental."),
      linkText: "Escribir ahora",
      icon: MessageCircle,
      color: "text-green-600 bg-green-500/5",
    },
    {
      title: "Teléfono",
      value: phoneNumbers[0] || "Por confirmar",
      link: phoneNumbers[0] ? `tel:${phoneNumbers[0].replace(/\s/g, "")}` : "",
      linkText: "Llamar ahora",
      icon: Phone,
      color: "text-[var(--color-red)] bg-[var(--color-red)]/5",
    },
    {
      title: "Dirección",
      value: addressText,
      link: MAP_GOOGLE_MAPS_LINK,
      linkText: "Ver en mapa",
      icon: MapPin,
      color: "text-amber-700 bg-amber-500/5",
    },
    {
      title: "Correo",
      value: emailAddress,
      link: emailAddress !== "Por confirmar" ? `mailto:${emailAddress}` : "",
      linkText: "Enviar correo",
      icon: Mail,
      color: "text-blue-600 bg-blue-500/5",
    },
    {
      title: "Horario de Atención",
      value: `${weekdayHours} • ${saturdayHours}`,
      link: "",
      linkText: "",
      icon: Clock,
      color: "text-purple-600 bg-purple-500/5",
    },
  ]

  return (
    <div className="w-full bg-[var(--color-cream)] overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28 flex items-center min-h-[70vh]">
        <div className="absolute inset-0 z-0 bg-[var(--color-cream)]">
          <Image
            src="/images/heroo-bg.webp" 
            alt="Contacto UC"
            fill
            priority
            className="object-cover object-[70%_center] opacity-15 sm:opacity-25 lg:opacity-35 mix-blend-multiply"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-cream)]/90 lg:via-[var(--color-cream)]/75 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/30 to-transparent z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="flex flex-col items-start lg:col-span-8">
              <AnimatedReveal direction="up" delay={0.1}>
                <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-red)] bg-[var(--color-red)]/10 rounded-full mb-4">
                  Atención Directa
                </span>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <h1 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] mb-6 text-balance">
                  Contacto <span className="text-[var(--color-red)]">UC</span>
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-[var(--color-text)]/85 md:text-xl leading-relaxed mb-8 text-balance max-w-2xl">
                  Estamos para orientarte sobre programas, modalidades, inscripción y atención académica.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    href={contactWpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="group text-base px-8 shadow-xl shadow-[var(--color-red)]/15 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] h-13 rounded-xl cursor-pointer"
                  >
                    Hablar por WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    onClick={handleScrollToMap}
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-wine)]/30 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white backdrop-blur-md h-13 rounded-xl cursor-pointer"
                  >
                    Ver ubicación
                  </Button>
                </div>
              </AnimatedReveal>

              {/* Mascota en Mobile */}
              <AnimatedReveal direction="up" delay={0.5}>
                <div className="flex items-center gap-3 lg:hidden mt-8 bg-white/50 backdrop-blur-sm border border-[var(--color-wine)]/5 p-3.5 rounded-2xl max-w-sm">
                  <div className="relative w-14 h-14 shrink-0 mascot-float">
                    <Image
                      src="/images/brand/mascota-uc.webp"
                      alt="Mascota UC Guía"
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-[var(--color-wine)]">Centro de Atención</p>
                    <p className="text-[11px] text-[var(--color-text)]/75 leading-tight">Visítanos en Tepic, Nayarit o chatea con nosotros directamente.</p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Mascota en Desktop */}
            <div className="hidden lg:flex flex-col items-center lg:col-span-4 relative mt-8 lg:mt-0 select-none">
              <AnimatedReveal direction="left" delay={0.4}>
                {/* Burbuja */}
                <div className="absolute -top-12 left-6 bg-white text-[var(--color-wine)] px-4 py-2 rounded-2xl border border-[var(--color-wine)]/10 shadow-lg text-xs font-bold animate-bounce-subtle z-30 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-ping" />
                  ¿En qué te puedo ayudar?
                </div>
                {/* Imagen */}
                <div className="relative w-64 h-64 mascot-float">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota UC Contacto"
                    fill
                    className="object-contain"
                    sizes="256px"
                    priority
                  />
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Contacto Rápido */}
      <section className="w-full py-16 sm:py-20 bg-white border-y border-[var(--color-wine)]/5">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <AnimatedReveal
                  key={idx}
                  direction="up"
                  delay={0.1 * idx}
                >
                  <div className="flex flex-col justify-between p-6 bg-[var(--color-cream)]/35 rounded-2xl border border-[var(--color-wine)]/5 hover:border-[var(--color-wine)]/10 hover:shadow-lg transition-all duration-300 min-h-[160px]">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl shrink-0 ${card.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs uppercase text-[var(--color-text)]/40 tracking-wider mb-1">
                          {card.title}
                        </h4>
                        <p className="font-semibold text-sm sm:text-base text-[var(--color-text)] leading-snug break-words">
                          {card.value}
                        </p>
                      </div>
                    </div>

                    {card.link && card.linkText && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-[var(--color-red)] hover:text-[var(--color-wine)] uppercase tracking-wider gap-1 mt-4 transition-colors"
                      >
                        {card.linkText} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </AnimatedReveal>
              )
            })}
          </div>

        </div>
      </section>

      {/* 3. Formulario de Contacto */}
      <section className="w-full py-16 sm:py-24 bg-[var(--color-cream)]/40">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <AnimatedReveal direction="up" delay={0.1}>
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-wine)] tracking-tight uppercase mb-2">
                Envíanos tu consulta
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text)]/60 leading-relaxed">
                Comparte tu duda y el área correspondiente te orientará.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 bg-white rounded-3xl border border-[var(--color-wine)]/5 shadow-xl space-y-6">
              
              {/* Nombre y Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre" className="text-[10px] sm:text-xs uppercase font-bold text-[var(--color-text)]/60 tracking-wider">
                    Nombre Completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. María Gómez Ortiz"
                    className={`w-full h-11 px-4 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.nombre
                        ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                        : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                    }`}
                  />
                  {errors.nombre && (
                    <span className="text-[10px] text-red-500 font-medium pl-1">{errors.nombre}</span>
                  )}
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-[10px] sm:text-xs uppercase font-bold text-[var(--color-text)]/60 tracking-wider">
                    WhatsApp o Celular *
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="10 dígitos (Ej. 3111234567)"
                    className={`w-full h-11 px-4 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.telefono
                        ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                        : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                    }`}
                  />
                  {errors.telefono && (
                    <span className="text-[10px] text-red-500 font-medium pl-1">{errors.telefono}</span>
                  )}
                </div>
              </div>

              {/* Correo y Motivo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Correo */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="correo" className="text-[10px] sm:text-xs uppercase font-bold text-[var(--color-text)]/60 tracking-wider">
                    Correo Electrónico (Opcional)
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Ej. maria@correo.com"
                    className="w-full h-11 px-4 text-xs sm:text-sm bg-white border border-[var(--color-wine)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)] transition-all"
                  />
                </div>

                {/* Motivo */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="motivo" className="text-[10px] sm:text-xs uppercase font-bold text-[var(--color-text)]/60 tracking-wider">
                    Motivo de Contacto *
                  </label>
                  <div className="relative">
                    <select
                      id="motivo"
                      value={motivo}
                      onChange={(e) => setMotivo(e.target.value)}
                      className={`w-full h-11 pl-4 pr-10 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                        errors.motivo
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                      }`}
                    >
                      <option value="">-- Selecciona un motivo --</option>
                      <option value="Información académica">Información académica</option>
                      <option value="Inscripción">Inscripción</option>
                      <option value="Costos">Costos</option>
                      <option value="Modalidades">Modalidades</option>
                      <option value="Ubicación">Ubicación</option>
                      <option value="Otro">Otro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[var(--color-text)]/50">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  {errors.motivo && (
                    <span className="text-[10px] text-red-500 font-medium pl-1">{errors.motivo}</span>
                  )}
                </div>
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="text-[10px] sm:text-xs uppercase font-bold text-[var(--color-text)]/60 tracking-wider">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Detalla tu consulta o duda aquí..."
                  rows={5}
                  className={`w-full p-4 text-xs sm:text-sm bg-white border focus:outline-none focus:ring-2 rounded-xl transition-all resize-none ${
                    errors.mensaje
                      ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                      : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                  }`}
                />
                {errors.mensaje && (
                  <span className="text-[10px] text-red-500 font-medium pl-1">{errors.mensaje}</span>
                )}
              </div>

              {/* Botón enviar */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2 h-12 shadow-md bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] rounded-xl font-bold cursor-pointer transition-all"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  Enviar consulta a WhatsApp
                </Button>
              </div>

            </form>
          </AnimatedReveal>

        </div>
      </section>

      {/* 4. Mapa / ubicación */}
      <section id="ubicacion-seccion" className="w-full py-16 sm:py-24 bg-white border-b border-[var(--color-wine)]/5 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Lado Izquierdo: Datos de ubicación */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-6">
              <AnimatedReveal direction="right" delay={0.1}>
                <div className="inline-flex p-3 bg-amber-500/5 text-amber-800 rounded-2xl mb-4 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-wine)] tracking-tight uppercase mb-4">
                  Ubicación
                </h2>
                <p className="text-sm text-[var(--color-text)]/80 leading-relaxed mb-1">
                  <strong>Dirección:</strong> {addressText}
                </p>
                {referenceText && (
                  <p className="text-xs text-[var(--color-text)]/60 mb-6 italic">
                    Referencia: {referenceText}
                  </p>
                )}
                
                <div>
                  <Button
                    href={MAP_GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full sm:w-auto border-[var(--color-wine)] text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white rounded-xl h-11 px-6 font-bold cursor-pointer"
                  >
                    Abrir en Google Maps
                  </Button>
                </div>
              </AnimatedReveal>
            </div>

            {/* Lado Derecho: Mapa iframe responsivo del Home */}
            <div className="lg:col-span-7 h-[300px] lg:h-[450px] w-full mt-6 lg:mt-0 relative z-0">
              <AnimatedReveal direction="left" delay={0.2} className="w-full h-full">
                <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-[var(--color-wine)]/10 bg-[var(--color-cream)]">
                  <iframe 
                    src={MAP_IFRAME_SRC} 
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
      </section>

      {/* 5. Bloque de orientación */}
      <section className="w-full py-16 bg-[var(--color-cream)]/35">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <AnimatedReveal direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-white border border-[var(--color-wine)]/5 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 shrink-0 mascot-float select-none">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota UC Orientacion"
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-base sm:text-lg text-[var(--color-wine)] uppercase tracking-tight">
                    ¿No sabes por dónde empezar?
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text)]/75 leading-relaxed">
                    Podemos orientarte sobre programas, modalidades, requisitos e inscripción.
                  </p>
                </div>
              </div>
              <Button
                href={orientationWpUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="flex items-center justify-center gap-2 px-6 shadow-md bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] rounded-xl h-11 text-xs shrink-0 cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                Hablar con admisiones
              </Button>
            </div>
          </AnimatedReveal>

        </div>
      </section>

      {/* 6. CTA final */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-[var(--color-wine)]/5">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-wine)] to-[#111111] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-xl shadow-[var(--color-wine)]/10">
            {/* Watermark de la mascota */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-[0.08] pointer-events-none select-none z-0 mascot-float">
              <Image
                src="/images/brand/mascota-uc.webp"
                alt="Mascota UC Watermark"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <AnimatedReveal direction="up" delay={0.1}>
                <span className="inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#F8F5F2] bg-[var(--color-red)] rounded">
                  Atención Inmediata
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase mt-3">
                  Estamos listos para atenderte
                </h2>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <p className="text-sm sm:text-base text-[var(--color-cream)]/85 leading-relaxed text-balance">
                  Comunícate con UC y recibe orientación personalizada.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <div className="pt-4 flex justify-center">
                  <Button
                    href={contactWpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="flex items-center justify-center gap-2 px-10 h-13 shadow-xl bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] border-none hover:scale-[1.02] active:scale-[0.98] transition-all rounded-full font-bold cursor-pointer"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    Enviar mensaje por WhatsApp
                  </Button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
