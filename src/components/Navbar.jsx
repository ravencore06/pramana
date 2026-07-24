import { useState } from "react";
import { Menu, X, Bell, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ toggleSidebar, sidebarOpen }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0F172A] text-white z-50 flex items-center justify-between px-4 lg:px-6 shadow-lg no-print">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-[#2563EB] p-1.5 rounded-lg">
            <GraduationCap size={22} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold leading-tight">Aster Institute of Technology</h1>
            <p className="text-[10px] text-blue-200 leading-tight">Academic Certificate System</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-sm font-semibold">
              R
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-medium leading-tight">Registrar</p>
              <p className="text-[10px] text-blue-200 leading-tight">admin@aster.edu</p>
            </div>
            <ChevronDown size={14} className="hidden md:block" />
          </button>
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1 text-[#0F172A]"
              >
                <button className="w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors">Profile</button>
                <button className="w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors">Account Settings</button>
                <hr className="my-1 border-slate-200" />
                <button className="w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors text-red-600">Sign Out</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
