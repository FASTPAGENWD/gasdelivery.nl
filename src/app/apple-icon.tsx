import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const letter = SITE_NAME.charAt(0).toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #3f3f46 0%, #27272a 100%)",
          color: "#fafafa",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {letter}
      </div>
    ),
    { ...size },
  );
}
