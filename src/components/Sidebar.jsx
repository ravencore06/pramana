import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  ScrollText,
  ShieldCheck,
  Eye,
  Settings,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/issue", label: "Issue Certificate", icon: FileText },
  { to: "/certificates", label: "Issued Certificates", icon: ScrollText },
  { to: "/verify", label: "Verification Portal", icon: ShieldCheck },
  { to: "/preview", label: "Certificate Preview", icon: Eye },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-slate-200 z-30 transition-transform duration-200 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full py-4">
          <div className="flex items-center justify-between px-4 mb-2 lg:hidden">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Navigation</span>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg" aria-label="Close sidebar">
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-md shadow-blue-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]"
                  }`
                }
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="px-4 pt-4 border-t border-slate-200">
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Pramāṇa v1.0.0
              <br />
              MVGR College of Engineering
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
