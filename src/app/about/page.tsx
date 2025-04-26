import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ArticleContent } from '@shared/components'
import { DetailSection } from './detail-section'
import { ActivitySection } from './activity-section'
import { SharingSection } from './sharing-section'
import { IndieSection } from './indie-section'
import { AchievementSection } from './achievement-section'
import { EndWordSection } from './endword-section'

export const metadata: Metadata = {
  title: 'About | Nyoman Sunima',
  description: 'The whole story about me, nyoman sunima and all of the journey',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'About | Nyoman Sunima',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'About | Nyoman Sunima',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <ArticleContent>
        <DetailSection />
        <ActivitySection />
        <SharingSection />
        <IndieSection />
        <AchievementSection />
        <EndWordSection />
      </ArticleContent>
    </div>
  )
}
