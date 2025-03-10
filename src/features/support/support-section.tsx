import * as React from 'react'
import { SupportData, SupportItem } from './support-item'
import data from './support-data.json'

const supports = data.supports as SupportData[]

export function SupportSection(): React.ReactElement {
  return (
    <section className="flex">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-foreground/60 font-mono">Crafts.</span>
          <h2 className="text-lg font-medium">Something happened.</h2>
          <hr className="border-dashed !mt-3" />
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
          {supports.map((support, index) => (
            <SupportItem data={support} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
