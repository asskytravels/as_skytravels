import {
  FaMapMarkerAlt,
  FaStar,
  FaPlane,
  FaUmbrellaBeach,
  FaMountain,
  FaShip,
  FaCity,
  FaSearch,
  FaCheckCircle,
  FaPlaneDeparture,
  FaSmile,
} from "react-icons/fa";

import dubai from "../assets/Images/countries/dubai-1.avif";
import maldives from "../assets/Images/countries/maldives-1.avif";
import singapore from "../assets/Images/countries/singapore-1.avif";

function Explore() {
  const data = [
    {
      name: "Dubai",
      img: dubai,
      desc: "Luxury lifestyle, desert safari & iconic skyline",
    },
    {
      name: "Maldives",
      img: maldives,
      desc: "Crystal clear water & private villa experience",
    },
    {
      name: "Singapore",
      img: singapore,
      desc: "Modern city with world-class attractions",
    },
  ];

  return (
    <div className="bg-white py-20">

      {/*  HEADING */}
      <div data-aos="fade-up" className="text-center mb-14">
        <p className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
          Explore Destinations
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Premium Travel Experiences
        </h2>

        <p className="text-gray-500 mt-3">
          Handpicked destinations for unforgettable journeys
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">

        {data.map((item, i) => (
          <div
            key={i}
             data-aos="zoom-in-up"
        data-aos-delay={i * 150}
            className="relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition duration-500"
          >
            <img
              src={item.img}
              className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 p-6 text-white">

              <div className="flex items-center gap-2 mb-2 text-sm opacity-80">
                <FaMapMarkerAlt />
                Popular Destination
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {item.name}
              </h3>

              <p className="text-sm opacity-90 mb-4">
                {item.desc}
              </p>

              <div className="flex items-center gap-4 text-xs opacity-80 mb-4">
                <span className="flex items-center gap-1">
                  <FaStar /> 4.8 Rating
                </span>

                <span className="flex items-center gap-1">
                  <FaPlane /> Easy Travel
                </span>
              </div>

              <button className="bg-[#0ea5e9] px-5 py-2 rounded-full text-sm hover:bg-blue-500 transition">
                Explore Now
              </button>

            </div>
          </div>
        ))}

      </div>

      {/*  TOP EXPERIENCES */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
            Experiences
          </p>

          <h2  data-aos="fade-up"
        data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Explore Unique Travel Experiences
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                icon: <FaUmbrellaBeach />,
                title: "Beach Escape",
                desc: "Relax in crystal clear beaches and resorts",
              },
              {
                icon: <FaMountain />,
                title: "Adventure Trips",
                desc: "Trekking, hiking and thrilling journeys",
              },
              {
                icon: <FaShip />,
                title: "Cruise Tours",
                desc: "Luxury cruise travel experiences",
              },
              {
                icon: <FaCity />,
                title: "City Tours",
                desc: "Explore modern cities & landmarks",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="text-3xl text-[#0ea5e9] mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p data-aos="fade-up" className="text-[#0ea5e9] font-semibold uppercase text-sm mb-2">
            Process
          </p>

          <h2  data-aos="fade-up"
        data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            How Your Journey Begins
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                icon: <FaSearch />,
                title: "Choose Destination",
                desc: "Select your dream destination",
              },
              {
                icon: <FaCheckCircle />,
                title: "Plan Trip",
                desc: "Customize your journey easily",
              },
              {
                icon: <FaPlaneDeparture />,
                title: "Book & Travel",
                desc: "Smooth booking experience",
              },
              {
                icon: <FaSmile />,
                title: "Enjoy Trip",
                desc: "Create unforgettable memories",
              },
            ].map((step, i) => (
              <div key={i} 
                data-aos="zoom-in"
            data-aos-delay={i * 150}
              className="relative">

                <div className="w-10 h-10 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {i + 1}
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="text-2xl text-[#0ea5e9] mb-3 flex justify-center">
                    {step.icon}
                  </div>

                  <h3 className="font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  );
}

export default Explore;