import React from 'react';
import { Container, Button } from 'react-bootstrap';

const OurServicesHeader: React.FC = () => {
  return (
    <section
      className="hero d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), url("services-hero-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      <Container className="text-center position-relative z-index-1">
        <div className="hero-content text-light">
          <h1 className="display-4 fw-bold mb-3 text-warning">
            Our Digital Services
          </h1>
          <div className="d-flex justify-content-center mb-4">
            <hr className="w-25 border-2 border-warning opacity-75" />
          </div>
          <p className="lead mb-4 fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Transform your online presence with our comprehensive suite of professional services
          </p>
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fw-bold rounded-pill hover-effect"
            href="#services"
            style={{
              background: 'var(--primary-color)',
              borderColor: 'var(--primary-color)'
            }}
          >
            Discover Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurServicesHeader;