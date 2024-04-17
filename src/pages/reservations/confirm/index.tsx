// react
import { useEffect } from "react";

// @mui
// -- components
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// -- icon(s)
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// layouts
import MainLayout from "../../../layouts/main";

// ----------------------------------------------------------------------

const ReservationConfirmPage = () => {
    useEffect(() => {
        document.title =
            "Your reservation was booked | Little Lemon Restaurant";
    }, []);

    return (
        <MainLayout>
            <Container maxWidth="xl">
                <Stack
                    py={15}
                    direction="column"
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    <CheckCircleOutlineIcon
                        style={{ fontSize: "120px", color: "green" }}
                    />

                    <Typography component="h1" variant="h2">
                        {"Your Reservation is Confirmed!"}
                    </Typography>

                    <Typography variant="h4">
                        {"A confirmation message has been sent to your email."}
                    </Typography>

                    <Typography variant="h4">
                        {"We are looking forward to meet you!"}
                    </Typography>
                </Stack>
            </Container>
        </MainLayout>
    );
};

// ----------------------------------------------------------------------

export default ReservationConfirmPage;
