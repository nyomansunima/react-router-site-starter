'use client'

import Link from 'next/link'
import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'

function OpenWorkBadge(): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={'/contact'}
            className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground text-sm"
          >
            <i className="fi fi-rr-circle-dashed" />
            Open to work
          </Link>
        </TooltipTrigger>
        <TooltipContent>Looking for solid works & teams</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function NewBadge(): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={'https://usesonibble.site?ref=nyomansunima'}
            target="_blank"
            className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground text-sm"
          >
            <i className="fi fi-rr-circle-dashed" />
            New craft: Sonibble
          </Link>
        </TooltipTrigger>
        <TooltipContent>Something new in this week</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-4 flex-wrap">
        <OpenWorkBadge />
        <NewBadge />
      </div>

      <div className="flex flex-col gap-6 text-base leading-7! text-pretty mt-10">
        <p>
          Hello, I am a{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 text-fuchsia-600 dark:text-fuchsia-400">
            product designer
          </span>
          ,{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 text-red-600 dark:text-red-400">
            software engineer
          </span>{' '}
          &{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 text-link">
            creator
          </span>{' '}
          loves to craft solutions for global audiences. Shipping great,
          effective & impactful products or services through simplicity, better
          user experience, and target specific.
        </p>
        <p>
          Focus on{' '}
          <Link href={'/crafts'} className="text-link">
            crafting
          </Link>{' '}
          design, saas, goodies, sites, contents and other good things to help
          business moving forward and solve problems.{' '}
          <Link href={'/stories'} className="text-link">
            Talks
          </Link>{' '}
          about indie hacking, product shipping, and business.
        </p>
        <p>
          Currently working as product designer, and developer to craft a
          product, services at{' '}
          <Link
            href={'https://www.tryweebo.one'}
            target="_blank"
            className="text-link cursor-pointer inline-flex transition-all duration-300"
          >
            weebo
          </Link>
          {', '}
          <Link
            href={'https://www.moono.space'}
            target="_blank"
            className="text-link cursor-pointer inline-flex transition-all duration-300"
          >
            moono
          </Link>
          {' & '}
          <Link
            href={'https://www.weecraft.club'}
            target="_blank"
            className="text-link cursor-pointer inline-flex transition-all duration-300"
          >
            weecraft
          </Link>{' '}
          also building the brands. Open for collaborations and contributions.
        </p>
      </div>
    </section>
  )
}
