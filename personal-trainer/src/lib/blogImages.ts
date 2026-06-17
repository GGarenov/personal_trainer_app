import type { ImageMetadata } from "astro";

import aboutHeroImage from "../assets/about_hero_image.png";
import imageFive from "../assets/image_five.jpg";
import imageFour from "../assets/image_four.jpg";
import imageOne from "../assets/image_one.png";
import imageSeven from "../assets/image_seven.jpg";
import imageSix from "../assets/image_six.jpg";
import imageThree from "../assets/image_three.png";
import imageTwo from "../assets/image_two.jpg";

export const blogImageMap: Record<string, ImageMetadata> = {
  "about_hero_image.png": aboutHeroImage,
  "image_one.png": imageOne,
  "image_two.jpg": imageTwo,
  "image_three.png": imageThree,
  "image_four.jpg": imageFour,
  "image_five.jpg": imageFive,
  "image_six.jpg": imageSix,
  "image_seven.jpg": imageSeven,
};

export const blogCategories = [
  "Training",
  "Nutrition",
  "Mindset",
  "Transformations",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export function getBlogCover(image: string): ImageMetadata {
  return blogImageMap[image] ?? imageOne;
}
