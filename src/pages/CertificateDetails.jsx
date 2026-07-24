import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, ShieldCheck, Copy, Check, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { certificates } from "../data/mockData";
import Button from "../components/Button";
import HashDisplay from "../components/HashDisplay";
import QRCodePanel from "../components/QRCodePanel";
import StatusBadge from "../components/StatusBadge";
import EmptyState from "../components/EmptyState";
import Toast from "../components/Toast";

export default function CertificateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });
  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <div>
        <Button variant="ghost" icon={ArrowLeft} onClick={() => navigate("/certificates")}>
          Back to Certificates
        </Button>
        <EmptyState title="Certificate not found" description={`No certificate with ID "${id}" exists.`} />
      </div>
    );
  }

  return (
    <div>
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Button variant="ghost" icon={ArrowLeft} onClick={() => navigate("/certificates")} className="mb-4">
          Back to Certificates
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GraduationCap size={20} className="text-white" />
                  <div>
<h2 className="text-sm font-bold text-white">MVGR College of Engineering</h2>
                <p className="text-[10px] text-blue-200">Maharaj Vijayaram Gajapathi Raj College of Engineering</p>
                  </div>
                </div>
                <StatusBadge status={cert.status} />
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="text-center pb-4 border-b border-slate-200">
                  <h3 className="text-xl font-bold text-[#0F172A]">Degree Certificate</h3>
                  <p className="text-xs text-slate-500 mt-1">Certificate ID: {cert.id}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Student Name</p>
                    <p className="text-base font-semibold text-[#0F172A] mt-0.5">{cert.studentName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Student ID</p>
                    <p className="text-base font-semibold text-[#0F172A] mt-0.5">{cert.studentId}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Department</p>
                    <p className="text-base font-semibold text-[#0F172A] mt-0.5">{cert.department}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Degree</p>
                    <p className="text-base font-semibold text-[#0F172A] mt-0.5">{cert.degree}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">CGPA</p>
                    <p className="text-base font-semibold text-[#0F172A] mt-0.5">{cert.cgpa} / 10.0</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Issue Date</p>
                    <p className="text-base font-semibold text-[#0F172A] mt-0.5">{cert.issueDate}</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-3">
                  <HashDisplay hash={cert.hash} />
                </div>

                <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <p className="text-xs text-slate-400">Principal</p>
                      <div className="w-28 h-0.5 bg-[#0F172A] mt-1" />
                      <p className="text-xs text-slate-500 mt-0.5 font-serif italic">Dr. MVGR Rao</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200" />
                    <div className="text-left">
                      <p className="text-xs text-slate-400">University Seal</p>
                      <div className="mt-1 w-10 h-10 rounded-full border-2 border-[#0F172A] flex items-center justify-center">
                        <GraduationCap size={14} className="text-[#0F172A]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-3">Actions</h4>
              <div className="space-y-2.5">
                <Button
                  variant="primary"
                  icon={ShieldCheck}
                  className="w-full"
                  onClick={() => {
                    navigate("/verify");
                  }}
                >
                  Verify Certificate
                </Button>
                <Button
                  variant="secondary"
                  icon={Download}
                  className="w-full"
                  onClick={() => setToast({ visible: true, message: "Download feature coming soon.", type: "success" })}
                >
                  Download PDF
                </Button>
                <Button
                  variant="secondary"
                  icon={Copy}
                  className="w-full"
                  onClick={() => {
                    navigator.clipboard.writeText(cert.hash);
                    setToast({ visible: true, message: "Hash copied to clipboard.", type: "success" });
                  }}
                >
                  Copy Hash
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col items-center">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-3 w-full text-left">Verification QR</h4>
              <QRCodePanel value={cert.id} size={140} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
