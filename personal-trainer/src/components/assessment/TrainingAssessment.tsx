import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  assessmentSchema,
  assessmentSteps,
  experienceLabels,
  experienceLevelValues,
  genderLabels,
  genderValues,
  goalLabels,
  goalValues,
  trainingDaysLabels,
  trainingDaysValues,
  type AssessmentAnswers,
  type ExperienceLevel,
  type Gender,
  type Goal,
  type TrainingDays,
} from "../../lib/assessmentSchema";
import { recommendTrainingProgram } from "../../lib/recommendTrainingProgram";
import AssessmentOptionButton from "./AssessmentOptionButton";
import AssessmentResult from "./AssessmentResult";
import AssessmentStep from "./AssessmentStep";
import ProgramCoverCollage from "./ProgramCoverCollage";
import {
  assessmentErrorClass,
  assessmentInputClass,
  assessmentIntroSectionClass,
  assessmentLabelClass,
  assessmentOptionListClass,
  assessmentPrimaryButtonClass,
  assessmentSectionClass,
} from "./assessmentStyles";

interface ProgramCover {
  id: string;
  name: string;
  image: string;
}

interface Props {
  programCovers: ProgramCover[];
}

type View = "intro" | "quiz" | "result";

const emptyDefaults: AssessmentAnswers = {
  age: "" as unknown as number,
  gender: undefined as unknown as Gender,
  heightCm: "" as unknown as number,
  weightKg: "" as unknown as number,
  experienceLevel: undefined as unknown as ExperienceLevel,
  goal: undefined as unknown as Goal,
  trainingDays: undefined as unknown as TrainingDays,
};

const TRANSITION_MS = 200;

