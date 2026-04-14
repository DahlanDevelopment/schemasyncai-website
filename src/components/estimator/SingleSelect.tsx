"use client";

interface SingleSelectOption {
  value: string;
  label: string;
}

interface SingleSelectProps {
  label: string;
  options: SingleSelectOption[];
  selected: string;
  onChange: (value: string) => void;
  columns?: 1 | 2;
  error?: string;
}

export default function SingleSelect({
  label,
  options,
  selected,
  onChange,
  columns = 2,
  error,
}: SingleSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-silver-200 mb-3">
        {label}
      </label>
      <div
        className={`grid gap-2 ${
          columns === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-all border text-left ${
                isSelected
                  ? "bg-electric-blue/10 border-electric-blue/30 text-electric-blue"
                  : "bg-navy-800 border-white/10 text-silver-200 hover:border-white/20"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}
