import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Chip,
  Alert,
  Grid,
  Pagination,
} from "@mui/material";
import { searchHotels } from "../features/hotels/actions.js";

const Hotels = () => {
  const dispatch = useDispatch();

  const { list, total, page, loading, error, filters } = useSelector(
    (state) => state.hotels,
  );

  const HOTELS_LIMIT = Number(import.meta.env.VITE_HOTELS_LIMIT) || 10;
  const count = total > 0 ? Math.ceil(total / HOTELS_LIMIT) : 0;

  return (
    <Container maxWidth={false} sx={{ padding: "48px 0" }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#242424" }}>
          Available Hotels
        </Typography>
        <Typography color="text.secondary">
          {loading
            ? "Fetching the best places for you..."
            : `Found ${list.length} options`}
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {list.map((hotel) => (
          <Grid item xs={12} md={6} key={hotel.id}>
            <Card
              variant="outlined"
              sx={{
                width: "300px",
                borderColor: "#e0e0e0",
                minHeight: "215px",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "#e0e0e0",
                  borderColor: "#242424",
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {hotel.name}
                  </Typography>
                  {hotel.hotel_rating && (
                    <Chip label={`${hotel.hotel_rating}★`} color="warning" />
                  )}
                </Box>

                <Typography color="text.secondary">{hotel.address}</Typography>
                <Typography color="text.secondary">
                  {hotel.city}, {hotel.state || "N/A"}, {hotel.country_code}
                </Typography>

                {hotel.phone_number && (
                  <Typography variant="body2">
                    Phone: {hotel.phone_number}
                  </Typography>
                )}
                {hotel.website && (
                  <Typography variant="body2">
                    Website:{" "}
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {hotel.website}
                    </a>
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        page={Number(page) || 1}
        count={count}
        onChange={(_, value) => {
          dispatch(
            searchHotels({
              ...filters,
              page: value,
            }),
          );
        }}
        sx={{ mt: 4, display: "flex", justifyContent: "center" }}
      />

      {!loading && !list.length && !error && (
        <Alert severity="info" sx={{ mt: 3 }}>
          No hotels available for the selected filters.
        </Alert>
      )}
    </Container>
  );
};

export default Hotels;
