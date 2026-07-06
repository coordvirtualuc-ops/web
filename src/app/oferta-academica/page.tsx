import { Metadata } from "next"
import { AcademicOfferPage } from "@/components/sections/AcademicOfferPage"

export const metadata: Metadata = {
  title: "Oferta Académica | UC Universidad Continental",
  description: "Conoce los programas académicos de UC Universidad Continental en Tepic Nayarit: bachillerato, licenciaturas, posgrados, educación continua, centro de idiomas y modalidad en línea.",
}

export default function Page() {
  return <AcademicOfferPage />
}
