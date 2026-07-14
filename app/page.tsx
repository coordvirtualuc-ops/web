import type { Metadata } from "next"
import { HeroHome } from "@/components/sections/HeroHome"
import { ProgramGrid } from "@/components/sections/ProgramGrid"
import { StatsBlock } from "@/components/sections/StatsBlock"
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { BlogPreview } from "@/components/sections/BlogPreview"
import { ContactMapSection } from "@/components/sections/ContactMapSection"
import { FinalCTA } from "@/components/sections/FinalCTA"

export const metadata: Metadata = {
  title: "UC Universidad Continental | Universidad en Tepic, Nayarit",
  description: "Estudia en UC Universidad Continental en Tepic, Nayarit. Formación humanista, acompañamiento cercano y programas de excelencia académica.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ProgramGrid />
      <StatsBlock />
      <AdmissionsCTA />
      <TestimonialsSection />
      <BlogPreview />
      <ContactMapSection />
      <FinalCTA />
    </>
  )
}