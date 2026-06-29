import type { ImageMetadata } from "astro";
import { assetImageMap, getAssetImage } from "./assetImageMap";

const BLOG_COVER_FALLBACK = "training_blog_one.jpg";

export const blogImageMap = assetImageMap;

export const blogCategories = [
  "Training",
  "Nutrition",
  "Mindset",
  "Transformations",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export function getBlogCover(image: string): ImageMetadata {
  return getAssetImage(image, BLOG_COVER_FALLBACK);
}
