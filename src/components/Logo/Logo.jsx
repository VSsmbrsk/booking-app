import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        position: "relative",
        pl: 4,
        color: "#f5a623",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 25,
          height: 25,
          borderRadius: "50%",
          backgroundColor: "#f5a623",
        },
      }}
    >
      Booking
    </Typography>
  );
};

export default Logo;
