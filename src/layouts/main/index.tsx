// react
import type { ReactNode } from "react";

// @mui
// -- components
import CssBaseline from "@mui/material/CssBaseline";

// components
import Header from "./components/header";
import Footer from "./components/footer";

// ----------------------------------------------------------------------

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <CssBaseline />

            <Header />

            {children}

            <Footer />
        </>
    );
};

// ----------------------------------------------------------------------

export default MainLayout;
