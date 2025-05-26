import { NewsletterForm } from "@features/newsletter"

export function NewsletterSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Newsletter.
        </span>
        <h2 className="text-lg font-medium">Join weekly newsletter.</h2>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-foreground/60 leading-relaxed">
          Ohh,{" "}
          <span className="text-foreground">
            you can join my weekly newsletter
          </span>{" "}
          about online business, indie hacking and solopreneur.{" "}
          <span className="text-foreground">No spam and shit.</span>
        </p>

        <NewsletterForm />
      </div>
    </section>
  )
}
