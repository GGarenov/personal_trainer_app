import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  genderLabels,
  genderValues,
  personalInfoSchema,
  type PersonalInfo,
} from "../../lib/assessmentSchema";
import ProgramCoverCollage from "./ProgramCoverCollage";

interface ProgramCover {
  id: string;
  name: string;
  image: string;
}

interface Props {
  programCovers: ProgramCover[];
}

type View = "intro" | "quiz";

const inputClass =
  "w-full rounded border border-white/20 bg-dark px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-primary focus:outline-none";

const labelClass = "mb-2 block text-sm font-medium text-white/80";

const optionButtonClass = (selected: boolean) =>
  [
    "w-full rounded px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
    selected
      ? "bg-primary/90 text-dark"
      : "bg-primary text-dark hover:bg-primary/90",
  ].join(" ");

export default function TrainingAssessment({ programCovers }: Props) {
  const [view, setView] = useState<View>("intro");

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      age: "" as unknown as number,
      gender: undefined as unknown as PersonalInfo["gender"],
      heightCm: "" as unknown as number,
      weightKg: "" as unknown as number,
    },
    mode: "onTouched",
  });

  const selectedGender = watch("gender");

  const startQuiz = () => {
    setView("quiz");
    window.requestAnimationFrame(() => {
      document.getElementById("assessment-quiz")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const continueFromPersonalInfo = handleSubmit(() => {
    // Step navigation will be added in Phase 3.
  });

  if (view === "quiz") {
    return (
      <section
        id="assessment-quiz"
        className="mx-auto max-w-2xl px-6 py-16 md:py-24"
        aria-label="Training program assessment"
      >
        <button
          type="button"
          onClick={() => setView("intro")}
          className="mb-8 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-primary"
        >
          ← Back to intro
        </button>

        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Step 1 of 4
            </p>
            <h2 className="mt-3 font-heading text-4xl tracking-wider text-white md:text-5xl">
              Personal Information
            </h2>
            <p className="mt-3 text-white/70">
              Tell us a bit about yourself so we can tailor your recommendation.
            </p>
          </div>

          <div>
            <label htmlFor="age" className={labelClass}>
              Age
            </label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min={16}
              max={80}
              placeholder="e.g. 28"
              className={inputClass}
              aria-invalid={errors.age ? "true" : "false"}
              aria-describedby={errors.age ? "age-error" : undefined}
              {...register("age")}
            />
            {errors.age && (
              <p id="age-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.age.message}
              </p>
            )}
          </div>

          <fieldset>
            <legend className={`${labelClass} text-center`}>Gender</legend>
            <div className="space-y-3">
              {genderValues.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={optionButtonClass(selectedGender === value)}
                  onClick={() =>
                    setValue("gender", value, {
                      shouldValidate: true,
                      shouldTouch: true,
                    })
                  }
                >
                  {genderLabels[value]}
                </button>
              ))}
            </div>
            {errors.gender && (
              <p className="mt-2 text-center text-sm text-red-400" role="alert">
                {errors.gender.message}
              </p>
            )}
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="heightCm" className={labelClass}>
                Height (cm)
              </label>
              <input
                id="heightCm"
                type="number"
                inputMode="decimal"
                min={130}
                max={230}
                placeholder="e.g. 175"
                className={inputClass}
                aria-invalid={errors.heightCm ? "true" : "false"}
                aria-describedby={errors.heightCm ? "height-error" : undefined}
                {...register("heightCm")}
              />
              {errors.heightCm && (
                <p
                  id="height-error"
                  className="mt-2 text-sm text-red-400"
                  role="alert"
                >
                  {errors.heightCm.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="weightKg" className={labelClass}>
                Weight (kg)
              </label>
              <input
                id="weightKg"
                type="number"
                inputMode="decimal"
                min={35}
                max={250}
                placeholder="e.g. 78"
                className={inputClass}
                aria-invalid={errors.weightKg ? "true" : "false"}
                aria-describedby={errors.weightKg ? "weight-error" : undefined}
                {...register("weightKg")}
              />
              {errors.weightKg && (
                <p
                  id="weight-error"
                  className="mt-2 text-sm text-red-400"
                  role="alert"
                >
                  {errors.weightKg.message}
                </p>
              )}
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={continueFromPersonalInfo}
              className="inline-block rounded bg-primary px-10 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        Free Program Match
      </p>

      <h1 className="mt-4 font-heading text-4xl leading-tight tracking-wider text-white sm:text-5xl md:text-6xl">
        Find the Perfect Program for Your Goals
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
        Take this free quiz to get matched with the right program based on your
        goals and experience. Less than 10 questions and no sign-up required.
      </p>

      <div className="mt-10">
        <ProgramCoverCollage covers={programCovers} />
      </div>

      <button
        type="button"
        onClick={startQuiz}
        className="mt-10 inline-block rounded bg-primary px-10 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      >
        Start Quiz
      </button>
    </section>
  );
}
