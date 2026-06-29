import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { clearCart } from "../../store/cart";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXPIRY_PATTERN = /^(0[1-9]|1[0-2])\/\d{2}$/;

const inputClass =
  "w-full rounded border border-white/20 bg-dark px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:border-primary focus:outline-none";

const labelClass = "mb-2 block text-sm font-medium text-white/80";

interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  agreeTerms: boolean;
}

type CheckoutFormErrors = Partial<Record<keyof CheckoutFormValues, string>>;

const initialValues: CheckoutFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
  agreeTerms: false,
};

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function formatCardNumber(value: string): string {
  return digitsOnly(value)
    .slice(0, 19)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
}

function formatExpiry(value: string): string {
  const digits = digitsOnly(value).slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function validate(values: CheckoutFormValues): CheckoutFormErrors {
  const errors: CheckoutFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";

  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.address1.trim()) errors.address1 = "Address is required.";
  if (!values.city.trim()) errors.city = "City is required.";
  if (!values.state.trim()) errors.state = "State or region is required.";
  if (!values.postalCode.trim()) errors.postalCode = "Postal code is required.";
  if (!values.country.trim()) errors.country = "Country is required.";

  const cardDigits = digitsOnly(values.cardNumber);
  if (!cardDigits) {
    errors.cardNumber = "Card number is required.";
  } else if (cardDigits.length < 13 || cardDigits.length > 19) {
    errors.cardNumber = "Enter a valid card number.";
  }

  if (!values.expiry.trim()) {
    errors.expiry = "Expiry is required.";
  } else if (!EXPIRY_PATTERN.test(values.expiry.trim())) {
    errors.expiry = "Use MM/YY format.";
  }

  const cvvDigits = digitsOnly(values.cvv);
  if (!cvvDigits) {
    errors.cvv = "CVV is required.";
  } else if (cvvDigits.length < 3 || cvvDigits.length > 4) {
    errors.cvv = "CVV must be 3 or 4 digits.";
  }

  if (!values.agreeTerms) {
    errors.agreeTerms = "You must agree to the terms.";
  }

  return errors;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function CheckoutForm() {
  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === "checkbox" ? checked : value;

    setValues((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({
      ...current,
      cardNumber: formatCardNumber(event.target.value),
    }));
    setErrors((current) => ({ ...current, cardNumber: "" }));
  };

  const handleExpiryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({
      ...current,
      expiry: formatExpiry(event.target.value),
    }));
    setErrors((current) => ({ ...current, expiry: "" }));
  };

  const handleCvvChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({
      ...current,
      cvv: digitsOnly(event.target.value).slice(0, 4),
    }));
    setErrors((current) => ({ ...current, cvv: "" }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // TODO: Replace with Stripe/Lemon Squeezy when going live.
    // Demo only — card data is never sent anywhere.
    clearCart();
    window.location.href = "/checkout/success";
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit} noValidate>
      <h2 className="font-heading text-3xl tracking-wider text-white">
        Billing Details
      </h2>
      <p className="mt-2 text-sm text-white/50">
        Training demo — use fake details only.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name *" error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass}
            value={values.firstName}
            onChange={handleChange}
          />
        </Field>

        <Field id="lastName" label="Last name *" error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClass}
            value={values.lastName}
            onChange={handleChange}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={values.email}
            onChange={handleChange}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="address1" label="Address *" error={errors.address1}>
          <input
            id="address1"
            name="address1"
            type="text"
            autoComplete="address-line1"
            className={inputClass}
            value={values.address1}
            onChange={handleChange}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id="address2"
          label="Apartment, suite, etc."
          error={errors.address2}
        >
          <input
            id="address2"
            name="address2"
            type="text"
            autoComplete="address-line2"
            className={inputClass}
            value={values.address2}
            onChange={handleChange}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="city" label="City *" error={errors.city}>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className={inputClass}
            value={values.city}
            onChange={handleChange}
          />
        </Field>

        <Field id="state" label="State / Region *" error={errors.state}>
          <input
            id="state"
            name="state"
            type="text"
            autoComplete="address-level1"
            className={inputClass}
            value={values.state}
            onChange={handleChange}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="postalCode" label="Postal code *" error={errors.postalCode}>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            autoComplete="postal-code"
            className={inputClass}
            value={values.postalCode}
            onChange={handleChange}
          />
        </Field>

        <Field id="country" label="Country *" error={errors.country}>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            className={inputClass}
            value={values.country}
            onChange={handleChange}
          />
        </Field>
      </div>

      <h3 className="mt-10 font-heading text-2xl tracking-wider text-white">
        Payment
      </h3>
      <p className="mt-2 text-xs text-white/40">
        Card details are for demonstration only and are not stored or
        transmitted.
      </p>

      <div className="mt-5">
        <Field id="cardNumber" label="Card number *" error={errors.cardNumber}>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="4242 4242 4242 4242"
            className={inputClass}
            value={values.cardNumber}
            onChange={handleCardNumberChange}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="expiry" label="Expiry (MM/YY) *" error={errors.expiry}>
          <input
            id="expiry"
            name="expiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM/YY"
            className={inputClass}
            value={values.expiry}
            onChange={handleExpiryChange}
          />
        </Field>

        <Field id="cvv" label="CVV *" error={errors.cvv}>
          <input
            id="cvv"
            name="cvv"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="123"
            className={inputClass}
            value={values.cvv}
            onChange={handleCvvChange}
          />
        </Field>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={values.agreeTerms}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-dark text-primary focus:ring-primary"
          />
          <span className="text-sm text-white/70">
            I agree to the terms and understand this is a demo checkout with no
            real payment.
          </span>
        </label>
        {errors.agreeTerms && (
          <p className="mt-1 text-xs text-red-400" role="alert">
            {errors.agreeTerms}
          </p>
        )}
      </div>

      <button type="submit" className="sr-only">
        Place Order
      </button>
    </form>
  );
}
