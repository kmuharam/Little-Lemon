// react
import { useEffect } from "react";

// @mui
// -- styles
import { useTheme } from "@mui/material/styles";
// -- components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

// swiper
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// layouts
import MainLayout from "../../layouts/main";

// images
// -- dishes
import AgasheImage from "../../assets/images/agashe.jpg";
import ShawrmaImage from "../../assets/images/shawrma.jpg";
import FishImage from "../../assets/images/fish.jpg";
import JohnDoe1Image from "../../assets/images/johndoe1.jpg";
import JohnDoe2Image from "../../assets/images/johndoe2.jpg";
import JohnDoe3Image from "../../assets/images/johndoe3.jpg";
import JohnDoe4Image from "../../assets/images/johndoe4.png";
import RestaurantImage from "../../assets/images/restaurant.jpg";

// styles
import "./styles.css";

// ----------------------------------------------------------------------

const LandingPage = () => {
    // hooks
    // -- theme
    const theme = useTheme();
    // -- breakpoints
    const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        document.title = "Welcome to Little Lemon Restaurant";
    }, []);

    return (
        <MainLayout>
            <Box bgcolor="#4a5f58">
                <Container maxWidth="xl">
                    <Grid container py={10}>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Stack
                                pt={isMdDown ? 3 : 0}
                                justifyContent="center"
                                alignItems="flex-start"
                                sx={{ height: "100%" }}
                                spacing={3}
                            >
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    fontWeight={600}
                                    color="#f4ce14"
                                >
                                    {"Little Lemon"}
                                </Typography>

                                <Typography
                                    component="h2"
                                    variant="h4"
                                    fontWeight={600}
                                    color="common.white"
                                >
                                    {"Chicago"}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={600}
                                    color="common.white"
                                >
                                    {"We are a family owned Mediterranean "}
                                    <br />
                                    {
                                        "restaurant, focused on traditional recipes "
                                    }
                                    <br />
                                    {"served with a modern twist."}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={6}
                            mt={isLgDown ? 5 : 0}
                            justifyContent="center"
                            sx={{
                                display: "flex",
                            }}
                        >
                            <img
                                src={AgasheImage}
                                alt="Agashe Dish"
                                width="100%"
                                height="500px"
                                style={{
                                    borderRadius: 20,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="xl">
                <Stack
                    my={10}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h4" fontWeight={600} color="#4a5f58">
                        {"Weekly Specials"}
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            px: 3,
                            py: 1.5,
                            borderRadius: 3,
                            bgcolor: "#f4ce14",
                            color: "#4a5f58",
                            fontWeight: 600,
                            textTransform: "none",
                            boxShadow: 0,
                            ":hover": {
                                bgcolor: "#4a5f58",
                                color: "#f4ce14",
                                boxShadow: 2,
                            },
                        }}
                    >
                        {"Online Menu"}
                    </Button>
                </Stack>

                <Grid
                    container
                    pb={10}
                    spacing={{
                        lg: 5,
                        md: 5,
                        sm: 5,
                        xs: 5,
                    }}
                >
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Paper
                            elevation={9}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <Stack direction="column">
                                <img
                                    src={AgasheImage}
                                    alt="Agashe Dish"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                    }}
                                />

                                <Stack direction="column" spacing={2} p={5}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#4a5f58"
                                        >
                                            {"Agashe"}
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#f4ce14"
                                        >
                                            {"9.99"}
                                        </Typography>
                                    </Stack>

                                    <Typography variant="body1">
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                                        }
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontWeight={600}
                                    >
                                        {"Order Now!"}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Paper
                            elevation={9}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <Stack direction="column">
                                <img
                                    src={FishImage}
                                    alt="Fish Dish"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                    }}
                                />

                                <Stack direction="column" spacing={2} p={5}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#4a5f58"
                                        >
                                            {"Fish"}
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#f4ce14"
                                        >
                                            {"9.99"}
                                        </Typography>
                                    </Stack>

                                    <Typography variant="body1">
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                                        }
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontWeight={600}
                                    >
                                        {"Order Now!"}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Paper
                            elevation={9}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <Stack direction="column">
                                <img
                                    src={ShawrmaImage}
                                    alt="Shawrma Dish"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                    }}
                                />

                                <Stack direction="column" spacing={2} p={5}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#4a5f58"
                                        >
                                            {"Shawrma"}
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#f4ce14"
                                        >
                                            {"9.99"}
                                        </Typography>
                                    </Stack>

                                    <Typography variant="body1">
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                                        }
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontWeight={600}
                                    >
                                        {"Order Now!"}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Box
                bgcolor="#4a5f58"
                p={{
                    lg: 10,
                    md: 10,
                    sm: 5,
                    xs: 5,
                }}
            >
                <Container maxWidth="xl">
                    <Stack
                        width="100%"
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                        spacing={5}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color="#f4ce14"
                        >
                            {"Testimonials"}
                        </Typography>

                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[Autoplay, EffectCards]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={4}
                                    spacing={3}
                                >
                                    <img
                                        src={JohnDoe1Image}
                                        alt="Khalid Muharam"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: "50%",
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {"Khalid Muharam"}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                        }
                                    </Typography>
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={4}
                                    spacing={3}
                                >
                                    <img
                                        src={JohnDoe2Image}
                                        alt="Khalid Muharam"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: "50%",
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {"Khalid Muharam"}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                        }
                                    </Typography>
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={4}
                                    spacing={3}
                                >
                                    <img
                                        src={JohnDoe3Image}
                                        alt="Khalid Muharam"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: "50%",
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {"Khalid Muharam"}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                        }
                                    </Typography>
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={4}
                                    spacing={3}
                                >
                                    <img
                                        src={JohnDoe4Image}
                                        alt="Khalid Muharam"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: "50%",
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {"Khalid Muharam"}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="#4a5f58"
                                        fontWeight={600}
                                    >
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                        }
                                    </Typography>
                                </Stack>
                            </SwiperSlide>
                        </Swiper>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="xl">
                <Grid
                    container
                    py={{
                        lg: 10,
                        md: 10,
                        sm: 5,
                        xs: 5,
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Stack
                            pt={isMdDown ? 3 : 0}
                            justifyContent="center"
                            alignItems="flex-start"
                            sx={{ height: "100%" }}
                            spacing={3}
                        >
                            <Typography
                                component="h1"
                                variant="h2"
                                fontWeight={600}
                                color="#f4ce14"
                            >
                                {"Little Lemon"}
                            </Typography>

                            <Typography
                                component="h2"
                                variant="h4"
                                fontWeight={600}
                                color="#4a5f58"
                            >
                                {"Chicago"}
                            </Typography>

                            <Typography
                                variant="body1"
                                fontWeight={600}
                                color="#4a5f58"
                            >
                                {"We are a family owned Mediterranean "}
                                <br />
                                {"restaurant, focused on traditional recipes "}
                                <br />
                                {"served with a modern twist."}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        mt={isLgDown ? 5 : 0}
                        justifyContent="center"
                        sx={{
                            display: "flex",
                        }}
                    >
                        <img
                            src={RestaurantImage}
                            alt="Restaurant"
                            width="100%"
                            height="400px"
                            style={{
                                borderRadius: 20,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MainLayout>
    );
};

// ----------------------------------------------------------------------

export default LandingPage;
