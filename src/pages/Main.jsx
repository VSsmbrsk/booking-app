import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { loadDestinations } from "../features/destinations/actions";
import { searchHotels } from "../features/hotels/actions";

const required =
  (label = "Field") =>
  (value) =>
    value ? undefined : `${label} is required`;

const Main = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector((state) => state.destinations);
  const submitError = useSelector((state) => state.hotels.error);

  useEffect(() => {
    dispatch(loadDestinations());
  }, [dispatch]);

  const onSubmit = (values) => {
    dispatch(searchHotels(values));
  };

  return (
    <Container sx={{ py: 6 }} maxWidth={false}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "baseline",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Field name="destination" validate={required("Destination")}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    select
                    label="Destination"
                    size="small"
                    sx={{ minWidth: 220 }}
                    disabled={loading}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={(meta.touched && meta.error) || " "}
                  >
                    <MenuItem value="">Select destination</MenuItem>
                    {list.map((option) => (
                      <MenuItem key={option.id} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>

              <Field name="checkIn" validate={required("Check-in date")}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    label="Check in"
                    size="small"
                    onClick={(e) => e.target.showPicker?.()}
                    InputLabelProps={{ shrink: true }}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={(meta.touched && meta.error) || " "}
                    sx={{
                      "& input::-webkit-calendar-picker-indicator": {
                        filter: "invert(1)",
                      },
                    }}
                  />
                )}
              </Field>

              <Field name="checkOut" validate={required("Check-out date")}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    label="Check out"
                    size="small"
                    onClick={(e) => e.target.showPicker?.()}
                    InputLabelProps={{ shrink: true }}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={(meta.touched && meta.error) || " "}
                    sx={{
                      "& input::-webkit-calendar-picker-indicator": {
                        filter: "invert(1)",
                      },
                    }}
                  />
                )}
              </Field>

              <Field name="adults" validate={required("Adults")}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Adults"
                    type="number"
                    size="small"
                    sx={{ width: 100 }}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={(meta.touched && meta.error) || " "}
                  />
                )}
              </Field>

              <Field name="children" validate={required("Children")}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Children"
                    type="number"
                    size="small"
                    sx={{ width: 100 }}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={(meta.touched && meta.error) || " "}
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                sx={{ background: "#f5a623", color: "#fff" }}
                disabled={submitting || pristine}
              >
                {submitting ? "Sending..." : "Submit"}
              </Button>
            </Box>
          </form>
        )}
      />

      {error && <Alert severity="error">{error}</Alert>}
      {submitError && <Alert severity="error">{submitError}</Alert>}

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#242424",
          textAlign: "center",
        }}
      >
        Travel With{" "}
        <Box component="span" sx={{ color: "#f5a623" }}>
          Booking
        </Box>
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginBottom: "48px", textAlign: "center" }}
      >
        Plan your perfect trip with ease. Discover the best hotels, compare
        prices and book accommodations worldwide in just a few clicks. Our
        platform helps you find comfortable stays that match your budget, travel
        dates and preferences, so you can focus on enjoying your journey instead
        of worrying about details.
      </Typography>
    </Container>
  );
};

export default Main;
