import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { EmojiEvents, LocalOffer, Star, Bolt } from '@mui/icons-material';
import { styled, keyframes } from '@mui/system';

// Define the props for the Discover component
interface DiscoverProps {
  onHireUsClick: () => void;
}

const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const OfferItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  fontSize: '1.1rem',
  '& strong': {
    fontWeight: 600,
    color: theme.palette.secondary.main
  }
}));

const OfferList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  animation: `${scrollUp} 15s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused'
  }
});

const Discover: React.FC<DiscoverProps> = ({ onHireUsClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const images = [
    { src: "./carousel/image1.jpg", alt: "Design 1" },
    { src: "./carousel/image2.jpg", alt: "Design 2" },
    { src: "./carousel/image3.jpg", alt: "Design 3" },
    { src: "./carousel/image4.jpg", alt: "Design 4" },
    { src: "./carousel/image5.jpg", alt: "Design 5" },
    { src: "./carousel/image6.jpg", alt: "Design 6" },
    { src: "./carousel/image7.jpg", alt: "Design 7" },
    { src: "./carousel/image8.jpg", alt: "Design 8" },
    { src: "./carousel/image9.jpg", alt: "Design 9" },
  ];

  const offers = [
    { icon: <Bolt color="secondary" />, text: <strong>50% off on all design packages!</strong> },
    { icon: null, text: "Limited time only." },
    { icon: <Star color="secondary" />, text: <strong>Free consultation</strong> },
    { icon: <LocalOffer color="secondary" />, text: <strong>Discounted rates</strong> },
    { icon: null, text: "Returning customers." },
    { icon: <EmojiEvents color="secondary" />, text: <strong>Special bundle deals</strong> },
    { icon: null, text: "Graphic & Web Design Services." }
  ];

  return (
    <Box sx={{ 
      py: 8,
      backgroundColor: theme.palette.grey[100],
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))'
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            color: theme.palette.secondary.main,
            fontWeight: 700,
            letterSpacing: 1,
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: theme.palette.secondary.main,
              margin: '16px auto 0',
              borderRadius: '2px'
            }
          }}
        >
          Discover Our Designs
        </Typography>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8} lg={7}>
            <Carousel
              animation="fade"
              duration={1000}
              interval={4000}
              navButtonsAlwaysVisible={!isMobile}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                '& .CarouselItem': {
                  height: '400px',
                  [theme.breakpoints.down('sm')]: {
                    height: '300px'
                  }
                }
              }}
            >
              {images.map((image, index) => (
                <Box 
                  key={index}
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              ))}
            </Carousel>
          </Grid>

          <Grid item xs={12} md={4} lg={5}>
            <Card sx={{ 
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: 2,
              boxShadow: 3,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
              }
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  align="center" 
                  sx={{ 
                    mb: 3,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}
                >
                  Current Offers
                  <Bolt color="secondary" sx={{ animation: 'pulse 1.5s infinite' }} />
                </Typography>

                <Box sx={{ 
                  height: '260px',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover $offerList': {
                    animationPlayState: 'paused'
                  }
                }}>
                  <OfferList>
                    {offers.map((offer, index) => (
                      <OfferItem key={index}>
                        {offer.icon}
                        <span>{offer.text}</span>
                      </OfferItem>
                    ))}
                    {/* Duplicate for seamless looping */}
                    {offers.map((offer, index) => (
                      <OfferItem key={`dup-${index}`}>
                        {offer.icon}
                        <span>{offer.text}</span>
                      </OfferItem>
                    ))}
                  </OfferList>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={onHireUsClick}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 2,
              boxShadow: 3,
              textTransform: 'none',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 4,
                backgroundColor: theme.palette.secondary.dark
              }
            }}
          >
            Hire Our Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Discover;