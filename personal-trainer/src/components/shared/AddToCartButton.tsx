import { addItem, type CartProductInput } from "../../store/cart";

interface AddToCartButtonProps {
  product: CartProductInput;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
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
