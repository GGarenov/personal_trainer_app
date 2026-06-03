export default function CartIcon() {
  return (
    <button className="relative">
      🛒
      <span
        className="
          absolute
          -right-2
          -top-2
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-primary
          text-xs
          text-black
        "
      >
        0
      </span>
    </button>
  );
}
