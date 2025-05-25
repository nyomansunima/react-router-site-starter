import dayjs from "dayjs"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import matter, { type GrayMatterFile } from "gray-matter"

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseReadableDate(date: string) {
  return dayjs(date).format("MMM, DD YYYY")
}

export function parseMarkdown(rawFile: any): GrayMatterFile<any> {
  const parsedFile = matter(rawFile)
  return parsedFile
}
