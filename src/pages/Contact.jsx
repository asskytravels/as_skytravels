import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaHeadset,
  FaMoneyBillWave,
  FaRoute,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How can I book tickets?",
      a: "You can book via phone, WhatsApp or directly through our services page.",
    },
    {
      q: "Do you provide refunds?",
      a: "Refunds depend on the service provider policy. We assist you fully.",
    },
    {
      q: "What payment methods are available?",
      a: "We accept UPI, bank transfer and other secure payment methods.",
    },
    {
      q: "Do you arrange international trips?",
      a: "Yes, we provide complete international travel packages.",
    },
  ];

  return (
    <div className="bg-white">

      {/*  HERO */}
      <div className="pt-9 pb-9 text-center bg-gradient-to-b from-gray-50 to-white">
        <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
          Contact Us
        </p>

        <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-gray-900">
          We’re Here to Help You Travel Better
        </h1>

        <p data-aos="fade-up" data-aos-delay="400" className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Reach out to us anytime for bookings, support and travel guidance.
        </p>
      </div>

      {/*  QUICK ACTIONS */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <a
            data-aos="fade-up"
            data-aos-delay="100"
            href="tel:+911234567890"
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition text-center group"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-2xl mb-4 group-hover:scale-110 transition">
              <FaPhoneAlt />
            </div>
            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
            <p className="text-gray-500 text-sm">Talk directly with our team</p>
          </a>

          <a
            data-aos="fade-up"
            data-aos-delay="300"
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition text-center group"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mb-4 group-hover:scale-110 transition">
              <FaWhatsapp />
            </div>
            <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
            <p className="text-gray-500 text-sm">Quick chat & instant reply</p>
          </a>

          <a
            data-aos="fade-up"
            data-aos-delay="500"
            href="mailto:asstravels@gmail.com"
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition text-center group"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-2xl mb-4 group-hover:scale-110 transition">
              <FaEnvelope />
            </div>
            <h3 className="font-semibold text-lg mb-1">Email Us</h3>
            <p className="text-gray-500 text-sm">Send your queries anytime</p>
          </a>

        </div>
      </div>

      {/* CONTACT INFO  */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">

          <div data-aos="fade-right" className="p-6 bg-white rounded-2xl shadow-md space-y-4">
            <h2 className="font-semibold text-lg">Contact Information</h2>

            <p className="flex items-center gap-3 text-sm text-gray-600">
              <FaPhoneAlt className="text-[#0ea5e9]" />
              +91 6384131529 
            </p>

            <p className="flex items-center gap-3 text-sm text-gray-600">
              <FaEnvelope className="text-[#0ea5e9]" />
              asstravels@gmail.com
            </p>

            <p className="text-sm text-gray-500">
              📍 134A, Latchathoppu North, Nainakulam Po, Pattukkottai, Thanjavur Dt, Tamil Nadu, PIN-614602.
            </p>
          </div>

<div data-aos="fade-left" className="p-6 bg-white rounded-2xl shadow-md">
  <h2 className="font-semibold text-lg mb-4">Business Hours</h2>

  <div className="space-y-3 text-sm text-gray-600">
    <p className="flex items-center gap-2">
      <FaClock className="text-[#0ea5e9]" />
      Mon - Sun : 24 Hours
    </p>

    <p className="text-green-600 font-medium">
      ✔ We are open 24/7 for bookings & support
    </p>

    <p className="text-gray-500 text-xs">
      *Available on all holidays
    </p>
  </div>
</div>

        </div>
      </div>

      {/* WHY CONTACT US */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p data-aos="fade-up" className="text-[#0ea5e9] text-sm font-semibold mb-2">
            Why Contact Us
          </p>

          <h2 data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-3xl font-bold mb-10">
            We Make Travel Easy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                icon: <FaHeadset />,
                title: "Instant Support",
                desc: "Get quick assistance anytime",
              },
              {
                icon: <FaMoneyBillWave />,
                title: "Best Price",
                desc: "Affordable and transparent pricing",
              },
              {
                icon: <FaRoute />,
                title: "Custom Plans",
                desc: "Personalized travel solutions",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition text-center"
              >
                <div className="text-2xl text-[#0ea5e9] mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/*  FAQ */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <h2 data-aos="fade-up" className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {faqs.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <FaChevronDown
                    className={`transition ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;