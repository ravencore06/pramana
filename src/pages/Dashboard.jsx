import { useMemo } from "react";
import { FileText, ShieldCheck, Clock, Shield } from "lucide-react";
import { dashboardStats, certificates, recentActivity } from "../data/mockData";
import StatCard from "../components/StatCard";
import PageHeader from "../components/PageHeader";
import CertificateTable from "../components/CertificateTable";
import Timeline from "../components/Timeline";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const todayIssuances = useMemo(
    () => certificates.filter((c) => c.issueDate === "2026-07-24").length,
    []
  );

  const recentCerts = useMemo(() => certificates.slice(0, 5), []);

  const stats = [
    {
      icon: FileText,
      label: "Total Certificates",
      value: dashboardStats.totalCertificates.toLocaleString(),
      color: "bg-[#2563EB]",
      subtext: "All time issued",
    },
    {
      icon: ShieldCheck,
      label: "Verified Records",
      value: dashboardStats.verifiedRecords.toLocaleString(),
      color: "bg-[#16A34A]",
      subtext: `${((dashboardStats.verifiedRecords / dashboardStats.totalCertificates) * 100).toFixed(1)}% verified`,
    },
    {
      icon: Clock,
      label: "Today's Issuances",
      value: todayIssuances,
      color: "bg-[#F59E0B]",
      subtext: "Issued today",
    },
    {
      icon: Shield,
      label: "Integrity Score",
      value: `${dashboardStats.integrityScore}%`,
      color: "bg-[#0F172A]",
      subtext: "Blockchain-backed audit",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back, Principal. Here is the latest overview of the certificate system."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[#0F172A]">Recent Certificates</h2>
            <button
              onClick={() => navigate("/certificates")}
              className="text-xs font-medium text-[#2563EB] hover:underline"
            >
              View All
            </button>
          </div>
          <CertificateTable certificates={recentCerts} onView={(cert) => navigate(`/certificate/${cert.id}`)} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#0F172A] mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <Timeline activities={recentActivity} />
          </div>
        </div>
      </div>
    </div>
  );
}
