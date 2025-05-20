import { BioSection, HeroSection, StatusSection } from "@features/home"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Product Designer, Software Developer & Creator | Nyoman Sunima",
    description:
      "Focused on crafting digital products, website, web app, mobile app to help business",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <StatusSection />
      <BioSection />
    </main>
  )
}
