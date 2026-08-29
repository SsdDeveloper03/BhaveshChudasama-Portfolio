import Script from "next/script";

import { COMPANY_NAME, LOCATION, ROLE, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: ROLE,
    worksFor: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    url: SITE_URL,
    sameAs: Object.values(SOCIAL_LINKS),
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION,
      addressCountry: "IN",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.jpg`,
    founder: {
      "@type": "Person",
      name: SITE_NAME,
      jobTitle: ROLE,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@sunrise.dev",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const schemas = [personSchema, organizationSchema, websiteSchema];

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />
      <BreadcrumbSchema />
    </>
  );
}
