import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';


// Define the props for the Discover component
interface DiscoverProps {
  onHireUsClick: () => void;  // This will handle the modal opening
}

const Discover: React.FC<DiscoverProps> = ({ onHireUsClick }) => {
  const images = [
    { src: './carousel/image1.jpg', alt: 'Design 1' }, // Replace with your image paths
  { src: './carousel/image2.jpg', alt: 'Design 2' },
  { src: './carousel/image3.jpg', alt: 'Design 3' },
  { src: './carousel/image4.jpg', alt: 'Design 4' },
  { src: './carousel/image5.jpg', alt: 'Design 5' },
  { src: './carousel/image6.jpg', alt: 'Design 6' },
  { src: './carousel/image7.jpg', alt: 'Design 7' },
  { src: './carousel/image8.jpg', alt: 'Design 8' },
  { src: './carousel/image9.jpg', alt: 'Design 9' },
  { src: './carousel/image10.jpg', alt: 'Design 10' },
  { src: './carousel/image11.jpg', alt: 'Design 11' },
  { src: './carousel/image12.jpg', alt: 'Design 12' }
  
  ];

  return (
    <section
      className="discover-section bg-light d-flex align-items-center"
      id="discover"
      style={{
        height: '70vh', // Matches the height of TrainingHero
        backgroundImage: 'url("discover-bg.png")', // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Row className="align-items-center h-100">
          {/* Text Section */}
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="display-6 fw-bold text-warning">
              Looking for the Perfect Design?
            </h2>
            <p className="fs-5 mt-3 text-muted">
              Sit back and relax while we handle everything. From ideation to
              delivery, we'll share a sample for your approval before
              finalizing your world-class design.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="mt-4"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
              onClick={onHireUsClick}  // Use the passed down prop here
            >
              HIRE US
            </Button>
          </Col>

          {/* Carousel Section */}
          <Col lg={6}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="d-block w-100 rounded"
                    style={{
                      maxHeight: '400px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Discover;
