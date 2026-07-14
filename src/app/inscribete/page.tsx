import { Metadata } from "next"
import { EnrollmentPage } from "@/components/sections/EnrollmentPage"

export const metadata: Metadata = {
  title: "Inscríbete | UC Universidad Continental",
  description: "Inicia tu proceso de inscripción en UC Universidad Continental. Agenda una cita, solicita orientación o comienza tu inscripción en línea.",
  alternates: {
    canonical: "/inscribete",
  },
}

export default function Page() {
  return <EnrollmentPage />
}
