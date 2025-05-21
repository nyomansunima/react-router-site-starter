import { loadConfig } from "@shared/libs"

const config = loadConfig()

type SubscribeInput = {
  email: string
}

export async function subscribeToNewsletter(
  input: SubscribeInput,
): Promise<void> {
  const payload = {
    email_address: input.email,
  }

  const res = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Kit-Api-Key": config.kit.key,
    },
  })

  if (!res.ok) {
    throw new Error("Opps, something error when submit form")
  }

  return
}
