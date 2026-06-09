import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#3f3f46",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Lachgas Amsterdam — 24/7 Bezorging Aan Huis | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Lachgas Amsterdam — 24/7 Bezorging Aan Huis | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `Lachgas Amsterdam — 24/7 Bezorging | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    creator: "@gasdeliverynl",
    site: "@gasdeliverynl",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "nl-NL": SITE_URL,
    },
  },
  category: "business",
  classification: "Lachgas levering Amsterdam",
  formatDetection: {
    email: false,
    telephone: false,
  },
  other: {
    "geo.region": "NL-NH",
    "geo.placename": "Amsterdam",
    "geo.position": "52.3676;4.9041",
    ICBM: "52.3676, 4.9041",
    "DC.title": `${SITE_NAME} — Lachgas Amsterdam`,
    "DC.description": SITE_DESCRIPTION,
    "DC.language": "nl",
    "DC.coverage": "Amsterdam, Noord-Holland, Nederland",
    "DC.subject": "lachgas amsterdam, lachgas bestellen amsterdam, lachgas bezorgen amsterdam",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
