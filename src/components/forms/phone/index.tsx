// @mui
// -- components
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

// forms
import { useController, UseControllerProps } from "react-hook-form";

// phone
import PhoneInput from "react-phone-input-2";

// ----------------------------------------------------------------------

interface InputProps extends UseControllerProps<any> {
    labelRequired?: boolean;
    labelText?: string;
    disabled?: boolean;
}

// ----------------------------------------------------------------------

const Input = ({
    labelRequired = false,
    labelText = undefined,
    disabled = false,
    ...props
}: InputProps) => {
    // hooks
    // -- forms
    const { field, formState } = useController(props);

    return (
        <>
            <Stack spacing={1}>
                {labelText && (
                    <InputLabel required={labelRequired} htmlFor={props.name}>
                        {labelText}
                    </InputLabel>
                )}

                <PhoneInput
                    {...field}
                    autoFormat
                    country="sd"
                    enableSearch
                    disableSearchIcon
                    autocompleteSearch={false}
                    countryCodeEditable={false}
                    preferredCountries={["sd"]}
                    containerStyle={{
                        direction: "ltr",
                    }}
                    inputProps={{
                        ref: field.ref,
                        name: props.name,
                        autoComplete: "off",
                        disabled: disabled,
                        style: {
                            minHeight: "41.1333px",
                            width: "100%",
                        },
                    }}
                    searchStyle={{
                        width: "93%",
                        height: "40px",
                        borderRadius: "8px",
                    }}
                />
            </Stack>

            {formState.errors[`${props.name}`] && (
                <FormHelperText error sx={{ mt: 0.5 }}>
                    {formState.errors[`${props.name}`]?.message as string}
                </FormHelperText>
            )}
        </>
    );
};

// ----------------------------------------------------------------------

export default Input;
