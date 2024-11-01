import React, { useState } from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Discover from './components/Discover';
import TopBar from './components/TopBar';
import Message from './components/Message';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import HireUsModal from './components/HireUsModal';
// import CurrentOffers from './components/CurrentOffers';

const App: React.FC = () => {
  const [showHireUsModal, setShowHireUsModal] = useState(false);

  const handleShowModal = () => setShowHireUsModal(true);
  const handleCloseModal = () => setShowHireUsModal(false);

  return (
    <div className="App">
      <TopBar />
      <NavbarComponent onHireUsClick={handleShowModal}/>
      <Hero onHireUsClick={handleShowModal}/>
      <Discover />
      <AboutUs />
      <Message />
      <Services />
      <Testimonials />
      <HireUsModal show={showHireUsModal} handleClose={handleCloseModal} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default App;
