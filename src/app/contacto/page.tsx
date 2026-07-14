import { Metadata } from "next"
import { ContactPage } from "@/components/sections/ContactPage"

export const metadata: Metadata = {
  title: "Contacto | UC Universidad Continental",
  description: "Comunícate con UC Universidad Continental en Tepic, Nayarit. Recibe orientación sobre programas académicos, admisiones e inscripción.",
  alternates: {
    canonical: "/contacto",
  },
}

export default function Page() {
  return <ContactPage />
}
