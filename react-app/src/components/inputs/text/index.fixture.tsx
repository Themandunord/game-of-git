import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { EmailInput } from './email/EmailInput';
import { PasswordInput } from './password/PasswordInput';
import { TextInput } from './TextInput';

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

interface PasswordForm {
    password: string;
}

const PasswordInputWrapper: React.FC = ({ children }) => {
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

interface TextForm {
    someText: string;
}

const TextInputWrapper: React.FC = ({ children }) => {
    const form = useForm<TextForm>({
        mode: 'onBlur',
        validationSchema: object<TextForm>({
            someText: string()
                .required('Text is required')
                .min(6, 'Text must be at least 6 characters'),
        }),
    });

    const handleSubmit = (value: any) => {
        console.log('handling submit ', value);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <TextInput name="someText" formRef={form} />
        </form>
    );
};

export default {
    Text: <TextInputWrapper />,
    Email: <EmailInputWrapper />,
    Password: <PasswordInputWrapper />,
};
