import type { ReactNode } from "react";
import {
  assessmentBackButtonClass,
  assessmentPrimaryButtonClass,
} from "./assessmentStyles";

interface Props {
  stepNumber: number;
  totalSteps: number;
  title: string;
  description?: string;
  onBack?: () => void;
  onNext: () => void;
  backLabel?: string;
  nextLabel?: string;
  isTransitioning?: boolean;
  children: ReactNode;
}

export default function AssessmentStep({
  stepNumber,
  totalSteps,
  title,
  description,
  onBack,
  onNext,
  backLabel = "← Back",
  nextLabel = "Continue",
  isTransitioning = false,
  children,
}: Props) {
  const progress = Math.round((stepNumber / totalSteps) * 100);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Step {stepNumber} of {totalSteps}
        </p>

        <div
          className="mx-auto mt-4 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Assessment progress: step ${stepNumber} of ${totalSteps}`}
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="mt-6 font-heading text-3xl leading-tight tracking-wider text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-lg text-base text-white/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="w-full">{children}</div>

      <div className="flex flex-col items-stretch gap-4 pt-2 sm:items-center">
        <button
          type="button"
          onClick={onNext}
          disabled={isTransitioning}
          aria-busy={isTransitioning}
          className={assessmentPrimaryButtonClass}
        >
          {isTransitioning ? "Loading..." : nextLabel}
        </button>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            disabled={isTransitioning}
            className={`${assessmentBackButtonClass} self-center`}
          >
            {backLabel}
          </button>
        )}
      </div>
    </div>
  );
}
