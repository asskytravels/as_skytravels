import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Packages from "../pages/Packages";
import Explore from "../pages/Explore";
import ContactFloat from "../components/common/CallButton";


// Layout Component
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

     <div className={isHome ? "" : "pt-[63px]"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />

        </Routes>
      </div>
      <ContactFloat/>
      <Footer />
    </>
  );
}


//Main Router
function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default AppRoutes;