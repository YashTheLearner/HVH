import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ranbir Gehlot",
    role: "Bike Enthusiast",
    img: "/images/user1.png",
    text: `I've always been passionate about bikes, and helmets are an extension of my personality. HVH helmets give me both style and safety. The graphics stand out, and I constantly get compliments from my riding group. What surprised me most is the quality you get at such a fair price.`,
  },
  {
    name: "Arjun Rao",
    role: "Adventure Rider",
    img: "/images/user2.png",
    text: `On my adventure trips, I face rain, dust, and extreme terrains. My HVH helmet has never let me down. It's strong, stylish, and most importantly, safe. The double-layered shell and certified build give me the confidence to ride without fear.`,
  },
  {
    name: "Rocky Patel",
    role: "Track Racer",
    img: "/images/user3.png",
    text: `As a professional racer, I push my bike to its limits, which means I need a helmet that can match that intensity. HVH helmets provide excellent aerodynamic design and uncompromising safety features. During long races, the lightweight build keeps my neck from straining.`,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="w-full bg-[#1d1d1d] text-white py-20">
      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Header & Arrows */}
        <div className="flex justify-between items-center mb-10">
          <button onClick={prevSlide} className="text-red-500 text-xl">
            <FaChevronLeft />
          </button>

          <h2 className="text-3xl md:text-4xl font-semibold">
            What Our Clients Say About Us
          </h2>

          <button onClick={nextSlide} className="text-red-500 text-xl">
            <FaChevronRight />
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 flex justify-center">
                <div className="max-w-lg bg-black rounded-3xl p-8 relative shadow-lg 
                                border border-gray-800">
                  
                  {/* Image above card */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover"
                    />
                  </div>

                  <div className="mt-10 text-center">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{item.role}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all 
                ${index === i ? "bg-red-500" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
