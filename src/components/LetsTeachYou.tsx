import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Container,
  useTheme,
} from '@mui/material';

const services = [
  {
    title: 'Web Development',
    text: 'Learn to create stunning, responsive websites and powerful web applications.',
    image: '/image.jpg',
  },
  {
    title: 'Python Programming & Data Analysis',
    text: 'Master Python for automation, data visualization, and insights-driven analysis.',
    image: '/image.jpg',
  },
  {
    title: 'Graphics Design',
    text: 'Design eye-catching visuals, logos, and branding materials for businesses.',
    image: '/image.jpg',
  },
];

const LetsTeachYou: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 4, md: 6 },
        bgcolor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: theme.palette.warning.main, fontWeight: 700 }}
        >
          Let's Teach You
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 0,
            borderTop: `3px solid ${theme.palette.warning.main}`,
            mx: 'auto',
            mb: 4,
          }}
        />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, idx) => (
            <Card
              key={idx}
              sx={{
                flex: 1,
                minWidth: { xs: '100%', sm: 250 },
                maxWidth: 350,
                mx: 'auto',
                boxShadow: 3,
                position: 'relative',
                height: 340,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <CardActionArea sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    height: 340,
                    filter: 'brightness(0.6)',
                  }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.warning.main, fontWeight: 600 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    {service.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default LetsTeachYou;