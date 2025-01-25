import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Company Information */}
          <Col md={4} sm={12} className="mb-4">
            <h5 className="text-warning">ByteCity Tech Computer Solutions</h5>
            <p className="text-light">
              Delivering innovative tech solutions for your business. From IT consultancy to system sourcing and graphic design, we've got you covered!
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              
              <li><a href="/about-us" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/our-services" className="text-light text-decoration-none">Our Services</a></li>
              
              
              <li><a href="/training" className="text-light text-decoration-none">Training</a></li>
              <li><a href="/store" className="text-light text-decoration-none">Computer Store</a></li>
              <li><a href="/careers" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="/contact-us" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Portfolio</a></li>
            </ul>
          </Col>

          {/* Contact and Social Media */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="text-warning">Contact Us</h5>
            <p className="text-light">📧 Email: <a href="mailto:info@bytecity.tech" className="text-light">info@bytecity.tech</a></p>
            <p className="text-light">📞 Phone: <a href="tel:+254777439049" className="text-light">+254 777 439 049</a></p>
            <p className="text-light">💬 WhatsApp: <a href="https://wa.me/254702439049" className="text-light">+254 702 439 049</a></p>

            <div>
              <a href="https://www.facebook.com" className="text-light me-3"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="https://www.twitter.com" className="text-light me-3"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="https://www.linkedin.com" className="text-light me-3"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="https://www.instagram.com" className="text-light"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
