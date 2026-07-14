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
  AlertCircle,
  Clock,
  Calendar
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
  const [fecha, setFecha] = React.useState("")
  const [hora, setHora] = React.useState("")
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
      if (!fecha) {
        newErrors.fecha = "Selecciona una fecha"
      } else {
        const [year, month, dayVal] = fecha.split('-').map(Number)
        const dateObj = new Date(year, month - 1, dayVal)
        if (dateObj.getDay() === 0) {
          newErrors.fecha = "Los domingos no hay atención disponible."
        }
      }
      if (!hora) {
        newErrors.hora = "Selecciona una hora"
      } else if (fecha) {
        const [year, month, dayVal] = fecha.split('-').map(Number)
        const dateObj = new Date(year, month - 1, dayVal)
        const isSaturday = dateObj.getDay() === 6
        const isSunday = dateObj.getDay() === 0
        if (isSunday) {
          newErrors.hora = "No disponible en domingo."
        } else if (isSaturday) {
          const validSatHours = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]
          if (!validSatHours.includes(hora)) {
            newErrors.hora = "Hora inválida para sábado (8:00 AM - 4:00 PM)."
          }
        } else {
          const validWeekdayHours = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"]
          if (!validWeekdayHours.includes(hora)) {
            newErrors.hora = "Hora inválida para días hábiles (9:00 AM - 8:00 PM)."
          }
        }
      }
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

    const message = `Hola, quiero agendar una cita para inscribirme en UC Universidad Continental.

Nombre: ${nombre.trim()}
WhatsApp: ${telefono.trim()}
Programa de interés: ${programa}
Modalidad de interés: ${modalidad}
Fecha de cita: ${fecha}
Hora de cita: ${hora}
Comentario: ${commentText}`

    const whatsappUrl = createWhatsAppLink(message)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const requirements = [
    "Acta de nacimiento.",
    "CURP.",
    "Certificado de estudios previos (tendrás una prórroga de tres meses para entrega).",
    "Comprobante de domicilio.",
    "Solicitud de inscripción (la proporciona la universidad).",
  ]

  const faqs = [
    {
      q: "¿Cuándo inician clases?",
      a: "Tenemos dos periodos de ingreso cada año, en enero y septiembre. Para conocer la fecha exacta, deberás consultar con un asesor educativo vía WhatsApp o llamada telefónica.",
    },
    {
      q: "¿Qué modalidades ofrecen?",
      a: "Ofrecemos modalidades escolarizadas y mixtas, las cuales se dividen en horarios matutino, nocturno, sabatino, viernes y asincrónico. Pregunta por el de tu preferencia vía WhatsApp o llamada telefónica.",
    },
    {
      q: "¿Cuánto dura un programa académico?",
      a: "Licenciaturas e ingenierías: 3 años. Bachillerato y maestrías: 2 años. Diplomados y niveles de idioma: 3 meses.",
    },
    {
      q: "¿Los programas cuentan con validez oficial?",
      a: "Así es, podrás consultarlo directamente en nuestra página web o preguntarle a un asesor educativo vía WhatsApp o llamada telefónica.",
    },
    {
      q: "¿Puedo estudiar si trabajo?",
      a: "Claro que sí, tenemos la modalidad asincrónica, la cual no requiere horario, y también contamos con horarios presenciales los días sábados o viernes.",
    },
    {
      q: "¿Cómo obtengo más información?",
      a: "Puedes consultar tus dudas personales vía WhatsApp o mediante llamada telefónica.",
    },
    {
      q: "¿Qué formas de pago aceptan?",
      a: "Aceptamos efectivo, terminal bancaria, transferencia y depósito bancario. Consulta con un asesor educativo vía WhatsApp o llamada telefónica para mayor información.",
    },
  ]

  const trustBlocks = [
    {
      title: "Atención personalizada",
      desc: "Admisiones te ayuda a resolver dudas sobre programa, modalidad y requisitos.",
      icon: MessageCircle
    },
    {
      title: "Proceso claro",
      desc: "Te indicaremos los pasos y documentos necesarios según tu programa.",
      icon: FileText
    },
    {
      title: "Sin compromiso",
      desc: "Recibe orientación antes de tomar una decisión.",
      icon: CheckCircle
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
                <h1 className="text-4xl font-black tracking-tight text-[var(--color-wine)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] mb-6 text-balance drop-shadow-sm uppercase">
                  Inscríbete en <span className="text-[var(--color-red)]">UC</span>
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <div className="space-y-4 mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-wine)] uppercase">
                    Elige cómo quieres iniciar tu inscripción
                  </h2>
                  <p className="text-base text-[var(--color-text)] leading-relaxed text-balance max-w-xl font-medium">
                    Puedes comenzar tu inscripción en línea o agendar una visita para recibir orientación en nuestras instalaciones.
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.4} className="w-full">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    href="https://c1-uct.algebraix.com/bin/g/enrollments/default/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="group text-base px-8 shadow-xl shadow-[var(--color-red)]/20 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] h-14 rounded-2xl cursor-pointer transition-all duration-300 w-full sm:w-auto font-bold flex items-center justify-center gap-2"
                  >
                    Quiero inscribirme en línea
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    onClick={handleScrollToForm}
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-wine)]/30 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white backdrop-blur-md h-14 rounded-2xl cursor-pointer w-full sm:w-auto font-bold flex items-center justify-center"
                  >
                    Quiero ir a inscribirme
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
                    alt="Nayo - Guardián del Conocimiento"
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
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-wine)] mb-3 tracking-tight uppercase">
              Tu proceso en 3 pasos
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text)]/70 mb-10 max-w-xl mx-auto font-sans">
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
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-text)] text-center group-hover:text-[var(--color-wine)] transition-colors uppercase">
                    {s.step}. {s.title}
                  </h3>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 3 & 4. FORMULARIO GUIADO PASO A PASO */}
      <Section id="formulario-admision" background="wine" padding="lg" className="relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-red)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-red)]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Columna Izquierda: Beneficios e Información */}
          <div className="lg:col-span-5 text-white space-y-8">
            <AnimatedReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cream)]/70">
                Inscripciones Abiertas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-6 tracking-tight text-balance leading-tight drop-shadow-sm uppercase">
                Agenda tu cita de inscripción
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-cream)]/90 leading-relaxed font-sans mb-6 text-balance">
                Déjanos tus datos y elige el programa de interés para que admisiones pueda atenderte en nuestras instalaciones.
              </p>
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm inline-flex">
                <p className="text-xs sm:text-sm text-[var(--color-cream)] font-semibold flex gap-3">
                  <AlertCircle className="w-5 h-5 text-[var(--color-red)] shrink-0 mt-0.5" />
                  Esta solicitud es informativa y no representa una inscripción definitiva.
                </p>
              </div>

              {/* Bloques de Confianza */}
              <div className="mt-8 space-y-4">
                {trustBlocks.map((tb, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-red)] flex items-center justify-center shrink-0">
                      <tb.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1 uppercase">{tb.title}</h4>
                      <p className="text-xs sm:text-sm text-[var(--color-cream)]/70 leading-relaxed font-sans">{tb.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>

            {/* Nayo en Columna Izquierda (Desktop) */}
            <div className="hidden lg:block pt-4 select-none">
              <AnimatedReveal direction="up" className="relative w-48 h-48 mascot-float">
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Nayo - Guardián del Conocimiento"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="192px"
                />
              </AnimatedReveal>
            </div>
          </div>

          {/* Columna Derecha: Formulario Step-by-Step */}
          <div className="lg:col-span-7 w-full relative">
            
            {/* Nayo te acompaña (Burbuja Dinámica Responsiva) */}
            <AnimatedReveal direction="up" className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl mb-6 max-w-lg mx-auto">
              <div className="relative w-12 h-12 shrink-0 mascot-float select-none">
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Nayo"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="48px"
                />
              </div>
              <div className="text-left text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-cream)]">Nayo te acompaña</p>
                <p className="text-xs sm:text-sm font-semibold leading-snug font-sans">
                  {currentStep === 1 && "“Empecemos con tus datos personales.”"}
                  {currentStep === 2 && "“Elige el programa que más te interesa estudiar.”"}
                  {currentStep === 3 && "“Ahora agenda cuándo quieres visitarnos.”"}
                  {currentStep === 4 && "“Todo listo para enviar tu solicitud a admisiones.”"}
                </p>
              </div>
            </AnimatedReveal>

            {/* Tarjeta de Formulario Principal */}
            <AnimatedReveal direction="left" delay={0.2} className="relative z-10 bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 md:p-10 border border-[var(--color-wine)]/5">
              
              {/* Progreso Visual con dots y texto */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Paso {currentStep} de 4</span>
                  <span className="text-[var(--color-red)]">
                    {currentStep === 1 && "Datos Personales"}
                    {currentStep === 2 && "Programa de Interés"}
                    {currentStep === 3 && "Agenda tu Visita"}
                    {currentStep === 4 && "Confirmación"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map(stepNum => (
                    <div 
                      key={stepNum} 
                      className={`h-2 flex-grow rounded-full transition-all duration-500 ${
                        currentStep >= stepNum 
                          ? "bg-[var(--color-red)]" 
                          : "bg-slate-100"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Paso 1: Datos Personales */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 uppercase">Cuéntanos quién eres</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">Necesitamos tus datos para que admisiones pueda contactarte.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nombre" className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej. Juan Pérez López"
                        className={`w-full h-14 px-4 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder-slate-400 ${
                          errors.nombre
                            ? "border-red-500 focus:ring-red-200"
                            : "border-[var(--color-wine)]/20 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                        }`}
                      />
                      {errors.nombre && <span className="text-xs text-red-500 font-semibold">{errors.nombre}</span>}
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefono" className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                        WhatsApp o Celular *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ej. 3111234567"
                        className={`w-full h-14 px-4 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder-slate-400 ${
                          errors.telefono
                            ? "border-red-500 focus:ring-red-200"
                            : "border-[var(--color-wine)]/20 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                        }`}
                      />
                      {errors.telefono && <span className="text-xs text-red-500 font-semibold">{errors.telefono}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 2: Programa de Interés */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 uppercase">Elige la carrera o programa que te interesa</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">No te preocupes si aún no estás seguro; podemos orientarte.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="programa" className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                        Carrera / Posgrado de Interés *
                      </label>
                      <div className="relative">
                        <select
                          id="programa"
                          value={programa}
                          onChange={(e) => setPrograma(e.target.value)}
                          className={`w-full h-14 pl-4 pr-10 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer text-slate-800 ${
                            errors.programa
                              ? "border-red-500 focus:ring-red-200"
                              : "border-[var(--color-wine)]/20 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                          }`}
                        >
                          <option value="" className="text-slate-800 bg-white">-- Selecciona un programa --</option>
                          {academicPrograms.map((p) => (
                            <option key={p.id} value={p.title} className="text-slate-800 bg-white">{p.title}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </div>
                      {errors.programa && <span className="text-xs text-red-500 font-semibold">{errors.programa}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 3: Agenda tu Visita */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 uppercase">Agenda tu visita</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">Elige modalidad, fecha y hora para acudir a nuestras instalaciones.</p>
                  </div>
                  
                  <div className="space-y-5">
                    {/* Modalidad por Pills */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                        Modalidad *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {["Matutino", "Nocturno", "Sábados", "Viernes", "En línea", "Por confirmar"].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setModalidad(m)}
                            className={`h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              modalidad === m
                                ? "bg-[var(--color-wine)] text-white border-[var(--color-wine)] shadow-md"
                                : "bg-white text-slate-800 border-[var(--color-wine)]/10 hover:bg-[var(--color-cream)] hover:border-[var(--color-wine)]/25"
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                      {errors.modalidad && <span className="text-xs text-red-500 font-semibold">{errors.modalidad}</span>}
                    </div>

                    {/* Fecha */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fecha" className="text-xs uppercase font-bold text-slate-700 tracking-wider flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-red)]" />
                        Fecha de Visita *
                      </label>
                      <input
                        id="fecha"
                        type="date"
                        value={fecha}
                        onChange={(e) => {
                          setFecha(e.target.value)
                          // Reiniciar hora al cambiar fecha
                          setHora("")
                        }}
                        className={`w-full h-14 px-4 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 ${
                          errors.fecha
                            ? "border-red-500 focus:ring-red-200"
                            : "border-[var(--color-wine)]/20 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)]"
                        }`}
                      />
                      {errors.fecha && <span className="text-xs text-red-500 font-semibold">{errors.fecha}</span>}
                    </div>

                    {/* Hora */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-bold text-slate-700 tracking-wider flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-red)]" />
                        Hora de Visita *
                      </label>
                      {!fecha ? (
                        <div className="p-3 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center text-xs text-slate-500 font-medium font-sans">
                          Primero selecciona una fecha.
                        </div>
                      ) : (() => {
                        const [year, month, dayVal] = fecha.split('-').map(Number)
                        const dateObj = new Date(year, month - 1, dayVal)
                        const isSunday = dateObj.getDay() === 0
                        const isSaturday = dateObj.getDay() === 6

                        if (isSunday) {
                          return (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-center text-xs text-red-600 font-medium font-sans">
                              Los domingos no hay atención disponible.
                            </div>
                          )
                        }

                        const hoursList = isSaturday
                          ? ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]
                          : ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"]

                        return (
                          <div className="grid grid-cols-3 gap-2">
                            {hoursList.map((h) => (
                              <button
                                key={h}
                                type="button"
                                onClick={() => setHora(h)}
                                className={`h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                  hora === h
                                    ? "bg-[var(--color-wine)] text-white border-[var(--color-wine)] shadow-md"
                                    : "bg-white text-slate-800 border-[var(--color-wine)]/10 hover:bg-[var(--color-cream)] hover:border-[var(--color-wine)]/25"
                                }`}
                              >
                                {h}
                              </button>
                            ))}
                          </div>
                        )
                      })()}
                      {errors.hora && <span className="text-xs text-red-500 font-semibold">{errors.hora}</span>}
                    </div>

                    {/* Comentario */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="comentario" className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                        Comentario (Opcional)
                      </label>
                      <textarea
                        id="comentario"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        placeholder="Ej. Requisitos, costos, revalidación..."
                        rows={3}
                        className="w-full p-4 text-sm bg-white border border-[var(--color-wine)]/20 focus:ring-2 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)] focus:outline-none rounded-xl transition-all resize-none text-slate-800 placeholder-slate-400"
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
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 uppercase">Confirma tu solicitud</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans">
                    Tu cita está lista para enviarse por WhatsApp. Revisa tus datos antes de enviarlos.
                  </p>
                  
                  <div className="bg-[var(--color-cream)] p-6 rounded-2xl text-left border border-[var(--color-wine)]/10 space-y-3 text-slate-800 font-sans shadow-sm">
                    <p className="border-b border-[var(--color-wine)]/5 pb-2 text-xs sm:text-sm"><strong>Nombre:</strong> {nombre}</p>
                    <p className="border-b border-[var(--color-wine)]/5 pb-2 text-xs sm:text-sm"><strong>WhatsApp:</strong> {telefono}</p>
                    <p className="border-b border-[var(--color-wine)]/5 pb-2 text-xs sm:text-sm"><strong>Programa:</strong> {programa}</p>
                    <p className="border-b border-[var(--color-wine)]/5 pb-2 text-xs sm:text-sm"><strong>Modalidad:</strong> {modalidad}</p>
                    <p className="border-b border-[var(--color-wine)]/5 pb-2 text-xs sm:text-sm"><strong>Fecha de visita:</strong> {fecha}</p>
                    <p className="border-b border-[var(--color-wine)]/5 pb-2 text-xs sm:text-sm"><strong>Hora de visita:</strong> {hora}</p>
                    <p className="text-xs sm:text-sm"><strong>Comentarios:</strong> {comentario.trim() || "Ninguno."}</p>
                  </div>
                </div>
              )}

              {/* Botones de Navegación */}
              <div className="mt-8 flex gap-3 pt-6 border-t border-[var(--color-wine)]/5">
                {currentStep > 1 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1 h-14 rounded-xl text-slate-700 border-[var(--color-wine)]/25 hover:bg-slate-50 font-bold cursor-pointer transition-all"
                  >
                    Atrás
                  </Button>
                )}
                {currentStep < 4 ? (
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    className="flex-[2] h-14 rounded-xl bg-[var(--color-wine)] hover:bg-[var(--color-red)] text-white shadow-lg font-bold cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    Continuar
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    className="flex-[2] h-14 rounded-xl bg-[var(--color-red)] hover:bg-[var(--color-wine)] text-white shadow-lg flex items-center justify-center gap-2 font-bold cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar por WhatsApp
                  </Button>
                )}
              </div>

            </AnimatedReveal>

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
                      Requisitos de inscripción
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/60 mt-1">
                      Despliega para ver la lista oficial de documentos.
                    </p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-[var(--color-text)]/40 transition-transform duration-300 ${reqExpanded ? 'rotate-180' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${reqExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 sm:p-8 pt-0 border-t border-[var(--color-wine)]/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]/90 mb-4">
                      En original y copia:
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
                      <span className="flex items-center gap-3 font-sans">
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
                        <p className="text-sm text-[var(--color-text)]/70 leading-relaxed pl-8 font-sans">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight drop-shadow-sm text-balance uppercase">
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
                  href="https://c1-uct.algebraix.com/bin/g/enrollments/default/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wine)] shadow-xl shadow-black/10 h-14 rounded-2xl cursor-pointer text-sm font-bold flex items-center justify-center transition-all duration-300 w-full sm:w-auto px-8 border-none"
                >
                  Quiero inscribirme en línea
                </Button>
                <Button 
                  onClick={handleScrollToForm}
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 h-14 rounded-2xl cursor-pointer backdrop-blur-sm font-bold flex items-center justify-center"
                >
                  Quiero ir a inscribirme
                </Button>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Section>

    </div>
  )
}
