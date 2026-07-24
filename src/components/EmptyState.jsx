import { FileQuestion } from "lucide-react";

export default function EmptyState({ title = "No data found", description = "There are no records to display." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="p-4 bg-slate-100 rounded-full mb-4">
        <FileQuestion size={32} className="text-slate-400" />
      </div>
      <h3 className="text-base font-semibold text-[#0F172A]">{title}</h3>
      <p className="text-sm text-slate-500 mt-1 max-w-xs text-center">{description}</p>
    </div>
  );
}
