import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error";

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

const inputClass =
  "w-full rounded border border-white/20 bg-dark px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-primary focus:outline-none";

const labelClass = "mb-2 block text-sm font-medium text-white/80";

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    if (honeypot.trim()) {
      setStatus("success");
      setValues(emptyValues);
      setHoneypot("");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: values.name.trim(),
          user_email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          reply_to: values.email.trim(),
        },
        {
          publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
          blockHeadless: true,
          limitRate: { id: "contact-form", throttle: 60_000 },
        },
      );

      setStatus("success");
      setValues(emptyValues);
      setHoneypot("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className={inputClass}
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className={inputClass}
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p
          className="rounded border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary"
          role="status"
        >
          Thanks for reaching out! I&apos;ll get back to you within 24–48 hours.
        </p>
      )}

      {status === "error" && (
        <p
          className="rounded border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          role="alert"
        >
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
