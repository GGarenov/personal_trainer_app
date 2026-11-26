import { atom } from "nanostores";

const STORAGE_KEY = "gsf-cart";
const PERSIST_DEBOUNCE_MS = 300;

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CartProductInput {
  id: string;
  name: string;
  price: number;
  image?: string;
  variant?: string;
}

function recalculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function isCart(value: unknown): value is Cart {
  if (!value || typeof value !== "object") return false;
  const cart = value as Cart;
  return (
    Array.isArray(cart.items) &&
    typeof cart.total === "number" &&
    cart.items.every(
      (item) =>
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number",
    )
  );
}

export const EMPTY_CART: Cart = { items: [], total: 0 };

function loadCart(): Cart {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_CART;
    const parsed: unknown = JSON.parse(raw);
    return isCart(parsed) ? parsed : EMPTY_CART;
  } catch {
    return EMPTY_CART;
  }
}

let persistTimer: ReturnType<typeof setTimeout> | undefined;
let pendingCart: Cart | undefined;

function writeCart(): void {
  if (persistTimer) clearTimeout(persistTimer);
  persistTimer = undefined;
  if (!pendingCart) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pendingCart));
  } catch {
    // Storage full or blocked (private mode): the cart just isn't saved.
  }
  pendingCart = undefined;
}

function persistCart(cart: Cart): void {
  if (typeof window === "undefined") return;

  pendingCart = cart;
  if (persistTimer) clearTimeout(persistTimer);
  persistTimer = setTimeout(writeCart, PERSIST_DEBOUNCE_MS);
}

if (typeof window !== "undefined") {
  // Save a pending change if the page is left within the debounce window.
  window.addEventListener("pagehide", writeCart);
}

// Starts empty on both server and client so the HTML that React hydrates
// matches the server render. The saved cart is loaded by hydrateCart(),
// which useCart() calls after the component has mounted.
export const cartStore = atom<Cart>(EMPTY_CART);

let hydrated = false;

export function hydrateCart(): void {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  const saved = loadCart();
  const current = cartStore.get();
  // Keep anything added before the saved cart was loaded.
  const items = [...saved.items];
  for (const item of current.items) {
    const existing = items.find((i) => i.id === item.id);
    if (existing) existing.quantity += item.quantity;
    else items.push(item);
  }
  cartStore.set({ items, total: recalculateTotal(items) });
}

cartStore.subscribe((cart) => {
  // Don't overwrite the saved cart with the empty initial value.
  if (hydrated) persistCart(cart);
});

function setCart(items: CartItem[]): void {
  cartStore.set({ items, total: recalculateTotal(items) });
}

export const cartDrawerOpen = atom(false);

export function openCart(): void {
  cartDrawerOpen.set(true);
}

export function closeCart(): void {
  cartDrawerOpen.set(false);
}

export function toggleCart(): void {
  cartDrawerOpen.set(!cartDrawerOpen.get());
}

export function getItemCount(): number {
  return cartStore.get().items.reduce((sum, item) => sum + item.quantity, 0);
}

export function addItem(product: CartProductInput): void {
  const cart = cartStore.get();
  const existing = cart.items.find((item) => item.id === product.id);

  const items = existing
    ? cart.items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [...cart.items, { ...product, quantity: 1 }];

  setCart(items);
}

export function removeItem(id: string): void {
  const cart = cartStore.get();
  setCart(cart.items.filter((item) => item.id !== id));
}

export function updateQuantity(id: string, quantity: number): void {
  if (quantity <= 0) {
    removeItem(id);
    return;
  }

  const cart = cartStore.get();
  setCart(
    cart.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
  );
}

export function clearCart(): void {
  // Count as loaded, so a later hydrateCart() can't bring the saved items back
  // and the empty cart gets written to storage.
  hydrated = true;
  // A new object, not EMPTY_CART: the store may already hold EMPTY_CART, and
  // set() with the same value doesn't notify, so nothing would be saved.
  cartStore.set({ items: [], total: 0 });
}
