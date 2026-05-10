import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";

export const OG_SHARE_SIZE = { width: 1200, height: 630 } as const;

export const OG_SHARE_ALT = `${SITE_NAME} — lachgas levering Amsterdam`;

export function createShareImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #18181b 0%, #3f3f46 45%, #52525b 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 8,
              height: 72,
              borderRadius: 4,
              background: "#fafafa",
              opacity: 0.95,
            }}
          />
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {SITE_NAME}
          </div>
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 500,
            color: "rgba(250,250,250,0.92)",
            maxWidth: 880,
            lineHeight: 1.25,
          }}
        >
          Lachgas bestellen Amsterdam · 24/7 via WhatsApp & telefoon
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 22,
            color: "rgba(250,250,250,0.75)",
          }}
        >
          Snelle levering · transparante prijs · persoonlijke service
        </div>
      </div>
    ),
    { ...OG_SHARE_SIZE },
  );
}
