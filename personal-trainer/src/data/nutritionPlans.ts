import type { FaqItem, IconFeature, Product } from "./types";

const nutritionFaqs: FaqItem[] = [
  {
    question: "How do I get the plan after purchase?",
    answer: "Instantly. As soon as you check out you'll get access to the digital plan and all tracking tools — no waiting for shipping.",
  },
  {
    question: "Do I have to eat the exact meals listed?",
    answer: "No. The sample meals are a guide. As long as you hit your daily calorie and macro targets, you can swap foods freely using the included swap lists.",
  },
  {
    question: "Will this work with food allergies or preferences?",
    answer: "Yes. Every meal includes substitution options, and the macro framework lets you fit almost any food into your day.",
  },
  {
    question: "Do I need to count calories forever?",
    answer: "Not necessarily. The plan teaches you portion awareness so that, over time, you can maintain results without tracking every gram.",
  },
  {
    question: "Is this suitable for both men and women?",
    answer: "Yes. The calorie and macro calculations scale to your body and goals, so the plan works for everyone.",
  },
];

const youWillGetCards: IconFeature[] = [
  {
    icon: "macros",
    title: "Calories, Macros & Micros",
    body: "Learn exactly how to set up your calories, protein, carbs and fats based on your goal — whether you want to lose fat, build muscle, or do both.",
  },
  {
    icon: "meal",
    title: "Sample Meal Plans",
    body: "Even with a flexible approach where no foods are off limits, ready-made sample meal plans take the guesswork out of your daily food choices.",
  },
  {
    icon: "cardio",
    title: "Cardio",
    body: "How much cardio, what type, and when? LISS, HIIT, fasted or fed — all your cardio questions answered so you burn fat without burning out.",
  },
  {
    icon: "supplements",
    title: "Supplements",
    body: "Supplements aren't the most important factor, but the right ones help. You'll get the supplement tiers based on safety, cost and real efficacy.",
  },
  {
    icon: "sleep",
    title: "Sleep & Recovery",
    body: "How much sleep you really need, and the best tips for deeper, higher-quality rest so your body recovers and your results keep coming.",
  },
  {
    icon: "training",
    title: "Training Guidance",
    body: "Diet drives the results, but training matters too. You'll get sample splits and programming notes that pair perfectly with the plan.",
  },
  {
    icon: "timing",
    title: "Pre, Intra & Post-Workout",
    body: "Often neglected, nutrient timing around your training can sharpen performance and recovery. Learn how to time meals around your workouts.",
  },
  {
    icon: "coaching",
    title: "Self-Coaching & Updates",
    body: "Learn the art of self-coaching — how to adjust your diet on the fly and exactly what to do once you've reached your target to keep progress.",
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
    detail: {
      tagline:
        "A 12-week, calorie-controlled nutrition system that strips away body fat without crash dieting — built around foods you actually enjoy.",
      rating: 4.9,
      reviews: 214,
      badges: ["Most Popular", "Fat Loss"],
      optionLabel: "Plan Format",
      splits: ["Digital PDF", "PDF + App Access"],
      includedItems: [
        "12-Week Fat-Loss Meal Plan",
        "Weekly-Adjusted Macro Targets",
        "Grocery List Generator",
      ],
      whatsNew: [
        {
          title: "Calorie Targets That Adapt",
          body: "Your calorie and macro targets are recalculated as your weight drops, so fat loss keeps moving instead of stalling halfway through.",
        },
        {
          title: "Flexible, No Foods Banned",
          body: "Built on flexible dieting — nothing is strictly off limits, so the plan fits real life and you can stick with it long term.",
        },
        {
          title: "80+ High-Volume Recipes",
          body: "Filling, high-protein, lower-calorie recipes keep you full in a deficit, with prep times so you can cook fast on busy days.",
        },
        {
          title: "Auto Grocery Lists",
          body: "Generate a shopping list for the week in seconds so you walk into the store with a plan and out with exactly what you need.",
        },
      ],
      youWillGetIntro:
        "Everything you need to lose fat and keep it off — the science, the meals, and the day-to-day tools:",
      youWillGet: youWillGetCards,
      faqs: nutritionFaqs,
    },
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
    detail: {
      tagline:
        "A 16-week high-protein nutrition plan engineered to add lean muscle with a controlled surplus — so you grow without piling on excess fat.",
      rating: 4.8,
      reviews: 158,
      badges: ["New", "Muscle Gain"],
      optionLabel: "Plan Format",
      splits: ["Digital PDF", "PDF + App Access"],
      includedItems: [
        "16-Week High-Protein Plan",
        "Surplus Progression Guide",
        "Supplement Recommendations",
      ],
      whatsNew: [
        {
          title: "Controlled Lean-Bulk Surplus",
          body: "A precise calorie surplus that maximizes muscle growth while minimizing fat gain, with progression rules as your body weight climbs.",
        },
        {
          title: "Protein-First Meal Structure",
          body: "Every day is built around hitting a high protein target spread across your meals to keep muscle protein synthesis elevated.",
        },
        {
          title: "Workout Nutrient Timing",
          body: "Pre-, intra- and post-workout meal guidance so your training is fueled and recovery starts the moment you rack the last rep.",
        },
        {
          title: "Evidence-Based Supplements",
          body: "A no-hype breakdown of the supplements actually worth your money for building muscle, ranked by safety, cost and efficacy.",
        },
      ],
      youWillGetIntro:
        "Everything you need to build lean muscle efficiently — the science, the meals, and the timing:",
      youWillGet: youWillGetCards,
      faqs: nutritionFaqs,
    },
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
    detail: {
      tagline:
        "An 8-week framework for eating well and holding your results for good — no restrictive rules, just sustainable habits that fit your life.",
      rating: 4.7,
      reviews: 96,
      badges: ["New", "Maintenance"],
      optionLabel: "Plan Format",
      splits: ["Digital PDF", "PDF + App Access"],
      includedItems: [
        "8-Week Maintenance Framework",
        "Portion & Swap Guide",
        "Dining-Out Strategies",
      ],
      whatsNew: [
        {
          title: "Maintenance Without Tracking",
          body: "Learn portion awareness and simple habits so you can hold your physique without weighing or logging every single meal.",
        },
        {
          title: "No Restrictive Food Rules",
          body: "No banned foods and no all-or-nothing dieting — a balanced approach you can actually live with week after week.",
        },
        {
          title: "Real-Life Swap Options",
          body: "Easy portion guides and food swaps let you adapt any meal to what's in your kitchen or on the menu.",
        },
        {
          title: "Dining-Out Playbook",
          body: "Practical strategies for restaurants, travel and social events so eating out never derails your progress.",
        },
      ],
      youWillGetIntro:
        "Everything you need to eat well and maintain your results effortlessly — the habits, the meals, and the strategies:",
      youWillGet: youWillGetCards,
      faqs: nutritionFaqs,
    },
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
    detail: {
      tagline:
        "A 10-week vegan nutrition plan that proves plant-based eating can fuel serious performance — with complete protein and every micronutrient covered.",
      rating: 4.8,
      reviews: 112,
      badges: ["New", "Plant-Based"],
      optionLabel: "Plan Format",
      splits: ["Digital PDF", "PDF + App Access"],
      includedItems: [
        "10-Week Vegan High-Protein Plan",
        "Amino Acid Pairing Guide",
        "Micronutrient Checklist",
      ],
      whatsNew: [
        {
          title: "Complete Plant Protein",
          body: "An amino-acid pairing guide ensures every day delivers complete protein from plants, so muscle gets everything it needs to grow.",
        },
        {
          title: "Micronutrient Confidence",
          body: "A clear checklist covers the nutrients vegans need to watch — B12, iron, omega-3s and more — so nothing slips through the cracks.",
        },
        {
          title: "Batch-Cooking Schedules",
          body: "Efficient prep schedules let you cook once and eat all week, making a plant-based diet genuinely convenient.",
        },
        {
          title: "Performance-First Vegan Meals",
          body: "High-protein, energy-dense recipes designed to support hard training, not just to be 'plant-based' for its own sake.",
        },
      ],
      youWillGetIntro:
        "Everything you need to perform on a plant-based diet — the science, the meals, and the prep:",
      youWillGet: youWillGetCards,
      faqs: nutritionFaqs,
    },
  },
];
