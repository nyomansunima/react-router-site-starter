export function loadConfig() {
  return {
    app: {
      host: import.meta.env.VITE_APP_HOST || "http://localhost:5173",
    },
    posthog: {
      key: import.meta.env.VITE_POSTHOG_KEY,
    },
    verification: {
      google: import.meta.env.VITE_GOOGLE_VERIFICATION,
    },
    kit: {
      key: import.meta.env.VITE_KIT_API_KEY,
    },
  } as const
}
