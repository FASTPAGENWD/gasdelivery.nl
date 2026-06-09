import type { Metadata } from "next";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Steps } from "@/components/home/Steps";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lachgas Amsterdam — Snel Bezorgd, 24/7 Bereikbaar | Gasdelivery.nl",
  description: SITE_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: `Lachgas Amsterdam — 24/7 Bezorging Aan Huis | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Lachgas Amsterdam — 24/7 Bezorging | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <Steps />
      <FinalCTA />
    </>
  );
}
