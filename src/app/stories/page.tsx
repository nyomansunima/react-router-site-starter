import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { PublicationSection } from './publication-section'
import { RecentlySection } from './recent-section'

export const metadata: Metadata = {
  title: 'Stories | Nyoman Sunima',
  description:
    'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Stories | Nyoman Sunima',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Stories | Nyoman Sunima',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
}

export default function StoriesPage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-20">
      <PublicationSection />
      <RecentlySection />
    </div>
  )
}
