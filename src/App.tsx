import React, { useState } from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Discover from './components/Discover';
import Message from './components/Message';
import Testimonials from './components/Testimonials'; // Ensure the file exists and is correctly named
import WhyChooseUs from './components/WhyChooseUs';
import HireUsModal from './components/HireUsModal';

// import CurrentOffers from './components/CurrentOffers';

const App: React.FC = () => {
  const [showHireUsModal, setShowHireUsModal] = useState(false);

  const handleShowModal = () => setShowHireUsModal(true);
  const handleCloseModal = () => setShowHireUsModal(false);

  return (
    <div className="App">
      
      <NavbarComponent onHireUsClick={handleShowModal}/>
      <Hero onHireUsClick={handleShowModal}/>
      <Discover />
      <Services />
      <Message />
      <AboutUs/>
      <Testimonials/>
      <HireUsModal show={showHireUsModal} handleClose={handleCloseModal} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default App;
