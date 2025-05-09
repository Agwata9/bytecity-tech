import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Careers: React.FC = () => {
  const introText = `
    At ByteCity Tech, we believe that technology is the key to shaping a brighter future, 
    and we're on a mission to lead that change. Our team is made up of creative, 
    passionate, and highly skilled individuals who thrive on solving complex problems 
    and pushing the boundaries of innovation.

    Whether you're a software engineer, designer, or data scientist, ByteCity Tech offers 
    opportunities to help you grow and excel in your career. Take the next step—join us!
  `;

  const positions = [
    "Software Engineer",
    "Product Manager",
    "UX/UI Designer",
    "Data Scientist",
  ];

  const handleApplyNow = () => {
    window.open("mailto:careers@bytecitytech.com", "_blank");
  };

  return (
    <div className="careers-page" style={{ background: "#181A20", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(90deg, #FFC107 0%, #FF9800 100%)",
          color: "#181A20",
          padding: "60px 0 40px 0",
          textAlign: "center",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Join ByteCity Tech</h1>
        <p className="fs-4 mx-auto" style={{ maxWidth: 700 }}>
          Shape the future with us. Innovate, grow, and make an impact.
        </p>
        <Button
          variant="dark"
          size="lg"
          className="px-5 py-3 fs-5 mt-3"
          style={{ fontWeight: "bold" }}
          onClick={handleApplyNow}
        >
          Apply Now
        </Button>
      </div>

      <Container className="py-5">
        {/* Introduction Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 bg-dark text-light">
              <Card.Body>
                <Card.Text className="fs-5" style={{ whiteSpace: "pre-line" }}>
                  {introText}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Open Positions Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-warning text-center mb-4 display-6">Open Positions</h2>
            <Row className="g-4 justify-content-center">
              {positions.map((position, index) => (
                <Col xs={12} md={6} lg={3} key={index}>
                  <Card className="h-100 border-0 shadow-sm bg-secondary text-light">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="fs-5 mb-2">{position}</Card.Title>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={handleApplyNow}
                        className="mt-2"
                      >
                        Apply
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Why Work With Us Section */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <Card className="shadow-sm border-0 bg-dark text-light">
              <Card.Body>
                <h2 className="text-warning text-center mb-4 display-6">Why Work With Us?</h2>
                <ul className="fs-5" style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li>🚀 Dynamic, innovative work environment</li>
                  <li>💸 Competitive salaries & benefits</li>
                  <li>📈 Growth & learning opportunities</li>
                  <li>🤝 Collaborative, diverse team</li>
                  <li>⚖️ Work-life balance</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How to Apply Section */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <Card className="shadow-sm border-0 bg-secondary text-light">
              <Card.Body>
                <h2 className="text-warning text-center mb-4 display-6">How to Apply</h2>
                <p className="text-center fs-5 mb-0">
                  Send your resume and cover letter to{" "}
                  <a href="mailto:careers@bytecity.tech" className="text-warning fw-bold">
                    careers@bytecity.tech
                  </a>
                  .
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
