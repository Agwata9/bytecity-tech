import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-dark text-white text-center d-flex align-items-center" style={{ height: '60vh', backgroundImage: 'url("/hero-image.png")', backgroundSize: 'cover' }}>
      <div className="container">
        <h1>Welcome to ByteCity Tech Solutions</h1>
        <p>Your One-Stop IT Solutions Partner</p>
      </div>
    </section>
  );
};

export default Hero;
