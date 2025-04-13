import * as React from 'react'
import { ExperienceItem, ExperienceItemData } from './experience-item'
import experienceData from './experiences-data.json'

const experiences = [...experienceData].reverse() as ExperienceItemData[]

export function ExperienceSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-foreground/60 font-mono">
            Journeys.
          </span>
          <h2 className="text-lg font-medium">What's going on?</h2>
          <hr className="border-dashed !mt-3" />
        </div>

        <div className="flex flex-col gap-3 bg-surface p-5 border border-border border-dashed rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          {experiences.map((exp, index) => (
            <ExperienceItem experience={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
