import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent py-4"
      : "bg-white shadow-md py-3";

  const textColor =
    isHome && !scrolled ? "text-white" : "text-gray-800";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
<h1 className="flex items-center gap-3 select-none">

  {/* ICON */}
  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9] to-blue-600 shadow-lg">
    <span className="text-white font-bold text-sm tracking-wider">
      A&S
    </span>
  </div>

  {/* TEXT */}
  <div className="leading-tight">
    <p className={`font-semibold text-lg tracking-wide ${textColor}`}>
      Sky<span className="text-[#0ea5e9]">Travels</span>
    </p>

   <p
  className={`text-[10px] tracking-[3px] uppercase ${
    isHome && !scrolled ? "text-gray-300" : "text-gray-500"
  }`}
>
  Your Travel Partner
</p>
  </div>

</h1>

        {/* DESKTOP MENU */}
<div
  className={`hidden md:flex gap-10 text-[15px] font-normal items-center ${textColor}`}
>
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ].map((item, i) => (
    <Link
      key={i}
      to={item.path}
      className="relative tracking-wide hover:text-[#0ea5e9] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0ea5e9] after:transition-all after:duration-300 hover:after:w-full"
    >
      {item.name}
    </Link>
  ))}
</div>

        {/*  RIGHT SIDE */}
        <div className="flex items-center gap-4">

{/* SOCIAL ICONS */}
<div className={`hidden md:flex gap-4 text-lg ${textColor}`}>

  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <FaFacebookF className="cursor-pointer hover:text-[#0ea5e9] transition" />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/asskytravels_official/?utm_source=ig_web_button_share_sheet"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
  </a>

  {/* TWITTER  */}
  <a
    href="https://x.com/asskytravels"
    target="_blank"
    rel="noreferrer"
  >
    <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/916384131529"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp className="cursor-pointer hover:text-green-500 transition" />
  </a>

</div>

          {/*LOGIN */}
          <button
            className={`hidden md:block px-5 py-2 rounded-full text-sm ${
              isHome && !scrolled
                ? "bg-white text-black"
                : "bg-[#0ea5e9] text-white"
            }`}
          >
            Admin
          </button>

          <button
            className={`md:hidden text-xl ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
{menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 px-6 py-6 space-y-4 text-gray-800">

    <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#0ea5e9]">
      Home
    </Link>

    <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-[#0ea5e9]">
      About
    </Link>

    <Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:text-[#0ea5e9]">
      Services
    </Link>

    <Link to="/packages" onClick={() => setMenuOpen(false)} className="block hover:text-[#0ea5e9]">
      Packages
    </Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-[#0ea5e9]">
      Contact
    </Link>

    <button className="w-full bg-[#0ea5e9] text-white py-2 rounded-lg text-sm">
      Admin
    </button>

  </div>
)}
    </nav>
  );
}

export default Navbar;