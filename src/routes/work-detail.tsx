import { generatedMetadata } from "@shared/libs"
import type { Route } from "./+types/work-detail"
import {
  getWorkDetail,
  WorkDetailContent,
  type WorkDetail,
} from "@features/works"

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params
  const work = await getWorkDetail(slug)

  return { work }
}

export function meta({ data }: Route.MetaArgs) {
  const { work } = data

  return generatedMetadata({
    title: `${work.meta.title} | Nyoman Sunima`,
    description: work.meta.description,
    image: work.meta.image,
  })
}

export default function WorkDetailPage({ loaderData }: Route.ComponentProps) {
  const { work } = loaderData
  const parsedWork = work as WorkDetail

  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <WorkDetailContent work={parsedWork} />
    </div>
  )
}
