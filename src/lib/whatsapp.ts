export const WHATSAPP_NUMBER = "523111100640"

export const WHATSAPP_MESSAGES = {
  general: "Hola, me gustaría recibir más información sobre la Universidad Continental.",
  admisiones: "Hola, me interesa iniciar mi proceso de admisión. ¿Podrían darme más detalles?",
  administracion: "Hola, me gustaría recibir información sobre la Licenciatura en Administración de Empresas.",
  educacion: "Hola, me gustaría recibir información sobre la Licenciatura en Educación.",
  criminologia: "Hola, me gustaría recibir información sobre la Licenciatura en Criminología y Criminalística.",
  contabilidad: "Hola, me gustaría recibir información sobre la Licenciatura en Contabilidad y Fiscalización.",
  lenguas: "Hola, me gustaría recibir información sobre la Licenciatura en Lenguas Extranjeras.",
  ingles: "Hola, quisiera solicitar información sobre los cursos de inglés.",
  frances: "Hola, quisiera solicitar información sobre los cursos de francés."
} as const

export function createWhatsAppLink(message: string = WHATSAPP_MESSAGES.general): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}