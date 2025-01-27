import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioGallery = () => {
  const photosPool = [
    '/images/beyondclassroom.jpg',
    '/images/Zone254.png',
    '/images/chiral.png',
    '/images/diecast.png',
    '/images/photo6.png',
    '/images/photo5.png',
    // Add as many photos as you need
  ];

  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    const getRandomPhotos = () => {
      const shuffledPhotos = [...photosPool].sort(() => 0.5 - Math.random()).slice(0, 4);
      setCurrentPhotos(shuffledPhotos);
    };

    getRandomPhotos();
    const interval = setInterval(getRandomPhotos, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-5 bg-light text-center d-flex align-items-center"
      style={{
        height: 'auto', // Let the section height adjust based on content
      }}
    >
      <Container>
        <h2 className="text-warning mb-3">Companies We Have Worked With</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid orange' }} />

        <Row className="mt-4">
          {currentPhotos.map((photo, index) => (
            <Col
              key={index}
              md={3} // On medium screens, show 4 columns
              sm={6} // On small screens, show 2 columns
              xs={12} // On extra small screens, show 1 column
              className="my-3 d-flex"
            >
              <div
                className="overflow-hidden rounded shadow img-container d-flex align-items-center justify-content-center"
                style={{
                  height: '300px', // Set fixed height for consistency
                  maxHeight: '300px',
                }}
              >
                <img
                  src={photo}
                  alt={`Company Image ${index + 1}`}
                  loading="lazy"
                  className="img-fluid w-100 h-100 object-fit-contain transition-transform img-hover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder.png'; // Fallback image
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .transition-transform {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .img-hover:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        }

        .img-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default PortfolioGallery;
