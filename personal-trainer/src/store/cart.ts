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

function loadCart(): Cart {
  if (typeof window === "undefined") {
    return { items: [], total: 0 };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], total: 0 };
    const parsed: unknown = JSON.parse(raw);
    return isCart(parsed) ? parsed : { items: [], total: 0 };
  } catch {
    return { items: [], total: 0 };
  }
}

let persistTimer: ReturnType<typeof setTimeout> | undefined;

function persistCart(cart: Cart): void {
  if (typeof window === "undefined") return;

  if (persistTimer) clearTimeout(persistTimer);
  persistTimer = setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, PERSIST_DEBOUNCE_MS);
}

export const cartStore = atom<Cart>(loadCart());

cartStore.subscribe((cart) => {
  persistCart(cart);
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
    cart.items.map((item) =>
      item.id === id ? { ...item, quantity } : item,
    ),
  );
}

export function clearCart(): void {
  cartStore.set({ items: [], total: 0 });
}
