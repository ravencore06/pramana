import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { certificates, departments, statuses } from "../data/mockData";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import CertificateTable from "../components/CertificateTable";
import Button from "../components/Button";
import Toast from "../components/Toast";

export default function IssuedCertificates() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const filtered = useMemo(() => {
    let result = [...certificates];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.studentName.toLowerCase().includes(q) ||
          c.studentId.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
      );
    }

    if (deptFilter !== "all") {
      result = result.filter((c) => c.department === deptFilter);
    }

    if (statusFilter !== "all") {
      result = result.filter((c) => c.status === statusFilter);
    }

    return result.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));
  }, [search, deptFilter, statusFilter]);

  return (
    <div>
      <PageHeader title="Issued Certificates" description="Browse, search, and manage all issued certificates." />

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search by name, ID, or certificate ID..."
            />
          </div>
          <div className="flex gap-3">
            <FilterDropdown
              label="Department"
              value={deptFilter}
              onChange={setDeptFilter}
              options={[
                { value: "all", label: "All Departments" },
                ...departments.map((d) => ({ value: d, label: d.split(" & ")[0] })),
              ]}
            />
            <FilterDropdown
              label="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              options={[
                { value: "all", label: "All Status" },
                ...statuses.map((s) => ({ value: s, label: s })),
              ]}
            />
          </div>
        </div>
      </motion.div>

      <CertificateTable
        certificates={filtered}
        onView={(cert) => navigate(`/certificate/${cert.id}`)}
        showActions={true}
      />

      {filtered.length > 0 && (
        <div className="flex items-center justify-between mt-4 text-sm text-slate-500">
          <p>Showing {filtered.length} of {certificates.length} certificates</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" disabled>Previous</Button>
            <Button variant="ghost" size="sm" disabled>Next</Button>
          </div>
        </div>
      )}
    </div>
  );
}