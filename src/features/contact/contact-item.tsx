import { Button } from "@shared/components"
import { Link } from "react-router"

export type ContactData = {
  href: string
  label: string
}

type ContactItemProps = {
  contact: ContactData
}

export function ContactItem({ contact }: ContactItemProps) {
  const { href, label } = contact

  return (
    <Button
      variant={"outline"}
      size={"base"}
      className="h-12 transition-all duration-300 hover:-translate-y-1 bg-surface text-[.8125rem]"
      asChild
    >
      <Link to={href} target="_blank">
        {label}
      </Link>
    </Button>
  )
}
