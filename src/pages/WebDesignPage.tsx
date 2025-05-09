import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  features: string[];
  price: string;
  route: string;
}

const ServiceCard: React.FC<{ service: Service; navigate: (route: string) => void }> = ({ service, navigate }) => (
  <Col xl={3} lg={6} md={6} sm={12} className="d-flex">
    <Card className="h-100 shadow-sm border-0 flex-fill">
      <Card.Body className="d-flex flex-column p-4">
        <div className="mb-3 text-center">
          <div className="text-warning mb-3" style={{ fontSize: '2rem' }}>
            <FaLaptopCode />
          </div>
          <h3 className="fw-bold text-warning mb-2 fs-5">
            {service.title}
          </h3>
        </div>
        
        <ul className="list-unstyled flex-grow-1">
          {service.features.map((feature, i) => (
            <li key={i} className="d-flex align-items-start mb-2">
              <FaCheckCircle className="text-warning me-2 flex-shrink-0" />
              <span className="text-secondary">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 mb-3 text-center">
          <span className="badge bg-warning text-dark fs-6 px-4 py-2 rounded-pill">
            {service.price}
          </span>
        </div>

        <Button
          variant="outline-warning"
          className="w-100 fw-bold text-uppercase py-2"
          onClick={() => navigate(service.route)}
        >
          Choose Plan
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

const WebDesignPage: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: "Basic Websites",
      description: "Build a simple, mobile-responsive, and SEO-friendly website",
      features: [
        "3 to 4 pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "Fast loading speed"
      ],
      price: "Ksh 15,000 - Ksh 50,000",
      route: "/basic-websites"
    },
    {
      title: "Informative Websites",
      description: "Custom-designed website with blog integration",
      features: [
        "4 to 6 pages",
        "Custom design",
        "SEO-friendly structure",
        "Blog integration",
        "Social media links"
      ],
      price: "Ksh 20,000 - Ksh 75,000",
      route: "/informative-websites"
    },
    {
      title: "E-commerce Websites",
      description: "Fully functional online store with payment gateway",
      features: [
        "Payment gateway integration",
        "Product catalog (up to 50 items)",
        "User registration & tracking",
        "Inventory management",
        "Secure checkout"
      ],
      price: "Ksh 150,000+",
      route: "/ecommerce-websites"
    },
    {
      title: "Corporate Websites",
      description: "Custom corporate website with advanced features",
      features: [
        "Custom corporate design",
        "CRM/ERP integrations",
        "Advanced security",
        "Employee portal",
        "Client feedback system"
      ],
      price: "Contact Our Team",
      route: "/corporate-websites"
    }
  ];

  return (
    <section className="py-3 py-md-5 bg-light">
      {/* Unified Hero Section */}
      <section className="hero-section bg-warning bg-opacity-10 py-5">
        <Container className="text-center">
          <FaLaptopCode size={48} className="text-warning mb-4" />
          <h1 className="display-5 fw-bold text-warning mb-3">
            Professional Web Solutions
          </h1>
          <div className="d-flex justify-content-center mb-4">
            <hr className="w-25 border-2 border-warning opacity-75" />
          </div>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
            Transform your digital presence with custom web development solutions
          </p>
        </Container>
      </section>

      <Container className="mt-4 mt-md-5">
        <header className="text-center mb-4 mb-md-5">
          <h2 className="fw-bold text-warning mb-3 fs-4">
            Comprehensive Web Services
          </h2>
          <div className="d-flex justify-content-center mb-3">
            <hr className="w-50 border-1 border-warning opacity-50" />
          </div>
          <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
            From simple websites to complex web applications - we deliver solutions that grow with your business
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

export default WebDesignPage;