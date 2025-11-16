import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
  const products = Array(12).fill({
    name: "HVH SpectraFlux",
    price: "₹4,999",
    img: "https://placehold.co/200",
    colors: ["red", "blue", "yellow", "green", "purple", "black"],
  });

  const [page, setPage] = useState(1);

  return (
    <div className="bg-black min-h-screen text-white flex">
      
      {/* LEFT FILTER BAR */}
      <aside className="w-64 bg-neutral-900 p-6 hidden md:block border-r border-neutral-800">
        <h2 className="text-lg font-semibold mb-4">Filter</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <label><input type="checkbox" className="mr-2" />Helmets</label>
            <label><input type="checkbox" className="mr-2" />Gear</label>
            <label><input type="checkbox" className="mr-2" />Parts</label>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price</h3>
          <input type="range" className="w-full" />
        </div>

        {/* Brand */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Brand</h3>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <label><input type="checkbox" className="mr-2" />HVH</label>
            <label><input type="checkbox" className="mr-2" />LS2</label>
            <label><input type="checkbox" className="mr-2" />Axor</label>
          </div>
        </div>

        {/* Color */}
        <div>
          <h3 className="font-medium mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {["red", "blue", "yellow", "green", "black", "white"].map((c) => (
              <span
                key={c}
                className="w-4 h-4 rounded-full border"
                style={{ background: c }}
              ></span>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">result for "Helmets"</h2>

          <select className="bg-neutral-800 px-3 py-2 rounded-md text-sm">
            <option>Sort by: Rating</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((p, index) => (
            <div key={index} className="bg-neutral-900 p-4 rounded-xl shadow-xl">
              <img src={p.img} alt="" className="mb-4 rounded-lg" />
              <h3 className="font-medium text-white">{p.name}</h3>
              <p className="text-gray-400 text-sm">{p.price}</p>

              {/* Colors */}
              <div className="flex gap-2 mt-3">
                {p.colors.map((c) => (
                  <span
                    key={c}
                    className="w-4 h-4 rounded-full border"
                    style={{ background: c }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-8 text-white">
          <button
            className="p-2 bg-neutral-800 rounded-full disabled:opacity-40"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-3">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`px-3 py-1 rounded-md ${
                  page === n ? "bg-red-600" : "bg-neutral-800"
                }`}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            className="p-2 bg-neutral-800 rounded-full"
            onClick={() => setPage(page + 1)}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
