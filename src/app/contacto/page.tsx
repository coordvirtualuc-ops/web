import { Metadata } from "next"
import { ContactPage } from "@/components/sections/ContactPage"

export const metadata: Metadata = {
  title: "Contacto | UC Universidad Continental",
  description: "Contacta a UC Universidad Continental en Tepic Nayarit. Solicita información sobre programas académicos, inscripción, modalidades y ubicación.",
}

export default function Page() {
  return <ContactPage />
}
