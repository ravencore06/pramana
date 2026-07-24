import { useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { certificates } from "../data/mockData";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import VerificationResultCard from "../components/VerificationResultCard";

export default function VerificationPortal() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState(null);

  const handleVerify = () => {
    if (!query.trim()) return;

    const cert = certificates.find(
      (c) =>
        c.id.toLowerCase() === query.trim().toLowerCase() ||
        c.hash.toLowerCase() === query.trim().toLowerCase()
    );

    if (cert) {
      setResult({ data: cert });
      setResultType("verified");
    } else {
      setResult({
        reason: "No matching certificate found in the system.",
        reasons: [
          "Certificate ID or hash is incorrect.",
          "Certificate may have been revoked or removed.",
          "The record may have been tampered with.",
        ],
      });
      setResultType("failed");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleVerify();
  };

  return (
    <div>
      <PageHeader
        title="Verification Portal"
        description="Verify the authenticity of academic certificates issued by MVGR College of Engineering."
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <div className="inline-flex p-3 bg-red-50 rounded-full mb-4">
          <ShieldCheck size={28} className="text-[#991B1B]" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">Verify Academic Certificate</h1>
        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
          Enter the Certificate ID or Verification Hash to verify the authenticity of a certificate.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-10"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. AST-2026-0001 or SHA-256 hash"
              className="w-full pl-11 pr-4 py-3 text-sm border border-slate-200 rounded-xl bg-white focus:border-[#991B1B] focus:ring-2 focus:ring-red-100 transition-all outline-none"
            />
          </div>
          <Button variant="primary" size="lg" icon={Search} onClick={handleVerify}>
            Verify
          </Button>
        </div>
      </motion.div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto"
        >
          <VerificationResultCard result={result} type={resultType} />
        </motion.div>
      )}
    </div>
  );
}