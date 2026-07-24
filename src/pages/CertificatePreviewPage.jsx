import { GraduationCap, Printer } from "lucide-react";
import { certificates } from "../data/mockData";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import HashDisplay from "../components/HashDisplay";
import QRCodePanel from "../components/QRCodePanel";

export default function CertificatePreviewPage() {
  const cert = certificates[0];

  const handlePrint = () => window.print();

  return (
    <div>
      <div className="no-print">
        <PageHeader title="Certificate Preview" description="This is how the certificate appears in its final form.">
          <Button variant="secondary" icon={Printer} onClick={handlePrint}>
            Print Certificate
          </Button>
        </PageHeader>
      </div>

      <div className="max-w-[210mm] mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden print:shadow-none print:border-0">
        <div className="bg-[#0F172A] px-8 py-5 text-center">
          <div className="flex justify-center mb-2">
            <div className="p-2 bg-white/10 rounded-full">
              <GraduationCap size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white">MVGR College of Engineering</h1>
          <p className="text-xs text-blue-200 mt-0.5">Maharaj Vijayaram Gajapathi Raj College of Engineering</p>
          <p className="text-[10px] text-blue-200/70">Est. 1997 · Chintalavalasa, Vizianagaram · NAAC 'A' Accredited</p>
          <div className="mt-3 h-px bg-white/20" />
          <p className="text-[10px] text-blue-200 mt-2 tracking-widest uppercase">Academic Certificate</p>
        </div>

        <div className="px-8 sm:px-12 py-8">
          <div className="text-center mb-8">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider">Degree Certificate</h2>
            <p className="text-xs text-slate-400 mt-1">
              This is to certify that the following student has successfully completed the prescribed course of study
            </p>
          </div>

          <div className="border-t-2 border-b-2 border-[#0F172A] py-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">Certificate ID</span>
                <span className="font-mono font-semibold text-[#2563EB]">{cert.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">Student Name</span>
                <span className="font-semibold text-[#0F172A]">{cert.studentName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">Student ID</span>
                <span className="font-semibold text-[#0F172A]">{cert.studentId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">Degree Awarded</span>
                <span className="font-semibold text-[#0F172A]">{cert.degree}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">Department</span>
                <span className="font-semibold text-[#0F172A]">{cert.department}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">CGPA Obtained</span>
                <span className="font-semibold text-[#0F172A]">{cert.cgpa} / 10.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 w-40">Date of Issue</span>
                <span className="font-semibold text-[#0F172A]">{cert.issueDate}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <HashDisplay hash={cert.hash} />
            </div>
            <div className="flex justify-center sm:justify-end">
              <QRCodePanel value={cert.id} size={100} />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Authorized Signatory</p>
              <div className="mt-1">
                <svg width="120" height="30" viewBox="0 0 120 30" className="text-slate-400">
                  <path d="M10,25 Q30,5 50,20 Q70,10 90,18 Q100,22 115,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-[#0F172A]">Dr. MVGR Rao</p>
              <p className="text-xs text-slate-500">Principal</p>
            </div>
            <div className="text-right">
              <div className="w-14 h-14 rounded-full border-2 border-[#0F172A] flex items-center justify-center ml-auto">
                <GraduationCap size={18} className="text-[#0F172A]" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">University Seal</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 px-8 py-3 text-center">
          <p className="text-[10px] text-slate-400">
            This certificate can be verified at https://mvgrce.com · Hash verification ensures tamper-proof authenticity.
          </p>
        </div>
      </div>
    </div>
  );
}
