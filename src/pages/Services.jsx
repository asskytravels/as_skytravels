import {
  FaPlane,
  FaTrain,
  FaBus,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

import dubai from "../assets/Images/countries/dubai-1.avif";
import maldives from "../assets/Images/countries/maldives-1.avif";
import singapore from "../assets/Images/countries/singapore-1.avif";
import thailand from "../assets/Images/countries/thailand-1.avif";

function Services() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="pt-8 pb-8 text-center bg-gradient-to-b from-gray-50 to-white">
        <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
          Our Services
        </p>

        <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-gray-900">
          Complete Travel Solutions
        </h1>

        <p data-aos="fade-up" data-aos-delay="400" className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Plan your journey with ease — flights, trains, buses and tour packages
          all in one place.
        </p>
      </div>

      {/*  SERVICES CARDS */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          {[
            {
              icon: <FaPlane />,
              title: "Flight Booking",
              desc: "Book domestic & international flights at best prices.",
            },
            {
              icon: <FaTrain />,
              title: "Train Booking",
              desc: "Easy train ticket booking with instant confirmation.",
            },
            {
              icon: <FaBus />,
              title: "Bus Booking",
              desc: "Comfortable bus travel across cities at low cost.",
            },
            {
              icon: <FaGlobe />,
              title: "Tour Packages",
              desc: "Customized holiday packages for every destination.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center group"
            >
              {/* ICON FIXED */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-2xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

              <button className="text-[#0ea5e9] text-sm font-medium hover:underline">
                Book Now →
              </button>
            </div>
          ))}

        </div>
      </div>

      {/*  WHY CHOOSE US */}
      <div className="py-10 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
            Why Choose Us
          </p>

          <h2 data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-3xl font-bold mb-10">
            Travel With Confidence
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                title: "Best Price",
                desc: "We offer unbeatable pricing.",
              },
              {
                title: "Instant Booking",
                desc: "Quick & easy confirmation.",
              },
              {
                title: "24/7 Support",
                desc: "Always ready to help you.",
              },
              {
                title: "Secure Payment",
                desc: "Safe & trusted transactions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur border shadow-lg hover:shadow-xl transition text-center"
              >
                <FaCheckCircle className="text-[#0ea5e9] text-2xl mx-auto mb-3" />

                <h3 className="font-semibold text-md mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/*  HOW IT WORKS */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p  data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
            How It Works
          </p>

          <h2 data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-3xl font-bold mb-10">
            Simple Booking Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Search",
              "Select",
              "Book",
              "Travel",
            ].map((step, i) => (
              <div key={i} className="text-center">

                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#0ea5e9] text-white font-bold mb-3">
                  {i + 1}
                </div>

                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/*  POPULAR DESTINATIONS */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
              Popular Packages
            </p>
            <h2 data-aos="fade-up" data-aos-delay="200"  className="text-2xl md:text-3xl font-bold">
              Top Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { name: "Dubai", img: dubai },
              { name: "Maldives", img: maldives },
              { name: "Singapore", img: singapore },
              { name: "Thailand", img: thailand },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  {item.name}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;