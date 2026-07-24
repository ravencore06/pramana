import { useMemo } from "react";
import { FileText, ShieldCheck, Clock, Shield, Award, CheckCircle2 } from "lucide-react";
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
      color: "bg-[#991B1B]",
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
      color: "bg-[#D97706]",
      subtext: "Issued today",
    },
    {
      icon: Shield,
      label: "Integrity Score",
      value: `${dashboardStats.integrityScore}%`,
      color: "bg-[#1E293B]",
      subtext: "Cryptographic audit pass",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back, Principal. Here is the latest overview of the certificate verification system."
      />

      {/* MVGR Highlights Banner */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#800000] text-white rounded-xl p-4 shadow-sm border border-red-900 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold tracking-wider text-red-200 uppercase">Institutional Excellence</span>
            <h3 className="text-sm font-bold text-white mt-0.5">MVGR College of Engineering (Autonomous)</h3>
            <p className="text-xs text-red-100 mt-1">Chintalavalasa, Vizianagaram · Est. 1997 · EAPCET Code: <strong className="text-white">MVRG</strong></p>
          </div>
          <Award size={36} className="text-white/80 shrink-0 ml-3" />
        </div>

        <div className="bg-emerald-800 text-white rounded-xl p-4 shadow-sm border border-emerald-900 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold tracking-wider text-emerald-200 uppercase">Quality Assurance</span>
            <h3 className="text-sm font-bold text-white mt-0.5">Proven Placements & Accreditations</h3>
            <p className="text-xs text-emerald-100 mt-1">Re-accredited by NAAC with 'A' Grade · All B.Tech Programs NBA Accredited</p>
          </div>
          <CheckCircle2 size={36} className="text-emerald-300 shrink-0 ml-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[#1E293B]">Recent Certificates</h2>
            <button
              onClick={() => navigate("/certificates")}
              className="text-xs font-semibold text-[#991B1B] hover:underline"
            >
              View All
            </button>
          </div>
          <CertificateTable certificates={recentCerts} onView={(cert) => navigate(`/certificate/${cert.id}`)} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#1E293B] mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <Timeline activities={recentActivity} />
          </div>
        </div>
      </div>
    </div>
  );
}
