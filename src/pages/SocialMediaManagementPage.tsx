import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faRocket } from '@fortawesome/free-solid-svg-icons';
import {
  faTiktok, faInstagram, faFacebook, faTwitter,
  faWhatsapp, faTelegram, faLinkedin, faSlack, faDiscord
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaManagementPage: React.FC = () => {
  const services = [
    { icon: faTiktok, title: 'TikTok Growth Strategy', price: 'Ksh 15k - 50k/month' },
    { icon: faInstagram, title: 'Instagram Brand Building', price: 'Ksh 20k - 60k/month' },
    { icon: faFacebook, title: 'Facebook Community Management', price: 'Ksh 10k - 40k/month' },
    { icon: faTwitter, title: 'X Platform Optimization', price: 'Ksh 12k - 35k/month' },
    { icon: faBullhorn, title: 'Cross-Platform Advertising', price: 'Ksh 25k - 100k/month' },
    { icon: faRocket, title: 'Performance Analytics', price: 'Ksh 8k - 20k/month' },
  ];

  const socialLinks = [
    { icon: faWhatsapp, name: 'WhatsApp', href: 'https://wa.me/yourNumber' },
    { icon: faTiktok, name: 'TikTok', href: 'https://tiktok.com/@yourUsername' },
    { icon: faInstagram, name: 'Instagram', href: 'https://instagram.com/yourUsername' },
    { icon: faFacebook, name: 'Facebook', href: 'https://facebook.com/yourUsername' },
    { icon: faTelegram, name: 'Telegram', href: 'https://t.me/yourUsername' },
    { icon: faLinkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/yourUsername' },
    { icon: faSlack, name: 'Slack', href: 'https://yourWorkspace.slack.com' },
    { icon: faDiscord, name: 'Discord', href: 'https://discord.gg/yourInviteCode' }
  ];

  return (
    <section className="py-3 py-md-5 bg-light">
      {/* Hero Section */}
      <section className="hero-section bg-warning bg-opacity-10 py-5">
        <Container className="text-center">
          <FontAwesomeIcon icon={faBullhorn} size="2x" className="text-warning mb-4" />
          <h1 className="display-5 fw-bold text-warning mb-3">
            Professional Social Media Solutions
          </h1>
          <div className="d-flex justify-content-center mb-4">
            <hr className="w-25 border-2 border-warning opacity-75" />
          </div>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
            Transform your online presence with data-driven strategies and expert platform management
          </p>
        </Container>
      </section>

      <Container className="mt-4 mt-md-5">
        <header className="text-center mb-4 mb-md-5">
          <h2 className="fw-bold text-warning mb-3 fs-4">
            Comprehensive Social Media Services
          </h2>
          <div className="d-flex justify-content-center mb-3">
            <hr className="w-50 border-1 border-warning opacity-50" />
          </div>
          <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
            End-to-end social media solutions tailored to amplify your brand's digital voice
          </p>
        </header>

        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xl={4} lg={6} md={6} sm={12} className="d-flex">
              <Card className="h-100 shadow-sm border-0 flex-fill">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="mb-3 text-center">
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="text-warning mb-3" 
                      size="2x"
                    />
                    <h3 className="fw-bold text-warning mb-2 fs-5">
                      {service.title}
                    </h3>
                  </div>
                  <div className="mt-auto">
                    <div className="text-center mb-4">
                      <span className="badge bg-warning text-dark px-4 py-2 rounded-pill">
                        {service.price}
                      </span>
                    </div>
                    <Button
                      variant="outline-warning"
                      className="w-100 fw-bold text-uppercase py-2"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div className="text-center mt-5 py-4 bg-warning bg-opacity-10 rounded-3">
          <FontAwesomeIcon icon={faRocket} className="text-warning mb-4" size="2x" />
          <h2 className="fw-bold text-secondary mb-3 fs-4">
            Ready for Social Media Transformation?
          </h2>
          <Button variant="warning" className="px-5 py-3 fw-bold rounded-pill">
            Launch Your Strategy
          </Button>
        </div>

        {/* Social Links */}
        <div className="text-center mt-5 pt-4">
          <h3 className="fw-bold text-secondary mb-4 fs-5">
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
        </div>
      </Container>
    </section>
  );
};

export default SocialMediaManagementPage;