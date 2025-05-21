import { Button, Input } from "@shared/components"
import { useEffect, useRef } from "react"
import { useFetcher } from "react-router"

export function NewsletterForm() {
  const ref = useRef<HTMLFormElement>(null)
  const fetcher = useFetcher()
  const data = fetcher.data

  useEffect(() => {
    if (
      ref &&
      fetcher.formData?.get("action") == "subscribe-to-newsletter" &&
      data.status &&
      data.status == "ok"
    ) {
      ref.current?.reset()
    }
  }, [data])

  return (
    <div className="flex w-full">
      <fetcher.Form
        method="POST"
        action="/"
        ref={ref}
        className="flex flex-col tablet:flex-row gap-3 w-full"
      >
        <Input name="action" defaultValue="subscribe-to-newsletter" hidden />
        <Input
          name="email"
          placeholder="Your email address"
          type="email"
          required
        />
        <Button type="submit" disabled={fetcher.state == "submitting"}>
          {fetcher.state === "submitting"
            ? "Subcribing"
            : "Subscribe to newsletter"}
        </Button>
      </fetcher.Form>
    </div>
  )
}
