import React from "react";
import { Container, Grid, Box, Typography, Button, Paper } from "@mui/material";
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
  <Box py={4} sx={{ backgroundColor: bg || "white" }}>
    <Container>
      <Box textAlign="center" mb={4}>
        <Box mb={2}>
          {React.cloneElement(icon as React.ReactElement, { 
            style: { fontSize: "3rem", color: "#ffc107" } 
          })}
        </Box>
        <Typography 
          variant="h4" 
          component="h2" 
          color="warning.main" 
          fontWeight="bold" 
          gutterBottom
        >
          {title}
        </Typography>
        <Box 
          sx={{ 
            width: "25%", 
            height: "4px", 
            backgroundColor: "warning.main", 
            margin: "0 auto", 
            opacity: 0.75 
          }} 
          mb={2} 
        />
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {description}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid item key={index} xl={3} lg={4} md={6} sm={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 2, 
                display: "flex", 
                alignItems: "center", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 25px rgba(255, 193, 7, 0.15)"
                }
              }}
            >
              <FaCheckCircle 
                style={{ color: "#ffc107", marginRight: "1rem", fontSize: "1.5rem" }} 
              />
              <Typography variant="body1" color="text.secondary">
                {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button 
          variant="outlined" 
          color="warning" 
          size="large" 
          sx={{ 
            fontWeight: "bold", 
            paddingX: 5, 
            paddingY: 2, 
            borderRadius: "50px" 
          }}
        >
          Explore {title}
        </Button>
      </Box>
    </Container>
  </Box>
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
        bg="#fff8e1"
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
        bg="#fff8e1"
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

export default OurServices;