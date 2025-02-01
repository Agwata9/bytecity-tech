import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Message: React.FC = () => {
  return (
    <section
      className="py-5 d-flex justify-content-center align-items-center text-center bg-warning"
      style={{
        height: '60vh', // Maintain the compact impactful height
        backgroundImage: 'url("message-bg.png")', // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#1a1a1a',
      }}
    >
      <Container>
        <h2 className="fw-bold text-dark mb-3">
          Work Smarter with Innovative IT Business Solutions
        </h2>
        <p className="fs-5 text-muted">
          Transform your business with cutting-edge technology, creative strategies, and tailored solutions to meet your needs.
        </p>
        <div className="d-flex justify-content-center">
          <Button
            variant="success" // WhatsApp green
            className="mt-3 fw-bold d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: '#25D366', // WhatsApp green
              borderColor: '#25D366',
              height: '50px', // Adjusted height for smaller button
              padding: '0 20px', // Added horizontal padding for content
              whiteSpace: 'nowrap', // Prevent text from wrapping
            }}
            href="https://wa.me/0777439049" // Replace with your WhatsApp number
            target="_blank" // Open link in a new tab
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon
              alt="WhatsApp"
              style={{ width: '20px', marginRight: '10px' }} // Icon size
            />
            Chat with Us on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Message;
