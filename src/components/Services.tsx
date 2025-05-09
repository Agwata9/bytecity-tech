import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Web Development',
            image: 'web-development.png',
            steps: [
                { title: 'Website Design and Development' },
                { title: 'E-commerce Integration' },
                { title: 'Website Maintenance' }
            ],
            route: '/web-design'
        },
        {
            title: 'Graphic & Design',
            image: 'graphic-design.png',
            steps: [
                { title: 'Branding & Logo Design' },
                { title: 'Print & Digital Design' },
                { title: 'Marketing Materials' }
            ],
            route: '/graphic-design'
        },
        {
            title: 'Social Media Management',
            image: 'social-media-management.png',
            steps: [
                { title: 'Content Strategy' },
                { title: 'Community Management' },
                { title: 'Analytics & Reporting' }
            ],
            route: '/social-media-management'
        }
    ];

    return (
        <section className="py-5 position-relative" 
            style={{
                background: `linear-gradient(rgba(255, 159, 0, 0.1), rgba(255, 159, 0, 0.05)), url("accordion-bg01.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Container className="position-relative z-index-1">
                <div className="text-center mb-4 mb-md-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">
                        Our Core Services
                    </h2>
                    <div className="d-flex justify-content-center mb-4">
                        <hr className="w-25 border-2 border-primary opacity-75" />
                    </div>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Comprehensive digital solutions tailored to boost your online presence
                    </p>
                </div>

                <Row className="g-4 justify-content-center">
                    {services.map((service, index) => (
                        <Col key={index} xl={4} lg={6} md={6} sm={12} className="d-flex">
                            <Card className="h-100 shadow-sm border-0 flex-fill hover-effect">
                                <Card.Body className="d-flex flex-column p-4">
                                    <div className="mb-4 text-center">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="img-fluid rounded-3 mb-3"
                                            style={{
                                                height: '180px',
                                                width: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                        <h3 className="fw-bold text-primary mb-3 fs-4">
                                            {service.title}
                                        </h3>
                                    </div>
                                    
                                    <ul className="list-unstyled flex-grow-1">
                                        {service.steps.map((step, stepIndex) => (
                                            <li key={stepIndex} className="d-flex align-items-start mb-2">
                                                <FaCheckCircle
                                                    color="var(--primary-color)"
                                                    size={20}
                                                    className="me-2 flex-shrink-0"
                                                />
                                                <span className="text-secondary">{step.title}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        variant="outline-primary"
                                        className="fw-bold mt-4 rounded-pill"
                                        onClick={() => navigate(service.route)}
                                    >
                                        Explore Service
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

export default Services;