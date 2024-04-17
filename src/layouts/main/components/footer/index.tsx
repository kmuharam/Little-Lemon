// @mui
// -- styles
import { useTheme } from "@mui/material/styles";
// -- components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
// -- icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// images
// -- logo
import LargeLogo from "../../../../assets/images/large-logo.svg";

// ----------------------------------------------------------------------

const Footer = () => {
    // hooks
    // -- theme
    const theme = useTheme();
    // -- breakpoints
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box bgcolor="#c4b063">
            <Container maxWidth="xl">
                <Box pt={8}>
                    <Stack>
                        <Grid
                            container
                            py={2}
                            mt={1}
                            mb={3}
                            justifyContent="center"
                            sx={{
                                borderTop: "1px solid #000",
                                borderBottom: "1px solid #000",
                                display: {
                                    sm: "none",
                                    xs: "flex",
                                },
                            }}
                        >
                            {SocialMediaLinks()}
                        </Grid>

                        <Grid container pb={isSmDown ? 5 : 10}>
                            <Grid
                                item
                                xs={12}
                                pb={4}
                                sx={{
                                    display: {
                                        md: "none",
                                        sm: "flex",
                                    },
                                }}
                            >
                                {Logo()}
                            </Grid>

                            <Grid
                                item
                                md={4}
                                sm={4}
                                xs={6}
                                sx={{
                                    display: {
                                        md: "flex",
                                        xs: "none",
                                    },
                                }}
                            >
                                <Stack
                                    direction="column"
                                    sx={{ height: "100%" }}
                                    justifyContent="space-between"
                                >
                                    {Logo()}
                                </Stack>
                            </Grid>

                            <Grid item md={2} sm={3} xs={6}>
                                <Typography
                                    variant="body1"
                                    color="#000"
                                    fontWeight={600}
                                    sx={{
                                        pb: isSmDown ? 2 : 4,
                                    }}
                                >
                                    {"Navigation"}
                                </Typography>

                                <Stack spacing={1.5}>
                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Home"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"About"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Menu"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="/reservations/book"
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Reservations"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Order Online"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Login"}
                                    </MuiLink>
                                </Stack>
                            </Grid>

                            <Grid item md={2} sm={3} xs={6}>
                                <Typography
                                    variant="body1"
                                    color="#000"
                                    fontWeight={600}
                                    sx={{
                                        pb: isSmDown ? 2 : 4,
                                    }}
                                >
                                    {"Who we are?"}
                                </Typography>

                                <Stack spacing={1.5}>
                                    <MuiLink
                                        color="inherit"
                                        href="#l"
                                        underline="none"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"About Us"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        href="#l"
                                        underline="none"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Contact Us"}
                                    </MuiLink>
                                </Stack>
                            </Grid>

                            <Grid
                                item
                                md={2}
                                sm={3}
                                xs={6}
                                mt={{ xs: 5, sm: 0, md: 0, lg: 0 }}
                            >
                                <Typography
                                    variant="body1"
                                    color="#000"
                                    fontWeight={600}
                                    sx={{
                                        pb: isSmDown ? 2 : 4,
                                    }}
                                >
                                    {"Nav Menu"}
                                </Typography>

                                <Stack spacing={1.5}>
                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Link 1"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Link 2"}
                                    </MuiLink>
                                </Stack>
                            </Grid>

                            <Grid
                                item
                                md={2}
                                sm={3}
                                xs={6}
                                mt={{ xs: 5, sm: 0, md: 0, lg: 0 }}
                            >
                                <Typography
                                    variant="body1"
                                    color="#000"
                                    fontWeight={600}
                                    sx={{
                                        pb: isSmDown ? 2 : 4,
                                    }}
                                >
                                    {"Nav Menu"}
                                </Typography>

                                <Stack spacing={1.5}>
                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Link 1"}
                                    </MuiLink>

                                    <MuiLink
                                        color="inherit"
                                        underline="none"
                                        href="#l"
                                        onClick={(e) => e.preventDefault()}
                                        sx={{
                                            color: "#000",
                                            fontSize: "16px",
                                            ":hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {"Link 2"}
                                    </MuiLink>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            pb={5}
                            sx={{
                                display: {
                                    md: "none",
                                    sm: "flex",
                                    xs: "none",
                                },
                            }}
                        >
                            <Grid item xs={6}>
                                <Box display="flex" justifyContent="flex-end">
                                    {SocialMediaLinks()}
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            py={2}
                            sx={{
                                borderTop: "1px solid #000",
                            }}
                        >
                            <Grid item sm={12} sx={{ width: "100%" }}>
                                <Grid container>
                                    <Grid
                                        item
                                        xs={6}
                                        sm={6}
                                        md={6}
                                        lg={4}
                                        alignSelf="center"
                                    >
                                        <Stack direction="column">
                                            <Typography
                                                variant="body1"
                                                color="#000"
                                            >
                                                {
                                                    "© 2024 All rights reserved for Little Lemon Restaurant"
                                                }
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                color="#000"
                                            >
                                                {"version 0.1.0"}
                                            </Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid
                                        item
                                        md={4}
                                        justifyContent="flex-end"
                                        alignSelf="center"
                                        sx={{
                                            display: { xs: "none", lg: "flex" },
                                        }}
                                    >
                                        {SocialMediaLinks()}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

// ----------------------------------------------------------------------

const Logo = () => {
    return (
        <MuiLink href="/">
            <img
                alt="Little Lemon Restaurant"
                src={LargeLogo}
                style={{
                    width: 160,
                    height: 43,
                }}
            />
        </MuiLink>
    );
};

const SocialMediaLinks = () => {
    return (
        <Stack spacing={3} direction="row" justifyContent="center">
            <MuiLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
            >
                <FacebookIcon
                    style={{ color: "#000", width: 32, height: 32 }}
                />
            </MuiLink>

            <MuiLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
            >
                <InstagramIcon
                    style={{ color: "#000", width: 32, height: 32 }}
                />
            </MuiLink>

            <MuiLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com"
            >
                <TwitterIcon style={{ color: "#000", width: 32, height: 32 }} />
            </MuiLink>

            <MuiLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com"
            >
                <YouTubeIcon style={{ color: "#000", width: 32, height: 32 }} />
            </MuiLink>
        </Stack>
    );
};

// ----------------------------------------------------------------------

export default Footer;
