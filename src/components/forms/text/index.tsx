// @mui
// -- components
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

// lodash
import { get as _get } from "lodash";

// forms
import { useController, UseControllerProps } from "react-hook-form";

// ----------------------------------------------------------------------

interface InputProps extends UseControllerProps<any> {
    type?: string;
    isArray?: boolean;
    arrayKey?: string;
    arraySubKey?: string;
    arrayIndex?: number;
    multiline?: boolean;
    rows?: number;
    labelRequired?: boolean;
    labelText?: string;
    placeholderText?: string;
    allowHelperText?: boolean;
    disabled?: boolean;
}

// ----------------------------------------------------------------------

const Input = ({
    type = "text",
    isArray = false,
    arrayKey = "none",
    arraySubKey = "none",
    arrayIndex = 0,
    multiline = undefined,
    rows = undefined,
    labelRequired = false,
    labelText = undefined,
    placeholderText = undefined,
    allowHelperText = true,
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

                <TextField
                    autoComplete="off"
                    fullWidth
                    {...field}
                    size="small"
                    inputRef={field.ref}
                    disabled={disabled}
                    type={type}
                    multiline={multiline}
                    rows={rows}
                    placeholder={placeholderText}
                    error={
                        isArray
                            ? Boolean(
                                  _get(
                                      formState.errors,
                                      `${field.name}.message`,
                                  ),
                              )
                            : Boolean(formState.errors[`${field.name}`])
                    }
                />
            </Stack>

            {allowHelperText &&
                (formState.errors[`${props.name}`] ||
                    _get(formState.errors, `${field.name}.message`)) && (
                    <FormHelperText error sx={{ mt: 0.5 }}>
                        {isArray
                            ? (_get(
                                  formState.errors,
                                  `${field.name}.message`,
                              ) as any)
                            : (formState.errors[`${props.name}`]
                                  ?.message as string)}
                    </FormHelperText>
                )}
        </>
    );
};

// ----------------------------------------------------------------------

export default Input;
