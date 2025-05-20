import { SourcesSection } from "@features/resources"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Resources | Nyoman Sunima",
    description: "Get free resources and things that help your works",
  })
}

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <SourcesSection />
    </div>
  )
}
