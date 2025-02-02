import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { FaCheckCircle, FaPencilAlt, FaLaptopCode, FaCamera, FaChalkboardTeacher } from "react-icons/fa"; // Icons for the services
import OurServicesHeader from "../components/OurServicesHeader";

const OurServices: React.FC = () => {
  return (
    <div>
      <OurServicesHeader /> {/* Hero Header for Our Services */}

      {/* Section 1: Graphic & Design */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">
            <FaPencilAlt className="me-2" /> Graphic and Design
          </h2>
          <p>
            Our graphic design team brings your ideas to life with visually stunning, innovative designs. Whether you need a logo, marketing materials, or a complete rebranding, we are here to help.
          </p>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <ListGroup>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Logo Design
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Branding & Corporate Identity
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Business Cards & Stationery
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Posters, Flyers, & Brochures
              </ListGroupItem>
            </ListGroup>
            <div className="text-center mt-3">
              <Button variant="warning">Explore More</Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Section 2: Web Development */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">
              <FaLaptopCode className="me-2" /> Web Development
            </h2>
            <p>
              We build websites that not only look great but also perform well. From custom websites to e-commerce platforms, we have the skills to bring your vision to life. Our development process is centered around user experience, ensuring that your website is intuitive and easy to navigate.
            </p>
          </div>

          <Row>
            <Col xs={12} md={6} lg={4}>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Custom Websites
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  E-commerce Solutions
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  CMS Development
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  SEO Optimization
                </ListGroupItem>
              </ListGroup>
              <div className="text-center mt-3">
                <Button variant="warning">Explore More</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section 3: Photography & Videography */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">
              <FaCamera className="me-2" /> Photography & Videography
            </h2>
            <p>
              We offer a full range of photography and videography services tailored to your unique needs. Whether it's capturing a wedding, creating social media content, or producing commercial videos, our team is here to help.
            </p>
          </div>

          <Row>
            <Col xs={12} md={6} lg={4}>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Event Coverage
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Weddings
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Social Media Clips
                </ListGroupItem>
              </ListGroup>
              <div className="text-center mt-3">
                <Button variant="warning">Explore More</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section 4: Training */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">
              <FaChalkboardTeacher className="me-2" /> Training
            </h2>
            <p>
              Our training programs are designed to empower individuals and teams with the knowledge and skills necessary for success in the digital world. Whether you're learning to design websites, shoot photos, or analyze data, we provide hands-on training for all skill levels.
            </p>
          </div>

          <Row>
            <Col xs={12} md={6} lg={4}>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Web Design
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Photography & Videography
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Graphic Design
                </ListGroupItem>
              </ListGroup>
              <div className="text-center mt-3">
                <Button variant="warning">Explore More</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
