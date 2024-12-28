import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa"; // For the checkmark icon
import OurServicesHeader from "../components/OurServicesHeader";

const OurServices: React.FC = () => {
  return (
    <div>
      <OurServicesHeader /> {/* Hero Header for Our Services */}
    
      {/* Section 1: Graphic & Design */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Graphic and Design</h2>
          <p>
            Our graphic design team brings your ideas to life with visually stunning, innovative designs. Whether you need a logo, marketing materials, or a complete rebranding, we are here to help.
          </p>
        </div>

        <Row>
          <Col>
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
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Receipt & Packaging Design
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Digital Print & Social Media Graphics
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Print Media Design (Magazines, Ads, Banners)
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Presentation & PowerPoint Design
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Web & Mobile App UI/UX Design
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Illustrations & Custom Artwork
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-center">
                <FaCheckCircle className="check-icon me-3" />
                Advertising Campaigns (Online and Print)
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>

      {/* Section 2: Web Development */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">Web Development</h2>
            <p>
              We build websites that not only look great but also perform well. From custom websites to e-commerce platforms, we have the skills to bring your vision to life. Our development process is centered around user experience, ensuring that your website is intuitive and easy to navigate.
            </p>
          </div>

          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Custom Websites (Built from scratch to meet your specific needs)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  E-commerce Solutions (Fully integrated online stores)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  CMS Development (Content management systems for easy website updates)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Web Design & UI/UX (Intuitive, user-friendly design)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  SEO Optimization (Ensuring your website ranks well on search engines)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Mobile-Responsive Websites (Optimized for any device)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Web Applications (Custom-built apps to enhance functionality)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Ongoing Maintenance & Support (Ensuring your website stays up-to-date)
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section 3: Photography & Videography */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">Photography & Videography</h2>
            <p>
              We offer a full range of photography and videography services tailored to your unique needs. Whether it's capturing a wedding, creating social media content, or producing commercial videos, our team is here to help.
            </p>
          </div>

          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Event Coverage (Corporate, Conferences, Product Launches, etc.)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Weddings (Full-day Coverage, Pre-Wedding, Ceremony, Reception)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Personalized TikTok & Instagram Clips (Custom Short-Form Content)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Commercial & Brand Videos (Promotional Campaigns, Storytelling)
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section 4: Training */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">Training</h2>
            <p>
              Our training programs are designed to empower individuals and teams with the knowledge and skills necessary for success in the digital world. Whether you're learning to design websites, shoot photos, or analyze data, we provide hands-on training for all skill levels.
            </p>
          </div>

          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Web Design (Learn how to create stunning websites from scratch)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Introduction to Photography and Video Shooting (Basic Techniques & Skills)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Professional Writing (Corporate communications, legal documents, business reports)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Graphic Design (Learn to use Adobe Creative Suite for branding, logos, and more)
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <FaCheckCircle className="check-icon me-3" />
                  Python Data Analysis (Manipulate and analyze datasets with Pandas, NumPy, and more)
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
