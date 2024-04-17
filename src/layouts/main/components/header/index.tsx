// react
import type { ReactElement } from "react";
import { useState, cloneElement } from "react";

// @mui
// -- components
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// -- icons
import MenuIcon from "@mui/icons-material/Menu";

// images
// -- logo
import LargeLogo from "../../../../assets/images/large-logo.svg";

// ----------------------------------------------------------------------

interface ElevationScrollProps {
    window?: () => Window;
    children: ReactElement;
}

function ElevationScroll({ window, children }: ElevationScrollProps) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

// ----------------------------------------------------------------------

const Header = () => {
    // states
    // -- drawer
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    // callbacks
    // -- handle drawer toggle
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <ElevationScroll>
                <AppBar
                    component="nav"
                    sx={{ bgcolor: "#fff", height: "90px" }}
                >
                    <Toolbar sx={{ height: "100%" }} disableGutters>
                        <Container maxWidth="xl">
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                flexGrow={1}
                            >
                                <Link href="/">
                                    <img
                                        src={LargeLogo}
                                        alt="Little Lemon Restaurant"
                                    />
                                </Link>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "flex",
                                            flexDirection: "row",
                                            gap: 20,
                                        },
                                    }}
                                >
                                    <Link
                                        href="/"
                                        sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "#4a5f58",
                                            ":hover": {
                                                color: "#f4ce14",
                                            },
                                        }}
                                    >
                                        {"Home"}
                                    </Link>

                                    <Link
                                        href="#l"
                                        sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "#4a5f58",
                                            ":hover": {
                                                color: "#f4ce14",
                                            },
                                        }}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {"About"}
                                    </Link>

                                    <Link
                                        href="#l"
                                        sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "#4a5f58",
                                            ":hover": {
                                                color: "#f4ce14",
                                            },
                                        }}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {"Menu"}
                                    </Link>

                                    <Link
                                        href="/reservations/book"
                                        sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "#4a5f58",
                                            ":hover": {
                                                color: "#f4ce14",
                                            },
                                        }}
                                    >
                                        {"Reservations"}
                                    </Link>

                                    <Link
                                        href="#l"
                                        sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "#4a5f58",
                                            ":hover": {
                                                color: "#f4ce14",
                                            },
                                        }}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {"Order Online"}
                                    </Link>

                                    <Link
                                        href="#l"
                                        sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "#4a5f58",
                                            ":hover": {
                                                color: "#f4ce14",
                                            },
                                        }}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {"Login"}
                                    </Link>
                                </Box>

                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: "none" } }}
                                >
                                    <MenuIcon style={{ color: "#000" }} />
                                </IconButton>
                            </Stack>
                        </Container>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 400,
                        },
                    }}
                >
                    <Box
                        onClick={handleDrawerToggle}
                        sx={{ textAlign: "center" }}
                        py={5}
                    >
                        <Link href="/">
                            <img
                                src={LargeLogo}
                                alt="Little Lemon Restaurant"
                            />
                        </Link>

                        <Divider />

                        <List>
                            <ListItem component={Link} href="/" disablePadding>
                                <ListItemButton
                                    sx={{
                                        fontWeight: 600,
                                        color: "#000",
                                        ":hover": {
                                            bgcolor: "#efefef",
                                        },
                                    }}
                                >
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>

                            <Divider />

                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        fontWeight: 600,
                                        color: "#000",
                                        ":hover": {
                                            bgcolor: "#efefef",
                                        },
                                    }}
                                >
                                    <ListItemText primary="About" />
                                </ListItemButton>
                            </ListItem>

                            <Divider />

                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        fontWeight: 600,
                                        color: "#000",
                                        ":hover": {
                                            bgcolor: "#efefef",
                                        },
                                    }}
                                >
                                    <ListItemText primary="Menu" />
                                </ListItemButton>
                            </ListItem>

                            <Divider />

                            <ListItem
                                component={Link}
                                href="/reservations/book"
                                disablePadding
                            >
                                <ListItemButton
                                    sx={{
                                        fontWeight: 600,
                                        color: "#000",
                                        ":hover": {
                                            bgcolor: "#efefef",
                                        },
                                    }}
                                >
                                    <ListItemText primary="Reservations" />
                                </ListItemButton>
                            </ListItem>

                            <Divider />

                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        fontWeight: 600,
                                        color: "#000",
                                        ":hover": {
                                            bgcolor: "#efefef",
                                        },
                                    }}
                                >
                                    <ListItemText primary="Order Online" />
                                </ListItemButton>
                            </ListItem>

                            <Divider />

                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        fontWeight: 600,
                                        color: "#000",
                                        ":hover": {
                                            bgcolor: "#efefef",
                                        },
                                    }}
                                >
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </nav>

            <Toolbar />
        </>
    );
};

// ----------------------------------------------------------------------

export default Header;
