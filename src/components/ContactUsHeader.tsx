import React from 'react';
import { Container, Button } from 'react-bootstrap';


const ContactUsHeader: React.FC = () => {
  return (
    <section
      className="hero bg-dark d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("contact-us-hero-image.jpg")', // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <Container className="text-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-4">
            Partner with ByteCity Tech Solutions for innovative and tailored technology solutions that drive your business forward.
          </p>
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            href="#contact-us"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsHeader;
