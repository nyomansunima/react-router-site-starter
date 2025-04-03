import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export type ExperienceItemData = {
  team: string
  teamLabel?: string
  position: string
  timeline: string
  teamUrl: string
}

type ExperienceItemProps = {
  experience: ExperienceItemData
}

export function ExperienceItem({
  experience,
}: ExperienceItemProps): React.ReactElement {
  const { team, position, timeline, teamUrl, teamLabel } = experience

  return (
    <Link
      href={teamUrl}
      target="_blank"
      className="flex flex-col tablet:flex-row items-start tablet:items-center text-sm gap-2 py-1 group"
    >
      <div className="flex items-center font-medium grow gap-2">
        <i className="fi fi-rr-circle-small" />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-left flex-1 text-pretty">
              {position}
            </TooltipTrigger>
            <TooltipContent>{teamLabel}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-foreground/60 transition-all duration-300 group-hover:text-foreground">
          {team} ({timeline})
        </span>
      </div>
    </Link>
  )
}
