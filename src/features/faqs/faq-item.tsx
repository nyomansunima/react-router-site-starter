import * as React from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components'

export type FAQData = {
  question: string
  answer: string
}

type FAQItemProps = {
  faq: FAQData
  position: number
}

export function FAQItem({ faq, position }: FAQItemProps) {
  const { question, answer } = faq

  return (
    <AccordionItem
      value={`item-${position}`}
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
