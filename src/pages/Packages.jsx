import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// local images 
import dubai from "../assets/Images/countries/dubai-1.avif";
import maldives from "../assets/Images/countries/maldives-1.avif";
import singapore from "../assets/Images/countries/singapore-1.avif";
import thailand from "../assets/Images/countries/thailand-1.avif";
import paris from "../assets/Images/countries/paris-1.avif";
import london from "../assets/Images/countries/london-1.avif";
import goa from "../assets/Images/countries/goa-1.avif";
import malaysia from "../assets/Images/countries/malaysia-1.avif";
import switzerland from "../assets/Images/countries/switzerland-1.avif";

function Packages() {
  const packages = [
    { name: "Dubai Luxury Trip", img: dubai, price: "", days: "5 Days", rating: 4.8 },
    { name: "Maldives Honeymoon", img: maldives, price: "₹75,000", days: "4 Days", rating: 4.9 },
    { name: "Singapore Explorer", img: singapore, price: "₹50,000", days: "5 Days", rating: 4.7 },
    { name: "Thailand Adventure", img: thailand, price: "₹40,000", days: "6 Days", rating: 4.6 },
    { name: "Paris Romantic Trip", img: paris, price: "₹1,20,000", days: "7 Days", rating: 4.9 },
    { name: "London City Tour", img: london, price: "₹1,10,000", days: "6 Days", rating: 4.7 },
    { name: "Goa Beach Holiday", img: goa, price: "₹20,000", days: "3 Days", rating: 4.5 },
    { name: "Malaysia Getaway", img: malaysia, price: "₹45,000", days: "5 Days", rating: 4.6 },
    { name: "Switzerland Dream Trip", img: switzerland, price: "₹1,50,000", days: "8 Days", rating: 5.0 },
  ];

  return (
    <div className="bg-white">

      {/*  HERO */}
      <div className="pt-9 pb-9 text-center bg-gradient-to-b from-gray-50 to-white">
        <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
          Tour Packages
        </p>

        <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Our Best Packages
        </h1>

        <p data-aos="fade-up" data-aos-delay="400" className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Choose from our carefully curated travel packages designed for comfort and adventure.
        </p>
      </div>

      {/*  PACKAGES GRID */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {packages.map((item, i) => (
            <div
              key={i}
                data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* PRICE TAG */}
               
              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="font-semibold text-lg mb-2">
                  {item.name}
                </h3>

                {/* DETAILS */}
                <div className="flex justify-between text-xs text-gray-500 mb-3">

                  <span className="flex items-center gap-1">
                    <FaClock /> {item.days}
                  </span>

                  <span className="flex items-center gap-1 text-yellow-500">
                    <FaStar /> {item.rating}
                  </span>

                </div>

                {/* LOCATION */}
                <p className="text-gray-500 text-xs mb-4 flex items-center gap-1">
                  <FaMapMarkerAlt /> Popular Destination
                </p>

                {/* BUTTON */}
                <button className="w-full bg-[#0ea5e9] text-white py-2 rounded-lg text-sm hover:bg-blue-500 transition">
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Packages;