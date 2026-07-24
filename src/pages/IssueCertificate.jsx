import { useState, useMemo } from "react";
import { FileText, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { departments, degrees } from "../data/mockData";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import CertificatePreview from "../components/CertificatePreview";
import Toast from "../components/Toast";

const defaultForm = {
  studentName: "",
  studentId: "",
  department: "",
  degree: "",
  cgpa: "",
  issueDate: "",
  email: "",
  certificateType: "Degree Certificate",
};

export default function IssueCertificate() {
  const [form, setForm] = useState(defaultForm);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({
      visible: true,
      message: `Certificate issued successfully for ${form.studentName}!`,
      type: "success",
    });
  };

  const handleReset = () => {
    setForm(defaultForm);
  };

  const previewData = useMemo(() => {
    const allFilled = form.studentName && form.studentId && form.department && form.degree && form.cgpa && form.issueDate;
    if (!allFilled) return null;
    return {
      id: `AST-2026-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      studentName: form.studentName,
      studentId: form.studentId,
      department: form.department,
      degree: form.degree,
      cgpa: form.cgpa,
      issueDate: form.issueDate,
      hash: "a3f5b8c1d2e4f6a7b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.studentName, form.studentId, form.department, form.degree, form.cgpa, form.issueDate]);

  return (
    <div>
      <PageHeader
        title="Issue Certificate"
        description="Fill in the details to issue a new academic certificate."
      />

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-[#0F172A] mb-5">Student & Certificate Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Student Name" id="studentName" name="studentName" value={form.studentName} onChange={handleChange} required placeholder="e.g. Arjun Mehta" />
              <Input label="Student ID" id="studentId" name="studentId" value={form.studentId} onChange={handleChange} required placeholder="e.g. STU2024001" />
              <Select label="Department" id="department" name="department" value={form.department} onChange={handleChange} required options={[
                { value: "", label: "Select department" },
                ...departments.map((d) => ({ value: d, label: d })),
              ]} />
              <Select label="Degree / Course" id="degree" name="degree" value={form.degree} onChange={handleChange} required options={[
                { value: "", label: "Select degree" },
                ...degrees.map((d) => ({ value: d, label: d })),
              ]} />
              <Input label="CGPA" id="cgpa" name="cgpa" type="number" step="0.01" min="0" max="10" value={form.cgpa} onChange={handleChange} required placeholder="e.g. 8.92" />
              <Input label="Issue Date" id="issueDate" name="issueDate" type="date" value={form.issueDate} onChange={handleChange} required />
              <Input label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="student@mvgrce.edu.in" />
              <Select label="Certificate Type" id="certificateType" name="certificateType" value={form.certificateType} onChange={handleChange} options={[
                { value: "Degree Certificate", label: "Degree Certificate" },
                { value: "Provisional Certificate", label: "Provisional Certificate" },
                { value: "Transcript", label: "Transcript" },
              ]} />
            </div>

            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200">
              <Button type="submit" variant="primary" icon={FileText} disabled={!form.studentName || !form.studentId}>
                Generate Certificate
              </Button>
              <Button type="button" variant="secondary" icon={RotateCcw} onClick={handleReset}>
                Reset
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="text-base font-semibold text-[#0F172A] mb-4">Certificate Preview</h3>
            <CertificatePreview data={previewData} />
          </motion.div>
        </div>
      </form>
    </div>
  );
}
