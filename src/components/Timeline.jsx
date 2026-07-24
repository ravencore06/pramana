import { motion } from "framer-motion";
import { FileText, ShieldCheck, UserPlus } from "lucide-react";

const typeIcons = {
  issue: FileText,
  verify: ShieldCheck,
  registration: UserPlus,
};

const typeColors = {
  issue: "bg-blue-100 text-blue-600",
  verify: "bg-emerald-100 text-emerald-600",
  registration: "bg-amber-100 text-amber-600",
};

export default function Timeline({ activities }) {
  return (
    <div className="space-y-0">
      {activities.map((item, index) => {
        const Icon = typeIcons[item.type] || FileText;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex gap-4 pb-5 last:pb-0 relative"
          >
            <div className="flex flex-col items-center">
              <div className={`p-1.5 rounded-full ${typeColors[item.type]} z-10`}>
                <Icon size={14} />
              </div>
              {index < activities.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 mt-1" />
              )}
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <p className="text-sm font-medium text-[#0F172A]">{item.action}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {item.student}
                {item.certificateId !== "—" && ` · ${item.certificateId}`}
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {new Date(item.timestamp).toLocaleString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
