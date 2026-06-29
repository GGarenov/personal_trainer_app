import type { ImageMetadata } from "astro";

const modules = import.meta.glob<ImageMetadata>(
  "../assets/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

export const assetImageMap: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, meta]) => {
    const filename = path.slice(path.lastIndexOf("/") + 1);
    return [filename, meta];
  }),
);

export function getAssetImage(
  filename: string,
  fallback: string,
): ImageMetadata {
  return assetImageMap[filename] ?? assetImageMap[fallback];
}
