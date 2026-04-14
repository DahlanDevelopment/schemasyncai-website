"use client";

interface MultiSelectProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  error?: string;
}

export default function MultiSelect({
  label,
  options,
  selected,
  onChange,
  error,
}: MultiSelectProps) {
  function toggle(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-silver-200 mb-3">
        {label}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-all border text-left ${
                isSelected
                  ? "bg-electric-blue/10 border-electric-blue/30 text-electric-blue"
                  : "bg-navy-800 border-white/10 text-silver-200 hover:border-white/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}
