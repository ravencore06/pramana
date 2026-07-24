import { ChevronDown } from "lucide-react";

export default function Select({ label, id, options, error, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-[#1E293B]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={`w-full px-3 py-2.5 text-sm border rounded-xl bg-white focus:border-[#991B1B] focus:ring-2 focus:ring-red-100 transition-all outline-none appearance-none ${
            error ? "border-red-300" : "border-slate-200"
          }`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}