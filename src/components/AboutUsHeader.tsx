import React from 'react';
import { Container, Button } from 'react-bootstrap';

const AboutUsHeader: React.FC = () => {
  return (
    <section
      className="hero bg-dark d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("work-hero-image.jpg")', // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <Container className="text-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3">Our Team</h1>
          <p className="lead mb-4">
            We are ByteCity Tech Solutions, delivering innovative and tailor-made technology solutions for your business.
          </p>
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            href="/careers"
          >
            Join Our Team
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHeader;
