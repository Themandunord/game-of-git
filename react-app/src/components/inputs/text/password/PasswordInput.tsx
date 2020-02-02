import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, InputAdornment } from '@material-ui/core';
import React, { useState } from 'react';
import { TextInputProps } from '../../InputProps.type';
import { TextInput } from '../TextInput';

export const PasswordInput = <Form extends {}>(Props: TextInputProps<Form>) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const passwordProps = {
        InputProps: {
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() =>
                            setPasswordVisibility(!passwordVisibility)
                        }
                    >
                        {passwordVisibility ? (
                            <FontAwesomeIcon icon={faEyeSlash} />
                        ) : (
                            <FontAwesomeIcon icon={faEye} />
                        )}
                    </IconButton>
                </InputAdornment>
            ),
        },
    };
    return (
        <TextInput<Form>
            {...Props}
            type={passwordVisibility ? 'text' : 'password'}
            placeholder={Props.placeholder || '*****'}
            label={Props.label || 'Password'}
            {...passwordProps}
        />
    );
};
