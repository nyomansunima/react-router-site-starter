'use client'

import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">
          Shipping journey.
        </span>
        <h2 className="text-lg font-medium">Creating digital solutions.</h2>
        <hr className="border-dashed !mt-3" />
      </div>

      <div className="flex flex-col gap-6 text-base leading-7! text-pretty mt-6">
        <p>
          Hello, I am a{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 text-fuchsia-600">
            product designer
          </span>
          ,{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 text-red-600">
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
          Currently craft a product and services at{' '}
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
          also building the brands. The next plans is building high value
          business that bring bigger impact to the world.
        </p>

        <span className="text-sm text-foreground/60 font-mono italic">
          Thanks for coming...
        </span>
      </div>
    </section>
  )
}
