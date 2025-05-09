import React from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
  useTheme,
  Grid,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const services = [
  {
    title: 'Fast Turnaround',
    text: 'We deliver projects quickly without compromising on quality.',
    icon: <AccessTimeIcon fontSize="large" />,
  },
  {
    title: 'Secure & Trusted',
    text: 'Your data and information are safe with us.',
    icon: <SecurityIcon fontSize="large" />,
  },
  {
    title: 'On-Time Delivery',
    text: 'We ensure all our services are delivered on time.',
    icon: <LocalShippingIcon fontSize="large" />,
  },
];

const WhyUs: React.FC = () => {
  const theme = useTheme();

  return (
    <Box component="section" py={{ xs: 6, md: 10 }} bgcolor="background.default">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="warning.main"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          Why Choose Us?
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          mb={6}
        >
          Discover what sets us apart from the competition.
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {services.map((service, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'box-shadow 0.3s',
                  boxShadow: `0 2px 16px 0 ${theme.palette.warning.light}22`,
                  '&:hover': {
                    boxShadow: `0 4px 32px 0 ${theme.palette.warning.main}33`,
                  },
                  bgcolor: 'background.paper',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'warning.main',
                    color: theme.palette.background.paper,
                    width: 72,
                    height: 72,
                    mb: 3,
                    boxShadow: 3,
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  color="text.primary"
                  fontWeight={600}
                  mb={1}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >
                  {service.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
