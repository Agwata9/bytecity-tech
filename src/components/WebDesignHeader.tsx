import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const WebDesignHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: 4,
          width: "100%",
        }}
      >
        {/* Features Card */}
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Features We Offer:
            </Typography>
            <ul style={{ paddingLeft: "20px", listStyle: "none", margin: 0 }}>
              {[
                "Responsive web design",
                "Domain registration",
                "24/7 Support",
                "Run on WordPress, Strapi, or any CMS",
              ].map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 22,
                      color: theme.palette.success.main,
                      mr: 1,
                    }}
                  />
                  <Typography variant="body1">{feature}</Typography>
                </li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              onClick={() => alert("Redirecting to contact page...")}
            >
              Talk to Us
            </Button>
          </CardContent>
        </Card>

        {/* Image Card */}
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image="https://via.placeholder.com/400"
            alt="Web Design"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: 450,
              mx: "auto",
            }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default WebDesignHeader;
