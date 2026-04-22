import {
  FaPlane,
  FaHeadset,
  FaShieldAlt,
  FaDollarSign,
} from "react-icons/fa";

import aboutImg from "../assets/Images/hero_img/hero_1.jfif";

function About() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="pt-10 pb-10 text-center bg-gradient-to-b from-gray-50 to-white">
        <p className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2" data-aos="fade-up">
          About Us
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900"  data-aos="fade-up" data-aos-delay="200">
          Your Trusted Travel Partner
        </h1>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm" data-aos="fade-up" data-aos-delay="400">
          We make travel simple, affordable and memorable with complete booking
          solutions.
        </p>
      </div>

      {/*ABOUT CONTENT */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

          {/* IMAGE */}
          <img
          data-aos="fade-right"
            src={aboutImg}
            alt="Travel experience"
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
          />

          {/* TEXT */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Seamless Travel Experiences
            </h2>

            <p className="text-gray-600 text-sm mb-3">
              We provide complete travel solutions including flights, trains,
              buses and customized tour packages.
            </p>

            <p className="text-gray-600 text-sm mb-5">
              Our goal is to deliver smooth, affordable and memorable journeys
              with trusted services.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 text-sm">

              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="200">
                <FaPlane className="text-[#0ea5e9]" />
                Easy Booking
              </div>

              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="300">
                <FaDollarSign className="text-[#0ea5e9]" />
                Best Price
              </div>

              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="400">
                <FaHeadset className="text-[#0ea5e9]" />
                24/7 Support
              </div>

              <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="500">
                <FaShieldAlt className="text-[#0ea5e9]" />
                Secure Booking
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">

          {[
            { num: "5000+", label: "Customers" },
            { num: "200+", label: "Destinations" },
            { num: "10+", label: "Experience" },
            { num: "24/7", label: "Support" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-[#0ea5e9]">
                {item.num}
              </h3>
              <p className="text-gray-500 text-xs">{item.label}</p>
            </div>
          ))}

        </div>
      </div>

      {/*WHY CHOOSE US  */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2" data-aos="fade-up">
            Why Choose Us
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"  data-aos="fade-up" data-aos-delay="200">
            Your Best Travel Partner
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition group">

              <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-[#0ea5e9]/10 mb-4 group-hover:scale-110 transition">
                <FaShieldAlt className="text-2xl text-[#0ea5e9]" />
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Safe & Secure
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                Your bookings are protected with trusted partners.
              </p>
            </div>

            {/* CARD 2 */}
            <div data-aos="fade-up" data-aos-delay="300" className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition group">

              <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-[#0ea5e9]/10 mb-4 group-hover:scale-110 transition">
                <FaDollarSign className="text-2xl text-[#0ea5e9]" />
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Affordable Pricing
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                Best deals without hidden charges.
              </p>
            </div>

            {/* CARD 3 */}
            <div  data-aos="fade-up" data-aos-delay="500" className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition group">

              <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-[#0ea5e9]/10 mb-4 group-hover:scale-110 transition">
                <FaHeadset className="text-2xl text-[#0ea5e9]" />
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                24/7 Support
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                Always here to assist you anytime.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="py-10 bg-[#0ea5e9] text-white text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-2" data-aos="fade-up">
          Ready to Explore the World?
        </h2>

        <p className="text-sm mb-4" data-aos="fade-up">
          Book your journey today with A&S Sky Travels.
        </p>

        <button data-aos="zoom-in" data-aos-delay="400" className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
          Book Now
        </button>
      </div>

    </div>
  );
}

export default About;