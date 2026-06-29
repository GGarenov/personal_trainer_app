import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { buildCalendlyPrefill } from "./calendlyPrefill";

const defaultClassName =
  "rounded bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90";

/**
 * @param {{
 *   url: string;
 *   text?: string;
 *   name?: string;
 *   email?: string;
 *   className?: string;
 * }} props
 */
export default function CalendlyButton({
  url,
  text = "Book a Session",
  name,
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
