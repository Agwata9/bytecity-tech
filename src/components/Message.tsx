import React from 'react';
import { Container, Button } from 'react-bootstrap';


const Message: React.FC = () => {
  return (
    <section 
      className="py-5 d-flex align-items-center justify-content-center position-relative message-section"
    >
      <Container className="text-center position-relative z-index-1">
        <h2 className="display-5 fw-bold text-dark mb-4">
          Transform Your Business
        </h2>
        
        <div className="d-flex justify-content-center mb-4">
        
        </div>
        
        <p className="lead text-dark mb-5 mx-auto custom-paragraph">
          Leverage cutting-edge solutions tailored to your unique business needs
        </p>

        <Button
          variant="warning"
          className="fw-bold px-5 py-3 rounded-pill hover-effect d-inline-flex align-items-center"
          href="https://wa.me/0777439049"
          target="_blank"
        >
          <span>Chat Now</span>
        </Button>
      </Container>
    </section>
  );
};

export default Message;
