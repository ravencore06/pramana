import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function HashDisplay({ hash, label = "SHA-256 Hash" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-1.5">
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</p>
      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
        <code className="flex-1 text-xs font-mono text-slate-600 break-all select-all">
          {hash}
        </code>
        <button
          onClick={handleCopy}
          className="p-1.5 hover:bg-white rounded-lg transition-colors shrink-0"
          aria-label={copied ? "Copied" : "Copy hash"}
        >
          {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-slate-400" />}
        </button>
      </div>
    </div>
  );
}
