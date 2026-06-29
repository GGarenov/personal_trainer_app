import { addItem } from "../../store/cart";

/**
 * @param {{ product: { id: string; name: string; price: number; image?: string } }} props
 */
export default function AddToCartButton({ product }) {
  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="w-full rounded bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90"
    >
      Add to Cart
    </button>
  );
}
