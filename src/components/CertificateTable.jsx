import StatusBadge from "./StatusBadge";
import EmptyState from "./EmptyState";
import { motion } from "framer-motion";

export default function CertificateTable({ certificates, onView, showActions = true, emptyMessage }) {
  if (!certificates?.length) {
    return <EmptyState title="No certificates found" description={emptyMessage || "There are no certificates matching your criteria."} />;
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Certificate ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Student</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Department</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Degree</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Issue Date</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              {showActions && <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {certificates.map((cert, i) => (
              <motion.tr
                key={cert.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <span className="font-mono text-xs font-medium text-[#2563EB]">{cert.id}</span>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-[#0F172A]">{cert.studentName}</p>
                    <p className="text-xs text-slate-400">{cert.studentId}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600 max-w-[180px] truncate">{cert.department}</td>
                <td className="px-4 py-3 text-slate-600">{cert.degree}</td>
                <td className="px-4 py-3 text-slate-600">{cert.issueDate}</td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={cert.status} />
                </td>
                {showActions && (
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => onView?.(cert)}
                      className="text-xs font-medium text-[#2563EB] hover:text-blue-700 hover:underline transition-colors"
                    >
                      View
                    </button>
                  </td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
