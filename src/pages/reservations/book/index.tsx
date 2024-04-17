// react
import { useState, useEffect, useReducer } from "react";

// router
import { useNavigate } from "react-router-dom";

// @mui
// -- lab
import { LoadingButton } from "@mui/lab";
// -- components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// forms
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

// phone
import { parsePhoneNumber } from "libphonenumber-js";

// utils
// -- api
import { fetchAPI } from "../../../utils/api";

// layouts
import MainLayout from "../../../layouts/main";

// components
// -- forms
import TextInput from "../../../components/forms/text";
import PhoneInput from "../../../components/forms/phone";
import NumberInput from "../../../components/forms/number";
import SelectInput from "../../../components/forms/select";

// ----------------------------------------------------------------------

interface IBookReservationFormFields {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    guests: number;
    date: string;
    time: string;
    occasion: number;
    preferences: number;
    comments: string;
}

// ----------------------------------------------------------------------

const ReservationBookPage = () => {
    // hook(s)
    // -- router
    const navigate = useNavigate();
    // -- forms
    // book form validation schemas
    const bookFormSchema = Joi.object({
        first_name: Joi.string()
            .min(1)
            .max(100)
            .required()
            .label("First name")
            .messages({
                "any.required": "The first name field is required",
                "string.empty": "The first name field is required",
                "string.min": "The first name field is required",
            }),
        last_name: Joi.string()
            .min(1)
            .max(100)
            .required()
            .label("Last name")
            .messages({
                "any.required": "The last name field is required",
                "string.empty": "The last name field is required",
                "string.min": "The last name field is required",
            }),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required()
            .label("Email address")
            .messages({
                "any.required": "The email address is required",
                "string.empty": "The email address is required",
                "string.email": "This email address is invalid",
            }),
        phone_number: Joi.string()
            .required()
            .custom((value: string) => {
                if (parsePhoneNumber(`+${value}`).isValid()) {
                    return value;
                }

                throw new Error("This phone number is invalid");
            })
            .label("Phone number")
            .messages({
                "any.required": "The phone number is required",
                "string.empty": "The phone number is required",
                "any.custom": "This phone number is invalid",
            }),
        guests: Joi.number()
            .positive()
            .allow(0)
            .required()
            .label("Number of guests")
            .messages({
                "any.required": "The number of guests is required",
                "number.positive": "The number of guests is required",
            }),
        date: Joi.string().min(1).max(100).required().label("Date").messages({
            "any.required": "The date field is required",
            "string.empty": "The date field is required",
            "string.min": "The date field is required",
        }),
        time: Joi.number().positive().required().label("Time").messages({
            "any.required": "The time is required",
            "number.positive": "The time is required",
        }),
        occasion: Joi.number()
            .positive()
            .required()
            .label("Occasion")
            .messages({
                "any.required": "The occasion is required",
                "number.positive": "The occasion is required",
            }),
        preferences: Joi.number()
            .positive()
            .required()
            .label("Preferences")
            .messages({
                "any.required": "The preferences is required",
                "number.positive": "The preferences is required",
            }),
        comments: Joi.string()
            .min(1)
            .max(100)
            .required()
            .label("Time")
            .messages({
                "any.required": "The comments field is required",
                "string.empty": "The comments field is required",
                "string.min": "The comments field is required",
            }),
    });
    const bookFormMethods = useForm<IBookReservationFormFields>({
        mode: "onTouched",
        reValidateMode: "onChange",
        resolver: joiResolver(bookFormSchema),
        shouldFocusError: false,
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            guests: 0,
            date: "",
            time: "",
            occasion: 1,
            preferences: 1,
            comments: "",
        },
    });

    const output: string[] = fetchAPI(new Date());

    const updateTimes = (date: Date) => fetchAPI(date);

    // state(s)
    const [availableTimes, dispatch] = useReducer<any>(updateTimes, output);

    const [finalTime, setFinalTime] = useState<Array<string>>(
        availableTimes as string[],
    );

    // listen to date changes and update times accordingly
    bookFormMethods.watch((values, { name }) => {
        if (name === "date") {
            updateTimes(new Date(values.date as string));

            setFinalTime(availableTimes as string[]);
        }
    });

    // submit handler
    // form callback(s)
    const handleBook: SubmitHandler<IBookReservationFormFields> = async (
        data: IBookReservationFormFields,
    ) => {
        navigate("/reservations/confirm");
    };

    useEffect(() => {
        document.title = "Book a table | Little Lemon Restaurant";
    }, []);

    return (
        <MainLayout>
            <Container maxWidth="xl">
                <Stack py={8} direction="column" spacing={4}>
                    <Typography component="h1" variant="h2">
                        {"Book a Reservation"}
                    </Typography>

                    <Paper
                        elevation={5}
                        sx={{
                            px: 2,
                            py: 3,
                            margin: "auto",
                            overflow: "hidden",
                        }}
                    >
                        <FormProvider {...bookFormMethods}>
                            <form
                                onSubmit={bookFormMethods.handleSubmit(
                                    handleBook,
                                )}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <TextInput
                                            labelRequired
                                            control={bookFormMethods.control}
                                            name="first_name"
                                            labelText="First name"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <TextInput
                                            labelRequired
                                            control={bookFormMethods.control}
                                            name="last_name"
                                            labelText="Last name"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <TextInput
                                            labelRequired
                                            control={bookFormMethods.control}
                                            name="email"
                                            labelText="Email address"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <PhoneInput
                                            labelRequired
                                            control={bookFormMethods.control}
                                            name="phone_number"
                                            labelText="Phone number"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <NumberInput
                                            control={bookFormMethods.control}
                                            name="guests"
                                            labelText="Number of guests"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <TextInput
                                            labelRequired
                                            control={bookFormMethods.control}
                                            name="date"
                                            labelText="Date"
                                            type="date"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <SelectInput
                                            labelRequired
                                            control={bookFormMethods.control}
                                            name="time"
                                            labelText="Time"
                                            resources={finalTime.map(
                                                (
                                                    time: string,
                                                    index: number,
                                                ) => ({
                                                    value: index + 1,
                                                    label: time,
                                                }),
                                            )}
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <SelectInput
                                            control={bookFormMethods.control}
                                            name="occasion"
                                            labelText="Occasion"
                                            resources={[
                                                { value: 1, label: "None" },
                                                { value: 2, label: "Birthday" },
                                                {
                                                    value: 3,
                                                    label: "Anniversary",
                                                },
                                                {
                                                    value: 4,
                                                    label: "Engagement",
                                                },
                                                { value: 5, label: "Other" },
                                            ]}
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <SelectInput
                                            control={bookFormMethods.control}
                                            name="preferences"
                                            labelText="Seating preferences"
                                            resources={[
                                                { value: 1, label: "None" },
                                                { value: 2, label: "Indoors" },
                                                {
                                                    value: 3,
                                                    label: "Outdoor (Sidewalk)",
                                                },
                                                {
                                                    value: 4,
                                                    label: "Outdoor (Patio)",
                                                },
                                            ]}
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextInput
                                            labelRequired
                                            multiline
                                            rows={8}
                                            control={bookFormMethods.control}
                                            name="comments"
                                            labelText="Comments"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container mt={2} spacing={2}>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <LoadingButton
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            disabled={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                            loading={
                                                bookFormMethods.formState
                                                    .isSubmitting
                                            }
                                            sx={{ textTransform: "none" }}
                                        >
                                            {"Book Now!"}
                                        </LoadingButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </FormProvider>
                    </Paper>
                </Stack>
            </Container>
        </MainLayout>
    );
};

// ----------------------------------------------------------------------

export default ReservationBookPage;
