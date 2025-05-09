import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Badge,
} from '@mui/material';
import {
  FaPaintBrush,
  FaSwatchbook,
  FaBoxOpen,
  FaPencilAlt,
  FaBullhorn,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  price: string;
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

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Badge
            badgeContent={service.price}
            color="warning"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '0.875rem',
                px: 2,
                py: 1,
                borderRadius: '16px',
                color: 'text.primary',
                backgroundColor: 'warning.main',
              },
            }}
          />
        </Box>

        <Button
          variant="outlined"
          color="warning"
          fullWidth
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          onClick={() => navigate(service.route)}
        >
          Get Started
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
      price: 'Ksh 10,000 - Ksh 60,000',
      route: '/logo-design',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Branding & Corporate Identity',
      description: 'Complete branding solutions to create a strong brand presence.',
      price: 'Ksh 20,000 - Ksh 50,000',
      route: '/branding-corporate-identity',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Packaging Design',
      description:
        'Innovative packaging solutions that protect your product and enhance brand recognition.',
      price: 'Ksh 8,000 - Ksh 30,000',
      route: '/packaging-design',
      icon: <FaBoxOpen />,
    },
    {
      title: 'Business Cards & Stationery',
      description: 'Design business cards and stationery that align with your brand.',
      price: 'Ksh 3,000 - Ksh 10,000',
      route: '/business-cards-stationery',
      icon: <FaSwatchbook />,
    },
    {
      title: 'Illustration and Sketching',
      description:
        'Hand-crafted illustrations and conceptual sketches for various applications.',
      price: 'Ksh 5,000 - Ksh 25,000',
      route: '/illustration-sketching',
      icon: <FaPencilAlt />,
    },
    {
      title: 'Advertising and Marketing Design',
      description:
        'Comprehensive design solutions for advertising campaigns and marketing materials.',
      price: 'Ksh 10,000 - Ksh 60,000',
      route: '/advertising-marketing-design',
      icon: <FaBullhorn />,
    },
  ];

  return (
    <Box sx={{ py: 3, bgcolor: 'background.default' }}>
      <Box
        sx={{
          py: 5,
          bgcolor: 'warning.light',
          textAlign: 'center',
        }}
      >
        <FaPaintBrush size={48} color="#ff9800" />
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', color: 'warning.main', mt: 2 }}
        >
          Professional Design Solutions
        </Typography>
        <Box
          sx={{
            width: '25%',
            height: '4px',
            bgcolor: 'warning.main',
            mx: 'auto',
            my: 2,
          }}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          End-to-end design services covering branding, marketing, and product
          presentation needs.
        </Typography>
      </Box>

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
      </Container>
    </Box>
  );
};

export default GraphicDesignPage;