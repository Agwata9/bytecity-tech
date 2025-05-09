import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  Link,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const Careers: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "warning.main",
          color: "common.white",
          textAlign: "center",
          position: "relative",
          mb: 5,
          py: { xs: 6, md: 8 },
        }}
      >
        <Avatar
          sx={{
            bgcolor: "common.white",
            color: "warning.main",
            width: 80,
            height: 80,
            fontSize: 40,
            mx: "auto",
            mb: 3,
            boxShadow: 3,
          }}
        >
          <BusinessIcon fontSize="inherit" />
        </Avatar>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          ByteCity Tech
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{ opacity: 0.9, mb: 3 }}
        >
          Shape the future with us. Innovate, grow, and make an impact.
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 0,
            borderBottom: "3px solid rgba(255,255,255,0.5)",
            mx: "auto",
            mb: 2,
          }}
        />
      </Box>

      {/* Redesigned Body without Card */}
      <Grid container spacing={4} justifyContent="center" mb={6}>
        {/* Left Column: About & Why Work With Us */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "grey.900",
              color: "common.white",
              mb: 3,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
            }}
          >
            <Typography variant="h4" color="warning.main" gutterBottom fontWeight="bold">
              About ByteCity Tech
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, mb: 2 }}>
              At ByteCity Tech, we’re passionate about building technology that shapes a brighter future. Our diverse team thrives on solving complex problems and driving innovation.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 } }}>
              Whether you’re a developer, designer, or data scientist, you’ll find opportunities to grow and make an impact here.
            </Typography>
          </Paper>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "grey.800",
              color: "common.white",
              p: { xs: 3, md: 4 },
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" color="warning.main" gutterBottom fontWeight="bold">
              Why Join Us?
            </Typography>
            <List sx={{ fontSize: { xs: 16, md: 18 }, pl: 0 }}>
              <ListItem disableGutters>🚀 Innovative, dynamic environment</ListItem>
              <ListItem disableGutters>💸 Competitive pay & benefits</ListItem>
              <ListItem disableGutters>📈 Career growth & learning</ListItem>
              <ListItem disableGutters>🤝 Collaborative, diverse team</ListItem>
              <ListItem disableGutters>⚖️ Work-life balance</ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Right Column: Open Positions & How to Apply */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "grey.900",
              color: "common.white",
              mb: 3,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
            }}
          >
            <Typography variant="h4" color="warning.main" gutterBottom fontWeight="bold" align="center">
              Open Positions
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: "warning.main" }} />
            <Grid container spacing={2}>
              {["Software Engineer", "Product Manager", "UX/UI Designer", "Data Scientist"].map((role) => (
                <Grid item xs={12} key={role}>
                  <Box
                    sx={{
                      bgcolor: "grey.800",
                      color: "common.white",
                      borderRadius: 2,
                      boxShadow: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Typography variant="subtitle1">{role}</Typography>
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      onClick={() => window.open("mailto:careers@bytecitytech.com", "_blank")}
                    >
                      Apply
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "grey.800",
              color: "common.white",
              p: { xs: 3, md: 4 },
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" color="warning.main" gutterBottom fontWeight="bold" align="center">
              How to Apply
            </Typography>
            <Typography align="center" sx={{ fontSize: { xs: 16, md: 18 } }}>
              Send your resume and cover letter to{" "}
              <Link
                href="mailto:careers@bytecity.tech"
                color="warning.main"
                fontWeight="bold"
                underline="hover"
              >
                careers@bytecity.tech
              </Link>
              .
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Careers;
