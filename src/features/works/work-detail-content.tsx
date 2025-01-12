import { ArticleContent } from '@shared/components'
import * as React from 'react'
import { getWorkDetail } from './work-service'
import Link from 'next/link'
import { parseReadableDate } from '@shared/utils'

type WorkDetailContentProps = {
  slug: string
}

export async function WorkDetailContent({
  slug,
}: WorkDetailContentProps): Promise<React.ReactElement> {
  const { content, meta } = await getWorkDetail(slug)
  const { category, date, status, team, title } = meta
  const parsedDate = parseReadableDate(date)

  return (
    <div className="flex flex-col">
      <h1 className="text-lg tablet:text-xl font-medium text-balance">
        {title}
      </h1>

      <div className="flex items-center gap-4 mt-3">
        <span className="flex items-center gap-2 !leading-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-foreground text-sm text-foreground/60">
          <i className="fi fi-rr-circle-small" />
          {status}
        </span>

        {team && (
          <Link
            href={meta.team.url}
            target="_blank"
            className="flex items-center gap-2 !leading-none transition-all duration-300 hover:-translate-y-1 hover:text-foreground text-sm text-foreground/60"
          >
            <i className="fi fi-rr-circle-small" />
            {team.name}
          </Link>
        )}

        <span className="flex items-center gap-2 !leading-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-foreground text-sm text-foreground/60">
          <i className="fi fi-rr-circle-small" />
          {category}
        </span>

        <span className="flex items-center gap-2 !leading-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-foreground text-sm text-foreground/60">
          <i className="fi fi-rr-circle-small" />
          {parsedDate}
        </span>
      </div>

      <ArticleContent className="mt-16">{content}</ArticleContent>
    </div>
  )
}
