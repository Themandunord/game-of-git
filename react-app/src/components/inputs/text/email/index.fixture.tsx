import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { EmailInput } from './EmailInput';

interface EmailForm {
    email: string;
}

const EmailInputWrapper: React.FC = ({ children }) => {
    const form = useForm<EmailForm>({
        mode: 'onBlur',
        validationSchema: object<EmailForm>({
            email: string()
                .required('Email is required')
                .email('Email is invalid'),
        }),
    });

    const handleSubmit = (value: any) => {
        console.log('handling submit ', value);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <EmailInput name="email" formRef={form} />
        </form>
    );
};

export default <EmailInputWrapper />;
