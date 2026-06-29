export interface CalendlyPrefillFields {
  name?: string;
  email?: string;
}

export interface CalendlyPrefill {
  name?: string;
  email?: string;
}

export function buildCalendlyPrefill({
  name,
  email,
}: CalendlyPrefillFields): CalendlyPrefill | undefined {
  if (!name && !email) return undefined;

  return {
    ...(name ? { name } : {}),
    ...(email ? { email } : {}),
  };
}
