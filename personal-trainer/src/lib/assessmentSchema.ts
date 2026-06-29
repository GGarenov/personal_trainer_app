import { z } from "zod";

export const genderValues = ["male", "female", "prefer_not_to_say"] as const;
export const experienceLevelValues = [
  "beginner",
  "intermediate",
  "advanced",
] as const;
export const goalValues = [
  "fat_loss",
  "muscle_gain",
  "strength",
  "general_fitness",
] as const;
export const trainingDaysValues = ["2", "3", "4", "5_plus"] as const;

export const genderSchema = z.enum(genderValues, {
  error: "Please select your gender.",
});

export const experienceLevelSchema = z.enum(experienceLevelValues, {
  error: "Please select your training experience.",
});

export const goalSchema = z.enum(goalValues, {
  error: "Please select your primary goal.",
});

export const trainingDaysSchema = z.enum(trainingDaysValues, {
  error: "Please select how many days you can train each week.",
});

const numberField = (label: string, min: number, max: number) =>
  z.coerce
    .number({
      error: `Please enter a valid ${label.toLowerCase()}.`,
    })
    .refine((value) => Number.isFinite(value), {
      message: `Please enter a valid ${label.toLowerCase()}.`,
    })
    .min(min, `${label} must be at least ${min}.`)
    .max(max, `${label} must be ${max} or less.`);

export const personalInfoSchema = z.object({
  age: numberField("Age", 16, 80),
  gender: genderSchema,
  heightCm: numberField("Height", 130, 230),
  weightKg: numberField("Weight", 35, 250),
});

export const experienceSchema = z.object({
  experienceLevel: experienceLevelSchema,
});

export const goalStepSchema = z.object({
  goal: goalSchema,
});

export const availabilitySchema = z.object({
  trainingDays: trainingDaysSchema,
});

export const assessmentSchema = personalInfoSchema
  .merge(experienceSchema)
  .merge(goalStepSchema)
  .merge(availabilitySchema);

export type Gender = z.infer<typeof genderSchema>;
export type ExperienceLevel = z.infer<typeof experienceLevelSchema>;
export type Goal = z.infer<typeof goalSchema>;
export type TrainingDays = z.infer<typeof trainingDaysSchema>;
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ExperienceAnswers = z.infer<typeof experienceSchema>;
export type GoalAnswers = z.infer<typeof goalStepSchema>;
export type AvailabilityAnswers = z.infer<typeof availabilitySchema>;
export type AssessmentAnswers = z.infer<typeof assessmentSchema>;

export const personalInfoFields = [
  "age",
  "gender",
  "heightCm",
  "weightKg",
] as const satisfies readonly (keyof PersonalInfo)[];

export const experienceFields = [
  "experienceLevel",
] as const satisfies readonly (keyof ExperienceAnswers)[];

export const goalFields = ["goal"] as const satisfies readonly (keyof GoalAnswers)[];

export const availabilityFields = [
  "trainingDays",
] as const satisfies readonly (keyof AvailabilityAnswers)[];

export const genderLabels: Record<Gender, string> = {
  male: "I am Male",
  female: "I am Female",
  prefer_not_to_say: "Rather Not Say",
};

export const experienceLabels: Record<ExperienceLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const goalLabels: Record<Goal, string> = {
  fat_loss: "Fat Loss",
  muscle_gain: "Muscle Gain",
  strength: "Strength",
  general_fitness: "General Fitness",
};

export const trainingDaysLabels: Record<TrainingDays, string> = {
  "2": "2 days",
  "3": "3 days",
  "4": "4 days",
  "5_plus": "5+ days",
};
