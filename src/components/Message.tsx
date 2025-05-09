import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

const Message: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 600, px: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          Transform Your Business
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            mb: 4,
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.125rem' },
          }}
        >
          Leverage cutting-edge solutions tailored to your unique business needs
        </Typography>

        <Button
          variant="contained"
          color="warning"
          sx={{
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: '50px',
            textTransform: 'none',
            fontSize: { xs: '0.875rem', sm: '1rem' },
          }}
          href="https://wa.me/0777439049"
          target="_blank"
        >
          Chat Now
        </Button>
      </Box>
    </Box>
  );
};

export default Message;
