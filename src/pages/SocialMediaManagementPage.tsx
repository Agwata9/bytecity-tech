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
                    Enhance your brand's presence across social media platforms with our expert social media management services. 
                    From creating engaging content to running targeted ads, we've got you covered!
                </p>
                
                {/* Social Media Platforms and Services */}
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    TikTok Management & Growth
                                </h3>
                                <p className="text-muted">
                                    Our TikTok package focuses on creating viral content that resonates with Gen Z and Millennial audiences. 
                                    We'll optimize your account for trends, hashtags, and engage with your followers through regular, engaging posts.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Instagram Management & Branding
                                </h3>
                                <p className="text-muted">
                                    We curate and manage your Instagram feed with high-quality visuals and strategic posting. 
                                    Engage with your followers via stories, reels, and posts while building a consistent brand presence.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* More Services */}
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Facebook Page Management
                                </h3>
                                <p className="text-muted">
                                    Our Facebook management services are designed to help you build a community around your brand. 
                                    We'll create content, interact with users, and run Facebook Ads to drive traffic and engagement.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    X (Twitter) Strategy & Engagement
                                </h3>
                                <p className="text-muted">
                                    Maximize your presence on X with effective tweeting strategies, regular posts, and engagement with trending topics. 
                                    We help you build conversations around your brand and expand your reach to new audiences.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Additional Services */}
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Social Media Advertising
                                </h3>
                                <p className="text-muted">
                                    We run targeted ad campaigns across platforms like Instagram, Facebook, TikTok, and more to boost visibility, 
                                    drive traffic, and convert leads. Whether it's for promoting a product or boosting engagement, our campaigns are tailored to your goals.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow border-0 rounded">
                            <Card.Body>
                                <h3 className="fw-bold text-secondary mb-3">
                                    Social Media Analytics & Reports
                                </h3>
                                <p className="text-muted">
                                    Get detailed insights into the performance of your social media channels. 
                                    We provide weekly and monthly reports that help you understand audience behavior, content performance, and campaign effectiveness.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* Additional Call-to-Action */}
                <div className="text-center mt-5">
                    <h2 className="fw-bold text-secondary mb-3">Ready to Boost Your Social Presence?</h2>
                    <p className="text-muted mb-4">
                        Let's work together to create a dynamic social media strategy that elevates your brand and engages your audience!
                    </p>
                    <button className="btn btn-warning text-white fw-bold">Get Started</button>
                </div>
            </Container>
        </section>
    );
};

export default SocialMediaManagementPage;
