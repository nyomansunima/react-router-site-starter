import * as React from 'react'
import { WorkData, WorkItem } from './work-item'
import * as workService from './work-service'

export async function WorksListSection(): Promise<React.ReactElement> {
  const works = await workService.getWorks()

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
