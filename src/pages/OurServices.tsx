import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { 
  FaCheckCircle, 
  FaPencilAlt, 
  FaLaptopCode, 
  FaCamera, 
  FaChalkboardTeacher 
} from "react-icons/fa";
import OurServicesHeader from "../components/OurServicesHeader";

// Reusable ServiceSection component with unified styling
const ServiceSection = ({ 
  title, 
  description, 
  icon, 
  items, 
  bg 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  bg?: string;
}) => (
  <section className={`py-4 py-md-5 ${bg || 'bg-white'}`}>
    <Container>
      <div className="text-center mb-4 mb-md-5">
        <div className="icon-wrapper mb-3">
          {React.cloneElement(icon as React.ReactElement, { 
            className: "text-warning display-5 mb-3" 
          })}
        </div>
        <h2 className="text-warning fw-bold mb-3 display-6">
          {title}
        </h2>
        <div className="d-flex justify-content-center mb-4">
          <hr className="w-25 border-2 border-warning opacity-75" />
        </div>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '800px' }}>
          {description}
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        {items.map((item, index) => (
          <Col key={index} xl={3} lg={4} md={6} sm={12}>
            <Card className="h-100 shadow-sm border-0 hover-effect">
              <Card.Body className="d-flex align-items-center p-4">
                <FaCheckCircle className="text-warning me-3 fs-5 flex-shrink-0" />
                <span className="text-secondary">{item}</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4 mt-md-5">
        <Button 
          variant="outline-warning" 
          size="lg" 
          className="fw-bold px-5 py-3 rounded-pill"
        >
          Explore {title}
        </Button>
      </div>
    </Container>
  </section>
);

const OurServices: React.FC = () => {
  return (
    <div className="services-page">
      <OurServicesHeader />
      
      {/* Graphic Design Section */}
      <ServiceSection
        title="Graphic & Design"
        description="Transform your brand with visually stunning designs across all media formats."
        icon={<FaPencilAlt />}
        items={[
          "Logo Design",
          "Branding & Corporate Identity",
          "Business Cards & Stationery",
          "Posters, Flyers, & Brochures",
          "Packaging Design",
          "Digital Illustrations"
        ]}
        bg="bg-warning bg-opacity-10"
      />

      {/* Web Development Section */}
      <ServiceSection
        title="Web Development"
        description="Custom digital solutions that drive engagement and conversions."
        icon={<FaLaptopCode />}
        items={[
          "Custom Websites",
          "E-commerce Solutions",
          "CMS Development",
          "SEO Optimization",
          "Web Applications",
          "Mobile Responsive Design"
        ]}
      />

      {/* Photography Section */}
      <ServiceSection
        title="Photography & Videography"
        description="Professional visual storytelling for all your needs."
        icon={<FaCamera />}
        bg="bg-warning bg-opacity-10"
        items={[
          "Event Coverage",
          "Wedding Photography",
          "Commercial Videography",
          "Social Media Content",
          "Product Photography",
          "Aerial Drone Shots"
        ]}
      />

      {/* Training Section */}
      <ServiceSection
        title="Training"
        description="Empower your team with cutting-edge digital skills."
        icon={<FaChalkboardTeacher />}
        items={[
          "Web Design Fundamentals",
          "Advanced Photography",
          "Graphic Design Masterclass",
          "Digital Marketing",
          "Video Editing",
          "Social Media Management"
        ]}
      />
    </div>
  );
};

// Add global styles in your CSS file:
// .hover-effect:hover {
//   transform: translateY(-5px);
//   transition: all 0.3s ease;
//   box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15) !important;
// }

export default OurServices;