import React, { useMemo } from 'react';

import SelectInput from './SelectInput';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

interface SelectForm {
    color: string;
}

const colors = ['red', 'orange', 'blue'];

const SelectInputWrapper: React.FC = ({ children }) => {
    const form = useForm<SelectForm>({
        mode: 'onBlur',
        validationSchema: object<SelectForm>({
            color: string().oneOf(colors),
        }),
    });

    const handleSubmit = (value: any) => {
        console.log('handling submit ', value);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <SelectInput name="color" formRef={form} options={colors} />
        </form>
    );
};

export default {
    Select: <SelectInputWrapper />,
};
