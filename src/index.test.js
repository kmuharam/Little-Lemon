import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import ReservationFormPage from "./pages/reservations/book";
import ReservationConfirmedPage from "./pages/reservations/confirm";

test("Renders reservation form page", () => {
    render(
        <Router>
            <ReservationFormPage />
        </Router>,
    );

    const linkElement = screen.getByText(/Book a Reservation/i);

    expect(linkElement).toBeInTheDocument();
});

test("Renders reservation confirmed page", () => {
    render(<ReservationConfirmedPage />);

    const linkElement = screen.getByText(/Your Reservation is Confirmed!/i);

    expect(linkElement).toBeInTheDocument();
});
