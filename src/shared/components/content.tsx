import * as React from "react"
import Markdoc from "@markdoc/markdoc"
import { mergeClass } from "@shared/libs"

type ArticleContentProps = {
  children: React.ReactNode
  className?: string
}

type ProtectedHtmlContentProps = {
  children: string
}

type GalleryItemProps = {
  image: string
}

type GalleryListImageProps = {
  images: string[]
}

type MarkdownContentProps = {
  content: any
}

export function MarkdownContent({
  content,
}: MarkdownContentProps): React.ReactNode {
  const parsedContent = Markdoc.parse(content)
  const transformedContent = Markdoc.transform(parsedContent, {})
  const renderedContent = Markdoc.renderers.react(transformedContent, React, {})
  return renderedContent
}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article
      className={`${mergeClass("prose prose-p:leading-7 prose-li:leading-7 prose-a:text-link", className)}`}
    >
      {children}
    </article>
  )
}

export function ProtectedHtmlContent({ children }: ProtectedHtmlContentProps) {
  const content = { __html: children }

  return <div dangerouslySetInnerHTML={content}></div>
}

type ContentImageProps = {
  src: string
  alt: string
  title?: string
  height?: number
  width?: number
  className?: string
}

export function ContentImage({ src, alt, className }: ContentImageProps) {
  return (
    <span
      className={`${mergeClass(
        "flex rounded-2xl p-1 border border-border bg-surface cursor-pointer my-4",
        className,
      )}`}
    >
      <picture className="relative w-full overflow-hidden rounded-xl not-prose">
        <img
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </picture>
    </span>
  )
}
