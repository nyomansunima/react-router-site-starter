import * as React from 'react'
import { CraftData, CraftItem } from './craft-item'
import craftsData from './crafts-data.json'

const crafts = craftsData.crafts as CraftData[]

export function CraftListSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">Crafts.</span>
        <h2 className="text-lg font-medium">Something happened.</h2>
        <hr className="border-dashed !mt-3" />
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3 mt-10">
        {crafts.map((craft, i) => (
          <CraftItem craft={craft} key={i} />
        ))}
      </div>
    </div>
  )
}
