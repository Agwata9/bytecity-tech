import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import WebDesignHeader from "../components/WebDesignHeader";

const WebDesignPage: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Basic Websites",
      description:
        "Build a simple, mobile-responsive, and SEO-friendly website with up to 4 pages.",
      features: [
        "3 to 4 pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "Fast loading speed",
      ],
      price: "Ksh 15,000 - Ksh 50,000",
      image: "basic-websites.jpg", // Add appropriate image path
      route: "/basic-websites",
    },
    {
      title: "Informative Websites",
      description:
        "Create a custom-designed website with up to 6 pages and blog integration.",
      features: [
        "4 to 6 pages",
        "Custom design",
        "SEO-friendly structure",
        "Blog integration",
        "Social media links",
      ],
      price: "Ksh 20,000 - Ksh 75,000",
      image: "informative-websites.jpg", // Add appropriate image path
      route: "/informative-websites",
    },
    {
      title: "E-commerce Websites",
      description:
        "Set up a fully functional online store with payment gateway and inventory management.",
      features: [
        "Online store with payment gateway",
        "Product catalog (up to 50 items)",
        "User registration & order tracking",
        "Inventory management tools",
        "Secure checkout process",
      ],
      price: "Ksh 150,000 and above",
      image: "ecommerce-websites.jpg", // Add appropriate image path
      route: "/ecommerce-websites",
    },
    {
      title: "Corporate Websites",
      description:
        "Develop a custom corporate website with advanced SEO, CRM integrations, and employee portal.",
      features: [
        "Custom corporate design",
        "CRM, ERP integrations",
        "Advanced SEO & security features",
        "Employee portal",
        "Client feedback forms",
      ],
      price: "Contact Our Team",
      image: "corporate-websites.jpg", // Add appropriate image path
      route: "/corporate-websites",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <WebDesignHeader />
      <Container>
        <header className="text-center mb-5 mt-4">
          <h1 className="fw-bold text-warning mb-3">Pick Your Perfect Plan</h1>
          <hr style={{ width: '70px', margin: '0 auto', borderTop: '2px solid orange' }} />
          <p className="lead text-muted">
            Get started with complete confidence. Our 30-day money-back guarantee means it's risk-free.
          </p>
        </header>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-warning text-center mb-3">
                    {service.title}
                  </Card.Title>
                  <p className="text-center fw-bold text-info mb-4">
                    {service.price}
                  </p>
                  <hr className="mx-auto w-75 mb-4" />
                  <ul className="list-unstyled">
                    {service.features.map((feature, i) => (
                      <li key={i} className="d-flex align-items-start mb-3">
                        <FaCheckCircle color="#ffc107" size={18} className="me-2" />
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="warning"
                    className="w-100 fw-bold text-uppercase mt-auto"
                    onClick={() => navigate(service.route)}
                  >
                    Choose this Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WebDesignPage;
