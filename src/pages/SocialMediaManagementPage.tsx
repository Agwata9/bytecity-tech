import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
                <h1 className="fw-bold text-warning text-center mb-4">
                    Social Media Management
                </h1>
                <p className="text-center text-secondary mb-5">
                    Enhance your brand's presence on social platforms with our comprehensive social media management services.
                </p>
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Social Media Strategy
                                </h3>
                                <p className="text-muted">
                                    We help craft effective strategies tailored to your brand, ensuring you connect with the right audience and achieve measurable results.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Content Creation
                                </h3>
                                <p className="text-muted">
                                    Our team produces engaging and visually appealing content to keep your audience captivated and your brand memorable.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Community Management
                                </h3>
                                <p className="text-muted">
                                    Foster strong relationships with your audience through timely responses, interactions, and community engagement.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Analytics and Reporting
                                </h3>
                                <p className="text-muted">
                                    Gain insights into your social media performance with our detailed analytics and reports to continuously optimize your strategy.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SocialMediaManagementPage;
