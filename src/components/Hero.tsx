import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const words = ["IDEAS", "SKILLS", "CONCEPTS", "THOUGHTS"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => {
      setIsMounted(false);
      clearInterval(interval);
    };
  }, [words.length]);

  useEffect(() => {
    if (isMounted) {
      setCurrentWord(words[index]);
    }
  }, [index, isMounted, words]);

  return (
    <section
      className="hero d-flex align-items-center justify-content-center position-relative"
      style={{
        background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(255, 127, 0, 0.2)), url(/hero-image-05.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Container className="text-center position-relative z-index-1">
        <div className="hero-content">
          <h1 className="display-3 fw-bold mb-4 text-white">
           We Transform
            <span className="d-block mt-3">
              <span className="word-transition" key={currentWord}>
                {currentWord}
              </span>
            </span>
          </h1>
          
          <h2 className="display-5 fw-bold mb-4 text-warning">
            Into Digital Excellence
          </h2>

          <p className="lead text-light mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Empower your business with cutting-edge IT solutions that drive innovation,
            efficiency, and sustainable growth.
          </p>

          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fw-bold rounded-pill hover-effect"
            onClick={() => (window.location.href = "/our-services")}
          >
            Explore Our Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;