import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faTiktok,
  faInstagram,
  faFacebook,
  faTwitter,
  faTelegram,
  faLinkedin,
  faSlack,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SocialMediaManagementPage: React.FC = () => {
  return (
    <section
      className="py-5"
      style={{
        minHeight: '70vh',
        backgroundColor: '#f8f9fa',
        color: '#1a1a1a',
      }}
    >
      <Container>
        {/* Page Header */}
        <h1 className="fw-bold text-warning text-center mb-4">
          Social Media Management
        </h1>
        <p className="text-center text-secondary mb-5">
          Enhance your brand's presence across social media platforms with our expert management services. 
          From creating engaging content to running targeted ads, we've got you covered!
        </p>

        {/* Social Media Management Services */}
        <Row>
          {/* TikTok Management */}
          <Col md={6} className="mb-4">
            <Card className="shadow border-0 rounded">
              <Card.Body>
                <h3 className="fw-bold text-secondary mb-3">
                  <FontAwesomeIcon icon={faTiktok} className="me-2" />
                  TikTok Management & Growth
                </h3>
                <p className="text-muted">
                  Our TikTok package focuses on creating viral content that resonates with Gen Z and Millennial audiences. 
                  We'll optimize your account for trends, hashtags, and engage with your followers through regular posts.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Instagram Management */}
          <Col md={6} className="mb-4">
            <Card className="shadow border-0 rounded">
              <Card.Body>
                <h3 className="fw-bold text-secondary mb-3">
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                  Instagram Management & Branding
                </h3>
                <p className="text-muted">
                  We curate and manage your Instagram feed with high-quality visuals and strategic posting. 
                  Engage with your followers via stories, reels, and posts while building a consistent brand presence.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Facebook Management */}
          <Col md={6} className="mb-4">
            <Card className="shadow border-0 rounded">
              <Card.Body>
                <h3 className="fw-bold text-secondary mb-3">
                  <FontAwesomeIcon icon={faFacebook} className="me-2" />
                  Facebook Page Management
                </h3>
                <p className="text-muted">
                  Our Facebook management services are designed to help you build a community around your brand. 
                  We'll create content, interact with users, and run Facebook Ads to drive traffic and engagement.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* X (formerly Twitter) Strategy */}
          <Col md={6} className="mb-4">
            <Card className="shadow border-0 rounded">
              <Card.Body>
                <h3 className="fw-bold text-secondary mb-3">
                  <FontAwesomeIcon icon={faTwitter} className="me-2" />
                  X Strategy & Engagement
                </h3>
                <p className="text-muted">
                  Maximize your presence on X with effective tweeting strategies, regular posts, and engagement with trending topics. 
                  We help you build conversations around your brand and expand your reach to new audiences.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Social Media Advertising */}
          <Col md={6} className="mb-4">
            <Card className="shadow border-0 rounded">
              <Card.Body>
                <h3 className="fw-bold text-secondary mb-3">
                  <FontAwesomeIcon icon={faBullhorn} className="me-2" />
                  Social Media Advertising
                </h3>
                <p className="text-muted">
                  We run targeted ad campaigns across platforms like Instagram, Facebook, TikTok, and more to boost visibility, 
                  drive traffic, and convert leads. Our campaigns are tailored to your goals.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Analytics & Reporting */}
          <Col md={6} className="mb-4">
            <Card className="shadow border-0 rounded">
              <Card.Body>
                <h3 className="fw-bold text-secondary mb-3">
                  <FontAwesomeIcon icon={faChartBar} className="me-2" />
                  Social Media Analytics & Reports
                </h3>
                <p className="text-muted">
                  Get detailed insights into the performance of your social media channels. 
                  We provide weekly and monthly reports to help you understand audience behavior and campaign effectiveness.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call-to-Action Section */}
        <div className="text-center mt-5">
          <h2 className="fw-bold text-secondary mb-3">Ready to Boost Your Social Presence?</h2>
          <p className="text-muted mb-4">
            Let's work together to create a dynamic social media strategy that elevates your brand and engages your audience!
          </p>
          <button className="btn btn-warning text-white fw-bold">Get Started</button>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mt-5">
          <h2 className="fw-bold text-secondary mb-3">Connect with Us</h2>
          <div className="d-flex justify-content-center">
            {[
              { href: 'https://wa.me/yourNumber', icon: faWhatsapp },
              { href: 'https://www.tiktok.com/@yourUsername', icon: faTiktok },
              { href: 'https://www.instagram.com/yourUsername', icon: faInstagram },
              { href: 'https://www.facebook.com/yourUsername', icon: faFacebook },
              { href: 'https://t.me/yourUsername', icon: faTelegram },
              { href: 'https://www.linkedin.com/in/yourUsername', icon: faLinkedin },
              { href: 'https://yourWorkspace.slack.com', icon: faSlack },
              { href: 'https://discord.gg/yourInviteCode', icon: faDiscord }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-warning mx-3" // Change icon color to match the header
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialMediaManagementPage;
