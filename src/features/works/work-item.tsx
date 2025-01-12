import Image from 'next/image'
import * as React from 'react'
import { mergeClass, parseReadableDate } from '@shared/utils'
import Link from 'next/link'
import { WorkData } from './work-service'

type WorkItemProps = {
  work: WorkData
}

export function WorkItem({ work }: WorkItemProps): React.ReactElement {
  const { slug, title, description, image, date, type } = work

  const readableTimeline = parseReadableDate(date)
  const link = `/works/${slug}`

  return (
    <Link
      href={link}
      className={mergeClass(
        'flex flex-col group border border-border rounded-2xl bg-surface p-3 transition-all duration-300 hover:-translate-y-1 relative',
      )}
    >
      <div className="flex flex-col tablet:flex-row tablet:items-center justify-between">
        <h3 className="text-sm font-medium flex-1">{title}</h3>

        <div className="flex items-center gap-3">
          <span className="text-sm text-foreground/60 group-hover:text-foreground">
            {type}
          </span>
          <span className="text-sm text-foreground/60 group-hover:text-foreground">
            {readableTimeline}
          </span>
        </div>
      </div>

      <p className="text-sm !leading-relaxed text-pretty text-foreground/60 mt-3">
        {description}
      </p>

      <div className="flex w-full border border-border rounded-2xl p-1 mt-6">
        <picture className="relative overflow-hidden w-full h-[180px] tablet:h-[300px] rounded-xl">
          <Image
            src={image}
            alt={title}
            className="object-cover transition-all duration-300 group-hover:scale-105"
            fill
            sizes="(min-width: 1024px) 2048px, 100vw"
          />
        </picture>
      </div>
    </Link>
  )
}
