import { useState } from "react";
import { addItem } from "../../store/cart";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * @param {{ product: { id: string; name: string; price: number; image?: string }; splits: string[]; optionLabel?: string }} props
 */
export default function ProgramPurchase({
  product,
  splits = [],
  optionLabel = "Training Split",
}) {
  const hasSplits = splits.length > 0;
  const [split, setSplit] = useState(hasSplits ? splits[0] : "");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: split ? `${product.id}--${slugify(split)}` : product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: split || undefined,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {hasSplits && (
        <div className="mb-5">
          <label
            htmlFor="training-split"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
          >
            {optionLabel}
          </label>
          <div className="relative">
            <select
              id="training-split"
              value={split}
              onChange={(event) => setSplit(event.target.value)}
              className="w-full appearance-none rounded-lg border border-white/15 bg-dark px-4 py-3 pr-10 text-sm text-white transition-colors hover:border-white/30 focus-visible:border-primary focus-visible:outline-none"
            >
              {splits.map((option) => (
                <option key={option} value={option} className="bg-dark text-white">
                  {option}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleAdd}
        className="w-full rounded-lg bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90"
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
