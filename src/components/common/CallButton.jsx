import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";

function ContactFloat() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-slideUp">

      {/* CLOSE */}
      <button
        onClick={() => setShow(false)}
        className="bg-white/90 backdrop-blur-md text-gray-700 shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <FaTimes size={12} />
      </button>

      {/*  CALL */}
      <a
        href="tel:+916384131529"
        className="relative w-[190px] flex items-center gap-3 px-4 py-2.5 rounded-full text-white overflow-hidden group shadow-xl hover:shadow-2xl transition animate-nudge"
      >
        {/* BACKGROUND */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-blue-500"></span>

        {/* SPLASH */}
        <span className="absolute w-0 h-0 bg-white/30 rounded-full group-hover:w-[260px] group-hover:h-[260px] transition-all duration-500"></span>

        {/* CONTENT */}
        <div className="relative flex items-center gap-3 z-10">
          <div className="bg-white/20 p-2 rounded-full">
            <FaPhoneAlt className="text-xs" />
          </div>

          <div className="text-xs leading-tight">
            <p className="font-semibold">Book Now</p>
            <p className="opacity-90">+91 63841 31529</p>
          </div>
        </div>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/916384131529"
        target="_blank"
        rel="noreferrer"
        className="relative w-[190px] flex items-center gap-3 px-4 py-2.5 rounded-full text-white overflow-hidden group shadow-xl hover:shadow-2xl transition animate-nudge delay-200"
      >
        {/* BACKGROUND */}
        <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"></span>

        {/* SPLASH */}
        <span className="absolute w-0 h-0 bg-white/30 rounded-full group-hover:w-[260px] group-hover:h-[260px] transition-all duration-500"></span>

        {/* CONTENT */}
        <div className="relative flex items-center gap-3 z-10">
          <div className="bg-white/20 p-2 rounded-full">
            <FaWhatsapp className="text-xs" />
          </div>

          <div className="text-xs leading-tight">
            <p className="font-semibold">Chat on WhatsApp</p>
          </div>
        </div>
      </a>

    </div>
  );
}

export default ContactFloat;