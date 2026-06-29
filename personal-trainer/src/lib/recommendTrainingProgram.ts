import {
  experienceLabels,
  goalLabels,
  trainingDaysLabels,
  type AssessmentAnswers,
} from "./assessmentSchema";
import {
  buildProgramCtaHref,
  getProgramCatalogEntry,
  type ProgramCatalogId,
} from "./programCatalog";

export interface ProgramRecommendation {
  programId: string;
  programName: string;
  summary: string;
  reason: string;
  ctaLabel: string;
  ctaHref: string;
}

function buildRecommendation(
  catalogId: ProgramCatalogId,
  overrides: {
    programName?: string;
    reason: string;
  },
): ProgramRecommendation {
  const entry = getProgramCatalogEntry(catalogId);

  return {
    programId: entry.programId,
    programName: overrides.programName ?? entry.programName,
    summary: entry.summary,
    reason: overrides.reason,
    ctaLabel: entry.ctaLabel,
    ctaHref: buildProgramCtaHref(catalogId),
  };
}

function availabilityPhrase(trainingDays: AssessmentAnswers["trainingDays"]) {
  return trainingDaysLabels[trainingDays].toLowerCase();
}

export function recommendTrainingProgram(
  answers: AssessmentAnswers,
): ProgramRecommendation {
  const { goal, experienceLevel, trainingDays } = answers;
  const experience = experienceLabels[experienceLevel].toLowerCase();
  const goalLabel = goalLabels[goal].toLowerCase();
  const days = availabilityPhrase(trainingDays);

  if (goal === "muscle_gain" && experienceLevel === "beginner") {
    return buildRecommendation("beginner-strength", {
      programName: "Beginner Muscle Builder",
      reason: `As a ${experience} lifter focused on ${goalLabel}, you need a plan that teaches the basics while building muscle steadily. Beginner Muscle Builder gives you a clear full-body structure ${days} per week without overwhelming complexity.`,
    });
  }

  if (
    goal === "fat_loss" &&
    (trainingDays === "2" || trainingDays === "3")
  ) {
    return buildRecommendation("home-workout-essentials", {
      programName: "Fat Loss Express",
      reason: `With a ${goalLabel} goal and only ${days} available to train, Fat Loss Express keeps sessions short, efficient, and easy to stay consistent with — the biggest lever for sustainable fat loss.`,
    });
  }

  if (goal === "strength" && experienceLevel === "advanced") {
    return buildRecommendation("powerlifting-foundation", {
      programName: "Advanced Strength System",
      reason: `Your ${experience} background and ${goalLabel} focus call for precise loading on the big lifts. Advanced Strength System uses percentage-based programming to push your squat, bench, and deadlift with structured progression.`,
    });
  }

  if (goal === "general_fitness") {
    return buildRecommendation("home-workout-essentials", {
      programName: "Balanced Fitness Blueprint",
      reason: `For ${goalLabel}, consistency beats complexity. Balanced Fitness Blueprint fits ${days} per week with approachable sessions that build strength, conditioning, and habits you can maintain long term.`,
    });
  }

  if (goal === "muscle_gain") {
    return buildRecommendation("hypertrophy-builder", {
      reason: `With ${experience} experience and a ${goalLabel} goal, you are ready for higher training volume. Hypertrophy Builder adds strategic volume progression across ${days} per week to maximize muscle growth.`,
    });
  }

  if (goal === "strength") {
    return buildRecommendation("powerlifting-foundation", {
      reason: `Your ${experience} level and ${goalLabel} goal are a strong match for focused barbell work. Powerlifting Foundation builds your squat, bench, and deadlift with clear percentages and technique support.`,
    });
  }

  if (goal === "fat_loss") {
    return buildRecommendation("hypertrophy-builder", {
      reason: `Training ${days} per week with a ${goalLabel} goal works best when you preserve muscle while dieting. Hypertrophy Builder provides enough stimulus to retain lean mass and improve body composition.`,
    });
  }

  return buildRecommendation("beginner-strength", {
    reason: `Based on your ${experience} experience, ${goalLabel} goal, and ${days} availability, Beginner Strength Program is the most flexible starting point to build momentum safely.`,
  });
}
