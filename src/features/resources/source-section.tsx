import { SourceGroup } from "./source-group"
import resources from "./resources-data.json"

export function SourceSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-mono tracking-tight text-link">
          Resources.
        </span>
        <h2 className="text-lg font-medium">Find goodies & things.</h2>
      </div>

      <div className="flex flex-col gap-20">
        {resources.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  )
}
