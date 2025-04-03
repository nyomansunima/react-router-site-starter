import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ArticleContent } from '@shared/components'
import { IntroSection } from './intro-section'
import { ServiceSection } from './service-section'
import { TeamSection } from './team-section'
import { BenefitSection } from './benefit-section'
import { CTASection } from './cta-section'

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
