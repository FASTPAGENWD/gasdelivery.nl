import { OG_SHARE_ALT, OG_SHARE_SIZE, createShareImageResponse } from "@/lib/og-share";

export const runtime = "edge";

export const alt = OG_SHARE_ALT;
export const size = OG_SHARE_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return createShareImageResponse();
}
