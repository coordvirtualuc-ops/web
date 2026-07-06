"use client"

import * as React from "react"
import Image from "next/image"
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle, 
  ChevronDown, 
  HelpCircle,
  FileText,
  User,
  BookOpen,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { createWhatsAppLink } from "@/lib/whatsapp"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { academicPrograms } from "@/content/programs"
import { Section } from "@/components/ui/Section"

export function EnrollmentPage() {
  // Form State
  const [currentStep, setCurrentStep] = React.useState(1)
  const [nombre, setNombre] = React.useState("")
  const [telefono, setTelefono] = React.useState("")
  const [programa, setPrograma] = React.useState("")
  const [modalidad, setModalidad] = React.useState("")
  const [comentario, setComentario] = React.useState("")
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  // UI State
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null)
  const [reqExpanded, setReqExpanded] = React.useState(false)

  const whatsappGeneralUrl = createWhatsAppLink(
    "Hola, quiero iniciar mi proceso de inscripción en UC Universidad Continental."
  )

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById("formulario-admision")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Multi-step form logic
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}
    
    if (step === 1) {
      if (!nombre.trim()) newErrors.nombre = "El nombre es requerido"
      if (!telefono.trim()) {
        newErrors.telefono = "El teléfono es requerido"
      } else if (!/^[0-9\s-+()]{8,15}$/.test(telefono.trim())) {
        newErrors.telefono = "Ingresa un número válido"
      }
    }
    
    if (step === 2) {
      if (!programa) newErrors.programa = "Selecciona un programa"
    }

    if (step === 3) {
      if (!modalidad) newErrors.modalidad = "Selecciona una modalidad"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = () => {
    const commentText = comentario.trim() ? comentario.trim() : "Ninguno."

    const message = `Hola, quiero iniciar mi proceso de inscripción en UC Universidad Continental.

Nombre: ${nombre.trim()}
Teléfono: ${telefono.trim()}
Programa de interés: ${programa}
Modalidad de interés: ${modalidad}
Comentario: ${commentText}`

    const whatsappUrl = createWhatsAppLink(message)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const requirements = [
    "Acta de nacimiento",
    "CURP",
    "Certificado de estudios previos",
    "Comprobante de domicilio",
    "Identificación oficial",
    "Fotografías",
    "Solicitud de inscripción",
  ]

  const faqs = [
    {
      q: "¿Este formulario me inscribe automáticamente?",
      a: "No. Es una solicitud de orientación para que admisiones pueda guiarte paso a paso.",
    },
    {
      q: "¿Puedo pedir información si aún no elijo programa?",
      a: "Sí. Te ayudamos a revisar opciones y perfiles.",
    },
    {
      q: "¿Me responderán por WhatsApp?",
      a: "Sí. El mensaje se enviará directamente al área de admisiones.",
    },
    {
      q: "¿Los requisitos cambian por programa?",
      a: "Sí, pueden variar según nivel académico y modalidad. Admisiones te confirmará los exactos.",
    },
  ]

  const trustBlocks = [
    {
      title: "Sin compromiso",
      desc: "Recibe orientación antes de tomar una decisión.",
      icon: CheckCircle
    },
    {
      title: "Atención personalizada",
      desc: "Admisiones te ayuda a resolver dudas sobre programa, modalidad y requisitos.",
      icon: MessageCircle
    },
    {
      title: "Proceso claro",
      desc: "Te indicaremos los pasos y documentos necesarios según tu programa.",
      icon: FileText
    }
  ]

  return (
    <div className="w-full bg-[var(--color-cream)] overflow-x-hidden">
      
      {/* 1. HERO DE CONVERSIÓN CON FOTO */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24 flex items-center min-h-[75vh]">
        <div className="absolute inset-0 z-0 bg-white">
           <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-cream)]/80 to-[var(--color-cream)]/40 z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Texto Hero */}
            <div className="flex flex-col items-start lg:col-span-6 xl:col-span-7">
              <AnimatedReveal direction="up" delay={0.1}>
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-red)] bg-[var(--color-red)]/5 rounded-full mb-6 border border-[var(--color-red)]/10 shadow-sm backdrop-blur-sm">
                  Proceso de Admisión
                </span>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <h1 className="text-4xl font-black tracking-tight text-[var(--color-wine)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] mb-6 text-balance drop-shadow-sm">
                  Inscríbete en <span className="text-[var(--color-red)]">UC</span>
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl text-[var(--color-text)] md:text-2xl leading-relaxed mb-4 text-balance max-w-xl font-medium">
                  Te guiamos paso a paso para iniciar tu proceso de admisión y elegir el programa adecuado para ti.
                </p>
                <p className="text-sm sm:text-base text-[var(--color-text)]/70 mb-10 text-balance max-w-lg font-medium">
                  Completa tus datos y el área de admisiones te orientará por WhatsApp.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.4} className="w-full">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    onClick={handleScrollToForm}
                    variant="primary"
                    size="lg"
                    className="group text-base px-8 shadow-xl shadow-[var(--color-red)]/20 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] h-14 rounded-2xl cursor-pointer transition-all duration-300 w-full sm:w-auto"
                  >
                    Iniciar mi solicitud
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    href={whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-wine)]/20 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white backdrop-blur-md h-14 rounded-2xl cursor-pointer w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Hablar con admisiones
                  </Button>
                </div>
              </AnimatedReveal>
            </div>

            {/* Visual Hero / Foto + Mascota */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-5 w-full relative">
              <AnimatedReveal direction="left" delay={0.3} className="relative w-full max-w-md aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[var(--color-cream)] border border-[var(--color-wine)]/5" />
                <Image
                  src="/images/inscribete/hero.webp"
                  alt="Inscripciones UC"
                  fill
                  className="object-cover z-10"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wine)]/30 to-transparent z-20" />
                
                {/* Burbuja Guía */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-2xl shadow-xl shadow-black/5 border border-[var(--color-wine)]/5 z-30 whitespace-nowrap animate-float-slow">
                  <p className="text-sm font-bold text-[var(--color-wine)] flex items-center gap-2">
                    Te ayudo con tu inscripción.
                  </p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-[var(--color-wine)]/5" />
                </div>

                {/* Mascota */}
                <div className="absolute -bottom-4 right-4 w-40 h-40 md:w-56 md:h-56 z-30 mascot-float pointer-events-none select-none">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota UC Guía"
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="224px"
                  />
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROCESO EN 3 PASOS */}
      <Section id="proceso" background="light" padding="sm" className="border-t border-[var(--color-wine)]/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-wine)] mb-3 tracking-tight">
              Tu proceso en 3 pasos
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text)]/70 mb-10 max-w-xl mx-auto">
              Este formulario no te compromete. Nos ayuda a orientarte mejor.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            <div className="hidden sm:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[var(--color-wine)]/10 via-[var(--color-wine)]/20 to-[var(--color-wine)]/10 z-0" />
            
            {[
              { step: "1", title: "Elige tu programa", icon: BookOpen },
              { step: "2", title: "Déjanos tus datos", icon: User },
              { step: "3", title: "Admisiones te orienta", icon: MessageCircle }
            ].map((s, i) => (
              <AnimatedReveal key={i} direction="up" delay={i * 0.1}>
                <div className="relative z-10 flex flex-col items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-wine)]/10 shadow-sm flex items-center justify-center text-[var(--color-red)] mb-4 group-hover:scale-110 group-hover:border-[var(--color-red)] transition-all duration-300">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-text)] text-center group-hover:text-[var(--color-wine)] transition-colors">
                    {s.step}. {s.title}
                  </h3>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 3 & 4. FORMULARIO GUIADO PASO A PASO COMO BLOQUE PRINCIPAL */}
      <Section id="formulario-admision" background="wine" padding="lg" className="relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-red)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-red)]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Header Izquierdo */}
          <div className="lg:col-span-5 text-white">
            <AnimatedReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cream)]/70">
                Paso a Paso
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-6 tracking-tight text-balance leading-tight drop-shadow-sm">
                Comienza tu solicitud
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-cream)]/90 leading-relaxed font-sans mb-6 text-balance">
                Completa estos datos y el equipo de admisiones te orientará sobre requisitos, modalidad y siguientes pasos.
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm inline-flex">
                <p className="text-xs sm:text-sm text-[var(--color-cream)] font-medium flex gap-3">
                  <AlertCircle className="w-5 h-5 text-[var(--color-red)] shrink-0" />
                  Esta solicitud es informativa y no representa una inscripción definitiva.
                </p>
              </div>

              {/* Bloques de Confianza */}
              <div className="mt-12 space-y-4">
                {trustBlocks.map((tb, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-red)] flex items-center justify-center shrink-0">
                      <tb.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">{tb.title}</h4>
                      <p className="text-xs sm:text-sm text-[var(--color-cream)]/70 leading-relaxed">{tb.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          {/* Formulario Multi-step */}
          <div className="lg:col-span-7 w-full relative">
            <AnimatedReveal direction="left" delay={0.2} className="relative z-10 bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 md:p-10 border border-[var(--color-wine)]/5">
              
              {/* Progreso Visual */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[var(--color-cream)] z-0 rounded-full" />
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--color-red)] z-0 rounded-full transition-all duration-500 ease-in-out" 
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                />
                {[1, 2, 3, 4].map(stepNum => (
                  <div 
                    key={stepNum} 
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors duration-300
                      ${currentStep > stepNum 
                        ? "bg-[var(--color-red)] border-[var(--color-red)] text-white" 
                        : currentStep === stepNum 
                          ? "bg-white border-[var(--color-red)] text-[var(--color-red)]" 
                          : "bg-white border-[var(--color-cream)] text-[var(--color-text)]/40"
                      }`}
                  >
                    {currentStep > stepNum ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                  </div>
                ))}
              </div>

              {/* Paso 1: Datos Personales */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--color-wine)]">Datos personales</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/60 mt-1">¿Cómo te llamamos y dónde te contactamos?</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nombre" className="text-xs uppercase font-bold text-[var(--color-text)]/70 tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej. Juan Pérez López"
                        className={`w-full h-12 px-4 text-sm bg-[var(--color-cream)]/30 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.nombre
                            ? "border-red-500 focus:ring-red-200"
                            : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                        }`}
                      />
                      {errors.nombre && <span className="text-xs text-red-500 font-medium">{errors.nombre}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefono" className="text-xs uppercase font-bold text-[var(--color-text)]/70 tracking-wider">
                        WhatsApp o Celular *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="10 dígitos"
                        className={`w-full h-12 px-4 text-sm bg-[var(--color-cream)]/30 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.telefono
                            ? "border-red-500 focus:ring-red-200"
                            : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                        }`}
                      />
                      {errors.telefono && <span className="text-xs text-red-500 font-medium">{errors.telefono}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 2: Programa de Interés */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--color-wine)]">Programa de interés</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/60 mt-1">¿Qué te gustaría estudiar con nosotros?</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="relative">
                        <select
                          value={programa}
                          onChange={(e) => setPrograma(e.target.value)}
                          className={`w-full h-12 pl-4 pr-10 text-sm bg-[var(--color-cream)]/30 border rounded-xl focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                            errors.programa
                              ? "border-red-500 focus:ring-red-200"
                              : "border-[var(--color-wine)]/10 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                          }`}
                        >
                          <option value="">-- Selecciona un programa --</option>
                          {academicPrograms.map((p) => (
                            <option key={p.id} value={p.title}>{p.title}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[var(--color-text)]/50">
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </div>
                      {errors.programa && <span className="text-xs text-red-500 font-medium">{errors.programa}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 3: Modalidad y Comentario */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--color-wine)]">Modalidad y Detalles</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/60 mt-1">Cuéntanos cómo prefieres estudiar.</p>
                  </div>
                  <div className="space-y-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase font-bold text-[var(--color-text)]/70 tracking-wider">
                        Modalidad *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {["Escolarizada", "Sabatina", "En línea", "Mixta", "Flexible", "Por confirmar"].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setModalidad(m)}
                            className={`h-10 rounded-xl text-xs font-bold border transition-all ${
                              modalidad === m
                                ? "bg-[var(--color-wine)] text-white border-[var(--color-wine)] shadow-md"
                                : "bg-white text-[var(--color-text)] border-[var(--color-wine)]/10 hover:bg-[var(--color-cream)]"
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                      {errors.modalidad && <span className="text-xs text-red-500 font-medium">{errors.modalidad}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="comentario" className="text-xs uppercase font-bold text-[var(--color-text)]/70 tracking-wider">
                        Comentario (Opcional)
                      </label>
                      <textarea
                        id="comentario"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        placeholder="Ej. Requisitos, costos, revalidación..."
                        rows={3}
                        className="w-full p-4 text-sm bg-[var(--color-cream)]/30 border border-[var(--color-wine)]/10 focus:ring-2 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)] focus:outline-none rounded-xl transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 4: Confirmación */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in text-center">
                  <div className="w-16 h-16 bg-[var(--color-red)]/10 text-[var(--color-red)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--color-wine)]">¡Todo listo, {nombre.split(' ')[0]}!</h3>
                  <p className="text-sm text-[var(--color-text)]/70 mb-6">
                    Tu solicitud está lista para enviarse. Revisa el resumen y haz clic en enviar.
                  </p>
                  
                  <div className="bg-[var(--color-cream)] p-4 rounded-2xl text-left border border-[var(--color-wine)]/5 space-y-2 text-sm text-[var(--color-text)]">
                    <p><strong>Programa:</strong> {programa}</p>
                    <p><strong>Modalidad:</strong> {modalidad}</p>
                    <p><strong>Teléfono:</strong> {telefono}</p>
                  </div>
                </div>
              )}

              {/* Botones de Navegación */}
              <div className="mt-8 flex gap-3 pt-6 border-t border-[var(--color-wine)]/5">
                {currentStep > 1 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1 h-12 rounded-xl text-[var(--color-wine)] border-[var(--color-wine)]/20 hover:bg-[var(--color-cream)]"
                  >
                    Atrás
                  </Button>
                )}
                {currentStep < 4 ? (
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    className="flex-[2] h-12 rounded-xl bg-[var(--color-wine)] hover:bg-[var(--color-red)] text-white shadow-lg"
                  >
                    Continuar
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    className="flex-[2] h-12 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg flex items-center justify-center gap-2 font-bold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar por WhatsApp
                  </Button>
                )}
              </div>

            </AnimatedReveal>

            {/* Búho Guía Lateral del form */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 mascot-float z-0 opacity-90 pointer-events-none select-none">
              <Image
                src="/images/brand/mascota-uc.webp"
                alt="Mascota UC Formulario"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>

          </div>
        </div>
      </Section>

      {/* 6. REQUISITOS (Secundario Colapsable) */}
      <Section id="requisitos" background="default" padding="lg">
        <div className="max-w-4xl mx-auto">
          <AnimatedReveal direction="up">
            <div className="bg-white rounded-3xl border border-[var(--color-wine)]/5 shadow-md overflow-hidden">
              <button 
                onClick={() => setReqExpanded(!reqExpanded)}
                className="w-full flex items-center justify-between p-6 sm:p-8 bg-white cursor-pointer group"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] text-[var(--color-wine)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[var(--color-wine)] tracking-tight uppercase">
                      Documentación general
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/60 mt-1">
                      Despliega para ver la lista referencial de documentos.
                    </p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-[var(--color-text)]/40 transition-transform duration-300 ${reqExpanded ? 'rotate-180' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${reqExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 sm:p-8 pt-0 border-t border-[var(--color-wine)]/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-[var(--color-text)]/80 leading-relaxed mb-4">
                      Esta lista es referencial. Los requisitos pueden variar según el programa y nivel académico. 
                      Admisiones te confirmará la lista oficial actualizada para tu inscripción.
                    </p>
                    {/* Foto Documentos */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[var(--color-cream)] border border-[var(--color-wine)]/5">
                      <Image
                        src="/images/inscribete/documentos.webp"
                        alt="Documentos UC"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                      />
                    </div>
                  </div>
                  <div className="bg-[var(--color-cream)]/50 p-6 rounded-2xl border border-[var(--color-wine)]/5">
                    <ul className="space-y-3">
                      {requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-[var(--color-text)] font-medium">
                          <CheckCircle className="h-5 w-5 text-[var(--color-red)] shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Section>

      {/* 7. FAQ DE CONVERSIÓN */}
      <Section id="faq" background="light" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <AnimatedReveal direction="up">
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-wine)] tracking-tight uppercase">
                Preguntas Rápidas
              </h2>
            </AnimatedReveal>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isActive = activeFaq === idx
              return (
                <AnimatedReveal key={idx} direction="up" delay={0.1 * idx}>
                  <div className="bg-white border border-[var(--color-wine)]/5 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                    <button
                      onClick={() => setActiveFaq(isActive ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-red)] cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-[var(--color-red)]/70 shrink-0" />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[var(--color-text)]/40 shrink-0 transition-transform duration-300 ${
                          isActive ? "rotate-180 text-[var(--color-red)]" : ""
                        }`}
                      />
                    </button>
                    {isActive && (
                      <div className="px-5 pb-5 pt-1 border-t border-[var(--color-wine)]/5">
                        <p className="text-sm text-[var(--color-text)]/70 leading-relaxed pl-8">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </AnimatedReveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section id="cta-final" background="default" padding="lg">
        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1d] rounded-[2.5rem] p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-red),transparent_60%)] opacity-30" />
          
          <div className="absolute -bottom-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 opacity-90 pointer-events-none mascot-float z-0">
            <Image
              src="/images/brand/mascota-uc.webp"
              alt="Mascota UC"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 192px, 256px"
            />
          </div>
          
          {/* Foto de CTA si existe */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 opacity-30 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-[#3a0a1d] via-[#3a0a1d]/60 to-transparent z-10" />
             <Image
                src="/images/inscribete/admisiones.webp"
                alt="Admisiones UC"
                fill
                className="object-cover"
                sizes="33vw"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
              />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <AnimatedReveal direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight drop-shadow-sm text-balance">
                Da el primer paso hacia tu formación profesional
              </h2>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.1}>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-10 text-balance leading-relaxed font-medium">
                Completa tu solicitud o habla directamente con admisiones.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.2} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full">
                <Button 
                  onClick={handleScrollToForm}
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] shadow-xl shadow-black/10 h-14 rounded-2xl cursor-pointer"
                >
                  Llenar formulario
                </Button>
                <Button 
                  href={whatsappGeneralUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 h-14 rounded-2xl cursor-pointer backdrop-blur-sm"
                >
                  <MessageCircle className="mr-2 h-5 w-5 fill-white/10" />
                  Hablar por WhatsApp
                </Button>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Section>

    </div>
  )
}
