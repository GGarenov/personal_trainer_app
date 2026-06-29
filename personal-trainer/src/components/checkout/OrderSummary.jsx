import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { formatPrice } from "../../lib/formatPrice";
import { cartStore } from "../../store/cart";

export default function OrderSummary() {
  const cart = useStore(cartStore);
  const hasItems = cart.items.length > 0;

  useEffect(() => {
    if (!hasItems) {
      window.location.replace("/programs");
    }
  }, [hasItems]);

  if (!hasItems) {
    return (
      <div className="rounded-lg border border-white/10 bg-surface p-8 text-center text-white/60">
        Redirecting to programs…
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-white/10 bg-surface p-6 md:p-8">
      <h2 className="font-heading text-3xl tracking-wider text-white">
        Order Summary
      </h2>

      <ul className="mt-6 divide-y divide-white/10">
        {cart.items.map((item) => (
          <li key={item.id} className="flex justify-between gap-4 py-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-white">{item.name}</p>
              {item.variant && (
                <p className="mt-0.5 text-xs text-white/50">{item.variant}</p>
              )}
              <p className="mt-1 text-xs text-white/40">Qty {item.quantity}</p>
            </div>
            <p className="shrink-0 text-sm font-medium text-white">
              {formatPrice(item.price * item.quantity)}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
        <span className="text-white/60">Subtotal</span>
        <span className="font-heading text-2xl tracking-wide text-primary">
          {formatPrice(cart.total)}
        </span>
      </div>

      <p className="mt-4 text-xs text-white/40">
        Demo checkout — no payment will be processed.
      </p>

      <button
        type="submit"
        form="checkout-form"
        className="mt-6 w-full rounded bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90"
      >
        Place Order
      </button>
    </div>
  );
}
