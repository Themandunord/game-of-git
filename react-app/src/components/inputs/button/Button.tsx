import {
    Button as MuiButton,
    LinearProgress,
    makeStyles,
} from '@material-ui/core';
import React from 'react';

export enum ButtonVariant {
    Contained = 'contained',
    Outlined = 'outlined',
}

export enum ButtonColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
}

export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

interface Props {
    disabled?: boolean;
    loading?: boolean;

    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    onClick?: (...args: any[]) => void;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const Button: React.FC<Props> = ({
    disabled = false,
    loading = false,
    variant = ButtonVariant.Contained,
    color = ButtonColor.Default,
    onClick = () => {},
    children,
}) => {
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
        >
            {loading && (
                <div className={classes.root}>
                    <LinearProgress />
                </div>
            )}

            {!loading && children}
        </MuiButton>
    );
};
