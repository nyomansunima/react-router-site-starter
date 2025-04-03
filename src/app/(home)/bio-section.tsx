import * as React from 'react'
import { BioItem, BioItemData } from './bio-item'
import bioData from './bio-data.json'

const bios = bioData.links as BioItemData[]

export function BioSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-foreground/60">
          Links & resources.
        </span>
        <h2 className="py-2 text-lg font-medium">Explore good things.</h2>
        <hr className="mt-2 border-dashed" />
      </div>

      <div className="flex w-full mt-6">
        <ul className="flex flex-col gap-2">
          {bios.map((data, index) => (
            <BioItem data={data} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
