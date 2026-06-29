export interface ProgramCatalogEntry {
  programId: string;
  programName: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
}

export const programCatalog = {
  "beginner-strength": {
    programId: "beginner-strength",
    programName: "Beginner Strength Program",
    summary:
      "A 12-week full-body plan built for new lifters who need simple structure and steady progress.",
    ctaLabel: "View Program",
    ctaHref: "/programs/beginner-strength",
  },
  "hypertrophy-builder": {
    programId: "hypertrophy-builder",
    programName: "Hypertrophy Builder",
    summary:
      "A 16-week muscle-building split with smart volume progression and built-in deloads.",
    ctaLabel: "View Program",
    ctaHref: "/programs/hypertrophy-builder",
  },
  "powerlifting-foundation": {
    programId: "powerlifting-foundation",
    programName: "Powerlifting Foundation",
    summary:
      "An 8-week squat, bench, and deadlift plan with percentage-based loading and optional peaking.",
    ctaLabel: "View Program",
    ctaHref: "/programs/powerlifting-foundation",
  },
  "home-workout-essentials": {
    programId: "home-workout-essentials",
    programName: "Home Workout Essentials",
    summary:
      "A 10-week minimal-equipment plan with efficient 30–45 minute sessions you can do anywhere.",
    ctaLabel: "View Program",
    ctaHref: "/programs/home-workout-essentials",
  },
} as const satisfies Record<string, ProgramCatalogEntry>;

export type ProgramCatalogId = keyof typeof programCatalog;

export const PROGRAM_SELECTOR_REF = "program-selector";

export function getProgramCatalogEntry(id: ProgramCatalogId): ProgramCatalogEntry {
  return programCatalog[id];
}

export function buildProgramCtaHref(
  id: ProgramCatalogId,
  ref: string = PROGRAM_SELECTOR_REF,
): string {
  const baseHref = programCatalog[id].ctaHref;
  return `${baseHref}?ref=${encodeURIComponent(ref)}`;
}
