import {
    StandardTextFieldProps,
    OutlinedTextFieldProps,
    FilledTextFieldProps,
} from '@material-ui/core/TextField';
import { NativeSelectProps } from '@material-ui/core/NativeSelect';
import { FormContextValues } from 'react-hook-form';

export type TextInputProps<Form = Record<string, any>> = (
    | StandardTextFieldProps
    | FilledTextFieldProps
    | OutlinedTextFieldProps
) & {
    name: keyof Form;
    label?: string;
    placeholder?: string;
    formRef: FormContextValues<Form>;
};

export type SelectInputProps<
    OptionType,
    Form = Record<string, any>
> = NativeSelectProps & {
    name: keyof Form;
    label?: string;
    placeholder?: string;
    formRef: FormContextValues<Form>;
    options: OptionType[];
};
