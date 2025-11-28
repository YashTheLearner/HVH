export default function AboutUs() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Images */}
          <div className="grid grid-cols-2 gap-3 w-[280px]">
            <img
              src="https://placehold.co/300x200"
              className="rounded-lg object-cover h-[150px]"
              alt=""
            />
            <img
              src="https://placehold.co/300x200"
              className="rounded-lg object-cover h-[150px]"
              alt=""
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-red-500 text-xl font-bold mb-2">ABOUT HVH</h2>

            <p className="text-gray-300 leading-relaxed">
              At HVH, we believe safety and style must ride side by side.
              Founded by two Formula Student engineers turned bikers -
              Harsh Shah and Vansh Jain - our vision is to redefine helmet
              technology for riders who demand uncompromising protection
              without sacrificing style.
            </p>

            <div className="inline-block bg-red-600 text-white font-semibold mt-4 px-4 py-2 rounded-md">
              5+ YEAR EXPERIENCE
            </div>
          </div>
        </div>

        {/* ENGINEERING MEETS PASSION */}
        <h3 className="text-2xl font-bold mt-12">Engineering Meets Passion</h3>
        <p className="text-gray-300 leading-relaxed mt-3 max-w-3xl">
          With first-hand expertise in motorsports engineering and product
          innovation, we bring the precision of race safety into the world
          of two-wheelers. Our helmets are crafted with Shell Sandwich
          Technology — a breakthrough fusion of carbon fiber for unmatched
          strength, fiberglass for resilience, and advanced composites for
          superior shock absorption. This unique construction delivers
          maximum safety while keeping every helmet lightweight, durable,
          and comfortable for everyday use.
        </p>

        {/* MADE FOR INDIA */}
        <h3 className="text-2xl font-bold mt-12">
          Made for India. Built to Global Standards
        </h3>
        <p className="text-gray-300 leading-relaxed mt-3 max-w-3xl">
          Headquartered in Bhopal, India, HVH is more than a helmet brand—
          it’s a movement to make world-class, high-performance helmets
          accessible to Indian riders. While global brands dominate the
          premium segment, HVH stands as an indigenous alternative that not
          only meets but exceeds international safety standards, all while
          being designed specifically for Indian roads and conditions.
        </p>

        {/* PURPOSE */}
        <h3 className="text-2xl font-bold mt-12">Our Purpose</h3>
        <p className="text-gray-300 leading-relaxed mt-3 max-w-3xl">
          Every helmet we design carries our dream of safer roads, our
          commitment to innovation, and our passion for motorsports
          engineering. At HVH, we are not just building helmets —
          we're building trust, confidence, and a stronger riding community.
        </p>

      </div>
    </div>
  );
}
