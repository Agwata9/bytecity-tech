import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();

  // Service data with prices and image URLs
  const services = [
    {
      title: 'Logo Design',
      description: 'Custom, unique logos designed to represent your brand.',
      price: 'Ksh 10,000 - Ksh 30,000',
      imageUrl: '/images/logo-design.jpg',
      route: '/logo-design',
    },
    {
      title: 'Branding & Corporate Identity',
      description: 'Complete branding solutions to create a strong brand presence.',
      price: 'Ksh 20,000 - Ksh 50,000',
      imageUrl: '/images/branding-corporate-identity.jpg',
      route: '/branding-corporate-identity',
    },
    {
      title: 'Business Cards & Stationery',
      description: 'Design business cards and stationery that align with your brand.',
      price: 'Ksh 3,000 - Ksh 10,000',
      imageUrl: '/images/business-cards-stationery.jpg',
      route: '/business-cards-stationery',
    },
    {
      title: 'Posters, Flyers, & Brochures',
      description: 'Effective designs for your promotional materials.',
      price: 'Ksh 5,000 - Ksh 15,000',
      imageUrl: '/images/posters-flyers-brochures.jpg',
      route: '/posters-flyers-brochures',
    },
    {
      title: 'Receipt & Packaging Design',
      description: 'Custom designs for receipts and packaging to enhance your product presentation.',
      price: 'Ksh 4,000 - Ksh 12,000',
      imageUrl: '/images/receipt-packaging-design.jpg',
      route: '/receipt-packaging-design',
    },
    {
      title: 'Digital Print & Social Media Graphics',
      description: 'Social media graphics and digital print materials for online engagement.',
      price: 'Ksh 1,500 - Ksh 7,000',
      imageUrl: '/images/social-media-graphics.jpg',
      route: '/digital-print-social-media-graphics',
    },
    {
      title: 'Print Media Design (Magazines, Ads, Banners)',
      description: 'Design for print media like magazines, ads, and banners.',
      price: 'Ksh 6,000 - Ksh 20,000',
      imageUrl: '/images/print-media-design.jpg',
      route: '/print-media-design',
    },
    {
      title: 'Presentation & PowerPoint Design',
      description: 'Custom, visually engaging presentations and PowerPoint designs.',
      price: 'Ksh 5,000 - Ksh 15,000',
      imageUrl: '/images/presentation-powerpoint-design.jpg',
      route: '/presentation-powerpoint-design',
    },
    {
      title: 'Web & Mobile App UI/UX Design',
      description: 'User-friendly web and mobile app UI/UX designs to enhance user experience.',
      price: 'Ksh 25,000 - Ksh 100,000',
      imageUrl: '/images/ui-ux-design.jpg',
      route: '/ui-ux-design',
    },
    {
      title: 'Illustrations & Custom Artwork',
      description: 'Creative and unique illustrations tailored to your needs.',
      price: 'Ksh 8,000 - Ksh 25,000',
      imageUrl: '/images/illustrations-artwork.jpg',
      route: '/illustrations-artwork',
    },
    {
      title: 'Advertising Campaigns (Online and Print)',
      description: 'Complete advertising campaigns for both online and print media.',
      price: 'Ksh 10,000 - Ksh 50,000',
      imageUrl: '/images/advertising-campaigns.jpg',
      route: '/advertising-campaigns',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
    
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold text-warning">Our Graphic Design Services</h1>
          <p className="lead text-muted">
            Professional design services for businesses looking to elevate their brand and marketing materials. From logos to advertising campaigns, we've got you covered.
          </p>
        </header>

        {/* Services Listing */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={service.imageUrl} alt={service.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-warning text-center mb-3">
                    {service.title}
                  </Card.Title>
                  <p className="text-center text-muted mb-3">{service.description}</p>
                  <p className="text-center fw-bold text-info mb-3">{service.price}</p>
                  <Button
                    variant="warning"
                    className="w-100 fw-bold text-uppercase mt-auto"
                    onClick={() => navigate(service.route)}
                  >
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Portfolio Section */}
        <section className="mt-5">
          <h2 className="text-center mb-4">Our Recent Work</h2>
          <Row className="g-4">
            <Col lg={4} md={6} sm={12}>
              <img src="/images/logo-portfolio1.jpg" alt="Logo Design Example" className="img-fluid rounded" />
              <p className="text-center mt-2">Logo Design for XYZ</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <img src="/images/brochure-portfolio1.jpg" alt="Brochure Design Example" className="img-fluid rounded" />
              <p className="text-center mt-2">Brochure Design for ABC</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <img src="/images/banner-portfolio1.jpg" alt="Banner Design Example" className="img-fluid rounded" />
              <p className="text-center mt-2">Roll-up Banner for DEF</p>
            </Col>
          </Row>
        </section>

      </Container>
    </section>
  );
};

export default GraphicDesignPage;
