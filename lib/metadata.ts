import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  path = "",
  image = "/og-image.jpg",
  noIndex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.shortName}`
    : `${SITE_CONFIG.name} | Premium Glass & Aluminium Solutions`;

  const url = `${SITE_CONFIG.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`;

  const defaultKeywords = [
    "glass aluminium Pakistan",
    "aluminium doors windows Lahore",
    "glass partitions Lahore",
    "shop front glass",
    "Azan Glass",
  ];

  return {
    title: pageTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url,
      title: pageTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
