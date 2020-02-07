import {
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
    NativeSelect,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { SelectInputProps } from '../InputProps.type';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectInput = <Form extends {}>(
    Props: SelectInputProps<string, Form>,
) => {
    const classes = useStyles();

    const { formRef, options, ...inputProps } = Props;

    const {
        register,
        // errors,
        formState,
    } = formRef;
    const name = inputProps.name;

    // const error = errors[name] as any; // TODO: fix typing here
    // const message = error && error.message ? error.message : '';

    return (
        <FormControl
            className={clsx(
                classes.formControl,
                formState.isValid ? 'success' : '',
            )}
            fullWidth
        >
            <InputLabel htmlFor={`${name}-native-helper`}>
                {inputProps.label || name}
            </InputLabel>
            <NativeSelect
                disabled={formState.isSubmitting}
                fullWidth
                inputRef={register}
                {...inputProps}
                name={name}
            >
                <option value={''} />
                {options.map(option => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </NativeSelect>
            <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
    );
};

export default SelectInput;
