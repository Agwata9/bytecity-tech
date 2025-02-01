import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const WebDesignHeader: React.FC = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 4, sm: 6 },
        background: "linear-gradient(135deg, #4A90E2, #8E44AD)",
        color: "#FFFFFF",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url('your-background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: { xs: "200px", sm: "300px", md: "400px" },
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.3,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, fontWeight: "bold", mb: 2 }}>
          Professional Web Design Services
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, maxWidth: "600px", mx: "auto" }}>
          Creating visually stunning, responsive, and user-friendly websites tailored to your needs.
        </Typography>
      </Container>
    </Box>
  );
};

export default WebDesignHeader;
