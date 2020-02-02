import {
    StandardTextFieldProps,
    OutlinedTextFieldProps,
    FilledTextFieldProps,
} from '@material-ui/core/TextField';
import { FormContextValues } from 'react-hook-form';

export type InputProps<Form = Record<string, any>> = (
    | StandardTextFieldProps
    | FilledTextFieldProps
    | OutlinedTextFieldProps
) & {
    name: keyof Form;
    label?: string;
    placeholder?: string;
    formRef: FormContextValues<Form>;
};
