import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atxcrimdefense.com"
  const currentDate = new Date()

  // Define routes in the application
  const routes = [
    "",
    "/about",
    "/reviews",
    "/results",
    "/financing",
    "/contact",
    "/practice-areas",
    "/practice-areas/dwi",
    "/practice-areas/felonies",
    "/practice-areas/jail-release",
    "/practice-areas/traffic-tickets",
    "/blog/how-to-get-someone-out-of-travis-county-jail",
    "/blog/travis-county-dwi-blood-tests",
    "/blog/travis-county-grand-jury-felony-defense",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
  }))
}
