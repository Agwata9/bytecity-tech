import React from 'react';
import { Container, Button } from 'react-bootstrap';

const OurServicesHeader: React.FC = () => {
  return (
    <section
      className="hero bg-dark d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("services-hero-image.jpg")', // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <Container className="text-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3">Our Services</h1>
          <p className="lead mb-4">
            Explore a range of services that will elevate your business, enhance your brand, and drive success.
          </p>
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            href="#services"
          >
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurServicesHeader;
