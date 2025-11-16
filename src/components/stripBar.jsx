export default function StripBar() {
  const items = [
    "FOCUS",
    "PRODUCTIVITY",
    "PASSION",
    "CREATIVITY",
    "EFFICIENCY",
    "2025 HVH HELMET",
    "WILD",
  ];

  return (
    <div className="w-full overflow-hidden bg-black py-3">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center mx-6">
            <span className="text-white font-bold tracking-wider text-sm">
              {text}
            </span>
            <span className="text-red-600 text-xl ml-4">✱</span>
          </div>
        ))}
      </div>
    </div>
  );
}
