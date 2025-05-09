import React from 'react';
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Container,
  Avatar,
  Skeleton,
  Stack
} from '@mui/material';

const clients = [
  { name: 'Die Cast', logo: '/clients/diecast.png' },
  { name: 'TechCorp', logo: '/clients/techcorp.png' },
  { name: 'Creative Solutions', logo: '/clients/creative.png' },
  { name: 'Digital Ventures', logo: '/clients/digital.png' },
  { name: 'Zone 254', logo: '/clients/Zone254.png' },
  { name: 'Beyond Classroom', logo: '/clients/beyondcr.png' },
  { name: 'Chiral', logo: '/clients/chiral.png' },
];

const fallbackLogo = '/clients/default-logo.png';
const backgroundImage = '/clients/background.jpg';

const OurClients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loadingStates, setLoadingStates] = React.useState<Record<number, boolean>>(
    clients.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );
  const [errorStates, setErrorStates] = React.useState<Record<number, boolean>>(
    clients.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
    setErrorStates(prev => ({ ...prev, [index]: true }));
  };

  return (
    <Box
      sx={{
        position: 'relative',
        py: 8,
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: theme.palette.warning.main,
            fontWeight: 700,
            mb: 3,
            textAlign: 'center',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          Valued Clients
        </Typography>

        <Divider
          sx={{
            width: 60,
            height: 4,
            backgroundColor: theme.palette.warning.main,
            mb: 6,
            mx: 'auto',
          }}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={4}
          sx={{ gap: 4 }}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {loadingStates[index] && (
                <Skeleton
                  variant="rounded"
                  width={isMobile ? theme.spacing(8) : theme.spacing(12)}
                  height={isMobile ? theme.spacing(8) : theme.spacing(12)}
                />
              )}

              <Avatar
                alt={client.name}
                src={errorStates[index] ? fallbackLogo : client.logo}
                variant="rounded"
                sx={{
                  width: isMobile ? theme.spacing(8) : theme.spacing(12),
                  height: isMobile ? theme.spacing(8) : theme.spacing(12),
                  transition: 'all 0.3s ease',
                  backgroundColor: theme.palette.background.paper,
                  display: loadingStates[index] ? 'none' : 'flex',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: theme.shadows[6],
                  },
                }}
                imgProps={{
                  loading: 'lazy',
                  onLoad: () => handleImageLoad(index),
                  onError: () => handleImageError(index),
                }}
              />

              {!isMobile && (
                <Typography
                  variant="body1"
                  sx={{
                    color: 'common.white',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  {client.name}
                </Typography>
              )}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default OurClients;
