import { InlineWidget } from "react-calendly";
import { CALENDLY_URL } from "../../config/site";
import { buildCalendlyPrefill } from "./calendlyPrefill";

interface CalendlyInlineEmbedProps {
  url?: string;
  name?: string;
  email?: string;
  className?: string;
}

export default function CalendlyInlineEmbed({
  url = CALENDLY_URL,
  name,
  email,
  className = "calendly-inline-widget h-full w-full",
}: CalendlyInlineEmbedProps) {
  return (
    <InlineWidget
      url={url}
      prefill={buildCalendlyPrefill({ name, email })}
      pageSettings={{ hideGdprBanner: true }}
      iframeTitle="Book a call with George Stevens"
      className={className}
      styles={{ width: "100%", height: "100%", minWidth: "320px" }}
    />
  );
}
