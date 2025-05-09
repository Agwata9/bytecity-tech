import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Store from "./pages/Store";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

import WebDesignPage from "./pages/WebDesignPage";
import HireUsModal from "./components/HireUsModal"; // Import the HireUsModal component
import GraphicDesignPage from "./pages/GraphicDesignPage";
import SocialMediaManagementPage from "./pages/SocialMediaManagementPage";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleClose = () => setShowModal(false); // Function to close the modal
  const handleShow = () => setShowModal(true); // Function to show the modal

  // Function to handle the submitted data from the modal
  const handleDataSubmit = (data: any) => {
    console.log("Captured Data:", data);
    handleClose(); // Close the modal after submission
  };

  return (
    <Router>
      <NavbarComponent />
      <div className="container text-center my-3">
        <button onClick={handleShow} className="btn btn-primary">
          Hire Us
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      
        <Route path="/training" element={<Training />} />
        <Route path="/store" element={<Store />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
      </Routes>
      <Footer />
      <HireUsModal show={showModal} handleClose={handleClose} handleDataSubmit={handleDataSubmit} />
    </Router>
  );
};

export default App;
