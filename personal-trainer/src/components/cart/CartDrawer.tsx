import { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { formatPrice } from "../../lib/formatPrice";
import { productImageMap } from "../../lib/productImages";
import {
  cartDrawerOpen,
  cartStore,
  closeCart,
  getItemCount,
  removeItem,
  updateQuantity,
  type CartItem,
} from "../../store/cart";

const fallbackImage = productImageMap["image_four.jpg"];

function getProductImageSrc(image?: string): string {
  const meta = image ? productImageMap[image] : null;
  return (meta ?? fallbackImage).src;
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function CartLineItem({ item }: { item: CartItem }) {
  return (
    <li className="flex gap-4 border-b border-white/10 py-5">
      <img
        src={getProductImageSrc(item.image)}
        alt=""
        className="h-20 w-16 shrink-0 rounded object-cover"
        width={64}
        height={80}
        loading="lazy"
        decoding="async"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="font-heading text-sm uppercase leading-snug tracking-wide text-white">
            {item.name}
          </p>
          <p className="shrink-0 text-sm font-medium text-white">
            {formatPrice(item.price)}
          </p>
        </div>

        {item.variant && (
          <p className="mt-1 text-xs text-white/50">{item.variant}</p>
        )}

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center rounded border border-white/20">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              −
            </button>
            <span className="min-w-[2rem] px-2 py-1.5 text-center text-sm text-white">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
              aria-label={`Increase quantity of ${item.name}`}
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="text-xs text-white/50 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const isOpen = useStore(cartDrawerOpen);
  const cart = useStore(cartStore);
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const itemCount = getItemCount();
  const hasItems = cart.items.length > 0;
  const itemLabel = itemCount === 1 ? "1 ITEM" : `${itemCount} ITEMS`;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    closeButtonRef.current?.focus();

    const panel = panelRef.current;
    const focusables = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeCart();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, cart.items.length]);

  function handleCheckout() {
    closeCart();
    window.location.href = "/checkout";
  }

  return (
    <div
      className={`fixed inset-0 z-[95] transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
        aria-label="Close cart"
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`fixed right-0 top-0 flex h-dvh w-full flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out sm:w-[min(100%,24rem)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <BagIcon className="h-5 w-5 text-white" />
            <h2
              id="cart-drawer-title"
              className="font-heading text-lg tracking-widest text-white"
            >
              {hasItems ? itemLabel : "YOUR CART"}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeCart}
            className="p-1 text-white/70 transition-colors hover:text-white"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6">
          {hasItems ? (
            <ul className="divide-y divide-white/10">
              {cart.items.map((item) => (
                <CartLineItem key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <BagIcon className="mb-4 h-12 w-12 text-white/20" />
              <p className="font-heading text-2xl tracking-wide text-white">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm text-white/50">
                Browse programs and nutrition plans to get started.
              </p>
              <a
                href="/programs"
                onClick={closeCart}
                className="mt-6 rounded bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90"
              >
                View Programs
              </a>
            </div>
          )}
        </div>

        {hasItems && (
          <footer className="shrink-0 border-t border-white/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-white/60">Subtotal</span>
              <span className="font-medium text-white">
                {formatPrice(cart.total)}
              </span>
            </div>
            <p className="mb-4 text-right text-xs text-white/40">
              Shipping &amp; taxes calculated at checkout
            </p>
            <button
              type="button"
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-2 rounded bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90"
            >
              <LockIcon className="h-4 w-4" />
              Checkout &bull; {formatPrice(cart.total)} EUR
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
