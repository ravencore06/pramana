import { motion } from "framer-motion";

const variants = {
  primary: "bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm shadow-blue-200",
  secondary: "bg-white text-[#0F172A] border border-slate-200 hover:bg-slate-50",
  success: "bg-[#16A34A] text-white hover:bg-green-700 shadow-sm shadow-green-200",
  danger: "bg-[#DC2626] text-white hover:bg-red-700 shadow-sm shadow-red-200",
  ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-sm",
};

export default function Button({ children, variant = "primary", size = "md", icon: Icon, className = "", disabled, onClick, type = "button" }) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      whileTap={{ scale: disabled ? 1 : 0.99 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-150 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </motion.button>
  );
}
