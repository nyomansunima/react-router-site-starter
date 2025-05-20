import { ContactList, SocialMediaList } from "@features/contact"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Contact | Nyoman Sunima",
    description: "Get in touch with me right now, start your idea",
  })
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-sm text-foreground/60 font-mono">Contact.</span>
        <h2 className="text-lg font-medium">Connect & collabs.</h2>
      </div>

      <ContactList />
      <SocialMediaList />
    </div>
  )
}
