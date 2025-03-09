import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ArticleContent } from '@shared/components'
import {
  BenefitSection,
  CTASection,
  IntroSection,
  ServiceSection,
  TeamSection,
} from '@features/collabs'

export const metadata: Metadata = {
  title: 'Collabs | Nyoman Sunima',
  description: 'Serving with love and crafting for better impacts.',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Collabs | Nyoman Sunima',
    description: 'Serving with love and crafting for better impacts.',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Collabs | Nyoman Sunima',
    description: 'Serving with love and crafting for better impacts.',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-10">
      <ArticleContent className="prose-p:text-foreground/60">
        <IntroSection />
        <ServiceSection />
        <TeamSection />
        <BenefitSection />
        <CTASection />
      </ArticleContent>
    </div>
  )
}
