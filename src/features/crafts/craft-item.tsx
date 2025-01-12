import * as React from 'react'
import Link from 'next/link'

export type CraftData = {
  title: string
  description: string
  link: string
}

type CraftItemProps = {
  craft: CraftData
}

export function CraftItem({ craft }: CraftItemProps): React.ReactElement {
  const { title, description, link } = craft

  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col h-full p-3 rounded-2xl border border-border bg-surface relative group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex gap-2">
        <i className="fi fi-rr-circle-small" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>

      <p className="text-sm mt-3 text-foreground/60 line-clamp-2">
        {description}
      </p>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
