import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";

import { fetchAPI } from "../../../../../utils/api";

import BookingForm from ".";

describe("Booking Form", () => {
    const output: string[] = fetchAPI(new Date());

    const updateTimes = (state: any, action: any) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                return [...fetchAPI(action.date)];
            default:
                return state;
        }
    };

    test("Renders fields", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    dispatch={jest.fn((action) => action)}
                    availableTimes={[
                        "17:00",
                        "18:00",
                        "19:00",
                        "20:00",
                        "21:00",
                        "22:00",
                    ]}
                />
            </MemoryRouter>,
        );

        const firstNameLabel = screen.getByText("First name");
        expect(firstNameLabel).toBeInTheDocument();

        const lastNameLabel = screen.getByText("Last name");
        expect(lastNameLabel).toBeInTheDocument();

        const emailLabel = screen.getByText("Email address");
        expect(emailLabel).toBeInTheDocument();

        const phoneNumberLabel = screen.getByText("Phone number");
        expect(phoneNumberLabel).toBeInTheDocument();

        const numberOfGuestsLabel = screen.getByText("Number of guests");
        expect(numberOfGuestsLabel).toBeInTheDocument();

        const dateLabel = screen.getByText("Date");
        expect(dateLabel).toBeInTheDocument();

        const timeLabel = screen.getByText("Time");
        expect(timeLabel).toBeInTheDocument();

        const occasionLabel = screen.getByText("Occasion");
        expect(occasionLabel).toBeInTheDocument();

        const seatingPreferencesLabel = screen.getByText("Seating preferences");
        expect(seatingPreferencesLabel).toBeInTheDocument();

        const commentsLabel = screen.getByText("Comments");
        expect(commentsLabel).toBeInTheDocument();

        const submitButtonLabel = screen.getByText("Book Now!");
        expect(submitButtonLabel).toBeInTheDocument();
    });

    // test("Validation fields", async () => {
    //     render(
    //         <MemoryRouter>
    //             <BookingForm
    //                 dispatch={jest.fn((action) => action)}
    //                 availableTimes={[
    //                     "17:00",
    //                     "18:00",
    //                     "19:00",
    //                     "20:00",
    //                     "21:00",
    //                     "22:00",
    //                 ]}
    //             />
    //         </MemoryRouter>,
    //     );

    //     const user = userEvent.setup();
    //     const firstNameField = screen.getByTestId("first_name");
    //     const submitButton = screen.getByTestId("book_now");

    //     await user.type(firstNameField, "");

    //     await user.click(submitButton);
    //     const firstNameFieldError = screen.getByTestId("guests-error");

    //     expect(firstNameFieldError).toHaveTextContent(
    //         "The first name is required",
    //     );
    // });

    test("Times are initialized as expected", () => {
        const today = new Date();
        const initialState = output;
        const expectedResult = [...fetchAPI(today)];
        expect(initialState).toEqual(expectedResult);
    });

    test("Time are updated as expected", () => {
        const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const action = { type: "SOME_ACTION" };
        const newState = updateTimes(state, action);
        expect(newState).toEqual(state);
    });
});
