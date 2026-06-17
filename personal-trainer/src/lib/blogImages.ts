import type { ImageMetadata } from "astro";

import mindsetBlogFour from "../assets/mindset_blog_four.jpg";
import mindsetBlogOne from "../assets/mindset_blog_one.jpg";
import mindsetBlogThree from "../assets/mindset_blog_three.jpg";
import mindsetBlogTwo from "../assets/mindset_blog_two.jpg";
import nutritionBlogFour from "../assets/nutrition_blog_four.jpg";
import nutritionBlogOne from "../assets/nutrition_blog_one.jpg";
import nutritionBlogThree from "../assets/nutrition_blog_three.jpg";
import nutritionBlogTwo from "../assets/nutrition_blog_two.jpg";
import trainingBlogFour from "../assets/training_blog_four.jpg";
import trainingBlogOne from "../assets/training_blog_one.jpg";
import trainingBlogThree from "../assets/training_blog_three.jpg";
import trainingBlogTwo from "../assets/training_blog_two.jpg";
import transformationBlogOne from "../assets/transformation_blog_one.jpg";
import transformationBlogThree from "../assets/transformation_blog_three.jpg";
import transformationBlogTwo from "../assets/transformation_blog_two.jpg";

export const blogImageMap: Record<string, ImageMetadata> = {
  "training_blog_one.jpg": trainingBlogOne,
  "training_blog_two.jpg": trainingBlogTwo,
  "training_blog_three.jpg": trainingBlogThree,
  "training_blog_four.jpg": trainingBlogFour,
  "nutrition_blog_one.jpg": nutritionBlogOne,
  "nutrition_blog_two.jpg": nutritionBlogTwo,
  "nutrition_blog_three.jpg": nutritionBlogThree,
  "nutrition_blog_four.jpg": nutritionBlogFour,
  "mindset_blog_one.jpg": mindsetBlogOne,
  "mindset_blog_two.jpg": mindsetBlogTwo,
  "mindset_blog_three.jpg": mindsetBlogThree,
  "mindset_blog_four.jpg": mindsetBlogFour,
  "transformation_blog_one.jpg": transformationBlogOne,
  "transformation_blog_two.jpg": transformationBlogTwo,
  "transformation_blog_three.jpg": transformationBlogThree,
};

export const blogCategories = [
  "Training",
  "Nutrition",
  "Mindset",
  "Transformations",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export function getBlogCover(image: string): ImageMetadata {
  return blogImageMap[image] ?? trainingBlogOne;
}
