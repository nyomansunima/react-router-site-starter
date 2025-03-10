import * as React from 'react'
import Link from 'next/link'

export type BioItemData = {
  url: string
  label: string
}

type BioItemProps = {
  data: BioItemData
}

export function BioItem({ data }: BioItemProps): React.ReactElement {
  const { label, url } = data

  return (
    <li className="flex items-center transition-all duration-300 hover:-translate-x-1 ml-2">
      <Link
        href={url}
        target="_blank"
        className="flex items-center gap-2 text-foreground/60 hover:text-link"
      >
        <i className="fi fi-rr-circle-small" />
        <span>{label}</span>
      </Link>
    </li>
  )
}
