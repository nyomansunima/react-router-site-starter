import * as React from 'react'
import { WorkItem } from './work-item'
import * as workService from './work-service'

export async function WorksListSection(): Promise<React.ReactElement> {
  const works = await workService.getWorks()

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">Works.</span>
        <h2 className="text-lg font-medium">Build from scratch.</h2>
        <hr className="border-dashed !mt-3" />
      </div>

      <div className="flex flex-col gap-3 mt-10">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
