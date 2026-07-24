export default function Input({ label, id, error, icon: Icon, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-[#1E293B]">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />}
        <input
          id={id}
          className={`w-full ${Icon ? "pl-9" : "pl-3"} pr-3 py-2.5 text-sm border rounded-xl bg-white focus:border-[#991B1B] focus:ring-2 focus:ring-red-100 transition-all outline-none ${
            error ? "border-red-300 focus:border-red-500 focus:ring-red-100" : "border-slate-200"
          }`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}