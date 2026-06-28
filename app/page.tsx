import { HeroHome } from "@/components/sections/HeroHome"
import { ProgramGrid } from "@/components/sections/ProgramGrid"
import { StatsBlock } from "@/components/sections/StatsBlock"
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { BlogPreview } from "@/components/sections/BlogPreview"
import { ContactMapSection } from "@/components/sections/ContactMapSection"
import { FinalCTA } from "@/components/sections/FinalCTA"

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