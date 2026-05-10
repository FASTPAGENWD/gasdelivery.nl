import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Genereert favicon; geen aparte `.ico` in `public` nodig. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3f3f46",
          color: "#fafafa",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {SITE_NAME.charAt(0).toUpperCase()}
      </div>
    ),
    { ...size },
  );
}
