import { Box, Container, Typography, Button } from '@mui/material';

const TrainingHero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('training-hero-bg.png')`, // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'warning.main',
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          }}
        >
          Upgrade Your Skills with Our Expert Training
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            mt: 3,
            color: 'text.primary',
          }}
        >
          Learn Web Development, Graphic Design, and Python Data Analysis to
          boost your career and achieve your goals. Join ByteCity's training
          programs and unlock your potential today!
        </Typography>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{
            mt: 4,
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
          }}
          onClick={() => (window.location.href = '/training')}
        >
          Explore Courses
        </Button>
      </Container>
    </Box>
  );
};

export default TrainingHero;
