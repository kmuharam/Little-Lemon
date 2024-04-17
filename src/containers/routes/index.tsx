// router
import {
    Route as ReactRouterRoute,
    Routes as ReactRouterRoutes,
} from "react-router-dom";

// pages
import LandingPage from "../../pages/landing";
import ReservationBookPage from "../../pages/reservations/book";
import ReservationConfirmPage from "../../pages/reservations/confirm";

// ----------------------------------------------------------------------

const Routes = () => (
    <ReactRouterRoutes>
        <ReactRouterRoute element={<LandingPage />} path="/" />

        <ReactRouterRoute
            element={<ReservationBookPage />}
            path="/reservations/book"
        />

        <ReactRouterRoute
            element={<ReservationConfirmPage />}
            path="/reservations/confirm"
        />
    </ReactRouterRoutes>
);

// ----------------------------------------------------------------------

export default Routes;
