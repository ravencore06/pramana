export default function QRCodePanel({ value, size = 120 }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="bg-white border-2 border-[#0F172A] rounded-xl p-2"
        style={{ width: size + 16, height: size + 16 }}
      >
        <div
          className="w-full h-full bg-[#0F172A] relative overflow-hidden"
          style={{
            maskImage: "radial-gradient(circle at 50% 50%, transparent 35%, black 36%, black 100%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 35%, black 36%, black 100%)",
          }}
        >
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 p-1">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-sm ${Math.random() > 0.5 ? "bg-white" : "bg-transparent"}`}
              />
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#0F172A] rounded" />
        </div>
      </div>
      <span className="text-[10px] text-slate-400 font-mono">{value}</span>
    </div>
  );
}
