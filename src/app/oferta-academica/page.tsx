import { Metadata } from "next"
import { AcademicOfferPage } from "@/components/sections/AcademicOfferPage"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Oferta Académica | UC Universidad Continental",
  description: "Explora bachillerato, licenciaturas, posgrados, educación continua, centro de idiomas y opciones en línea de UC Universidad Continental.",
  alternates: {
    canonical: "/oferta-academica",
  },
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <AcademicOfferPage />
    </Suspense>
  )
}
