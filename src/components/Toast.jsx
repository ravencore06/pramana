import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";

export default function Toast({ message, type = "success", visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -12, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -12, x: "-50%" }}
          className={`fixed top-20 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg border ${
            type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm font-medium">{message}</span>
          <button onClick={onClose} className="ml-2 p-0.5 hover:opacity-70" aria-label="Close">
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
