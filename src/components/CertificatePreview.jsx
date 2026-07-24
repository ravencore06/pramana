import { GraduationCap } from "lucide-react";

export default function CertificatePreview({ data }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="border-b-4 border-[#1E3A8A] p-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-[#0F172A] rounded-full">
            <GraduationCap size={28} className="text-white" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#0F172A]">Aster Institute of Technology</h3>
        <p className="text-xs text-slate-500 mt-0.5">Established 2005 · UGC Approved</p>
      </div>
      <div className="p-6 space-y-4">
        {data ? (
          <>
            <div className="text-center border-b border-slate-100 pb-3">
              <h4 className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wider">Degree Certificate</h4>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Student Name</span>
                <span className="font-semibold text-[#0F172A]">{data.studentName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Student ID</span>
                <span className="font-semibold text-[#0F172A]">{data.studentId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Degree</span>
                <span className="font-semibold text-[#0F172A]">{data.degree}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Department</span>
                <span className="font-semibold text-[#0F172A]">{data.department}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">CGPA</span>
                <span className="font-semibold text-[#0F172A]">{data.cgpa}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Issue Date</span>
                <span className="font-semibold text-[#0F172A]">{data.issueDate}</span>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Certificate ID</span>
                <span className="font-mono text-[#2563EB] font-medium">{data.id}</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-2">
                <p className="text-[10px] text-slate-400 mb-1">SHA-256 Hash</p>
                <p className="text-[10px] font-mono text-slate-500 break-all">{data.hash}</p>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between items-end">
              <div className="w-16 h-16 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[8px] text-slate-400 text-center leading-tight">
                QR
                <br />
                Code
              </div>
              <div className="text-right">
                <p className="text-xs font-serif italic text-slate-500">Registrar</p>
                <div className="w-24 h-0.5 bg-[#0F172A] mt-1 ml-auto" />
              </div>
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-400 italic">Fill the form to see a live preview</p>
          </div>
        )}
      </div>
    </div>
  );
}
