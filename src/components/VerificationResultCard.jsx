import { motion } from "framer-motion";
import { ShieldCheck, ShieldX, User, BookOpen, Calendar, Hash } from "lucide-react";

export default function VerificationResultCard({ result, type }) {
  if (!result) return null;

  const isValid = type === "verified";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border-2 p-6 ${
        isValid
          ? "bg-emerald-50 border-emerald-300"
          : "bg-red-50 border-red-300"
      }`}
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`p-3 rounded-full ${
            isValid ? "bg-emerald-100" : "bg-red-100"
          }`}
        >
          {isValid ? (
            <ShieldCheck size={28} className="text-emerald-600" />
          ) : (
            <ShieldX size={28} className="text-red-600" />
          )}
        </div>
        <div>
          <h3
            className={`text-lg font-bold ${
              isValid ? "text-emerald-800" : "text-red-800"
            }`}
          >
            {isValid ? "Verified Authentic" : "Verification Failed"}
          </h3>
          <p
            className={`text-sm ${
              isValid ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {isValid
              ? "This certificate is valid and issued by MVGR College of Engineering."
              : result.reason || "The certificate could not be verified."}
          </p>
        </div>
      </div>

      {isValid && result.data && (
        <div className="bg-white rounded-xl border border-emerald-200 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <User size={14} className="text-slate-400" />
            <span className="text-sm text-slate-600">
              <strong className="text-[#0F172A]">Name:</strong> {result.data.studentName}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen size={14} className="text-slate-400" />
            <span className="text-sm text-slate-600">
              <strong className="text-[#0F172A]">Degree:</strong> {result.data.degree} — {result.data.department}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar size={14} className="text-slate-400" />
            <span className="text-sm text-slate-600">
              <strong className="text-[#0F172A]">Issued:</strong> {result.data.issueDate}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Hash size={14} className="text-slate-400" />
            <span className="text-sm text-slate-600">
              <strong className="text-[#0F172A]">ID:</strong> {result.data.id}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-emerald-700 font-medium">Hash Integrity: Verified ✓</span>
          </div>
        </div>
      )}

      {!isValid && (
        <div className="bg-white rounded-xl border border-red-200 p-4 space-y-2">
          <p className="text-sm text-red-700 font-medium">Possible reasons:</p>
          <ul className="text-sm text-red-600 space-y-1 list-disc list-inside">
            {result.reasons?.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
