import type { ImageMetadata } from "astro";
import { assetImageMap, getAssetImage } from "./assetImageMap";

const PRODUCT_COVER_FALLBACK = "image_four.jpg";

export const productImageMap = assetImageMap;

export function getProductCover(image: string): ImageMetadata {
  return getAssetImage(image, PRODUCT_COVER_FALLBACK);
}
