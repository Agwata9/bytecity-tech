import React from 'react';
import { Box, Button, Container, Typography, Divider } from '@mui/material';

const OurServicesHeader: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("services-hero-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      <Container
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ color: 'white' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: 3,
              color: 'warning.main',
            }}
          >
            Our Digital Services
          </Typography>
          <Divider
            sx={{
              width: '25%',
              borderWidth: 2,
              borderColor: 'warning.main',
              opacity: 0.75,
              margin: '0 auto 16px',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              marginBottom: 4,
              maxWidth: '600px',
              marginX: 'auto',
            }}
          >
            Transform your online presence with our comprehensive suite of professional services
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#services"
            sx={{
              px: 5,
              py: 2,
              fontWeight: 'bold',
              borderRadius: '50px',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Discover Solutions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurServicesHeader;