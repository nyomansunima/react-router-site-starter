import fs from "fs/promises"
import path from "path"
import Markdoc from "@markdoc/markdoc"
import { parseMarkdocFrontmatter } from "@shared/libs"
import React from "react"

const WORK_CONTENT_PATH = "./src/features/works/contents"

export type WorkFrontMatter = {
  title: string
  description: string
  image: string
  date: string
  status: "Completed" | "In Progress"
  isFeatured?: boolean
  type: "Hacking" | "Work"
  category: string
  team: {
    name: string
    url: string
  }
}

type WorkMetadata = Pick<WorkFrontMatter, "title" | "description" | "image">

export type WorkDetail = {
  meta: WorkFrontMatter
  content: React.ReactNode
}

export type WorkData = WorkFrontMatter & {
  slug: string
}

export async function getWorkDetail(slug: string): Promise<WorkDetail> {
  const filePath = path.join(process.cwd(), WORK_CONTENT_PATH, `${slug}.md`)
  const file = await fs.readFile(filePath, "utf-8")
  const ast = Markdoc.parse(file)
  const content = Markdoc.transform(ast)
  const renderedContent = Markdoc.renderers.react(content, React)
  const frontMatter = parseMarkdocFrontmatter(ast)

  return { meta: frontMatter, content: renderedContent }
}

export async function getWorkPaths(): Promise<string[]> {
  const workDirPath = path.join(process.cwd(), WORK_CONTENT_PATH)
  const files = await fs.readdir(workDirPath)

  const slugs = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "")
      return slug
    }) as string[]

  return slugs
}

export async function getWorks(): Promise<WorkData[]> {
  const workDirPath = path.join(process.cwd(), WORK_CONTENT_PATH)
  const files = await fs.readdir(workDirPath)

  const contentFiles = files.filter(
    (file) => file.endsWith(".md") || file.endsWith(".mdx"),
  )

  const works = await Promise.all(
    contentFiles.map(async (file) => {
      const filePath = path.join(workDirPath, file)

      const fileContent = await fs.readFile(filePath, "utf-8")
      const slug = file.replace(/\.(mdx|md)$/, "")
      const ast = Markdoc.parse(fileContent)
      const frontMatter = parseMarkdocFrontmatter<WorkFrontMatter>(ast)

      return {
        slug,
        ...frontMatter,
      } as any
    }),
  )

  return works ?? []
}

export async function getFeaturedWorks(): Promise<WorkData[]> {
  const works = await getWorks()
  const featuredWorks = works.filter((work) => work.isFeatured)
  return featuredWorks ?? []
}
