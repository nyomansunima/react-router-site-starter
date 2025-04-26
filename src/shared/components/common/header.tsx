import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown'

import Link from 'next/link'

export function Brand() {
  return (
    <Link
      href={'/'}
      className="flex items-center text-sm font-medium transition-all duration-300"
    >
      nyomansunima.one
    </Link>
  )
}

type NavMenuItemProps = {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

export function NavMenuItem({ children, href, target }: NavMenuItemProps) {
  return (
    <DropdownMenuItem>
      <li className="flex w-full col-span-1">
        <Link
          href={href}
          target={target}
          className="flex justify-center items-center text-sm transition-all duration-300 text-foreground hover:-translate-x-1"
        >
          {children}
        </Link>
      </li>
    </DropdownMenuItem>
  )
}

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex justify-center items-center cursor-pointer group relative h-10 w-10"
        aria-label="Menu Button"
      >
        <span className="h-10 w-10 flex justify-center items-center border-2 border-border border-dashed absolute rounded-2xl text-sm bg-surface transition-all duration-300 -translate-x-1 -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2" />
        <span className="h-10 w-10 flex justify-center items-center border-2 border-border border-dashed absolute rounded-2xl text-sm bg-surface transition-all duration-300 translate-x-1 rotate-6 group-hover:rotate-12 group-hover:translate-x-2" />
        <span className="h-10 w-10 flex justify-center items-center border-2 border-border border-dashed absolute rounded-2xl text-sm bg-surface transition-all duration-300 group-hover:translate-y-2">
          <i className="fi text-xs fi-br-flame" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="grid grid-cols-2 w-full gap-x-4 gap-y-4">
          <NavMenuItem href="/works">Works</NavMenuItem>
          <NavMenuItem href="/collabs">Collabs</NavMenuItem>
          <NavMenuItem href="/crafts">Crafts</NavMenuItem>
          <NavMenuItem href="/stories">Stories</NavMenuItem>
          <NavMenuItem href="/journeys">Journeys</NavMenuItem>
          <NavMenuItem href="/resources">Resources</NavMenuItem>
          <NavMenuItem href="/about">About</NavMenuItem>
          <NavMenuItem href="/contact">Contact</NavMenuItem>
          <NavMenuItem href="/support">Support</NavMenuItem>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 tablet:h-28">
      <Brand />
      <Menu />
    </header>
  )
}
