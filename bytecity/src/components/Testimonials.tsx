import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type Testimonial = {
  name: string;
  feedback: string;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    { name: 'John Doe', feedback: 'Amazing service!' },
    { name: 'Jane Smith', feedback: 'Highly recommend ByteCity!' },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Customer Testimonials</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col lg={6} md={12} key={index} className="mb-4">
            <div className="testimonial bg-light p-3 rounded">
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
