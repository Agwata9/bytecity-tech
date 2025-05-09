import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.grey[900],
        color: theme.palette.common.white,
        py: 5,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          {/* Company Information */}
          <Box flex={1}>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.warning.main, mb: 1 }}
            >
              ByteCity Tech Computer Solutions
            </Typography>
            <Typography variant="body2" color="inherit">
              Delivering innovative tech solutions for your business. From IT consultancy to system sourcing and graphic design, we've got you covered!
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box flex={1}>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.warning.main, mb: 1 }}
            >
              Quick Links
            </Typography>
            <Stack spacing={0.5}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/about-us" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/our-services" color="inherit" underline="hover">
                Our Services
              </Link>
              <Link href="/training" color="inherit" underline="hover">
                Training
              </Link>
              <Link href="/store" color="inherit" underline="hover">
                Computer Store
              </Link>
              <Link href="/careers" color="inherit" underline="hover">
                Careers
              </Link>
              <Link href="/contact-us" color="inherit" underline="hover">
                Contact Us
              </Link>
              <Link href="/portfolio" color="inherit" underline="hover">
                Portfolio
              </Link>
            </Stack>
          </Box>

          {/* Contact and Social Media */}
          <Box flex={1}>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.warning.main, mb: 1 }}
            >
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon fontSize="small" color="inherit" />
                <Link
                  href="mailto:info@bytecity.tech"
                  color="inherit"
                  underline="hover"
                >
                  info@bytecity.tech
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneIcon fontSize="small" color="inherit" />
                <Link
                  href="tel:+254777439049"
                  color="inherit"
                  underline="hover"
                >
                  +254 777 439 049
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <WhatsAppIcon fontSize="small" color="inherit" />
                <Link
                  href="https://wa.me/254702439049"
                  color="inherit"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  +254 702 439 049
                </Link>
              </Stack>
            </Stack>
            <Divider sx={{ my: 2, bgcolor: theme.palette.grey[800] }} />
            <Stack direction="row" spacing={2}>
              <Link
                href="https://www.facebook.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="large" />
              </Link>
              <Link
                href="https://www.twitter.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <TwitterIcon fontSize="large" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="https://www.instagram.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="large" />
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
