import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Define the type for each service
interface Service {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  route: string;
}

// Service Card Component
const ServiceCard: React.FC<{ service: Service; navigate: (route: string) => void }> = ({ service, navigate }) => (
  <Col lg={4} md={6} sm={12}>
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={service.imageUrl || '/default-image.jpg'}
        alt={`Image showing ${service.title}`}
        loading="lazy"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold text-warning text-center mb-3">
          {service.title}
        </Card.Title>
        <p className="text-center text-muted mb-3">{service.description}</p>
        <p className="text-center fw-bold text-info mb-3">{service.price}</p>
        <button
          className="btn btn-warning w-100 fw-bold text-uppercase mt-auto"
          onClick={() => navigate(service.route)}
          aria-label={`Go to ${service.title} page`}
        >
          Get Started
        </button>
      </Card.Body>
    </Card>
  </Col>
);

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();

  // Service data with prices and image URLs
  const services: Service[] = [
    {
      title: 'Logo Design',
      description: 'Custom, unique logos designed to represent your brand.',
      price: 'Ksh 10,000 - Ksh 60,000',
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
      price: 'Ksh 5,000 - Ksh 30,000',
      imageUrl: '/images/posters-flyers-brochures.jpg',
      route: '/posters-flyers-brochures',
    },
    {
      title: 'Receipt & Packaging Design',
      description: 'Custom designs for receipts and packaging to enhance your product presentation.',
      price: 'Ksh 5,000 - Ksh 15,000',
      imageUrl: '/images/receipt-packaging-design.jpg',
      route: '/receipt-packaging-design',
    },
    {
      title: 'Digital Print & Social Media Graphics',
      description: 'Social media graphics and digital print materials for online engagement.',
      price: 'Ksh 1,500 - Ksh 15,000',
      imageUrl: '/images/social-media-graphics.jpg',
      route: '/digital-print-social-media-graphics',
    },
    {
      title: 'Print Media Design (Magazines, Ads, Banners)',
      description: 'Design for print media like magazines, ads, and banners.',
      price: 'Ksh 5,000 - Ksh 20,000',
      imageUrl: '/images/print-media-design.jpg',
      route: '/print-media-design',
    },
    {
      title: 'Presentation & PowerPoint Design',
      description: 'Custom, visually engaging presentations and PowerPoint designs.',
      price: 'Ksh 1,500 - Ksh 10,000',
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
      price: 'Ksh 5,000 - Ksh 25,000',
      imageUrl: '/images/illustrations-artwork.jpg',
      route: '/illustrations-artwork',
    },
    {
      title: 'Advertising Campaigns (Online and Print)',
      description: 'Complete advertising campaigns for both online and print media.',
      price: 'Ksh 8,000 - Ksh 50,000',
      imageUrl: '/images/advertising-campaigns.jpg',
      route: '/advertising-campaigns',
    },
    {
      title: 'Stationary Packages',
      description: 'Complete design packages for stationery that reflect your brand identity.',
      price: 'Ksh 4,000 - Ksh 20,000',
      imageUrl: '/images/stationary-packages.jpg',
      route: '/stationary-packages',
    },
    {
      title: 'T-shirts and Merchandise',
      description: 'Custom designs for T-shirts and other merchandise for promotions or branding.',
      price: 'Ksh 3,000 - Ksh 10,000',
      imageUrl: '/images/t-shirts-merchandise.jpg',
      route: '/t-shirts-merchandise',
    },
    {
      title: 'Signages',
      description: 'Designs for business or event signage to attract attention and convey key messages.',
      price: 'Ksh 8,000 - Ksh 25,000',
      imageUrl: '/images/signages.jpg',
      route: '/signages',
    },
    {
      title: 'Large Format Printing',
      description: 'High-quality large format printing for banners, posters, and more.',
      price: 'Ksh 10,000 - Ksh 50,000',
      imageUrl: '/images/large-format-printing.jpg',
      route: '/large-format-printing',
    },
  ];

  return (
    <section className="py-5 bg-light">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-white"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold text-warning mb-3">Elevate Your Brand with Stunning Design</h1>
          <hr style={{ width: '70px', margin: '0 auto', borderTop: '2px solid orange' }} />
          <p className="lead text-muted">
            Custom graphic design services to bring your ideas to life. From logos to full branding, we have you covered.
          </p>
        </Container>
      </section>

      {/* Services Listing */}
      <Container>
        <header className="text-center mb-5 mt-4">
          <h1 className="fw-bold text-warning mb-3">Our Graphic Design Services</h1>
          <hr style={{ width: '70px', margin: '0 auto', borderTop: '2px solid orange' }} />
          <p className="lead text-muted">
            Professional design services for businesses looking to elevate their brand and marketing materials. From logos to advertising campaigns, we've got you covered.
          </p>
        </header>

        <Row className="g-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} navigate={navigate} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GraphicDesignPage;
