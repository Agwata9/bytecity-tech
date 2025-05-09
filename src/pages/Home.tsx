import React, { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Message from "../components/Message";
import WhyUs from "../components/WhyUs";
import HireUsModal from "../components/HireUsModal";
import OurClients from "../components/OurClients";
import TrainingHero from "../components/TrainingHero";
import CustomAccordion from "../components/CustomAccordion";

const Home: React.FC = () => {
  const [showHireUsModal, setShowHireUsModal] = useState(false);

 
  const handleCloseModal = () => setShowHireUsModal(false);

  const handleDataSubmit = (data: any) => {
    console.log("Form data submitted:", data);
    // Handle form submission here (e.g., send data to API or backend)
    setShowHireUsModal(false); // Close the modal after submission
  };

  return (
    <div>
      <Hero />
    
      <CustomAccordion />
      <Services />
      <Message />
      <WhyUs />
      <TrainingHero />
      <HireUsModal
        show={showHireUsModal}
        handleClose={handleCloseModal}
        handleDataSubmit={handleDataSubmit} // Pass handleDataSubmit prop
      />
      <OurClients />
    </div>
  );
};

export default Home;
