import type { Metadata } from "next"
import { BlogPage } from "@/components/sections/BlogPage"

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog UC | Universidad Continental",
  description: "Orientación, vida universitaria, admisiones y recursos académicos de UC Universidad Continental.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog UC | Universidad Continental",
    description: "Orientación, vida universitaria, admisiones y recursos académicos de UC Universidad Continental.",
    type: "website",
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────
// Server Component por defecto en el App Router.
// BlogPage es async y hace fetch desde Sanity en el servidor.

export default function Page() {
  return <BlogPage />
}
