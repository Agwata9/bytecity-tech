import React from 'react';
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Avatar,
  Skeleton
} from '@mui/material';
import { styled } from '@mui/material/styles';

// 1. Define image paths relative to public folder
const clients = [
  { name: 'Die Cast', logo: '/clients/diecast.png' },
  { name: 'TechCorp', logo: '/clients/techcorp.png' },
  { name: 'Creative Solutions', logo: '/clients/creative.png' },
  { name: 'Digital Ventures', logo: '/clients/digital.png' },
  { name: 'Zone 254', logo: '/clients/Zone254.png' },
  { name: 'Beyond Classroom', logo: '/clients/beyondcr.png' },
  { name: 'Chiral', logo: '/clients/chiral.png' },
];

// 2. Fallback image
const fallbackLogo = '/clients/default-logo.png';

// 3. Background image
const backgroundImage = '/clients/background.jpg';

// 4. Styled components
const ClientSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 2),
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
    zIndex: 1
  }
}));

const ClientAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: theme.shadows[6]
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

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
    <ClientSection>
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: theme.palette.warning.main,
            fontWeight: 700,
            mb: 3,
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
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
            mx: 'auto'
          }} 
        />
        
        <Grid container spacing={4} justifyContent="center">
          {clients.map((client, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2
              }}>
                {loadingStates[index] && (
                  <Skeleton 
                    variant="rounded" 
                    width={isMobile ? theme.spacing(8) : theme.spacing(12)} 
                    height={isMobile ? theme.spacing(8) : theme.spacing(12)} 
                  />
                )}
                
                <ClientAvatar 
                  alt={client.name}
                  src={errorStates[index] ? fallbackLogo : client.logo}
                  variant="rounded"
                  sx={{ 
                    display: loadingStates[index] ? 'none' : 'flex',
                    bgcolor: 'background.paper'
                  }}
                  imgProps={{
                    loading: "lazy",
                    onLoad: () => handleImageLoad(index),
                    onError: () => handleImageError(index)
                  }}
                />
                
                {!isMobile && (
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'common.white',
                      fontWeight: 500,
                      textAlign: 'center'
                    }}
                  >
                    {client.name}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ClientSection>
  );
};

export default OurClients;