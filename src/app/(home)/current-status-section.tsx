'use client'

import * as React from 'react'
import { StatusData, StatusItem } from './status-item'
import jsonData from './status-data.json'

const statuses = jsonData.statuses as StatusData[]

export function CurrentStatusSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col text-base leading-7! text-pretty">
        <div className="flex flex-col">
          <span className="text-sm font-mono text-foreground/60">
            Progress & updates.
          </span>
          <h2 className="py-2 text-lg font-medium">What's going on?</h2>
          <hr className="mt-2 border-dashed" />
        </div>

        <ul className="flex flex-col mt-6 gap-1">
          {statuses.map((status, i) => (
            <StatusItem key={i} status={status} />
          ))}
        </ul>
      </div>
    </section>
  )
}
