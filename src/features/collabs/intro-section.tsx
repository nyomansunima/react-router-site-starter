import * as React from 'react'

export function IntroSection(): React.ReactElement {
  return (
    <section>
      <div className="flex flex-col not-prose">
        <span className="text-sm font-mono text-foreground/60">
          Collabs & crafting.
        </span>
        <h2 className="py-2">Crafting for better impact.</h2>
        <hr className="mt-2 border-dashed" />
      </div>

      <p>
        Hello, you're awesome!. Let's discuss your{' '}
        <span className="text-foreground">next move and the project </span>
        that bring you into{' '}
        <span className="text-foreground">closer dreams and future.</span>
      </p>

      <p>
        For{' '}
        <span className="text-foreground">
          more than 5 years working in the software and business industry
        </span>
        , I've had the opportunity to work with a diverse range of clients, from
        startups to established companies.
      </p>

      <p>
        Bring{' '}
        <span className="text-foreground">
          idea into collaborations and build something different
        </span>{' '}
        with excellent{' '}
        <span className="text-foreground">
          user experiences, design, branding and optimize the resources
        </span>
        .
      </p>

      <p>
        Build their own{' '}
        <span className="text-foreground">dreams & products</span> with better
        view, success rate and bigger impact for the{' '}
        <span className="text-foreground">global audiences</span>.
      </p>

      <div className="flex flex-col not-prose">
        <h4 className="py-2">Nyoman Sunima</h4>
        <span className="text-sm font-mono text-foreground/60 italic">
          Trusted business & work partner.
        </span>
      </div>
    </section>
  )
}
