import { Metadata } from "next"
import { EnrollmentPage } from "@/components/sections/EnrollmentPage"

export const metadata: Metadata = {
  title: "Inscríbete | UC Universidad Continental",
  description: "Inicia tu proceso de inscripción en UC Universidad Continental. Conoce requisitos, pasos de admisión y solicita orientación para elegir tu programa.",
}

export default function Page() {
  return <EnrollmentPage />
}
