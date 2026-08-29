import type { Metadata } from "next";

import { COMPANY_NAME, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/constants";

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function createCanonicalUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = "/images/og-image.jpg",
  keywords = SITE_KEYWORDS,
  type = "website",
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = createCanonicalUrl(path);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords,
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      type,
      siteName: COMPANY_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Founder & CEO of ${COMPANY_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      creator: "@yourhandle",
      images: [image],
    },
  };
}

export function createOpenGraphMetadata(options: PageMetadataOptions = {}) {
  const canonicalUrl = createCanonicalUrl(options.path ?? "/");
  const title = options.title ? `${options.title} | ${SITE_NAME}` : SITE_NAME;

  return {
    title,
    description: options.description ?? SITE_DESCRIPTION,
    url: canonicalUrl,
    type: options.type ?? "website",
    siteName: COMPANY_NAME,
    images: [
      {
        url: options.image ?? "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Founder & CEO of ${COMPANY_NAME}`,
      },
    ],
  };
}

export function createTwitterMetadata(options: PageMetadataOptions = {}) {
  const title = options.title ? `${options.title} | ${SITE_NAME}` : SITE_NAME;

  return {
    card: "summary_large_image" as const,
    title,
    description: options.description ?? SITE_DESCRIPTION,
    creator: "@yourhandle",
    images: [options.image ?? "/images/og-image.jpg"],
  };
}
