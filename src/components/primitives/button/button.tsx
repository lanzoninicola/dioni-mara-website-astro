interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-md rounded-full bg-sky-500 py-5 px-8 font-semibold shadow-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
