import { motion } from "framer-motion";

export default function StatusCard({ icon: Icon, label, value, color, bgColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl ${bgColor}`}>
          <Icon size={18} className={color} />
        </div>
        <div>
          <p className="text-xs text-slate-500">{label}</p>
          <p className="text-lg font-bold text-[#0F172A]">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
