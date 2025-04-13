import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  styled,
  Button
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { EmojiEvents, LocalOffer, Star, Bolt } from '@mui/icons-material';

interface DiscoverProps {
  onHireUsClick: () => void;
}

// Create styled components outside the main component
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
  margin: 0
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
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 700,
            mb: 3,
          }}
        >
          Discover Our Designs
        </Typography>
        
        <Divider 
          sx={{ 
            width: 60, 
            height: 4, 
            backgroundColor: theme.palette.secondary.main,
            mb: 6,
            mx: 'auto'
          }} 
        />
        
        <Grid container spacing={4} justifyContent="center">
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
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block',
                    [theme.breakpoints.down('sm')]: {
                      height: '300px'
                    }
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
              position: 'relative',
              overflow: 'hidden',
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
                  <Bolt color="secondary" />
                </Typography>

                <Box sx={{ 
                  height: '260px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <OfferList>
                    {offers.map((offer, index) => (
                      <OfferItem key={index}>
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