import React from 'react';
import { InputProps } from '../../../InputProps.type';
import { TextInput } from '../TextInput';

export const EmailInput = <Form extends {}>(Props: InputProps<Form>) => {
    return (
        <TextInput<Form>
            {...Props}
            type="email"
            placeholder={Props.placeholder || 'name@domain.com'}
            label={Props.label || 'Email'}
        />
    );
};
