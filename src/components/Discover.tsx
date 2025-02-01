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
    <Container fluid className="py-5 bg-light">
     
      <h2 className="text-center text-warning mb-4">Discover Our Designs</h2>
     
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Carousel interval={3000} pause="hover">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img-fluid"
                  src={image.src}
                  alt={image.alt}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            onClick={onHireUsClick}
            style={{ transition: "background-color 0.3s" }} // Smooth transition for hover effect
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffcc00")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "orange")
            }
          >
            Discover Our Services
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Discover;
