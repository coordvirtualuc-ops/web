export const WHATSAPP_NUMBER = "523111100640"

export const WHATSAPP_MESSAGES = {
  general: "Hola, quiero información sobre UC Universidad Continental en Tepic, Nayarit.",
  inscribete: "Hola, quiero iniciar mi proceso de inscripción en UC Universidad Continental.",
  ucVirtual: "Hola, quiero información sobre UC Virtual.",
  estudiaEnLinea: "Hola, quiero información sobre la oferta en línea de UC Universidad Continental.",
  administracion: "Hola, quiero información sobre la Licenciatura en Administración de Empresas.",
  educacion: "Hola, quiero información sobre la Licenciatura en Educación.",
  criminologia: "Hola, quiero información sobre la Licenciatura en Criminología y Criminalística.",
  contabilidad: "Hola, quiero información sobre la Licenciatura en Contabilidad y Fiscalización.",
  lenguas: "Hola, quiero información sobre la Licenciatura en Lenguas Extranjeras.",
  centroIdiomas: "Hola, quiero información sobre el Centro de Idiomas UC.",
  ingles: "Hola, quiero información sobre el Centro de Idiomas UC."
} as const

export function createWhatsAppLink(message: string = WHATSAPP_MESSAGES.general): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

export function createWhatsAppFormLink(data: {
  nombre: string
  correo: string
  telefono: string
  carrera: string
  modalidad: string
  pregunta: string
}): string {
  const message = `Hola, quiero solicitar información en UC Universidad Continental.

Nombre: ${data.nombre}
Correo: ${data.correo}
Teléfono: ${data.telefono}
Carrera de interés: ${data.carrera}
Modalidad: ${data.modalidad}
Pregunta: ${data.pregunta}`

  return createWhatsAppLink(message)
}