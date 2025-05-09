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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faRocket } from '@fortawesome/free-solid-svg-icons';
import {
  faTiktok,
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
  faTelegram,
  faLinkedin,
  faSlack,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaManagementPage: React.FC = () => {
  const services = [
    { icon: faTiktok, title: 'TikTok Growth Strategy', price: 'Ksh 15k - 50k/month' },
    { icon: faInstagram, title: 'Instagram Brand Building', price: 'Ksh 20k - 60k/month' },
    { icon: faFacebook, title: 'Facebook Community Management', price: 'Ksh 10k - 40k/month' },
    { icon: faTwitter, title: 'X Platform Optimization', price: 'Ksh 12k - 35k/month' },
    { icon: faBullhorn, title: 'Cross-Platform Advertising', price: 'Ksh 25k - 100k/month' },
    { icon: faRocket, title: 'Performance Analytics', price: 'Ksh 8k - 20k/month' },
  ];

  const socialLinks = [
    { icon: faWhatsapp, name: 'WhatsApp', href: 'https://wa.me/yourNumber' },
    { icon: faTiktok, name: 'TikTok', href: 'https://tiktok.com/@yourUsername' },
    { icon: faInstagram, name: 'Instagram', href: 'https://instagram.com/yourUsername' },
    { icon: faFacebook, name: 'Facebook', href: 'https://facebook.com/yourUsername' },
    { icon: faTelegram, name: 'Telegram', href: 'https://t.me/yourUsername' },
    { icon: faLinkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/yourUsername' },
    { icon: faSlack, name: 'Slack', href: 'https://yourWorkspace.slack.com' },
    { icon: faDiscord, name: 'Discord', href: 'https://discord.gg/yourInviteCode' },
  ];

  return (
    <Box component="section" py={3} bgcolor="lightgray">
      {/* Hero Section */}
      <Box py={5} bgcolor="rgba(255, 193, 7, 0.1)" textAlign="center">
        <FontAwesomeIcon icon={faBullhorn} size="2x" style={{ color: '#ffc107', marginBottom: '16px' }} />
        <Typography variant="h4" fontWeight="bold" color="warning.main" gutterBottom>
          Professional Social Media Solutions
        </Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Box width="25%" height="2px" bgcolor="warning.main" sx={{ opacity: 0.75 }} />
        </Box>
        <Typography variant="body1" color="text.secondary" maxWidth="600px" mx="auto">
          Transform your online presence with data-driven strategies and expert platform management
        </Typography>
      </Box>

      <Container>
        <Box textAlign="center" mb={5}>
          <Typography variant="h5" fontWeight="bold" color="warning.main" gutterBottom>
            Comprehensive Social Media Services
          </Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <Box width="50%" height="1px" bgcolor="warning.main" sx={{ opacity: 0.5 }} />
          </Box>
          <Typography variant="body2" color="text.secondary" maxWidth="800px" mx="auto">
            End-to-end social media solutions tailored to amplify your brand's digital voice
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
          {services.map((service, index) => (
            <Card key={index} sx={{ width: 300, display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <FontAwesomeIcon icon={service.icon} size="2x" style={{ color: '#ffc107', marginBottom: '16px' }} />
                <Typography variant="h6" fontWeight="bold" color="warning.main" gutterBottom>
                  {service.title}
                </Typography>
                <Box mt="auto" mb={2}>
                  <Badge
                    badgeContent={service.price}
                    color="warning"
                    sx={{
                      '& .MuiBadge-badge': {
                        padding: '8px 16px',
                        borderRadius: '16px',
                        fontSize: '0.875rem',
                      },
                    }}
                  />
                </Box>
                <Button variant="outlined" color="warning" fullWidth>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" mt={5} py={4} bgcolor="rgba(255, 193, 7, 0.1)" borderRadius={2}>
          <FontAwesomeIcon icon={faRocket} size="2x" style={{ color: '#ffc107', marginBottom: '16px' }} />
          <Typography variant="h5" fontWeight="bold" color="text.secondary" gutterBottom>
            Ready for Social Media Transformation?
          </Typography>
          <Button variant="contained" color="warning" sx={{ px: 5, py: 2, borderRadius: '24px' }}>
            Launch Your Strategy
          </Button>
        </Box>

        {/* Social Links */}
        <Box textAlign="center" mt={5} pt={4}>
          <Typography variant="h6" fontWeight="bold" color="text.secondary" gutterBottom>
            Connect With Our Team
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {socialLinks.map((social, idx) => (
              <Button
                key={idx}
                href={social.href}
                variant="outlined"
                color="warning"
                startIcon={<FontAwesomeIcon icon={social.icon} />}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '24px', px: 3 }}
              >
                {social.name}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialMediaManagementPage;