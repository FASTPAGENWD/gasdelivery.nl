import type { Metadata } from "next";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Steps } from "@/components/home/Steps";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lachgas bestellen Amsterdam? Snel en eenvoudig online — 24/7 bereikbaar",
  description: SITE_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: `Lachgas tanks aan huis Amsterdam — 24/7 | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "nl_NL",
    type: "website",
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
