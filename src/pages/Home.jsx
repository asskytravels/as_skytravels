import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Masonry from "react-masonry-css";
import { FaPlaneDeparture, FaMoneyBillWave, FaUserTie ,FaStar} from "react-icons/fa";
import { Link } from "react-router-dom";


// Hero Images
import hero1 from "../assets/Images/hero_img/hero_1.jfif";
import hero2 from "../assets/Images/hero_img/hero_2.jfif";
import hero3 from "../assets/Images/hero_img/hero_3.jpg";

// Services Images
import s1 from "../assets/Images/services_img/services-1.avif";
import s2 from "../assets/Images/services_img/services-2.avif";
import s3 from "../assets/Images/services_img/services-3.avif";
import s4 from "../assets/Images/services_img/services-4.avif";

// Countries Images 
import c1a from "../assets/Images/countries/dubai-1.avif";
import c1b from "../assets/Images/countries/dubai-2.avif";

import c2a from "../assets/Images/countries/singapore-1.avif";
import c2b from "../assets/Images/countries/singapore-2.avif";

import c3a from "../assets/Images/countries/malaysia-1.avif";
import c3b from "../assets/Images/countries/malaysia-2.avif";

import c4a from "../assets/Images/countries/thailand-1.avif";
import c4b from "../assets/Images/countries/thailand-2.avif";

import c5a from "../assets/Images/countries/london-1.avif";
import c5b from "../assets/Images/countries/london-2.avif";

import c6a from "../assets/Images/countries/paris-1.avif";
import c6b from "../assets/Images/countries/paris-2.avif";

import c7a from "../assets/Images/countries/maldives-1.avif";
import c7b from "../assets/Images/countries/maldives-2.avif";

import c8a from "../assets/Images/countries/goa-1.avif";
import c8b from "../assets/Images/countries/goa-2.avif";

import c9a from "../assets/Images/countries/kerala-1.avif";
import c9b from "../assets/Images/countries/kerala-2.avif";

import c10a from "../assets/Images/countries/Germany-1.avif";
import c10b from "../assets/Images/countries/Germany-2.avif";

import c11a from "../assets/Images/countries/switzerland-1.avif";
import c11b from "../assets/Images/countries/switzerland-2.avif";


//travel image
import t1 from "../assets/Images/Travel_img/travel-1.jfif";
import t2 from "../assets/Images/Travel_img/travel-2.jfif";
import t3 from "../assets/Images/Travel_img/travel-3.jfif";


//test images
import user1 from "../assets/Images/testimonials/test-1.jpg";
import user2 from "../assets/Images/testimonials/test-2.jpg";
import user3 from "../assets/Images/testimonials/test-3.jpg";

function Home() {
 const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

const countries = [
  { name: "Dubai", images: [c1a, c1b] },
  { name: "Singapore", images: [c2a, c2b] },
  { name: "Malaysia", images: [c3a, c3b] },
  { name: "Thailand", images: [c4a, c4b] },
  { name: "London", images: [c5a, c5b] },
  { name: "Paris", images: [c6a, c6b] },
  { name: "Maldives", images: [c7a, c7b] },
  { name: "Goa", images: [c8a, c8b] },
  { name: "Kerala", images: [c9a, c9b] },
  { name: "Germany", images: [c10a, c10b] },
  { name: "Switzerland", images: [c11a, c11b] },
];

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/*HERO */}
      <div className="relative h-screen w-full overflow-hidden max-w-[100vw]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slide"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              index === current
                ? "opacity-100 scale-100"
                :  "opacity-0 scale-100"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 pt-14">
          <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm mb-4" data-aos="fade-down">
            Explore the World 🌍
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl">
            Discover Your Perfect Journey with
            <span className="text-[#38bdf8]" data-aos="fade-up"
    data-aos-delay="200"> A&S Sky Travels</span>
          </h1>

          <p className="max-w-xl mb-6 text-gray-200"     data-aos="fade-up"
    data-aos-delay="400">
            Flights, Trains, Buses & Tour Packages — all in one place.
          </p>


<div
  className="flex gap-4"
  data-aos="zoom-in"
  data-aos-delay="600"
>
  <Link to="/explore">
    <button className="bg-[#0ea5e9] px-6 py-3 rounded-full hover:bg-blue-500">
      Explore Now
    </button>
  </Link>

  <Link to="/packages">
    <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
      View Packages
    </button>
  </Link>
