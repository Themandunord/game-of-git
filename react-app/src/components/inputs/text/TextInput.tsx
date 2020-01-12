import TextField from '@material-ui/core/TextField';
import React from 'react';
import { InputProps } from '../../InputProps.type';

export const TextInput = <Form extends {}>(Props: InputProps<Form>) => {
    const { formRef, ...inputProps } = Props;

    const { register, errors, formState } = formRef;
    const name = inputProps.name;

    const error = errors[name] as any; // TODO: fix typing here
    const message = error && error.message ? error.message : '';

    return (
        <>
            <TextField
                className={formState.isValid ? 'success' : ''}
                helperText={message}
                error={!!message}
                disabled={formState.isSubmitting}
                fullWidth
                inputRef={register}
                {...inputProps}
                name={name}
            />
        </>
    );
};