export default function TrainingAssessment({ programCovers }: Props) {
  const [view, setView] = useState<View>("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const {
    register,
    setValue,
    watch,
    getValues,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<AssessmentAnswers>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: emptyDefaults,
    mode: "onTouched",
  });

  const currentStep = assessmentSteps[stepIndex];
  const isLastStep = stepIndex === assessmentSteps.length - 1;
  const answers = watch();

  const scrollToQuiz = () => {
    window.requestAnimationFrame(() => {
      document.getElementById("assessment-quiz")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const withTransition = (action: () => void) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    action();
    scrollToQuiz();

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_MS);
  };

  const startQuiz = () => {
    withTransition(() => {
      setStepIndex(0);
      setView("quiz");
    });
  };

  const retakeQuiz = () => {
    withTransition(() => {
      reset(emptyDefaults);
      setStepIndex(0);
      setView("intro");
    });
  };

  const validateCurrentStep = () => {
    const fields = currentStep.fields;
    const stepValues = fields.reduce(
      (accumulator, field) => ({
        ...accumulator,
        [field]: getValues(field),
      }),
      {} as Record<string, unknown>,
    );

    const result = currentStep.schema.safeParse(stepValues);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof AssessmentAnswers;
        setError(field, { type: "manual", message: issue.message });
      });
      return false;
    }

    clearErrors([...fields]);
    return true;
  };

  const handleNext = () => {
    if (isTransitioning || !validateCurrentStep()) return;

    withTransition(() => {
      if (isLastStep) {
        const fullResult = assessmentSchema.safeParse(getValues());
        if (!fullResult.success) return;
        setView("result");
        return;
      }

      setStepIndex((current) => current + 1);
    });
  };

  const handleBack = () => {
    if (isTransitioning) return;

    withTransition(() => {
      if (stepIndex === 0) {
        setView("intro");
        return;
      }

      setStepIndex((current) => current - 1);
    });
  };

  const setOption = (
    field: keyof AssessmentAnswers,
    value: AssessmentAnswers[keyof AssessmentAnswers],
  ) => {
    if (isTransitioning) return;

    setValue(field, value as never, {
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const renderStepFields = () => {
    switch (currentStep.id) {
      case "personal":
        return (
          <div className="space-y-8">
            <div>
              <label htmlFor="age" className={assessmentLabelClass}>
                Age
              </label>
              <input
                id="age"
                type="number"
                inputMode="numeric"
                min={16}
                max={80}
                placeholder="e.g. 28"
                className={assessmentInputClass}
                disabled={isTransitioning}
                aria-invalid={errors.age ? "true" : "false"}
                aria-describedby={errors.age ? "age-error" : undefined}
                {...register("age")}
              />
              {errors.age && (
                <p id="age-error" className={assessmentErrorClass} role="alert">
                  {errors.age.message}
                </p>
              )}
            </div>

            <fieldset disabled={isTransitioning}>
              <legend className={`${assessmentLabelClass} text-center`}>
                Gender
              </legend>
              <div className={assessmentOptionListClass}>
                {genderValues.map((value) => (
                  <AssessmentOptionButton
                    key={value}
                    selected={answers.gender === value}
                    disabled={isTransitioning}
                    onClick={() => setOption("gender", value)}
                  >
                    {genderLabels[value]}
                  </AssessmentOptionButton>
                ))}
              </div>
              {errors.gender && (
                <p className={`${assessmentErrorClass} text-center`} role="alert">
                  {errors.gender.message}
                </p>
              )}
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="heightCm" className={assessmentLabelClass}>
                  Height (cm)
                </label>
                <input
                  id="heightCm"
                  type="number"
                  inputMode="decimal"
                  min={130}
                  max={230}
                  placeholder="e.g. 175"
                  className={assessmentInputClass}
                  disabled={isTransitioning}
                  aria-invalid={errors.heightCm ? "true" : "false"}
                  aria-describedby={errors.heightCm ? "height-error" : undefined}
                  {...register("heightCm")}
                />
                {errors.heightCm && (
                  <p id="height-error" className={assessmentErrorClass} role="alert">
                    {errors.heightCm.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="weightKg" className={assessmentLabelClass}>
                  Weight (kg)
                </label>
                <input
                  id="weightKg"
                  type="number"
                  inputMode="decimal"
                  min={35}
                  max={250}
                  placeholder="e.g. 78"
                  className={assessmentInputClass}
                  disabled={isTransitioning}
                  aria-invalid={errors.weightKg ? "true" : "false"}
                  aria-describedby={errors.weightKg ? "weight-error" : undefined}
                  {...register("weightKg")}
                />
                {errors.weightKg && (
                  <p id="weight-error" className={assessmentErrorClass} role="alert">
                    {errors.weightKg.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <fieldset disabled={isTransitioning}>
            <legend className="sr-only">Training experience</legend>
            <div className={assessmentOptionListClass}>
              {experienceLevelValues.map((value) => (
                <AssessmentOptionButton
                  key={value}
                  selected={answers.experienceLevel === value}
                  disabled={isTransitioning}
                  onClick={() => setOption("experienceLevel", value)}
                >
                  {experienceLabels[value]}
                </AssessmentOptionButton>
              ))}
            </div>
            {errors.experienceLevel && (
              <p className={`${assessmentErrorClass} text-center`} role="alert">
                {errors.experienceLevel.message}
              </p>
            )}
          </fieldset>
        );

      case "goal":
        return (
          <fieldset disabled={isTransitioning}>
            <legend className="sr-only">Primary goal</legend>
            <div className={assessmentOptionListClass}>
              {goalValues.map((value) => (
                <AssessmentOptionButton
                  key={value}
                  selected={answers.goal === value}
                  disabled={isTransitioning}
                  onClick={() => setOption("goal", value)}
                >
                  {goalLabels[value]}
                </AssessmentOptionButton>
              ))}
            </div>
            {errors.goal && (
              <p className={`${assessmentErrorClass} text-center`} role="alert">
                {errors.goal.message}
              </p>
            )}
          </fieldset>
        );

      case "availability":
        return (
          <fieldset disabled={isTransitioning}>
            <legend className="sr-only">Weekly training availability</legend>
            <div className={assessmentOptionListClass}>
              {trainingDaysValues.map((value) => (
                <AssessmentOptionButton
                  key={value}
                  selected={answers.trainingDays === value}
                  disabled={isTransitioning}
                  onClick={() => setOption("trainingDays", value)}
                >
                  {trainingDaysLabels[value]}
                </AssessmentOptionButton>
              ))}
            </div>
            {errors.trainingDays && (
              <p className={`${assessmentErrorClass} text-center`} role="alert">
                {errors.trainingDays.message}
              </p>
            )}
          </fieldset>
        );

      default:
        return null;
    }
  };

  if (view === "result") {
    const resultAnswers = getValues();
    const recommendation = recommendTrainingProgram(resultAnswers);
    const programImage = programCovers.find(
      (cover) => cover.id === recommendation.programId,
    )?.image;

    return (
      <section
        id="assessment-quiz"
        className={assessmentSectionClass}
        aria-label="Training program assessment result"
      >
        <AssessmentResult
          programId={recommendation.programId}
          programName={recommendation.programName}
          programSummary={recommendation.summary}
          reason={recommendation.reason}
          ctaHref={recommendation.ctaHref}
          ctaLabel={recommendation.ctaLabel}
          programImage={programImage}
          answers={resultAnswers}
          onRetake={retakeQuiz}
          isTransitioning={isTransitioning}
        />
      </section>
    );
  }

  if (view === "quiz") {
    return (
      <section
        id="assessment-quiz"
        className={assessmentSectionClass}
        aria-label="Training program assessment"
      >
        <AssessmentStep
          stepNumber={stepIndex + 1}
          totalSteps={assessmentSteps.length}
          title={currentStep.title}
          description={currentStep.description}
          onBack={handleBack}
          onNext={handleNext}
          nextLabel={isLastStep ? "See My Program" : "Continue"}
          backLabel={stepIndex === 0 ? "← Back to intro" : "← Back"}
          isTransitioning={isTransitioning}
        >
          {renderStepFields()}
        </AssessmentStep>
      </section>
    );
  }

  return (
    <section className={assessmentIntroSectionClass}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        Free Program Match
      </p>

      <h1 className="mt-4 font-heading text-4xl leading-tight tracking-wider text-white sm:text-5xl md:text-6xl">
        Find the Perfect Program for Your Goals
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
        Take this free quiz to get matched with the right program based on your
        goals and experience. Less than 10 questions and no sign-up required.
      </p>

      <div className="mt-8 sm:mt-10">
        <ProgramCoverCollage covers={programCovers} />
      </div>

      <button
        type="button"
        onClick={startQuiz}
        disabled={isTransitioning}
        className={`${assessmentPrimaryButtonClass} mt-8 sm:mt-10`}
      >
        {isTransitioning ? "Loading..." : "Start Quiz"}
      </button>
    </section>
  );
}
