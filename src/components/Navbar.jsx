import { useState } from "react";
import { Menu, X, Bell, GraduationCap, ChevronDown, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ toggleSidebar, sidebarOpen }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#800000] text-white z-50 flex items-center justify-between px-4 lg:px-6 shadow-md border-b border-red-900/50 no-print">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white text-[#800000] p-1.5 rounded-lg shadow-sm">
            <GraduationCap size={22} />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold leading-tight tracking-wide">MVGR College of Engineering</h1>
              <span className="hidden md:inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded text-[10px] font-semibold text-white transition-colors border border-white/20">
                <Award size={10} />
                EAPCET: MVRG
              </span>
            </div>
            <p className="text-[10px] text-red-100 leading-tight mt-0.5">Autonomous · NAAC 'A' Grade · Permanently Affiliated to JNTU-GV</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full" />
        </button>
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-sm font-semibold">
              P
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold leading-tight">Principal</p>
              <p className="text-[10px] text-red-100 leading-tight">principal.mvgr@gmail.com</p>
            </div>
            <ChevronDown size={14} className="hidden md:block text-red-200" />
          </button>
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1 text-[#1E293B]"
              >
                <div className="px-4 py-2 border-b border-slate-100 bg-slate-50">
                  <p className="text-xs font-semibold text-[#800000]">Dr. Y M C Shekhar</p>
                  <p className="text-[10px] text-slate-500">Principal, MVGRCE</p>
                </div>
                <button className="w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors">Profile</button>
                <button className="w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors">Account Settings</button>
                <hr className="my-1 border-slate-200" />
                <button className="w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors text-red-600 font-medium">Sign Out</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
