import { useState, useEffect } from "react";

export default function Carousel() {
  const slides = [
    "https://picsum.photos/id/1015/1200/500",
    "https://picsum.photos/id/1016/1200/500",
    "https://picsum.photos/id/1018/1200/500",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

  {/* Slides */}
  <div
    className="flex w-full h-full transition-transform duration-700"
    style={{ transform: `translateX(-${current * 100}vw)` }}
  >
    {slides.map((src, index) => (
      <img
        key={index}
        src={src}
        className="w-screen h-screen object-cover"
      />
    ))}
  </div>


      {/* Left Button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
