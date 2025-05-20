import { getWorks, WorksListSection } from "@features/works"
import { generatedMetadata } from "@shared/libs"
import type { Route } from "./+types/works"

export function meta() {
  return generatedMetadata({
    title: "Works | Nyoman Sunima",
    description:
      "See all of my works including projects, apps, products, case studies, idea and playground",
  })
}

export async function loader() {
  const works = await getWorks()

  return {
    works,
  }
}

export default function WorksPage({ loaderData }: Route.ComponentProps) {
  const { works } = loaderData

  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <WorksListSection works={works} />
    </div>
  )
}
