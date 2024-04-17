// @mui
// -- components
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

// number format
import { NumericFormat } from "react-number-format";

// forms
import { useController, UseControllerProps } from "react-hook-form";

// ----------------------------------------------------------------------

interface InputProps extends UseControllerProps<any> {
    decimalScale?: number;
    fixedDecimalScale?: boolean;
    labelRequired?: boolean;
    labelText?: string;
    disabled?: boolean;
}

// ----------------------------------------------------------------------

const Input = ({
    decimalScale = 0,
    fixedDecimalScale = false,
    labelRequired = false,
    labelText = undefined,
    disabled = false,
    ...props
}: InputProps) => {
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

                <NumericFormat
                    customInput={OutlinedInput}
                    size="small"
                    decimalScale={decimalScale}
                    fixedDecimalScale={fixedDecimalScale}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    disabled={disabled}
                    autoComplete="off"
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
