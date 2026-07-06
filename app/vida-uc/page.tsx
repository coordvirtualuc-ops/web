import type { Metadata } from "next"
import { StudentLifePage } from "@/components/sections/StudentLifePage"

export const metadata: Metadata = {
  title: {
    absolute: "Vida UC | UC Universidad Continental",
  },
  description: "Conoce la vida estudiantil de UC Universidad Continental: comunidad académica, acompañamiento cercano, actividades, espacios de aprendizaje y experiencia universitaria.",
}

export default function VidaPage() {
  return <StudentLifePage />
}
