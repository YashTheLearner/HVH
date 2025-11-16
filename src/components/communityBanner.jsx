import React from 'react';
import communityImage from '../assets/communitybanner.png'; // Make sure to have an image in this path

export default function CommunityBanner() {
  return (
    <div className="w-full flex justify-center py-10 bg-[#1b1d22]">
      <div
        className="
          w-[90%] 
          max-w-6xl 
          rounded-2xl 
          border 
          border-gray-400 
          p-10 
          bg-center 
          bg-cover 
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${communityImage})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ride Beyond Limits — Join the HVH Community
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            Be part of a growing family of passionate riders who trust HVH for safety, 
            innovation, and style. Get exclusive access to safety tips, product launches, 
            and community rides.
          </p>

          <button className="border border-red-600 text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-red-600 hover:text-white transition">
            Sign Up Now →
          </button>
        </div>
      </div>
    </div>
  );
}
