import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CareerHeader from "../components/CareerHeader";

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
    <div className="careers-page">
      {/* Hero Section */}
      <CareerHeader />

      <Container className="py-5">
        {/* Introduction Section */}
        <Row className="align-items-center text-center text-lg-start mb-5">
          <Col>
            <h1 className="text-warning mb-4 display-6">Careers at ByteCity Tech</h1>
            <p className="text-muted fs-5">{introText}</p>
          </Col>
        </Row>

        {/* Open Positions Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-warning text-center mb-4 display-6">Open Positions</h2>
            <ul className="list-group list-group-flush text-center">
              {positions.map((position, index) => (
                <li key={index} className="list-group-item fs-5 text-muted">
                  {position}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Why Work With Us Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-warning text-center mb-4 display-6">Why Work With Us?</h2>
            <p className="text-center text-muted fs-5">
              At ByteCity Tech, we offer a dynamic work environment, competitive salaries, 
              and opportunities for growth and development. Join a team that values 
              collaboration, innovation, and work-life balance.
            </p>
          </Col>
        </Row>

        {/* How to Apply Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-warning text-center mb-4 display-6">How to Apply</h2>
            <p className="text-center text-muted fs-5">
              Send your resume and cover letter to{" "}
              <a href="mailto:careers@bytecity.tech" className="text-warning">
                careers@bytecity.tech
              </a>.
            </p>
          </Col>
        </Row>

        {/* Apply Now Button */}
        <Row className="text-center">
          <Col>
            <Button
              variant="warning"
              size="lg"
              className="px-5 py-3 fs-5"
              style={{ fontWeight: "bold" }}
              onClick={handleApplyNow}
            >
              Apply Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
