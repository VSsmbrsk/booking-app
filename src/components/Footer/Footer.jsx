import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 6,
        bgcolor: "#fff",
        borderTop: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, color: "#242424", mb: 1 }}
            >
              Travel With{" "}
              <Box component="span" sx={{ color: "#f5a623" }}>
                Booking
              </Box>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxWidth: "300px" }}
            >
              Making your hotel search simple, fast, and reliable since 2026.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{
                color: "#f5a623",
                border: "1px solid transparent",
                "&:hover": { border: "1px solid #f5a623" },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#f5a623",
                border: "1px solid transparent",
                "&:hover": { border: "1px solid #f5a623" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#f5a623",
                border: "1px solid transparent",
                "&:hover": { border: "1px solid #f5a623" },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#f5a623",
                border: "1px solid transparent",
                "&:hover": { border: "1px solid #f5a623" },
              }}
            >
              <LanguageIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © 2026 Travel With Booking. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Typography
              variant="caption"
              sx={{ cursor: "pointer", color: "#000" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="caption"
              sx={{ cursor: "pointer", color: "#000" }}
            >
              Terms of Service
            </Typography>
            <Typography
              variant="caption"
              sx={{ cursor: "pointer", color: "#000" }}
            >
              Contact Us
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
