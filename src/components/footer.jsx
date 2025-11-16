export default function Footer() {
  return (
    <footer className="bg-[#1b1d22] text-gray-300 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT FEEDBACK FORM */}
        <div className="bg-[#15171b] p-8 rounded-xl border border-gray-700 max-w-sm">
          <h3 className="text-red-500 text-sm mb-3">FEEDBACK</h3>
          <h2 className="text-white text-2xl font-semibold leading-snug">
            Need Expert Guidance?<br />
            Request a callback from<br />
            our HVH support team
          </h2>

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-transparent border border-gray-600 rounded-md p-3 text-sm focus:outline-none focus:border-white"
            />

            <input
              type="text"
              placeholder="PHONE NUMBER"
              className="w-full bg-transparent border border-gray-600 rounded-md p-3 text-sm focus:outline-none focus:border-white"
            />

            <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700">
              Request a Call
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-6">Privacy</p>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* NAV LINKS */}
          <div>
            <h3 className="text-red-500 text-sm mb-3">INFO</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Products</li>
              <li>Technology</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-red-500 text-sm mb-3">ABOUT US</h3>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Innovation</li>
              <li>Safety Standards</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-red-500 text-sm mb-3">CONTACT US</h3>
            <p className="text-sm">
              +91-9173993127 <br />
              vanshaj@hvhhelmets.com / harshshah@hvhhelmets.com <br />
              Mon–Sat (10am to 10pm)
            </p>
          </div>
        </div>
      </div>

      {/* SUBSCRIPTION + SOCIAL + COPYRIGHT */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* SUBSCRIPTION */}
        <div>
          <h3 className="text-red-500 text-sm mb-3">SUBSCRIPTION</h3>
          <p className="text-sm mb-3">
            Stay updated with the latest HVH innovations, safety tips, and exclusive offers
          </p>

          <div className="flex items-center border border-gray-600 rounded-full overflow-hidden max-w-md">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent p-3 text-sm focus:outline-none"
            />
            <button className="bg-red-600 px-6 py-3 hover:bg-red-700">
              →
            </button>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          <div className="flex gap-4 text-xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-sm text-gray-500">
        © Copyright HVH Helmets. All Rights Reserved
      </div>
    </footer>
  );
}
