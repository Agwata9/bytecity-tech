import React from "react";
import {
  Container,
  Grid,
  Card,
 
  Typography,
  Button,
  Divider,
  Box,
  Stack,
  Avatar,
  Paper,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTiktok,
  faInstagram,
  faFacebook,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  FaBuilding,
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const AboutUs: React.FC = () => {
  const socialLinks = [
    { href: "https://wa.me/yourNumber", icon: faWhatsapp, name: "WhatsApp" },
    { href: "https://www.tiktok.com/@yourUsername", icon: faTiktok, name: "TikTok" },
    { href: "https://www.instagram.com/yourUsername", icon: faInstagram, name: "Instagram" },
    { href: "https://www.facebook.com/yourUsername", icon: faFacebook, name: "Facebook" },
    { href: "https://t.me/yourUsername", icon: faTelegram, name: "Telegram" },
    { href: "https://www.linkedin.com/in/yourUsername", icon: faLinkedin, name: "LinkedIn" },
  ];

  const services = [
    { title: "Web Design", description: "Creating visually appealing, user-friendly websites", icon: <FaLaptopCode /> },
    { title: "Training", description: "Empowering teams with digital skills", icon: <FaUsers /> },
    { title: "Graphic Design", description: "Crafting striking brand visuals", icon: <FaPalette /> },
    { title: "Branding", description: "Holistic market connection strategies", icon: <FaBuilding /> },
    { title: "Social Media", description: "Effective online campaigns", icon: <FaBullhorn /> },
    { title: "Consultancy", description: "Actionable digital insights", icon: <FaLightbulb /> },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 0 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "warning.main",
          py: { xs: 6, md: 10 },
          color: "common.white",
          textAlign: "center",
          position: "relative",
          mb: 6,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "common.white",
            color: "warning.main",
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            boxShadow: 3,
          }}
        >
          <FaBuilding size={40} />
        </Avatar>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          ByteCity Tech
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
          Where innovation meets excellence in digital solutions
        </Typography>
        <Divider
          sx={{
            width: 80,
            mx: "auto",
            borderBottomWidth: 3,
            borderColor: "common.white",
            opacity: 0.5,
            mb: 2,
          }}
        />
      </Box>

      <Container maxWidth="lg">
        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <FaLightbulb size={28} color="#ff9800" />
                <Typography variant="h5" fontWeight="bold" color="warning.main">
                  Our Mission
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary">
                Deliver innovative solutions through cutting-edge web design and digital strategies,
                staying ahead of industry trends for exceptional service.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <FaBuilding size={28} color="#ff9800" />
                <Typography variant="h5" fontWeight="bold" color="warning.main">
                  Our Vision
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary">
                Be the preferred digital partner transforming ideas into exceptional results,
                exceeding expectations to help clients achieve digital success.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Core Services */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="warning.main"
            textAlign="center"
            gutterBottom
          >
            Core Services
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Comprehensive digital solutions powering your business success
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 3,
                    textAlign: "center",
                    py: 5,
                    px: 2,
                    transition: "box-shadow 0.2s",
                    "&:hover": { boxShadow: 6, borderColor: "warning.main" },
                  }}
                >
                  <Box
                    sx={{
                      color: "warning.main",
                      fontSize: 48,
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Social Links */}
        <Box textAlign="center" sx={{ mt: 8, mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" color="warning.main" gutterBottom>
            Connect With Our Team
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ mt: 2 }}>
            {socialLinks.map((social, idx) => (
              <Button
                key={idx}
                href={social.href}
                variant="contained"
                color="warning"
                startIcon={<FontAwesomeIcon icon={social.icon} />}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: "50px",
                  px: 3,
                  py: 1,
                  color: "common.white",
                  fontWeight: "bold",
                  boxShadow: 2,
                  textTransform: "none",
                  mb: 1,
                }}
              >
                {social.name}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;