</div>

          <div className="flex gap-3 mt-8">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${
                  current === i ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

{/* SERVICES */}
<div className="py-10 bg-gradient-to-b from-white to-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-4xl font-bold mb-3">
      Our Premium Services
    </h2>

    <p className="text-gray-500 mb-12">
      Smart travel solutions designed for comfort and convenience
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        { name: "Flight Booking", img: s1, icon: "✈️" },
        { name: "Train Booking", img: s2, icon: "🚆" },
        { name: "Bus Booking", img: s3, icon: "🚌" },
        { name: "Tour Packages", img: s4, icon: "🌍" },
      ].map((item, i) => (

        <div
          key={i}
          className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition duration-500"   data-aos="fade-up"
      data-aos-delay={i * 150}
        >

          {/* Background Image */}
          <img
            src={item.img}
            className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">

            {/* Icon */}
            <div className="text-3xl mb-2">{item.icon}</div>

            {/* Title */}
            <h3 className="font-bold text-lg tracking-wide">
              {item.name}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition">
              Fast, secure & best price booking
            </p>

          </div>

        </div>

      ))}

    </div>
  </div>
</div>

{/*WHY CHOOSE US */}
<div className="py-10 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <div data-aos="fade-right">
      <p className="text-[#0ea5e9] font-semibold tracking-wide mb-3 uppercase text-sm" data-aos="fade-up">
        Why Choose Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"         data-aos="fade-up"
        data-aos-delay="200">
        Making Every Journey <br />
        <span className="text-[#0ea5e9]">Memorable & Hassle-Free</span>
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed" data-aos="fade-up"
        data-aos-delay="400">
        We offer complete travel solutions including flights, trains, buses and
        customized tour packages. Experience seamless booking and unforgettable
        journeys with us.
      </p>

      <ul className="space-y-4 mb-8"             data-aos="fade-up"
        data-aos-delay="500">
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-6 h-6 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-full text-sm">✓</span>
          Family Friendly Trips
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-6 h-6 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-full text-sm">✓</span>
          Couple & Honeymoon Packages
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-6 h-6 flex items-center justify-center bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-full text-sm">✓</span>
          Adventure & Group Tours
        </li>
      </ul>

      <button className="bg-[#0ea5e9] text-white px-7 py-3 rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg transition"         data-aos="zoom-in"
        data-aos-delay="900">
        Learn More
      </button>
    </div>

    {/* RIGHT - CARDS */}
    <div className="grid gap-6">

      {/* CARD 1 */}
      <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"        data-aos="fade-left"
        data-aos-delay="200">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] text-xl">
          <FaPlaneDeparture />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Safe Traveling
          </h3>
          <p className="text-gray-600 text-sm">
            Secure and comfortable journeys with trusted travel partners.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"  data-aos="fade-left"
        data-aos-delay="400">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-xl">
          <FaMoneyBillWave />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Affordable Pricing
          </h3>
          <p className="text-gray-600 text-sm">
            Best deals with no hidden costs for all travel services.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"         data-aos="fade-left"
        data-aos-delay="600">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-xl">
          <FaUserTie />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Expert Guidance
          </h3>
          <p className="text-gray-600 text-sm">
            Professional support to plan your trip perfectly.
          </p>
        </div>
      </div>

    </div>

  </div>
