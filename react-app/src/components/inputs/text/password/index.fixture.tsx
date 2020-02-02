import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { PasswordInput } from './PasswordInput';

interface PasswordForm {
    password: string;
}

const EmailInputWrapper: React.FC = ({ children }) => {
    const form = useForm<PasswordForm>({
        mode: 'onBlur',
        validationSchema: object<PasswordForm>({
            password: string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters'),
        }),
    });

    const handleSubmit = (value: any) => {
        console.log('handling submit ', value);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <PasswordInput name="password" formRef={form} />
        </form>
    );
};

export default <EmailInputWrapper />;
