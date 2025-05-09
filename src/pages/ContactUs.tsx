import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

const ContactUs: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        color: theme.palette.warning.contrastText,
        backgroundImage: 'url("contact-us-hero-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          width: '100%',
          maxWidth: 700,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            mb: { xs: 2, md: 4 },
            fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' },
            color: theme.palette.warning.main,
          }}
        >
          Let's Build Something Amazing Together
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: { xs: 3, md: 5 },
            color: theme.palette.warning.contrastText,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
          }}
        >
          Partner with ByteCity Tech Solutions for innovative and tailored technology solutions that drive your business forward.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          size="large"
          href="#contact-us"
          sx={{
            px: 5,
            py: 2,
            fontSize: { xs: '1rem', md: '1.25rem' },
            fontWeight: 'bold',
            borderRadius: '50px',
            boxShadow: 4,
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
