import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPaintBrush, FaSwatchbook, FaBoxOpen, FaPencilAlt, FaBullhorn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  price: string;
  route: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<{ service: Service; navigate: (route: string) => void }> = ({ service, navigate }) => (
  <Col lg={4} md={6} sm={12} className="d-flex">
    <Card className="h-100 shadow-sm border-0 flex-fill">
      <Card.Body className="d-flex flex-column p-4">
        <div className="mb-3 text-center">
          <div className="text-warning mb-3" style={{ fontSize: '2rem' }}>
            {service.icon}
          </div>
          <Card.Title className="fw-bold text-warning mb-2 fs-5">
            {service.title}
          </Card.Title>
        </div>
        
        <p className="text-muted flex-grow-1">{service.description}</p>
        
        <div className="mt-4 mb-3 text-center">
          <span className="badge bg-warning text-dark fs-6 px-4 py-2 rounded-pill">
            {service.price}
          </span>
        </div>

        <button
          className="btn btn-outline-warning w-100 fw-bold text-uppercase py-2"
          onClick={() => navigate(service.route)}
          aria-label={`Explore ${service.title} services`}
        >
          Get Started
        </button>
      </Card.Body>
    </Card>
  </Col>
);

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: 'Logo Design',
      description: 'Custom, unique logos designed to represent your brand.',
      price: 'Ksh 10,000 - Ksh 60,000',
      route: '/logo-design',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Branding & Corporate Identity',
      description: 'Complete branding solutions to create a strong brand presence.',
      price: 'Ksh 20,000 - Ksh 50,000',
      route: '/branding-corporate-identity',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Packaging Design',
      description: 'Innovative packaging solutions that protect your product and enhance brand recognition.',
      price: 'Ksh 8,000 - Ksh 30,000',
      route: '/packaging-design',
      icon: <FaBoxOpen />,
    },
    {
      title: 'Business Cards & Stationery',
      description: 'Design business cards and stationery that align with your brand.',
      price: 'Ksh 3,000 - Ksh 10,000',
      route: '/business-cards-stationery',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Illustration and Sketching',
      description: 'Hand-crafted illustrations and conceptual sketches for various applications.',
      price: 'Ksh 5,000 - Ksh 25,000',
      route: '/illustration-sketching',
      icon: <FaPencilAlt />,
    },
    {
      title: 'Advertising and Marketing Design',
      description: 'Comprehensive design solutions for advertising campaigns and marketing materials.',
      price: 'Ksh 10,000 - Ksh 60,000',
      route: '/advertising-marketing-design',
      icon: <FaBullhorn />,
    },
    // ... (keep other existing services with appropriate icons)
    // Add remaining services following the same pattern
  ];

  return (
    <section className="py-3 py-md-5 bg-light">
      <section className="hero-section bg-warning bg-opacity-10 py-5">
        <Container className="text-center">
          <FaPaintBrush size={48} className="text-warning mb-4" />
          <h1 className="display-5 fw-bold text-warning mb-3">
            Professional Design Solutions
          </h1>
          <div className="d-flex justify-content-center mb-4">
            <hr className="w-25 border-2 border-warning opacity-75" />
          </div>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
            End-to-end design services covering branding, marketing, and product presentation needs.
          </p>
        </Container>
      </section>

      <Container className="mt-4 mt-md-5">
        <header className="text-center mb-4 mb-md-5">
          <h2 className="fw-bold text-warning mb-3 fs-4">
            Comprehensive Design Services
          </h2>
          <div className="d-flex justify-content-center mb-3">
            <hr className="w-50 border-1 border-warning opacity-50" />
          </div>
          <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
            From concept to execution - creative solutions for all your visual communication needs.
          </p>
        </header>

        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} navigate={navigate} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GraphicDesignPage;