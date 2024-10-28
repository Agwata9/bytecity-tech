import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-dark text-white text-center d-flex align-items-center" style={{ height: '60vh', backgroundImage: 'url("/hero-image.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container text-left">
        <h1 style={{ color: 'black', fontSize: '2rem', textAlign: 'left' }}>Welcome to ByteCity Tech Solutions</h1>
        <p style={{ color: 'black', fontSize: '1rem', textAlign: 'left' }}>Your One-Stop IT Solutions Partner</p>
        <button style={{ backgroundColor: '#DC6526', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', textAlign: 'left' }}>
          Hire Us
        </button>
      </div>
    </section>
  );
};

export default Hero;