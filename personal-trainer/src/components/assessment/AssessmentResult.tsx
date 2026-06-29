import {
  experienceLabels,
  genderLabels,
  goalLabels,
  trainingDaysLabels,
  type AssessmentAnswers,
} from "../../lib/assessmentSchema";
import {
  assessmentCardClass,
  assessmentPrimaryButtonClass,
  assessmentSecondaryLinkClass,
} from "./assessmentStyles";

interface Props {
  programId: string;
  programName: string;
  programSummary: string;
  reason: string;
  ctaHref: string;
  ctaLabel: string;
  programImage?: string;
  answers: AssessmentAnswers;
  onRetake: () => void;
  isTransitioning?: boolean;
}

export default function AssessmentResult({
  programId,
  programName,
  programSummary,
  reason,
  ctaHref,
  ctaLabel,
  programImage,
  answers,
  onRetake,
  isTransitioning = false,
}: Props) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Your Match
        </p>
        <h2 className="mt-3 font-heading text-3xl leading-tight tracking-wider text-white sm:text-4xl md:text-5xl">
          {programName}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          {programSummary}
        </p>
      </div>

      {programImage && (
        <div className="mx-auto w-full max-w-[16rem] overflow-hidden rounded-lg border border-white/10 bg-surface shadow-xl sm:max-w-xs">
          <img
            src={programImage}
            alt={programName}
            className="aspect-[3/4] w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      <div className={`${assessmentCardClass} text-left`}>
        <h3 className="font-heading text-2xl tracking-wider text-white">
          Why this program
        </h3>
        <p className="mt-3 text-base leading-relaxed text-white/75">{reason}</p>
      </div>

      <div className={`${assessmentCardClass} bg-surface/40 text-left`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Your answers
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
          <li>Age: {answers.age}</li>
          <li>Gender: {genderLabels[answers.gender]}</li>
          <li>Height: {answers.heightCm} cm</li>
          <li>Weight: {answers.weightKg} kg</li>
          <li>Experience: {experienceLabels[answers.experienceLevel]}</li>
          <li>Goal: {goalLabels[answers.goal]}</li>
          <li className="sm:col-span-2">
            Training days: {trainingDaysLabels[answers.trainingDays]}
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-stretch gap-3 pt-2 text-center sm:items-center sm:gap-4">
        <a
          href={ctaHref}
          data-program-id={programId}
          className={assessmentPrimaryButtonClass}
          aria-disabled={isTransitioning}
        >
          {ctaLabel}
        </a>

        <a href="/programs" className={`${assessmentSecondaryLinkClass} self-center`}>
          Browse all programs
        </a>

        <button
          type="button"
          onClick={onRetake}
          disabled={isTransitioning}
          className={`${assessmentSecondaryLinkClass} self-center disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
