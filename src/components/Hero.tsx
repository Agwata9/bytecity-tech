import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  useTheme,
} from "@mui/material";

const words = ["IDEAS", "SKILLS", "CONCEPTS", "THOUGHTS"];

const Hero: React.FC = () => {
  const theme = useTheme();
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: `linear-gradient(45deg, rgba(0,0,0,0.7), rgba(255,127,0,0.2)), url(/hero-image-05.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            mb={3}
            color="common.white"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            We Transform
            <Box
              component="span"
              display="block"
              mt={2}
              sx={{
                transition: "color 0.5s",
                color: theme.palette.warning.main,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: "bold",
              }}
              key={currentWord}
            >
              {currentWord}
            </Box>
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            mb={3}
            color="warning.main"
            sx={{
              fontSize: { xs: "1.3rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Into Digital Excellence
          </Typography>

          <Typography
            variant="body1"
            color="common.white"
            mb={5}
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            Empower your business with cutting-edge IT solutions that drive innovation,
            efficiency, and sustainable growth.
          </Typography>

          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{
              px: 5,
              py: 2,
              fontWeight: "bold",
              borderRadius: "50px",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              boxShadow: 3,
              ":hover": {
                backgroundColor: theme.palette.warning.dark,
              },
            }}
            onClick={() => (window.location.href = "/our-services")}
          >
            Explore Our Solutions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;