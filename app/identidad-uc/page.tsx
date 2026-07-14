import type { Metadata } from "next"
import { IdentityPage } from "@/components/sections/IdentityPage"

export const metadata: Metadata = {
  title: "Identidad UC | Universidad Continental",
  description: "Conoce la historia, filosofía institucional, modelo educativo humanista y valores de UC Universidad Continental.",
  alternates: {
    canonical: "/identidad-uc",
  },
}

export default function IdentidadPage() {
  return <IdentityPage />
}
