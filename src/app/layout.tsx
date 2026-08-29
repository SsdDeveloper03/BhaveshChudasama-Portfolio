import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { StructuredData } from "@/components/seo/StructuredData";
import { COMPANY_NAME, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...createPageMetadata({
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
  }),
  title: `${SITE_NAME} | Founder & CEO – ${COMPANY_NAME}`,
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY_NAME,
  generator: "Next.js",
  authors: [{ name: SITE_NAME }],
  keywords: SITE_KEYWORDS,
  category: "Technology",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: `${SITE_NAME} | Founder & CEO – ${COMPANY_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    siteName: COMPANY_NAME,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Founder & CEO of ${COMPANY_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Founder & CEO – ${COMPANY_NAME}`,
    description: SITE_DESCRIPTION,
    creator: "@yourhandle",
    images: ["/images/logo.jpg"],
  },
  other: {
    "theme-color": "#050816",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index,follow" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
