import dayjs from "dayjs"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import yaml from "js-yaml"

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseReadableDate(date: string) {
  return dayjs(date).format("MMM, DD YYYY")
}

export function parseMarkdocFrontmatter<T = any>(content: any): T {
  const frontmatter = content.attributes.frontmatter
    ? yaml.load(content.attributes.frontmatter)
    : {}

  return frontmatter as T
}
