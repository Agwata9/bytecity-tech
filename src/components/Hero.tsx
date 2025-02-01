import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const words = ["IDEAS", "SKILLS", "CONCEPTS", "THOUGHTS"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[(index + 1) % words.length]);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index, words]);

  return (
    <section
      className="hero bg-dark text-white d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: "url(/hero-image-05.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text contrast
        }}
      />
      <Container className="text-center position-relative z-index-1">
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3"> {/* Increased bottom margin */}
          At ByteCity Tech We Transform <span style={{ color: "orange" }}>{currentWord}</span>
          </h1>
          <h2 className="display-5 fw-bold mb-4" style={{ marginTop: '20px' }}> {/* Added top margin */}
            Into Innovative Solutions
          </h2>
          <p className="fs-5 mb-4">
            We empower businesses by providing cutting-edge IT
            solutions that drive growth, efficiency, and innovation. Let's create
            the future, together.
          </p>

          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            onClick={() => (window.location.href = "/our-services")}
            style={{ transition: "background-color 0.3s" }} // Smooth transition for hover effect
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffcc00")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "orange")}
          >
            Discover Our Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;