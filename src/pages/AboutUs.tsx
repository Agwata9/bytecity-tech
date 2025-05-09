import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTiktok, faInstagram, faFacebook, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


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
    { title: "Web Design", description: "Creating visually appealing, user-friendly websites that communicate your brand's story" },
    { title: "Training", description: "Empowering individuals and teams with essential digital skills" },
    { title: "Graphic Design", description: "Crafting striking visuals that reinforce brand identity" },
    { title: "Branding", description: "Developing holistic strategies that connect with your market" },
    { title: "Social Media", description: "Growing your online presence with effective campaigns" },
    { title: "Consultancy", description: "Actionable insights to navigate the digital landscape" },
  ];

  return (
    
    <>
      
      
      <section className="py-4 py-md-5 bg-light">
        <Container>
          <div className="text-center mb-4 mb-md-5">
            <h2 className="display-5 fw-bold text-warning mb-3">
              About ByteCity Tech
            </h2>
            <div className="d-flex justify-content-center mb-4">
              <hr className="w-25 border-2 border-warning opacity-75" />
            </div>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              Where innovation and excellence converge in digital solutions
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            <Col xl={6} lg={8} className="mb-4 mb-lg-0">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <h3 className="fw-bold text-warning mb-4 fs-4">
                    <span className="border-bottom border-2 border-warning">Our Mission</span>
                  </h3>
                  <p className="text-secondary fs-5">
                    Deliver high-quality, innovative solutions that empower businesses through cutting-edge web design, 
                    training, and digital strategies. We stay ahead of industry trends to ensure exceptional service.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={6} lg={8}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <h3 className="fw-bold text-warning mb-4 fs-4">
                    <span className="border-bottom border-2 border-warning">Our Vision</span>
                  </h3>
                  <p className="text-secondary fs-5">
                    To be the preferred digital partner recognized for transforming ideas into exceptional results. 
                    We aim to exceed expectations and help clients achieve their digital goals.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section className="my-4 my-md-5">
            <h3 className="display-6 fw-bold text-warning text-center mb-4">
              Core Services
            </h3>
            <Row className="g-4 justify-content-center">
              {services.map((service, index) => (
                <Col key={index} md={6} lg={4} className="d-flex">
                  <Card className="h-100 shadow-sm border-0 flex-fill">
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="icon-wrapper mb-3">
                        <div className="text-warning fs-2 mb-2">•</div>
                      </div>
                      <h4 className="fw-bold text-dark mb-3">{service.title}</h4>
                      <p className="text-muted flex-grow-1">{service.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section className="text-center mt-5 pt-4">
            <h3 className="fw-bold text-secondary mb-4 fs-4">
              Connect With Our Team
            </h3>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="btn btn-outline-warning d-flex align-items-center gap-2 rounded-pill px-4"
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
    </>
  );
};

export default AboutUs;