import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Avatar,
  Divider,
} from '@mui/material';
import {
  FaSwatchbook,
  FaBoxOpen,
  FaPencilAlt,
  FaBullhorn,
  FaBuilding,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  route: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<{ service: Service; navigate: (route: string) => void }> = ({ service, navigate }) => (
  <Box sx={{ flex: '1 1 300px', display: 'flex' }}>
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Box sx={{ fontSize: '2rem', color: 'warning.main', mb: 2 }}>
            {service.icon}
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: 'warning.main', mb: 1 }}
          >
            {service.title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ flexGrow: 1, mb: 2 }}
        >
          {service.description}
        </Typography>

        <Button
          variant="outlined"
          color="warning"
          fullWidth
          sx={{ fontWeight: 'bold', textTransform: 'uppercase', mt: 2 }}
          onClick={() => navigate(service.route)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  </Box>
);

const GraphicDesignPage: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: 'Logo Design',
      description: 'Custom, unique logos designed to represent your brand.',
      route: '/logo-design',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Branding & Corporate Identity',
      description: 'Complete branding solutions to create a strong brand presence.',
      route: '/branding-corporate-identity',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Packaging Design',
      description:
        'Innovative packaging solutions that protect your product and enhance brand recognition.',
      route: '/packaging-design',
      icon: <FaBoxOpen />,
    },
    {
      title: 'Business Cards & Stationery',
      description: 'Design business cards and stationery that align with your brand.',
      route: '/business-cards-stationery',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Illustration and Sketching',
      description:
        'Hand-crafted illustrations and conceptual sketches for various applications.',
      route: '/illustration-sketching',
      icon: <FaPencilAlt />,
    },
    {
      title: 'Advertising and Marketing Design',
      description:
        'Comprehensive design solutions for advertising campaigns and marketing materials.',
      route: '/advertising-marketing-design',
      icon: <FaBullhorn />,
    },
  ];

  const handleRequestQuote = () => {
    // Navigate to a quote request page or open a dialog/modal
    navigate('/request-quote');
  };

  return (
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
      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: 'warning.main', mb: 2 }}
          >
            Comprehensive Design Services
          </Typography>
          <Box
            sx={{
              width: '50%',
              height: '2px',
              bgcolor: 'warning.main',
              mx: 'auto',
              mb: 2,
            }}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            From concept to execution - creative solutions for all your visual
            communication needs.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} navigate={navigate} />
          ))}
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, color: 'warning.main', fontWeight: 'bold' }}>
            Ready to request a quote?
          </Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
            onClick={handleRequestQuote}
          >
            Request Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GraphicDesignPage;
