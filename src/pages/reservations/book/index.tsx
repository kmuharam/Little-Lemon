// react
import { useEffect, useReducer } from "react";

// utils
// -- api
import { fetchAPI } from "../../../utils/api";

// layouts
import MainLayout from "../../../layouts/main";

// section(s)
import BookingForm from "./sections/bookingForm";

// ----------------------------------------------------------------------

const ReservationBookPage = () => {
    const output: string[] = fetchAPI(new Date());

    const updateTimes = (state: any, action: any) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                return [...fetchAPI(action.date)];
            default:
                return state;
        }
    };

    // state(s)
    const [availableTimes, dispatch] = useReducer<any>(updateTimes, output);

    useEffect(() => {
        document.title = "Book a table | Little Lemon Restaurant";
    }, []);

    return (
        <MainLayout>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </MainLayout>
    );
};

// ----------------------------------------------------------------------

export default ReservationBookPage;
