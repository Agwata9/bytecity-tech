import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CareerHeader: React.FC = () => {
  return (
    <section
      className="hero bg-dark d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("career-hero-image.jpg")', // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <Container className="text-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3">Join Our Team</h1>
          <p className="lead mb-4">
            At ByteCity Tech Solutions, we’re looking for talented individuals who want to make an impact. Explore career opportunities with us.
          </p>
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            href="#career-openings"
          >
            View Open Positions
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CareerHeader;
