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
import OurServices from "./pages/OurServices";
import HireUsModal from "./components/HireUsModal"; // Import the HireUsModal component

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleClose = () => setShowModal(false); // Function to close the modal
  const handleShow = () => setShowModal(true); // Function to show the modal

  // Function to handle the submitted data from the modal
  const handleDataSubmit = (data: any) => {
    console.log("Captured Data:", data);
    // Here you can send the data to a server or process it as needed
    // For example, you could use fetch or axios to send a POST request
    // fetch('/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));

    handleClose(); // Close the modal after submission
  };

  return (
    <Router>
      <NavbarComponent />
      <button onClick={handleShow} className="btn btn-primary">Hire Us</button> {/* Button to open the modal */}
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
      <HireUsModal show={showModal} handleClose={handleClose} handleDataSubmit={handleDataSubmit} /> {/* Render the modal */}
    </Router>
  );
};

export default App;