import type { WorkData } from "@features/works"
import { Link } from "react-router"

type Props = {
  work: WorkData
}

export function WorkItem({ work }: Props) {
  const { slug, title, image } = work
  const link = `/works/${slug}`

  return (
    <Link
      to={link}
      className="flex flex-col relative col-span-1 h-[240px] bg-surface p-1 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
    >
      <div className="flex h-full w-full border-2 border-transparent border-dashed rounded-xl overflow-hidden group-hover:border-link relative">
        <img
          src={image}
          className="transition-all duration-500 group-hover:scale-105 w-full h-full object-cover group-hover:grayscale-100"
        />

        <div className="flex font-mono tracking-tight text-link text-center justify-center items-center gap-1 absolute inset-0 opacity-0 bg-surface/20 backdrop-blur-md text-sm transition-all duration-500 group-hover:opacity-100">
          {title}
        </div>
      </div>
    </Link>
  )
}
