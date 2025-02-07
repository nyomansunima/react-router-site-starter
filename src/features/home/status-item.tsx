import * as React from 'react'
import Link from 'next/link'

export type StatusData = {
  title: string
  url: string
}

type StatusItemProps = {
  status: StatusData
}

export function StatusItem({ status }: StatusItemProps): React.ReactElement {
  const { title, url } = status

  return (
    <li className="flex items-center transition-all duration-300 hover:-translate-x-1 ml-1">
      <Link
        href={url}
        target="_blank"
        className="flex items-center gap-2 text-foreground/60 hover:text-foreground"
      >
        <i className="fi fi-rr-circle-small" />
        <span>{title}</span>
      </Link>
    </li>
  )
}
