import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Store from "./pages/Store";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";

const App: React.FC = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/training" element={<Training />} />
        <Route path="/store" element={<Store />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
