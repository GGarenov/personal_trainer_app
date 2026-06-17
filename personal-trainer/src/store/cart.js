import { atom } from "nanostores";

/** @typedef {{ id: string; name: string; price: number; quantity: number }} CartItem */

/** @typedef {{ items: CartItem[]; total: number }} Cart */

/** @type {import('nanostores').Atom<Cart>} */
export const cartStore = atom({ items: [], total: 0 });

function recalculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * @param {{ id: string; name: string; price: number }} product
 */
export function addItem(product) {
  const cart = cartStore.get();
  const existing = cart.items.find((item) => item.id === product.id);

  const items = existing
    ? cart.items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [...cart.items, { ...product, quantity: 1 }];

  cartStore.set({ items, total: recalculateTotal(items) });
}

/**
 * @param {string} id
 */
export function removeItem(id) {
  const cart = cartStore.get();
  const items = cart.items.filter((item) => item.id !== id);
  cartStore.set({ items, total: recalculateTotal(items) });
}

export function clearCart() {
  cartStore.set({ items: [], total: 0 });
}
