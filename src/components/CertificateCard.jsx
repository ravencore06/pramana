import StatusBadge from "./StatusBadge";

export default function CertificateCard({ certificate, onClick }) {
  return (
    <button
      onClick={() => onClick?.(certificate)}
      className="w-full text-left bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono font-medium text-[#2563EB]">{certificate.id}</span>
        <StatusBadge status={certificate.status} />
      </div>
      <h4 className="text-sm font-semibold text-[#0F172A]">{certificate.studentName}</h4>
      <p className="text-xs text-slate-500 mt-0.5">{certificate.degree} — {certificate.department}</p>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-400">CGPA: {certificate.cgpa}</span>
        <span className="text-xs text-slate-400">{certificate.issueDate}</span>
      </div>
    </button>
  );
}
