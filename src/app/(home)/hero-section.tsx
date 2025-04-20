import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">
          Shipping journey.
        </span>
        <h2 className="text-lg font-medium">Creating digital solutions.</h2>
      </div>

      <div className="flex flex-col gap-6 text-base leading-7 text-pretty mt-6">
        <p>
          Hello, I am a product designer, software engineer & creator loves to
          craft solutions for global audiences. Shipping great, effective &
          impactful products or services through simplicity, better user
          experience, and target specific.
        </p>

        <p>
          Focus on crafting design, saas, goodies, sites, contents and other
          good things to help business moving forward and solve problems . Talks
          about indie hacking, product shipping, and business.
        </p>

        <p>
          Currently craft a product, services and building the brands . The next
          plans is building high value business that bring bigger impact to the
          world .
        </p>
      </div>
    </section>
  )
}
