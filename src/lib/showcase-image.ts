import fs from "fs";
import path from "path";

const NAMES = ["gasdelivery-showcase.jpg", "gasdelivery-showcase.webp", "gasdelivery-showcase.png"] as const;

/** Als je een van deze bestanden in `public/` zet, gebruikt de homepage die als showcase-foto. */
export function getShowcaseImageSrc(): string | null {
  const root = path.join(process.cwd(), "public");
  for (const name of NAMES) {
    if (fs.existsSync(path.join(root, name))) {
      return `/${name}`;
    }
  }
  return null;
}
