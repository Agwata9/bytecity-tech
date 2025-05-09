import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Divider,
} from '@mui/material';
import { FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  features: string[];
  price: string;
  route: string;
}

const ServiceCard: React.FC<{ service: Service; navigate: (route: string) => void }> = ({ service, navigate }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxShadow: 3,
      borderRadius: 2,
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
      <Box textAlign="center" mb={3}>
        <Box color="warning.main" mb={2}>
          <FaLaptopCode size={48} />
        </Box>
        <Typography variant="h6" fontWeight="bold" color="warning.main">
          {service.title}
        </Typography>
      </Box>

      <List disablePadding sx={{ flexGrow: 1 }}>
        {service.features.map((feature, i) => (
          <ListItem key={i} disableGutters>
            <ListItemIcon sx={{ minWidth: 32, color: 'warning.main' }}>
              <FaCheckCircle />
            </ListItemIcon>
            <ListItemText primary={feature} primaryTypographyProps={{ color: 'text.secondary' }} />
          </ListItem>
        ))}
      </List>

      <Box textAlign="center" mt={3} mb={2}>
        <Badge
          badgeContent={service.price}
          color="warning"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '1rem',
              px: 2,
              py: 1,
              borderRadius: '16px',
              backgroundColor: 'warning.main',
              color: 'text.primary',
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
        Choose Plan
      </Button>
    </CardContent>
  </Card>
);

const WebDesignPage: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: 'Basic Websites',
      description: 'Build a simple, mobile-responsive, and SEO-friendly website',
      features: [
        '3 to 4 pages',
        'Mobile-responsive design',
        'Basic SEO setup',
        'Contact form integration',
        'Fast loading speed',
      ],
      price: 'Ksh 15,000 - Ksh 50,000',
      route: '/basic-websites',
    },
    {
      title: 'Informative Websites',
      description: 'Custom-designed website with blog integration',
      features: [
        '4 to 6 pages',
        'Custom design',
        'SEO-friendly structure',
        'Blog integration',
        'Social media links',
      ],
      price: 'Ksh 20,000 - Ksh 75,000',
      route: '/informative-websites',
    },
    {
      title: 'E-commerce Websites',
      description: 'Fully functional online store with payment gateway',
      features: [
        'Payment gateway integration',
        'Product catalog (up to 50 items)',
        'User registration & tracking',
        'Inventory management',
        'Secure checkout',
      ],
      price: 'Ksh 150,000+',
      route: '/ecommerce-websites',
    },
    {
      title: 'Corporate Websites',
      description: 'Custom corporate website with advanced features',
      features: [
        'Custom corporate design',
        'CRM/ERP integrations',
        'Advanced security',
        'Employee portal',
        'Client feedback system',
      ],
      price: 'Contact Our Team',
      route: '/corporate-websites',
    },
  ];

  return (
    <Box component="section" py={3} bgcolor="background.default">
      {/* Unified Hero Section */}
      <Box py={5} bgcolor="warning.light" textAlign="center">
        <Container>
          <Box color="warning.main" mb={2}>
            <FaLaptopCode size={48} />
          </Box>
          <Typography variant="h3" fontWeight="bold" color="warning.main" gutterBottom>
            Professional Web Solutions
          </Typography>
          <Divider
            sx={{
              width: '25%',
              mx: 'auto',
              borderBottomWidth: 2,
              borderColor: 'warning.main',
              opacity: 0.75,
              mb: 2,
            }}
          />
          <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
            Transform your digital presence with custom web development solutions
          </Typography>
        </Container>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" color="warning.main" gutterBottom>
            Comprehensive Web Services
          </Typography>
          <Divider
            sx={{
              width: '50%',
              mx: 'auto',
              borderBottomWidth: 1,
              borderColor: 'warning.main',
              opacity: 0.5,
              mb: 2,
            }}
          />
          <Typography variant="body1" color="text.secondary" maxWidth={800} mx="auto">
            From simple websites to complex web applications - we deliver solutions that grow with your business
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
          {services.map((service, index) => (
            <Box key={index} width={{ xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' }}>
              <ServiceCard service={service} navigate={navigate} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WebDesignPage;