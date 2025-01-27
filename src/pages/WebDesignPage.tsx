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
      features: [
        "3 to 4 pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "Fast loading speed",
        "User-friendly navigation",
        "SSL certificate setup",
        "Custom domain integration",
        "Content upload",
        "Basic analytics tracking",
      ],
      price: "Ksh 15,000 - Ksh 50,000",
      route: "/basic-websites",
      badge: null,
    },
    {
      title: "Informative Websites",
      features: [
        "4 to 6 pages",
        "Custom design",
        "SEO-friendly structure",
        "Blog integration",
        "Newsletter subscription",
        "Interactive content support",
        "Multi-language support",
        "Social media links",
        "CMS integration",
        "Website optimization",
      ],
      price: "Ksh 20,000 - Ksh 75,000",
      route: "/informative-websites",
      badge: "Most Common",
    },
    {
      title: "E-commerce Websites",
      features: [
        "Online store with payment gateway",
        "Product catalog (up to 50 items)",
        "User registration & order tracking",
        "Inventory management tools",
        "Discount and coupon codes",
        "Shipping options setup",
        "Customer review system",
        "Mobile-first design",
        "Admin dashboard",
        "Secure checkout process",
      ],
      price: "Ksh 150,000 and above",
      route: "/ecommerce-websites",
      badge: null,
    },
    {
      title: "Corporate Websites",
      features: [
        "Custom corporate design",
        "Multiple integrations (CRM, ERP, etc.)",
        "Content management system",
        "Advanced SEO & security features",
        "Employee portal",
        "Client feedback forms",
        "Industry-specific tools",
        "Interactive media galleries",
        "Custom reporting tools",
        "Dedicated support",
      ],
      price: "Contact Our Team",
      route: "/corporate-websites",
      badge: null,
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <WebDesignHeader />
      </Container>
      <Container>
        <header className="text-center mb-5 mt-4">
          <h1 className="display-6 fw-bold text-warning">
            Pick Your Perfect Plan
          </h1>
          <p className="lead text-muted">
            Get started in complete confidence. Our 30-day money-back guarantee
            means it's risk-free.
          </p>
        </header>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <Card className="h-100 shadow-sm border-0">
                {service.badge && (
                  <div className="bg-success text-white text-center py-2 fw-bold">
                    {service.badge}
                  </div>
                )}
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
                        <FaCheckCircle
                          color="#ffc107"
                          size={18}
                          className="me-2"
                        />
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
