import { ContactItem, type ContactData } from "./contact-item"
import contactData from "./contact-data.json"

const contacts = contactData.contacts as ContactData[]

export function ContactList() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {contacts.map((con, index) => (
        <ContactItem contact={con} key={index} />
      ))}
    </div>
  )
}
