import type { Metadata } from "next"
import { StudentLifePage } from "@/components/sections/StudentLifePage"

export const metadata: Metadata = {
  title: "Vida UC | Universidad Continental",
  description: "Conoce las experiencias académicas, culturales y profesionales que impulsan el desarrollo personal y profesional en UC.",
  alternates: {
    canonical: "/vida-uc",
  },
}

export default function VidaPage() {
  return <StudentLifePage />
}
