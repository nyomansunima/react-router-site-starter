import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import '@flaticon/flaticon-uicons/css/all/all.css'
import { config, sharedMetadata, fonts } from '@shared/libs'
import { PosthogProvider } from '@shared/providers'
import { Footer, Header, CenteredLayout } from '@shared/components'

export const metadata: Metadata = {
  title: 'Product Designer, Software Developer & Creator | Nyoman Sunima',
  description:
    'Focused on crafting digital products, website, web app, mobile app to help business.',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Product Designer, Software Developer & Creator | Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Product Designer, Software Developer & Creator | Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  applicationName: 'Nyoman Sunima',
  keywords: [
    'Product Designer',
    'UI UX Designer',
    'Web Designer',
    'Shopify Developer',
    'Web Developer',
    'Webflow Expert',
    'Framer Expert',
    'Squarespace',
    'Wix Developer',
    'Fullstack',
    'Mobile Developer',
    'Indie Hacker',
  ],
  authors: [{ name: 'Nyoman Sunima' }],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable} ${fonts.jetbrainsMono.variable}`}
    >
      <PosthogProvider>
        <body suppressHydrationWarning>
          <CenteredLayout>
            <Header />
            <main className="min-h-screen pb-28 mt-5 tablet:mt-10 tablet:pb-56">
              {children}
            </main>
            <Footer />
          </CenteredLayout>
        </body>
      </PosthogProvider>
    </html>
  )
}
