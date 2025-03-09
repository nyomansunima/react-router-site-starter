import * as React from 'react'

export function ServiceSection(): React.ReactElement {
  return (
    <section className="mt-24">
      <div className="flex flex-col not-prose">
        <span className="text-sm font-mono text-foreground/60">Services.</span>
        <h2 className="py-2">Finding your own way.</h2>
        <hr className="mt-2 border-dashed" />
      </div>

      <p>
        I offer a wide range of services to help you achieve your goals. Whether
        you need a website, a mobile app, or a custom software solution, I can
        help you bring your vision to life.
      </p>

      <ul>
        <li>Branding & Visual Design</li>
        <li>Web Design & Development</li>
        <li>Mobile App Development</li>
        <li>Custom Software Development</li>
        <li>Nocode Development</li>
        <li>Automation</li>
        <li>DevOps</li>
        <li>UI/UX Design</li>
        <li>SEO Optimization</li>
        <li>Consulting & Strategies</li>
      </ul>

      <p>
        Everything pack with the most valuable result and dedicated. You will
        get the stunning result for every project you build.
      </p>
    </section>
  )
}
