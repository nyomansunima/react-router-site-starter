import * as React from 'react'

export function BenefitSection(): React.ReactElement {
  return (
    <section className="mt-24">
      <div className="flex flex-col not-prose">
        <span className="text-sm font-mono text-foreground/60">Benefits.</span>
        <h2 className="py-2">More than just works, it's a journey.</h2>
        <hr className="mt-2 border-dashed" />
      </div>

      <p>
        From the beginning to end,{' '}
        <span className="text-foreground">
          I will guide you through every step of the process
        </span>
        , ensuring that your project is completed on time and within budget.
      </p>

      <p>
        You will get the stunning result and benefits to work with me. Stopping
        you from{' '}
        <span className="text-foreground">confussion, anxiety, and stress</span>
        . Here are some of the benefits you can expect:
      </p>

      <ul>
        <li>Seamless Communication</li>
        <li>24/7 Support</li>
        <li>Cost-Effective</li>
        <li>Scalability</li>
        <li>Flexibility</li>
        <li>Customization</li>
        <li>Security</li>
        <li>Reliability</li>
        <li>Dedicated Teams</li>
        <li>Optimized for Business</li>
      </ul>

      <p>
        So what's stopping you from this jelly drill and enjoying your project
        creation.
      </p>
    </section>
  )
}
