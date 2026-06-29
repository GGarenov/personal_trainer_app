export interface DetailFeature {
  title: string;
  body: string;
}

export interface IconFeature {
  icon: string;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProgramDetail {
  tagline: string;
  rating: number;
  reviews: number;
  badges: string[];
  splits: string[];
  optionLabel?: string;
  includedItems: string[];
  whatsNew: DetailFeature[];
  whatsIncluded?: DetailFeature[];
  highlights?: string[];
  needs?: string;
  youWillGetIntro?: string;
  youWillGet?: IconFeature[];
  faqs: FaqItem[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  popular?: boolean;
  detail?: ProgramDetail;
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
    detail: {
      tagline:
        "Build a rock-solid strength foundation in 12 weeks with simple, repeatable full-body sessions designed for people who are new to lifting.",
      rating: 4.8,
      reviews: 168,
      badges: ["New", "Beginner Friendly"],
      splits: ["3x per week", "4x per week"],
      includedItems: [
        "12-Week Beginner Strength Plan",
        "Exercise Video Library",
        "Weekly Check-in Template",
      ],
      whatsNew: [
        {
          title: "Foundations-First Approach",
          body: "Every session starts with the big basics — squat, hinge, press and pull — taught with clear form cues so you build confidence before you build load.",
        },
        {
          title: "Auto-Regulated Progression",
          body: "Simple week-to-week loading rules tell you exactly when to add weight, so you keep progressing without guessing or overtraining.",
        },
        {
          title: "3-Day Full-Body Split",
          body: "Train just three days a week with full-body sessions that fit a busy schedule while still hitting every muscle group hard enough to grow.",
        },
        {
          title: "Built to Remove Overwhelm",
          body: "No endless exercise lists or complicated jargon — a focused plan that tells you what to do, in what order, every single session.",
        },
      ],
      whatsIncluded: [
        {
          title: "12-Week Program PDF",
          body: "A complete, day-by-day strength plan built on progressive overload, with warm-ups, sets, reps and rest times laid out for you.",
        },
        {
          title: "Exercise Video Library",
          body: "Short, clear demos for every movement so you can learn perfect technique and train safely from day one.",
        },
        {
          title: "Weekly Check-In Template",
          body: "A simple tracker to log your lifts and body metrics each week so you can see real, measurable progress.",
        },
      ],
      highlights: [
        "Full video demos for every exercise — learn perfect form.",
        "Beginner-friendly warm-ups, sets, reps and rest times included.",
        "Substitution options for limited equipment or home setups.",
        "Backed by science — progressive overload explained simply.",
      ],
      needs: "This program is designed to be run in any standard gym, but it works just as well in a basic home setup. To follow it exactly you'll want access to a barbell and rack, a bench and some dumbbells. Every exercise also includes machine and bodyweight substitutions, so you can adapt the plan to whatever equipment you have.",
      faqs: [
        {
          question: "I've never lifted before — is this right for me?",
          answer: "Yes! This program was built specifically for beginners. Every exercise includes a video demo and clear cues, and the loading starts light so you can master technique first.",
        },
        {
          question: "Can I run this program more than once?",
          answer: "Absolutely. After Week 12 you can loop back to Week 1 with heavier loads, or progress into the Hypertrophy Builder to keep developing.",
        },
        {
          question: "What if I can only train twice a week?",
          answer: "The 3x plan can be condensed into two full-body sessions — the program explains exactly how to combine days without losing the key stimulus.",
        },
        {
          question: "Do I need a full gym?",
          answer: "No. A well-equipped commercial gym is ideal, but every movement has a home or minimal-equipment substitution so you can run it with dumbbells and a bench.",
        },
        {
          question: "How long does each workout take?",
          answer: "Most sessions take 45–60 minutes including the warm-up.",
        },
        {
          question: "Is this suitable for both men and women?",
          answer: "Yes. The principles of progressive overload apply to everyone — the plan works identically regardless of gender.",
        },
      ],
    },
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
    detail: {
      tagline:
        "A 16-week, science-based hypertrophy plan that maximizes muscle growth with smart volume progression and built-in deloads.",
      rating: 4.9,
      reviews: 243,
      badges: ["Most Popular", "Intermediate–Advanced"],
      splits: ["4x per week", "5x per week"],
      includedItems: [
        "16-Week Hypertrophy Program",
        "Volume Progression Spreadsheet",
        "90+ Exercise Tutorial Videos",
      ],
      whatsNew: [
        {
          title: "Volume That Progresses With You",
          body: "Sets are added strategically across each block so you keep accumulating growth-driving volume without burning out or stalling.",
        },
        {
          title: "Two-Block Periodization",
          body: "The 16 weeks are split into two blocks — an accumulation phase to build volume, followed by an intensification phase using advanced techniques like drop sets and myo-reps.",
        },
        {
          title: "4-Day and 5-Day Splits",
          body: "Choose between an Upper/Lower split or a Push/Pull/Legs style split, each engineered to hit every muscle with the right weekly frequency.",
        },
        {
          title: "Deload Weeks Built In",
          body: "Planned recovery weeks keep your joints fresh and your progress consistent, so you grow over the long term instead of crashing.",
        },
      ],
      whatsIncluded: [
        {
          title: "16-Week Program PDF",
          body: "A full muscle-building split with exact sets, reps, RIR targets and rest times, structured into two progressive training blocks.",
        },
        {
          title: "Volume Progression Spreadsheet",
          body: "An interactive tracker that lets you log every set and automatically guides your weekly volume so you train with purpose.",
        },
        {
          title: "90+ Tutorial Videos",
          body: "Detailed demos for every exercise, including advanced intensity techniques, so you execute each rep with growth-maximizing form.",
        },
      ],
      highlights: [
        "Full video demos for every exercise — click to watch perfect form.",
        "Precise warm-ups, sets, reps, rest times and RIR targets included.",
        "Substitution options for every movement — swap by equipment.",
        "Backed by science — explains why each technique drives growth.",
      ],
      needs: "This program leans into machine and cable work to maximize muscle tension and stability. To run it exactly as written, a well-equipped commercial gym with standard machines and a cable stack is ideal. That said, every exercise includes barbell and dumbbell alternatives, so you can absolutely make it work with an adjustable bench, a pull-up bar and some dumbbells if you train at home.",
      faqs: [
        {
          question: "Can I run this program more than once?",
          answer: "Yes! After Week 16 you can loop back to Week 1 with heavier loads. The program is designed to support multiple rounds.",
        },
        {
          question: "What if I can only train 3x/week?",
          answer: "Go with the 4x version — the program includes a simple explanation of how to modify it to fit a 3-day-per-week schedule.",
        },
        {
          question: "Is this program good for recomposition or fat loss?",
          answer: "Yes. While the focus is muscle growth, the structure works well in a slight deficit to recomp, especially with the volume guidance included.",
        },
        {
          question: "Is this program good for maintenance or bulking?",
          answer: "Definitely. It is built to maximize hypertrophy, which means it shines in a surplus, but it also retains muscle at maintenance.",
        },
        {
          question: "Do I need machines or a full gym?",
          answer: "The program leans into machine efficiency, but every exercise includes free-weight substitutions, so a well-equipped home gym works fine.",
        },
        {
          question: "Is there cardio included?",
          answer: "It's optional. If fat loss is a goal you can add 2–4 low/moderate cardio sessions weekly, but diet is the main lever.",
        },
        {
          question: "How long should each workout last?",
          answer: "Each session takes roughly 60–75 minutes including the warm-up.",
        },
        {
          question: "Is this program suitable for both men and women?",
          answer: "Yes. The programming principles apply equally to everyone aiming to build muscle.",
        },
      ],
    },
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
    detail: {
      tagline:
        "An 8-week percentage-based plan to add serious strength to your squat, bench and deadlift — with an optional competition peak.",
      rating: 4.8,
      reviews: 121,
      badges: ["New", "Intermediate"],
      splits: ["3x per week", "4x per week"],
      includedItems: [
        "8-Week Powerlifting Plan",
        "Percentage-Based Spreadsheet",
        "Technique Cue Cheat Sheet",
      ],
      whatsNew: [
        {
          title: "Built Around the Big Three",
          body: "Every session is organized around the squat, bench press and deadlift, with accessory work chosen to bring up your weak points.",
        },
        {
          title: "Percentage-Based Programming",
          body: "Loads are prescribed as a percentage of your training max so progression is precise, repeatable and easy to auto-regulate.",
        },
        {
          title: "Technique Cue Cheat Sheet",
          body: "A quick-reference guide of the most important cues for each main lift, so you reinforce flawless technique under heavier loads.",
        },
        {
          title: "Optional Competition Peak",
          body: "A built-in peaking block primes you for a meet or a one-rep-max test, so you can show off the strength you've built.",
        },
      ],
      whatsIncluded: [
        {
          title: "8-Week Program PDF",
          body: "A complete strength block with main lifts, accessories, sets, reps and prescribed percentages mapped out week by week.",
        },
        {
          title: "Percentage Spreadsheet",
          body: "Enter your training maxes and the sheet auto-calculates every working weight for the entire program.",
        },
        {
          title: "Technique Cue Cheat Sheet",
          body: "A focused reference for squat, bench and deadlift cues so your form holds up as the bar gets heavy.",
        },
      ],
      highlights: [
        "Video demos for the squat, bench, deadlift and key accessories.",
        "Exact percentages, sets, reps and rest times prescribed.",
        "Accessory substitutions to target your individual weak points.",
        "Optional peaking block to test a true one-rep max or compete.",
      ],
      needs: "To run this program you'll need access to a barbell, plates, a power rack or squat stands, and a flat bench — a standard commercial or well-equipped home gym is perfect. A few accessory exercises use cables or machines, but free-weight and bodyweight substitutions are provided throughout.",
      faqs: [
        {
          question: "Do I need to know my one-rep max?",
          answer: "An estimate is fine. The program explains how to set a training max from a recent heavy set, and the spreadsheet does the rest.",
        },
        {
          question: "Is this suitable for true beginners?",
          answer: "It's best once you can perform the main lifts with confident technique. If you're brand new, start with the Beginner Strength Program first.",
        },
        {
          question: "Can I compete after this program?",
          answer: "Yes — the optional peaking block is designed to prime you for a meet or a max-out test at the end of the 8 weeks.",
        },
        {
          question: "Can I run it more than once?",
          answer: "Definitely. Re-enter your new maxes into the spreadsheet and run another 8-week block to keep getting stronger.",
        },
        {
          question: "How long does each session take?",
          answer: "Strength sessions take about 60–90 minutes given the longer rest periods between heavy sets.",
        },
        {
          question: "Is this suitable for both men and women?",
          answer: "Yes. Percentage-based strength programming works identically regardless of gender.",
        },
      ],
    },
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
    detail: {
      tagline:
        "A 10-week plan that delivers real results at home in 30–45 minutes a session — using just dumbbells and your bodyweight.",
      rating: 4.7,
      reviews: 96,
      badges: ["New", "All Experience Levels"],
      splits: ["3x per week", "4x per week"],
      includedItems: [
        "10-Week Home Training Plan",
        "Printable Workout Tracker",
        "Exercise Video Library",
      ],
      whatsNew: [
        {
          title: "Minimal Equipment, Maximum Output",
          body: "Every workout is built around a single pair of adjustable dumbbells and your bodyweight, so you can train hard without a full gym.",
        },
        {
          title: "Short, Efficient Sessions",
          body: "Each workout takes just 30–45 minutes, using supersets and smart rest timing to keep intensity high and time in check.",
        },
        {
          title: "Progression Without Heavy Weights",
          body: "Tempo changes, unilateral work and rep progressions let you keep getting stronger even with limited load available.",
        },
        {
          title: "Train Anywhere",
          body: "A living room, garage or hotel room is all you need — the plan is designed to travel with you and stay consistent.",
        },
      ],
      whatsIncluded: [
        {
          title: "10-Week Program PDF",
          body: "A full home-training plan with sets, reps, tempos and rest times laid out for every session across all 10 weeks.",
        },
        {
          title: "Printable Workout Tracker",
          body: "A clean, printable log so you can record every session and watch your reps and loads climb week over week.",
        },
        {
          title: "Exercise Video Library",
          body: "Clear demos for every dumbbell and bodyweight movement so you can train with great form on your own.",
        },
      ],
      highlights: [
        "Full video demos for every dumbbell and bodyweight exercise.",
        "Tempo, sets, reps and rest times prescribed for each session.",
        "Progressions and regressions so any level can follow along.",
        "Designed for 30–45 minute sessions you can do anywhere.",
      ],
      needs: "All you need is a pair of dumbbells (adjustable dumbbells are ideal), a little floor space and somewhere to do rows or pull-ups if available. Every exercise includes regressions for less equipment and progressions for when a movement gets easy, so the plan scales with you.",
      faqs: [
        {
          question: "What equipment do I actually need?",
          answer: "Just a pair of dumbbells and your bodyweight. Adjustable dumbbells are ideal, and a bench or sturdy chair is a useful bonus but not required.",
        },
        {
          question: "Can I get real results training at home?",
          answer: "Yes. Through progressive tempos, unilateral work and rep progressions, the program keeps challenging your muscles without needing heavy gym machines.",
        },
        {
          question: "Is this good for beginners?",
          answer: "Definitely. Every movement includes an easier regression, so beginners can start comfortably and scale up over the 10 weeks.",
        },
        {
          question: "How long are the workouts?",
          answer: "Each session is designed to take 30–45 minutes, including a short warm-up.",
        },
        {
          question: "Can I run the program more than once?",
          answer: "Yes. Loop back to Week 1 with heavier dumbbells or harder progressions to keep advancing.",
        },
        {
          question: "Is this suitable for both men and women?",
          answer: "Yes. The plan works identically for everyone training at home.",
        },
      ],
    },
  },
];

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
