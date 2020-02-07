import React from 'react';
import { TextInputProps } from '../../InputProps.type';
import { TextInput } from '../TextInput';

export const EmailInput = <Form extends {}>(Props: TextInputProps<Form>) => {
    return (
        <TextInput<Form>
            {...Props}
            type="email"
            placeholder={Props.placeholder || 'name@domain.com'}
            label={Props.label || 'Email'}
        />
    );
};
