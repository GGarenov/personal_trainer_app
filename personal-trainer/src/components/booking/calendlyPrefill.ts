import type { Prefill } from "react-calendly";

export interface CalendlyPrefillFields {
  name?: string;
  email?: string;
}

export function buildCalendlyPrefill({
  name,
  email,
}: CalendlyPrefillFields): Prefill | undefined {
  if (!name && !email) return undefined;

  return {
    ...(name ? { name } : {}),
    ...(email ? { email } : {}),
  };
}
