export default function HelmetCategories() {
  const categories = [
    {
      title: "CARBON FIBER HELMET",
      img: "https://picsum.photos/id/1011/800/600",
      size: "col-span-2",
    },
    {
      title: "PINK BLAST HELMET",
      img: "https://picsum.photos/id/1020/800/600",
      size: "col-span-2",
    },
    {
      title: "TECH HELMET",
      img: "https://picsum.photos/id/1024/800/600",
      size: "col-span-2",
    },
    {
      title: "RETRO METAL HELMET",
      img: "https://picsum.photos/id/1030/800/600",
      size: "col-span-2",
    },
    {
      title: "BIKER FACE HELMET",
      img: "https://picsum.photos/id/1040/800/600",
      size: "col-span-1",
    },
    {
      title: "GIRLS RIDER HELMET",
      img: "https://picsum.photos/id/1050/800/600",
      size: "col-span-1",
    },
    {
      title: "OFFROAD HELMET",
      img: "https://picsum.photos/id/1060/800/600",
      size: "col-span-1",
    },
    {
      title: "BLUE WIND HELMET",
      img: "https://picsum.photos/id/1070/800/600",
      size: "col-span-1",
    },
  ];

  return (
    <div className="bg-[#101010] border border-gray-600 rounded-xl p-6 w-full max-w-5xl mx-auto mt-10">
      {/* Title */}
      <h1 className="text-center text-white font-bold text-xl mb-5 tracking-wide">
        FEATURED HELMET CATEGORIES
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`${cat.size} relative overflow-hidden rounded-lg`}
          >
            <img
              src={cat.img}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Overlay Button */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <button className="px-4 py-1 bg-white/90 text-black text-xs font-semibold rounded-full hover:bg-white transition">
                {cat.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
