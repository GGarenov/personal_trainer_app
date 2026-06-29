/**
 * @param {{ name?: string; email?: string }} fields
 * @returns {import("react-calendly").Prefill | undefined}
 */
export function buildCalendlyPrefill({ name, email }) {
  if (!name && !email) return undefined;

  return {
    ...(name ? { name } : {}),
    ...(email ? { email } : {}),
  };
}
