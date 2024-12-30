import Image from 'next/image'
import * as React from 'react'
import { mergeClass, parseReadableDate } from '@shared/utils'
import Link from 'next/link'

export interface WorkData {
  href: string
  title: string
  description: string
  image: string
  type: string
  rule: string
  category: string
  isFeatured?: boolean
  isDraft?: boolean
  timeline: string
}

interface WorkItemProps {
  work: WorkData
}

function isValidLink(link: string): boolean {
  if (link.includes('http://') || link.includes('https://')) {
    return true
  }

  return false
}

function parseLink(link: string): string {
  const isURL = isValidLink(link)

  return isURL ? link : `/works/${link}`
}

function ComingSoon(): React.ReactElement {
  return (
    <span className="flex items-center gap-2 text-xs font-medium text-rose-600 dark:text-rose-400">
      COMING SOON
    </span>
  )
}

export function WorkItem({ work }: WorkItemProps): React.ReactElement {
  const {
    href,
    title,
    description,
    rule,
    type,
    image,
    category,
    timeline,
    isDraft,
  } = work

  const readableTimeline = parseReadableDate(timeline)
  const link = parseLink(href)

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

      <p className="!leading-relaxed mt-4 text-sm text-foreground/60">
        {description}
      </p>
      <div className="flex flex-wrap text-sm text-foreground/70 mt-6 gap-2">
        <span className="py-1 px-3 bg-surface border border-border rounded-xl cursor-pointer text-sm">
          {type}
        </span>
        <span className="py-1 px-3 bg-surface border border-border rounded-xl cursor-pointer text-sm">
          {rule}
        </span>
        <span className="py-1 px-3 bg-surface border border-border rounded-xl cursor-pointer text-sm">
          {category}
        </span>
      </div>

      <div className="flex w-full bg-surface p-1 border border-border rounded-xl group col-span-1 mt-5">
        <picture className="relative overflow-hidden w-full h-[200px] tablet:h-[320px] rounded-xl">
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
