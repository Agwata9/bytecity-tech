import React from 'react';

const AboutUsHeader: React.FC = () => {
  return (
    <div
      className="hero-container position-relative text-white"
      style={{
        backgroundImage: 'url("work-hero-image.jpg")', // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></div>

      <div className="container position-relative z-index-1">
        <h1 className="display-4 text-light fw-bold">Our Team</h1>
        <p className="lead mb-4">
          We are ByteCity Tech Solutions, delivering innovative and tailor-made technology solutions for your business.
        </p>
        <a
          href="/careers"
          className="btn btn-orange btn-lg" // Custom class
        >
          Join Our Team
        </a>
      </div>
    </div>
  );
};

export default AboutUsHeader;
