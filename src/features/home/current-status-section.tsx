'use client'

import * as React from 'react'
import { StatusData, StatusItem } from './status-item'
import jsonData from './status-data.json'

const statuses = jsonData.statuses as StatusData[]

export function CurrentStatusSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col text-base !leading-7 text-pretty">
        <p>On working progress and latest updates:</p>

        <ul className="flex flex-col mt-2 gap-1">
          {statuses.map((status, i) => (
            <StatusItem key={i} status={status} />
          ))}
        </ul>
      </div>
    </section>
  )
}
