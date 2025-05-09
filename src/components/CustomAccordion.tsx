import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Step {
    title: string;
    content: string;
    image: string;
}

const CustomAccordion: React.FC = () => {
    const steps: Step[] = [
        {
            title: 'Step 1: Share Your Vision',
            content: 'Tell us about your idea and the project you have in mind. If possible, provide a sketch or any reference material to help us understand your concept better.',
            image: 'step1-placeholder.gif'
        },
        {
            title: 'Step 2: Collaborate and Review',
            content: 'We bring your idea to life, creating a design tailored to your needs. Your feedback helps us make adjustments to ensure perfection.',
            image: 'step2-placeholder.gif'
        },
        {
            title: 'Step 3: Final Delivery',
            content: 'We deliver the completed work in your preferred format—whether digital files, printed versions, or both.',
            image: 'step3-placeholder.png'
        }
    ];

    return (
        <section className="py-4 py-md-5 position-relative" 
            style={{
                background: `linear-gradient(rgba(255, 159, 0, 0.05), url("accordion-bg.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Container className="position-relative z-index-1">
                <div className="text-center mb-4 mb-md-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">
                        Our Process
                    </h2>
                    <div className="d-flex justify-content-center mb-4">
                        <hr className="w-25 border-2 border-primary opacity-75" />
                    </div>
                </div>

                <Row className="g-4 justify-content-center">
                    {steps.map((step, index) => (
                        <Col key={index} xl={4} lg={6} md={6} sm={12} className="d-flex">
                            <Card className="h-100 shadow-sm border-0 flex-fill hover-effect">
                                <div className="p-3">
                                    <Card.Img 
                                        variant="top" 
                                        src={step.image} 
                                        alt={step.title}
                                        className="img-fluid rounded-3"
                                        style={{ 
                                            height: '200px', 
                                            objectFit: 'contain',
                                            backgroundColor: 'rgba(255, 159, 0, 0.1)'
                                        }}
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column p-4">
                                    <h3 className="fw-bold text-primary mb-3 fs-5">
                                        {step.title}
                                    </h3>
                                    <Card.Text className="text-secondary flex-grow-1">
                                        {step.content}
                                    </Card.Text>
                                    <div className="mt-3 text-primary fw-bold">
                                        0{index + 1}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CustomAccordion;