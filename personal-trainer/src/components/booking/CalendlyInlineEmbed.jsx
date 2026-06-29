import { InlineWidget } from "react-calendly";
import { CALENDLY_URL } from "../../config/site";
import { buildCalendlyPrefill } from "./calendlyPrefill";

/**
 * @param {{
 *   url?: string;
 *   name?: string;
 *   email?: string;
 *   className?: string;
 * }} props
 */
export default function CalendlyInlineEmbed({
  url = CALENDLY_URL,
  name,
  email,
  className = "calendly-inline-widget min-h-[630px] w-full",
}) {
  return (
    <InlineWidget
      url={url}
      prefill={buildCalendlyPrefill({ name, email })}
      className={className}
      styles={{ minWidth: "320px", height: "100%", minHeight: "630px" }}
    />
  );
}
