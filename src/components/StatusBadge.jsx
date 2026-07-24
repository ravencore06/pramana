import { ShieldCheck, Clock } from "lucide-react";

export default function StatusBadge({ status }) {
  const isVerified = status === "Verified";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
        isVerified
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
          : "bg-amber-50 text-amber-700 border border-amber-200"
      }`}
    >
      {isVerified ? <ShieldCheck size={12} /> : <Clock size={12} />}
      {status}
    </span>
  );
}
