// @mui
// -- components
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

// forms
import { useController, UseControllerProps } from "react-hook-form";

// ----------------------------------------------------------------------

interface IOption {
    label: string;
    value: number | string;
}

interface InputProps extends UseControllerProps<any> {
    resources: IOption[];
    labelRequired?: boolean;
    labelText?: string;
    disabled?: boolean;
}

// ----------------------------------------------------------------------

const Input = ({
    resources,
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

                <Select
                    key={Math.random()}
                    {...field}
                    fullWidth
                    size="small"
                    value={field.value}
                    onChange={field.onChange}
                    error={Boolean(formState.errors[`${field.name}`])}
                    inputProps={{ ref: field.ref }}
                    disabled={disabled}
                >
                    {resources.map((resource) => (
                        <MenuItem
                            key={`${props.name}-select-${resource.label}`}
                            value={resource.value}
                        >
                            {resource.label}
                        </MenuItem>
                    ))}
                </Select>
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
