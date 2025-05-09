import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTiktok, faInstagram, faFacebook, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaBuilding, FaLaptopCode, FaPalette, FaBullhorn, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutUs: React.FC = () => {
  const socialLinks = [
    { href: 'https://wa.me/yourNumber', icon: faWhatsapp, name: 'WhatsApp' },
    { href: 'https://www.tiktok.com/@yourUsername', icon: faTiktok, name: 'TikTok' },
    { href: 'https://www.instagram.com/yourUsername', icon: faInstagram, name: 'Instagram' },
    { href: 'https://www.facebook.com/yourUsername', icon: faFacebook, name: 'Facebook' },
    { href: 'https://t.me/yourUsername', icon: faTelegram, name: 'Telegram' },
    { href: 'https://www.linkedin.com/in/yourUsername', icon: faLinkedin, name: 'LinkedIn' },
  ];

  const services = [
    { title: "Web Design", description: "Creating visually appealing, user-friendly websites", icon: <FaLaptopCode /> },
    { title: "Training", description: "Empowering teams with digital skills", icon: <FaUsers /> },
    { title: "Graphic Design", description: "Crafting striking brand visuals", icon: <FaPalette /> },
    { title: "Branding", description: "Holistic market connection strategies", icon: <FaBuilding /> },
    { title: "Social Media", description: "Effective online campaigns", icon: <FaBullhorn /> },
    { title: "Consultancy", description: "Actionable digital insights", icon: <FaLightbulb /> },
  ];

  return (
    <section className="py-3 py-md-5 bg-light">
      {/* Hero Section */}
      <section className="hero-section bg-warning bg-opacity-10 py-5">
        <Container className="text-center">
          <FaBuilding size={48} className="text-warning mb-4" />
          <h1 className="display-5 fw-bold text-warning mb-3">
            About ByteCity Tech
          </h1>
          <div className="d-flex justify-content-center mb-4">
            <hr className="w-25 border-2 border-warning opacity-75" />
          </div>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
            Where innovation meets excellence in digital solutions
          </p>
        </Container>
      </section>

      <Container className="mt-4 mt-md-5">
        {/* Mission & Vision */}
        <Row className="g-4 justify-content-center mb-5">
          <Col xl={6} lg={8} className="d-flex">
            <Card className="h-100 shadow-sm border-0 flex-fill">
              <Card.Body className="p-4">
                <h3 className="fw-bold text-warning mb-4 fs-4 border-bottom border-2 border-warning pb-2">
                  Our Mission
                </h3>
                <p className="text-secondary fs-5">
                  Deliver innovative solutions through cutting-edge web design and digital strategies, 
                  staying ahead of industry trends for exceptional service.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} lg={8} className="d-flex">
            <Card className="h-100 shadow-sm border-0 flex-fill">
              <Card.Body className="p-4">
                <h3 className="fw-bold text-warning mb-4 fs-4 border-bottom border-2 border-warning pb-2">
                  Our Vision
                </h3>
                <p className="text-secondary fs-5">
                  Be the preferred digital partner transforming ideas into exceptional results, 
                  exceeding expectations to help clients achieve digital success.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Core Services */}
        <section className="my-4 my-md-5">
          <header className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold text-warning mb-3 fs-4">
              Core Services
            </h2>
            <div className="d-flex justify-content-center mb-3">
              <hr className="w-50 border-1 border-warning opacity-50" />
            </div>
            <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
              Comprehensive digital solutions powering your business success
            </p>
          </header>

          <Row className="g-4 justify-content-center">
            {services.map((service, index) => (
              <Col key={index} xl={4} lg={6} md={6} className="d-flex">
                <Card className="h-100 shadow-sm border-0 flex-fill">
                  <Card.Body className="d-flex flex-column p-4 text-center">
                    <div className="text-warning mb-3" style={{ fontSize: '2rem' }}>
                      {service.icon}
                    </div>
                    <h4 className="fw-bold text-warning mb-3">{service.title}</h4>
                    <p className="text-muted flex-grow-1">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Social Links */}
        <section className="text-center mt-5 pt-4">
          <h3 className="fw-bold text-secondary mb-4 fs-4">
            Connect With Our Team
          </h3>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="btn btn-outline-warning d-flex align-items-center gap-2 rounded-pill px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} className="fs-5" />
                <span className="d-none d-sm-inline">{social.name}</span>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUs;