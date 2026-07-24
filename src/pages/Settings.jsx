import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Moon, Sun, Info, Shield, GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Toast from "../components/Toast";

const sectionClass = "bg-white rounded-xl border border-slate-200 p-5 shadow-sm";
const rowClass = "flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0";

export default function Settings() {
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);

  return (
    <div>
      <PageHeader title="Settings" description="Manage your account and system preferences." />

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      <div className="max-w-2xl space-y-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={sectionClass}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-xl">
              <User size={18} className="text-[#2563EB]" />
            </div>
            <h3 className="text-base font-semibold text-[#0F172A]">Profile</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-lg font-bold">
                R
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">Registrar</p>
                <p className="text-xs text-slate-500">admin@aster.edu</p>
                <p className="text-xs text-slate-400">Aster Institute of Technology</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setToast({ visible: true, message: "Profile updated successfully.", type: "success" })}
            >
              Edit Profile
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className={sectionClass}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-xl">
              <Bell size={18} className="text-amber-600" />
            </div>
            <h3 className="text-base font-semibold text-[#0F172A]">Notification Preferences</h3>
          </div>
          <div className={rowClass}>
            <div>
              <p className="text-sm font-medium text-[#0F172A]">Email Notifications</p>
              <p className="text-xs text-slate-500">Receive certificate updates via email</p>
            </div>
            <button
              onClick={() => setEmailNotif(!emailNotif)}
              className={`relative w-10 h-6 rounded-full transition-colors ${emailNotif ? "bg-[#2563EB]" : "bg-slate-300"}`}
              aria-label={emailNotif ? "Disable email notifications" : "Enable email notifications"}
            >
              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${emailNotif ? "translate-x-[18px]" : "translate-x-0.5"}`} />
            </button>
          </div>
          <div className={rowClass}>
            <div>
              <p className="text-sm font-medium text-[#0F172A]">Verification Alerts</p>
              <p className="text-xs text-slate-500">Get notified when certificates are verified</p>
            </div>
            <button
              className="relative w-10 h-6 rounded-full bg-[#2563EB]"
              aria-label="Verification alerts enabled"
            >
              <div className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm translate-x-[18px]" />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={sectionClass}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-xl">
              <Moon size={18} className="text-purple-600" />
            </div>
            <h3 className="text-base font-semibold text-[#0F172A]">Appearance</h3>
          </div>
          <div className={rowClass}>
            <div className="flex items-center gap-3">
              {darkMode ? <Moon size={16} className="text-slate-500" /> : <Sun size={16} className="text-slate-500" />}
              <div>
                <p className="text-sm font-medium text-[#0F172A]">Dark Mode</p>
                <p className="text-xs text-slate-500">Toggle dark theme (coming soon)</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-10 h-6 rounded-full transition-colors ${darkMode ? "bg-[#2563EB]" : "bg-slate-300"}`}
              aria-label={darkMode ? "Disable dark mode" : "Enable dark mode"}
            >
              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${darkMode ? "translate-x-[18px]" : "translate-x-0.5"}`} />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className={sectionClass}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 rounded-xl">
              <Info size={18} className="text-slate-600" />
            </div>
            <h3 className="text-base font-semibold text-[#0F172A]">About System</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GraduationCap size={16} className="text-slate-400" />
              <div>
                <p className="text-sm font-medium text-[#0F172A]">Pramāṇa</p>
                <p className="text-xs text-slate-500">Academic Certificate Verification System</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={16} className="text-slate-400" />
              <div>
                <p className="text-sm font-medium text-[#0F172A]">Security</p>
                <p className="text-xs text-slate-500">SHA-256 hashing · Tamper-proof verification</p>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-400">Version 1.0.0 · Aster Institute of Technology © {new Date().getFullYear()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
