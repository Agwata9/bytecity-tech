import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import React from "react";

// Define the props for the Discover component
interface DiscoverProps {
  onHireUsClick: () => void; // This will handle the modal opening
}

const Discover: React.FC<DiscoverProps> = ({ onHireUsClick }) => {
  const images = [
    { src: "./carousel/image1.jpg", alt: "Design 1" },
    { src: "./carousel/image2.jpg", alt: "Design 2" },
    { src: "./carousel/image3.jpg", alt: "Design 3" },
    { src: "./carousel/image4.jpg", alt: "Design 4" },
    { src: "./carousel/image5.jpg", alt: "Design 5" },
    { src: "./carousel/image6.jpg", alt: "Design 6" },
    { src: "./carousel/image7.jpg", alt: "Design 7" },
    { src: "./carousel/image8.jpg", alt: "Design 8" },
    { src: "./carousel/image9.jpg", alt: "Design 9" },
  ];

  return (
    <Container fluid className="py-5 bg-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-center text-warning mb-4">Discover Our Designs</h2>

      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Carousel interval={3000} pause="hover" className="custom-carousel">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img-fluid"
                  src={image.src}
                  alt={image.alt}
                  style={{ maxHeight: "350px", objectFit: "cover" }} // Adjusted height
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Advert Section */}
        <Col xs={12} md={4} lg={3} className="mt-4 mt-md-0">
          <div className="advert bg-white shadow-lg rounded-lg p-4" style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
            <h4 className="text-center text-warning mb-3 fw-bold">
              Current Offers{" "}
              <span role="img" aria-label="lightning" className="blinking">⚡</span>
            </h4>

            {/* Scrolling Offers */}
            <div className="offer-scroll-container" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
              <ul className="offer-list" style={{ paddingLeft: "0", marginBottom: "0", animation: "scroll-up 10s linear infinite", textAlign: "center" }}>
          <li>🔥 <strong>50% off on all design packages!</strong></li>
          <li> Limited time only.</li>
          <li>💥 <strong>Free consultation</strong></li>
          <li>⭐ <strong>Discounted rates</strong> </li>
          <li>Returning customers.</li>
          <li>🚀 <strong>Special bundle deals</strong> </li>
          <li>Graphic & Web Design Services.</li>
              </ul>
            </div>
          </div>
        </Col>
            </Row>

      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            onClick={onHireUsClick}
            style={{ transition: "background-color 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffcc00")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "orange")
            }
          >
            Hire Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Discover;
