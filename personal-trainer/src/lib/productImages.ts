import type { ImageMetadata } from "astro";

import balancedMeal from "../assets/balanced_meal.jpg";
import imageFive from "../assets/image_five.jpg";
import imageFour from "../assets/image_four.jpg";
import imageSeven from "../assets/image_seven.jpg";
import imageSix from "../assets/image_six.jpg";
import muscleGain from "../assets/muscle_gain.jpg";
import plantMeal from "../assets/plant_meal.jpg";
import weightLossMealPlan from "../assets/weight_loss_meal_plan.jpg";

export const productImageMap: Record<string, ImageMetadata> = {
  "balanced_meal.jpg": balancedMeal,
  "image_four.jpg": imageFour,
  "image_six.jpg": imageSix,
  "image_seven.jpg": imageSeven,
  "image_five.jpg": imageFive,
  "muscle_gain.jpg": muscleGain,
  "plant_meal.jpg": plantMeal,
  "weight_loss_meal_plan.jpg": weightLossMealPlan,
};

export function getProductCover(image: string): ImageMetadata {
  return productImageMap[image] ?? imageFour;
}
