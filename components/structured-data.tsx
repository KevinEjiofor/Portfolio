import { site, siteUrl } from "@/lib/site"

/**
 * Person + WebSite structured data.
 *
 * This is what lets Google connect the name "Ejiofor E. Kevin" to this site, the
 * GitHub and LinkedIn profiles, and the job title, rather than treating the pages as
 * unrelated text. Rendered server-side so crawlers see it in the initial HTML.
 */
export function StructuredData() {
  const personId = `${siteUrl}/#person`

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    alternateName: [...site.alternateNames],
    url: siteUrl,
    image: `${siteUrl}${site.image}`,
    jobTitle: site.jobTitle,
    description: site.description,
    email: `mailto:${site.email}`,
    sameAs: [site.socials.github, site.socials.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: site.location.country,
    },
    worksFor: { "@type": "Organization", name: site.employer.name, url: site.employer.url },
    alumniOf: site.alumniOf.map((school) => ({
      "@type": "EducationalOrganization",
      name: school.name,
      ...("url" in school && school.url ? { url: school.url } : {}),
    })),
    knowsAbout: [...site.knowsAbout],
  }

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${site.name} — ${site.jobTitle}`,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": personId },
  }

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: `${site.name} — ${site.jobTitle}`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
  }

  const graph = { "@context": "https://schema.org", "@graph": [person, website, profilePage] }

  return (
    <script
      type="application/ld+json"
      // Server-rendered constant, no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