</div>

 {/* MASONRY COUNTRIES */}
      <div className="py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10"  data-aos="fade-up">
          Discover Your Next Dream Destination
        </h2>

        <div className="max-w-6xl mx-auto px-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="space-y-6"
          >
{countries.map((item, i) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 100}
className={`relative rounded-xl overflow-hidden group ${
  i % 3 === 0 ? "h-[400px]" : i % 2 === 0 ? "h-[320px]" : "h-[280px]"
}`}
    >
      {item.images.map((img, imgIndex) => (
        <img
          key={imgIndex}
          src={img}
          className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            imgIndex === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h2 className="text-xl font-bold tracking-wide">
          {item.name}
        </h2>
      </div>
    </div>
  );
})}
          </Masonry>
        </div>
      </div>
{/* TESTIMONIALS */}
<div className="py-10 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-12">
      <p className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2" data-aos="fade-up">
        Testimonials
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 mt-3" data-aos="fade-up" data-aos-delay="400">
        Real experiences from travelers who trusted us
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="100">
        <p className="text-gray-600 text-sm mb-6">
          "Amazing service! Booked my Dubai trip easily and everything was well organized."
        </p>

        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        </div>

        <div className="flex items-center gap-3">
          <img
            src={user1}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Rahul Kumar</h4>
            <p className="text-sm text-gray-500">Chennai</p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="300">
        <p className="text-gray-600 text-sm mb-6">
          "Best pricing and smooth booking experience. Highly recommended."
        </p>

        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        </div>

        <div className="flex items-center gap-3">
          <img
            src={user2}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
            <p className="text-sm text-gray-500">Bangalore</p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="500">
        <p className="text-gray-600 text-sm mb-6">
          "Very professional service. Booking was quick and affordable."
        </p>

        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        </div>

        <div className="flex items-center gap-3">
          <img
            src={user3}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Arjun Patel</h4>
            <p className="text-sm text-gray-500">Mumbai</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
{/* TRAVEL BLOG / TIPS */}
<div className="py-10 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-12">
      <p className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2" data-aos="fade-up">
        Travel Guide
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
        Latest Travel Tips & Insights
      </h2>
      <p className="text-gray-500 mt-3" data-aos="fade-up" data-aos-delay="400">
        Discover useful tips, destinations and travel ideas for your next trip
      </p>
    </div>

    {/* BLOG CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="100">
        <div className="overflow-hidden">
          <img
            src={t1}
            className="w-full h-56 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-[#0ea5e9] mb-2">Travel Tips</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Essential Travel Tips for First-Time Travelers
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Learn how to plan your journey, pack smart and avoid common travel mistakes.
          </p>
          <button className="text-[#0ea5e9] font-medium hover:underline">
            Read More →
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="300">
        <div className="overflow-hidden">
          <img
            src={t2}
            className="w-full h-56 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-[#0ea5e9] mb-2">Destinations</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Top 5 International Destinations to Visit in 2026
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Explore trending destinations like Dubai, Singapore and Maldives for your dream vacation.
          </p>
          <button className="text-[#0ea5e9] font-medium hover:underline">
            Read More →
          </button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="500">
        <div className="overflow-hidden">
          <img
            src={t3}
            className="w-full h-56 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-[#0ea5e9] mb-2">Planning</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            How to Plan a Perfect Vacation Without Stress
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Step-by-step guide to booking flights, choosing hotels and managing your travel budget.
          </p>
          <button className="text-[#0ea5e9] font-medium hover:underline">
            Read More →
          </button>
        </div>
      </div>

    </div>

  </div>
</div>


{/*  ENQUIRY + MAP  */}
<div className="py-2 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/*HEADING */}
    <div className="text-center mb-12">
      <p className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2" data-aos="fade-up">
        Contact Us
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900"  data-aos="fade-up"
        data-aos-delay="200">
        Plan Your Perfect Trip
      </h2>
      <p className="text-gray-500 mt-3" data-aos="fade-up"
        data-aos-delay="400">
        Fill in your details and we’ll help you plan your journey
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* LEFT FORM */}
      <div className="bg-white p-8 rounded-2xl shadow-md" data-aos="fade-right">
        <form className="grid gap-4">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border focus:ring-2 focus:ring-[#0ea5e9]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg border focus:ring-2 focus:ring-[#0ea5e9]"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg border focus:ring-2 focus:ring-[#0ea5e9]"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Destination"
              className="p-3 rounded-lg border focus:ring-2 focus:ring-[#0ea5e9]"
            />

            <select className="p-3 rounded-lg border focus:ring-2 focus:ring-[#0ea5e9]">
              <option>Select Service</option>
              <option>Flight Booking</option>
              <option>Train Booking</option>
              <option>Bus Booking</option>
              <option>Tour Package</option>
            </select>
          </div>

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg border focus:ring-2 focus:ring-[#0ea5e9]"
          ></textarea>

          <button className="bg-[#0ea5e9] text-white py-3 rounded-lg hover:bg-blue-500 transition font-medium">
            Send Enquiry
          </button>

        </form>
      </div>

      {/* RIGHT MAP */}
      <div className="space-y-6">

        <div className="rounded-2xl overflow-hidden shadow-md" data-aos="fade-left">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Pattukkottai%20Tamil%20Nadu&output=embed"
            className="w-full h-[350px]"
          ></iframe>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-left"
          data-aos-delay="200">
          <h3 className="font-semibold text-gray-900 mb-2">
            A&S Sky Travels
          </h3>

          <p className="text-gray-600 text-sm mb-2">
            134A, Latchathoppu North,  
            Nainakulam PO, Pattukkottai,  
            Thanjavur Dt, Tamil Nadu - 614602
          </p>

          <p className="text-gray-600 text-sm">📞 +91 6384131529</p>
          <p className="text-gray-600 text-sm">📧 asstravels@gmail.com</p>
        </div>

      </div>

    </div>

  </div>
</div>
    </div>




  
);
}

export default Home;