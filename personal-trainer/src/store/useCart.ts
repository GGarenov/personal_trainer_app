import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { EMPTY_CART, cartStore, hydrateCart, type Cart } from "./cart";

/**
 * Cart state for React islands, safe for hydration.
 *
 * The server renders every island with an empty cart. Each island is its own
 * React root and hydrates at a different time, so by the time a later island
 * hydrates, an earlier one may already have loaded the saved cart. Returning
 * the empty cart until this component has mounted keeps its first render the
 * same as the server HTML.
 *
 * `ready` is false during that first render. Check it before acting on an
 * empty cart (for example redirecting away from checkout).
 */
export function useCart(): { cart: Cart; ready: boolean } {
  const cart = useStore(cartStore);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    hydrateCart();
    setReady(true);
  }, []);

  return { cart: ready ? cart : EMPTY_CART, ready };
}

export function getCartCount(cart: Cart): number {
  return cart.items.reduce((sum, item) => sum + item.quantity, 0);
}
