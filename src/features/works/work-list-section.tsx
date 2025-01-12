import * as React from 'react'
import { WorkItem } from './work-item'
import * as workService from './work-service'

export async function WorksListSection(): Promise<React.ReactElement> {
  const works = await workService.getWorks()

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-3">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
