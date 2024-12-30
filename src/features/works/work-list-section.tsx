import * as React from 'react'
import { WorkData, WorkItem } from './work-item'
import worksData from './works-data.json'

const works = [...worksData.works].reverse() as WorkData[]

export function WorksListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <h2 className="text-lg tablet:text-xl font-medium">
        Great works began
        <br />
        from the dust.
      </h2>

      <div className="flex flex-col gap-3 mt-10">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
