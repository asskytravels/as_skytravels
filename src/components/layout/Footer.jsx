import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlane,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-14 pb-6 mt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        {/*  BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">
            A&S <span className="text-[#0ea5e9]">Sky Travels</span>
          </h2>

          <p className="text-sm leading-6 mb-4">
            Your trusted travel partner for flights, trains, buses and tour
            packages. We make every journey smooth, affordable and memorable.
          </p>

          {/* MINI FEATURES */}
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPlane className="text-[#0ea5e9]" />
              Easy Booking Experience
            </p>
            <p className="flex items-center gap-2">
              <FaPlane className="text-[#0ea5e9]" />
              Best Price Guarantee
            </p>
          </div>
        </div>



{/* QUICK LINKS */}
<div>
  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">

    <li>
      <Link to="/" className="hover:text-[#0ea5e9] cursor-pointer block">
        Home
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-[#0ea5e9] cursor-pointer block">
        About
      </Link>
    </li>

    <li>
      <Link to="/services" className="hover:text-[#0ea5e9] cursor-pointer block">
        Services
      </Link>
    </li>

    <li>
      <Link to="/packages" className="hover:text-[#0ea5e9] cursor-pointer block">
        Packages
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-[#0ea5e9] cursor-pointer block">
        Contact
      </Link>
    </li>

  </ul>
</div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Flight Booking</li>
            <li>Train Booking</li>
            <li>Bus Booking</li>
            <li>Tour Packages</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-[#0ea5e9]" />
            +91 63841 31529
          </p>

        

          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-[#0ea5e9]" />
            asstravels@gmail.com
          </p>

          <p className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="text-[#0ea5e9] mt-1" />
            134A, Latchathoppu North, Nainakulam Po, Pattukkottai, Thanjavur Dt, Tamil Nadu, PIN-614602.
          </p>
        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="bg-white/5 backdrop-blur rounded-2xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h3 className="text-white font-semibold text-lg">
              Subscribe for Travel Updates
            </h3>
            <p className="text-sm text-gray-400">
              Get latest offers and travel deals directly.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-sm bg-gray-800 text-white outline-none"
            />
            <button className="bg-[#0ea5e9] px-4 py-2 text-white rounded-r-lg text-sm hover:bg-blue-500 transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/*  BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">

{/* SOCIAL ICONS */}
<div className="flex gap-4 mb-2 md:mb-0">

  {[
    { Icon: FaFacebookF, link: "https://facebook.com" },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/asskytravels_official/?utm_source=ig_web_button_share_sheet",
    },
    { Icon: FaTwitter, link: "https://x.com/asskytravels" },
    { Icon: FaWhatsapp, link: "https://wa.me/916384131529" },
  ].map(({ Icon, link }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0ea5e9] transition"
    >
      <Icon className="text-sm" />
    </a>
  ))}

</div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-400 text-center">
          © 2026 A&S Sky Travels. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;