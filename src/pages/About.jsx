import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import HotelIcon from "@mui/icons-material/Hotel";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SearchIcon />,
      title: "Easy Search",
      description:
        "Find the best hotels in your favorite cities with our advanced filtering system.",
    },
    {
      icon: <HotelIcon />,
      title: "Wide Variety",
      description:
        "From cozy apartments to luxury resorts, we have options for every traveler.",
    },
    {
      icon: <InfoIcon />,
      title: "Detailed Info",
      description:
        "Get all the details, ratings, and contact information before you book.",
    },
    {
      icon: <AttachMoneyIcon />,
      title: "Best Prices",
      description:
        "We guarantee the best prices for our partners' hotels with no hidden fees.",
    },
    {
      icon: <SupportAgentIcon />,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always here to help you with your booking process.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: 800, color: "#242424", mb: 2 }}
        >
          About Our App
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", maxWidth: "700px", mx: "auto" }}
        >
          This is a modern booking platform designed to make your travel
          planning seamless and enjoyable.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {features.map((feature, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={0}
              sx={{
                padding: "32px 12px",
                display: "flex",
                alignItems: "center",
                gap: 3,
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                borderRadius: 4,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "#fcfcfc",
                  borderColor: "#242424",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 50,
                  height: 50,
                  border: "1px solid #f5a623",
                  borderRadius: 2,
                  color: "#f5a623",
                }}
              >
                {feature.icon}
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, lineHeight: 1.2, mb: 0.5 }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 8,
          mb: 4,
          p: 4,
          bgcolor: "#f5f5f5",
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, color: "#242424" }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#242424", fontStyle: "italic" }}
        >
          "To connect travelers with unique local experiences and provide a
          reliable way to find home away from home."
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "#f5a623",
            color: "#fff",
            px: 6,
            py: 2,
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: "#fff",
              color: "#f5a623",
              transform: "scale(1.05)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            },
          }}
        >
          Search Hotels
        </Button>
      </Box>
    </Container>
  );
};

export default About;
