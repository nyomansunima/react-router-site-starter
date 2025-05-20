import { Link } from "react-router"

export type CraftData = {
  title: string
  description: string
  link: string
}

type CraftItemProps = {
  craft: CraftData
}

export function CraftItem({ craft }: CraftItemProps) {
  const { title, description, link } = craft

  return (
    <Link
      to={link}
      target="_blank"
      className="flex p-1 rounded-2xl bg-surface relative group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col h-full w-full p-3 rounded-xl border-2 border-border border-dashed">
        <div className="flex gap-2">
          <i className="fi fi-br-circle-small text-foreground/60" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        <p className="text-sm mt-3 text-foreground/60 line-clamp-2 text-pretty leading-relaxed">
          {description}
        </p>

        <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 text-foreground/60c border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
          <i className="fi fi-br-arrow-small-right -rotate-45" />
        </div>
      </div>
    </Link>
  )
}
