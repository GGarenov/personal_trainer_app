import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { CALENDLY_URL } from "../../config/site";
import { buildCalendlyPrefill } from "./calendlyPrefill";
const defaultClassName =
  "rounded bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark";
/**
 * @param {{
 *   url?: string;
 *   text?: string;
 *   name?: string;
 *   email?: string;
 *   className?: string;
 * }} props
 */
export default function CalendlyButton({
  url = CALENDLY_URL,
  text = "Book a Session",  name,
  email,
  className = defaultClassName,
}) {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) return null;

  return (
    <PopupButton
      url={url}
      text={text}
      rootElement={rootElement}
      prefill={buildCalendlyPrefill({ name, email })}
      className={className}
    />
  );
}
