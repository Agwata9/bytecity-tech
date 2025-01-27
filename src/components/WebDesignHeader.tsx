import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const WebDesignHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6,
        px: 3,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Header Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.text.primary,
          mb: 4,
        }}
      >
        <h1 className="display-6 fw-bold text-warning">
          Everything You Need for an Online Presence
        </h1>
      </Typography>

      {/* Cards Container */}
      <Grid
        container
        spacing={4}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Features Card */}
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 3,
              height: "100%",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Features We Offer:
              </Typography>
              <ul style={{ paddingLeft: "20px", listStyle: "none", margin: 0 }}>
                {[
                  "Responsive web design",
                  "Domain registration",
                  "24/7 Support",
                  "Run on WordPress, Strapi, or any CMS",
                  "Web Management/Admnistration",
                  "Domain registration",
                  "E-mail Management/Admnistration",
                ].map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 24,
                        color: "#FFA500", // Orange color for the checkmark
                        mr: 1,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
              {/* Button Styled to Match WebDesignPage */}
              <Button
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "orange", // Orange hover color
                  },
                }}
                onClick={() => alert("Redirecting to contact page...")}
              >
                Talk to Us
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Image Card */}
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <CardMedia
              component="img"
              image="../webdeisgn-1.png"
              alt="Web Design"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 450,
                mx: "auto",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WebDesignHeader;