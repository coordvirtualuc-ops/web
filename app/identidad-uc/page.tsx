import type { Metadata } from "next"
import { IdentityPage } from "@/components/sections/IdentityPage"

export const metadata: Metadata = {
  title: {
    absolute: "Identidad UC | UC Universidad Continental",
  },
  description: "Conoce la identidad institucional de UC Universidad Continental: modelo educativo humanista, acompañamiento cercano, valores y compromiso académico.",
}

export default function IdentidadPage() {
  return <IdentityPage />
}
