import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#services" className="text-white">Our Products & Services</a></li>
              <li><a href="#hire-us" className="text-white">Hire Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p>Address: 123 ByteCity Ave.</p>
            <p>Phone: +123456789</p>
            <p>Email: contact@bytecity.com</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p><a href="#" className="text-white">Facebook</a></p>
            <p><a href="#" className="text-white">Twitter</a></p>
            <p><a href="#" className="text-white">LinkedIn</a></p>
            <div className="mt-3">
              <h5>Newsletter</h5>
              <input type="email" placeholder="Enter your email" className="form-control" />
              <button className="btn btn-primary mt-2">Sign Up</button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
