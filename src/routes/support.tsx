import { SupportSection } from "@features/support"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Support Me (Donate) | Nyoman Sunima",
    description: "Support me by donating for projects and contents or goodies",
  })
}

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <SupportSection />
    </div>
  )
}
