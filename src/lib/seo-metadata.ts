import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export function legalPageMetadata(opts: {
  title: string;
  description: string;
  path: "/privacy" | "/voorwaarden" | "/faq";
}): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: "nl_NL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
    },
  };
}
