export const assessmentInputClass =
  "w-full min-h-12 rounded border border-white/20 bg-surface px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

export const assessmentLabelClass =
  "mb-2 block text-sm font-medium text-white/80";

export const assessmentErrorClass = "mt-2 text-sm text-red-400";

export const assessmentPrimaryButtonClass =
  "inline-flex w-full min-h-12 items-center justify-center rounded bg-primary px-10 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[12rem]";

export const assessmentBackButtonClass =
  "min-h-11 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-50";

export const assessmentSecondaryLinkClass =
  "min-h-11 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-primary";

export const assessmentCardClass =
  "rounded-lg border border-white/10 bg-surface/60 px-5 py-5 sm:px-6";

export function assessmentOptionButtonClass(selected: boolean, disabled = false) {
  return [
    "w-full min-h-[3.25rem] rounded px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
    selected
      ? "bg-primary text-dark shadow-[0_0_0_1px_rgba(232,255,0,0.35)]"
      : "border border-white/15 bg-surface text-white hover:border-primary/40 hover:bg-surface/80",
    disabled ? "pointer-events-none opacity-60" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export const assessmentOptionListClass = "flex w-full flex-col gap-3";

export const assessmentSectionClass =
  "mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 sm:py-16 md:py-24";

export const assessmentIntroSectionClass =
  "mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16 md:py-24";
