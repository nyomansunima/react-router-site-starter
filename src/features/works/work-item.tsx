import Image from 'next/image'
import * as React from 'react'
import { mergeClass, parseReadableDate } from '@shared/utils'
import Link from 'next/link'
import { WorkData } from './work-service'

interface WorkItemProps {
  work: WorkData
}

function ComingSoon(): React.ReactElement {
  return (
    <span className="flex items-center gap-2 text-xs font-medium text-rose-600 dark:text-rose-400">
      COMING SOON
    </span>
  )
}

export function WorkItem({ work }: WorkItemProps): React.ReactElement {
  const { slug, title, description, type, image, category, date, status } = work

  const readableTimeline = parseReadableDate(date)
  const link = `/works/${slug}`
  const isDraft = status === 'In Progress'

  return (
    <Link
      href={isDraft ? '#' : link}
      className={mergeClass(
        'flex flex-col group border border-border rounded-2xl bg-surface p-3 transition-all duration-300 hover:-translate-y-1',
        isDraft && 'cursor-default',
      )}
    >
      <div className="flex flex-col tablet:flex-row tablet:items-center justify-between">
        <h3 className="text-base font-medium !leading-tight">{title}</h3>

        <div className="flex items-center gap-3">
          {isDraft && <ComingSoon />}

          <span className="text-sm text-foreground/50 group-hover:text-foreground">
            {readableTimeline}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm text-pretty !leading-6">{description}</p>

      <div className="flex w-full bg-surface p-1 border border-border rounded-xl group mt-3">
        <picture className="relative overflow-hidden w-full h-[200px] tablet:h-[360px] rounded-lg">
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
