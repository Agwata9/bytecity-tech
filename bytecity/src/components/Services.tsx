import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services: React.FC = () => {
  const services = [
    { title: 'Web Development', text: 'Web Application Design and Development' },
    { title: 'E-commerce', text: 'Client-Oriented Shopify and Magento solutions' },
    { title: 'IT Staffing', text: 'Canada-based IT Experts. Global Dedicated Teams.' },
    { title: 'Mobile Apps', text: 'Mobile App Solutions for small businesses' },
    { title: 'Digital Marketing', text: 'Website Design, SEO, Social Media Marketing' },
    { title: 'AI Chatbots', text: 'Engage Customers via AI-Powered Conversations' },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
