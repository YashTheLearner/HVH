import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ranbir Gehlot",
    role: "Bike Enthusiast",
    img: "/your-image-1.jpg", // 🔴 Replace this
    text: "I’ve always been passionate about bikes, ... such a fair price"
  },
  {
    name: "Arjun Rao",
    role: "Adventure Rider",
    img: "/your-image-2.jpg", // 🔴 Replace this
    text: "On my adventure trips, I face rain, dust... ride without fear"
  },
  {
    name: "Rocky Patel",
    role: "Track Racer",
    img: "/your-image-3.jpg", // 🔴 Replace this
    text: "As a professional racer, I push my bike... keeps my neck from straining"
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full bg-[#181818] py-16 text-white">
      <h2 className="text-center text-3xl font-semibold mb-8">
        What Our Clients Say About Us
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
        }}
        className="px-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-[#111] p-8 rounded-3xl mx-auto max-w-[380px]
              shadow-[0px_0px_40px_rgba(255,255,255,0.15)] 
              border border-gray-700">

              {/* avatar */}
              <div className="w-20 h-20 mx-auto -mt-14">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full rounded-full object-cover border-4 border-[#181818]"
                />
              </div>

              <h3 className="text-xl font-semibold text-center mt-2">{t.name}</h3>
              <p className="text-sm text-center opacity-80">{t.role}</p>

              {/* quote icon */}
              <div className="text-center text-red-500 text-3xl mt-2">❝</div>

              {/* description */}
              <p className="text-center text-sm opacity-90 mt-3 leading-relaxed">
                {t.text}
              </p>

              {/* red shape behind card */}
              <div className="absolute -bottom-4 -right-4 w-[85%] h-[85%] bg-red-600 rounded-3xl -z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
