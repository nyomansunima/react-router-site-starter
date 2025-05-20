import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("collabs", "./routes/collabs.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("crafts", "./routes/crafts.tsx"),
  route("journeys", "./routes/journeys.tsx"),
  route("resources", "./routes/resources.tsx"),
  route("stories", "./routes/stories.tsx"),
  route("support", "./routes/support.tsx"),
  route("works", "./routes/works.tsx"),
  route("works/:slug", "./routes/work-detail.tsx"),
] satisfies RouteConfig
