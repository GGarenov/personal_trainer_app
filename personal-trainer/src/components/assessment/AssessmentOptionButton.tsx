import { assessmentOptionButtonClass } from "./assessmentStyles";

interface Props {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: string;
}

export default function AssessmentOptionButton({
  selected,
  disabled = false,
  onClick,
  children,
}: Props) {
  return (
    <button
      type="button"
      className={assessmentOptionButtonClass(selected, disabled)}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}
