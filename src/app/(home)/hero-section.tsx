import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">
          Shipping journey.
        </span>
        <h2 className="text-lg font-medium">Creating digital solutions.</h2>
        <hr className="border-dashed !mt-3" />
      </div>

      <div className="flex flex-col gap-6 text-base leading-7 text-pretty mt-6 text-foreground/60">
        <p>
          Hello, I am a{' '}
          <span className="text-foreground">
            product designer, software engineer & creator
          </span>{' '}
          loves to craft solutions for global audiences.{' '}
          <span className="text-foreground">
            Shipping great, effective & impactful products or services
          </span>{' '}
          through simplicity, better user experience, and target specific.
        </p>

        <p>
          Focus on crafting
          <span className="text-foreground">
            design, saas, goodies, sites, contents and other good things
          </span>{' '}
          to help business{' '}
          <span className="text-foreground">
            moving forward and solve problems
          </span>
          . Talks about indie hacking, product shipping, and business.
        </p>

        <p>
          Currently craft a{' '}
          <span className="text-foreground">
            product, services and building the brands
          </span>
          . The next plans is{' '}
          <span className="text-foreground">building high value business</span>{' '}
          that bring bigger impact to the world .
        </p>
      </div>
    </section>
  )
}
