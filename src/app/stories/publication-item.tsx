import * as React from 'react'
import Link from 'next/link'

export type PublicationData = {
  title: string
  url: string
}

type PublicationItemProps = {
  publication: PublicationData
}

export function PublicationItem({
  publication,
}: PublicationItemProps): React.ReactElement {
  const { title, url } = publication

  return (
    <Link
      href={url}
      target="_blank"
      className="flex bg-surface p-1 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group relative"
    >
      <div className="flex items-center h-full w-full border-2 gap-2 p-3 rounded-xl border-border border-dashed">
        <i className="fi fi-br-circle-small text-foreground/60" />
        <h3 className="text-sm font-medium">{title}</h3>

        <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 text-foreground/60 border border-border group-hover:flex justify-center items-center absolute top-2 right-3">
          <i className="fi fi-br-arrow-small-right -rotate-45" />
        </div>
      </div>
    </Link>
  )
}
