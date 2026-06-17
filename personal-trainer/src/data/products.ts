export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  popular?: boolean;
}

export const trainingPrograms: Product[] = [
  {
    id: "beginner-strength",
    name: "Beginner Strength Program",
    price: 49,
    image: "image_four.jpg",
    features: [
      "12-week progressive overload plan",
      "3 gym sessions per week",
      "Exercise video library",
      "Weekly check-in template",
    ],
  },
  {
    id: "hypertrophy-builder",
    name: "Hypertrophy Builder",
    price: 69,
    image: "image_six.jpg",
    features: [
      "16-week muscle-building split",
      "4–5 training days per week",
      "Volume progression guide",
      "Deload week built in",
    ],
    popular: true,
  },
  {
    id: "powerlifting-foundation",
    name: "Powerlifting Foundation",
    price: 59,
    image: "image_seven.jpg",
    features: [
      "8-week squat, bench & deadlift focus",
      "Percentage-based programming",
      "Technique cue cheat sheet",
      "Competition peaking option",
    ],
  },
  {
    id: "home-workout-essentials",
    name: "Home Workout Essentials",
    price: 39,
    image: "image_five.jpg",
    features: [
      "10-week minimal-equipment plan",
      "Dumbbell & bodyweight only",
      "30–45 minute sessions",
      "Printable workout tracker",
    ],
  },
];

export const nutritionPlans: Product[] = [
  {
    id: "weight-loss-meal-plan",
    name: "Weight Loss Meal Plan",
    price: 45,
    image: "weight_loss_meal_plan.jpg",
    features: [
      "12-week calorie-controlled meal plan",
      "Macro targets adjusted weekly",
      "80+ easy recipes with prep times",
      "Grocery list generator",
    ],
    popular: true,
  },
  {
    id: "muscle-gain-meal-plan",
    name: "Muscle Gain Meal Plan",
    price: 55,
    image: "muscle_gain.jpg",
    features: [
      "16-week high-protein meal structure",
      "Calorie surplus progression guide",
      "Pre- and post-workout meal timing",
      "Supplement recommendations",
    ],
  },
  {
    id: "balanced-maintenance-plan",
    name: "Balanced Maintenance Plan",
    price: 39,
    image: "balanced_meal.jpg",
    features: [
      "Flexible 8-week maintenance framework",
      "No restrictive food rules",
      "Portion guide & swap options",
      "Dining-out strategies included",
    ],
  },
  {
    id: "plant-based-performance",
    name: "Plant-Based Performance Plan",
    price: 49,
    image: "plant_meal.jpg",
    features: [
      "10-week vegan high-protein plan",
      "Complete amino acid pairing guide",
      "Batch cooking schedules",
      "Micronutrient checklist",
    ],
  },
];
