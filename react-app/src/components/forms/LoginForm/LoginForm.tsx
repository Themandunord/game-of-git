import { useMutation } from '@apollo/react-hooks';
import {
    Button,
    Container,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import gql from 'graphql-tag';
import React, { useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';
import PATH from '../../../router/routes';
import { SystemContext } from '../../../store/system';
import { setIsLoading, setNotLoading } from '../../../store/system/loading';
import { UserContext } from '../../../store/user';
import { setIsLoggedIn, setNotLoggedIn } from '../../../store/user/loggedIn';
import { setToken } from '../../../store/user/token';
import { setUserData } from '../../../store/user/userData';
import { EmailInput } from '../../inputs/text/email/EmailInput';
import { PasswordInput } from '../../inputs/text/password/PasswordInput';
import { LoginFormData } from './types';
import { useLoginMutation } from '@game-of-git/graphql-nest';
import client from '../../../gql/apolloClient';

// const LOGIN = gql`
//     mutation($email: String!, $password: String!) {
//         login(data: { email: $email, password: $password }) {
//             token
//         }
//     }
// `;

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginForm: React.FC = () => {
    const classes = useStyles({});
    const { push } = useHistory();
    const [formError, setFormError] = useState<string>('');
    const globalUserState = useContext(UserContext);
    const globalSystemState = useContext(SystemContext);

    const { dispatch: dispatchSystem } = globalSystemState;
    const { dispatch: dispatchUser } = globalUserState;

    const form = useForm<LoginFormData>({
        mode: 'onBlur',
        validationSchema: object<LoginFormData>({
            email: string()
                .required('Email is required')
                .email('Email is invalid'),
            password: string().required('Password is required'),
        }),
    });

    const [login] = useLoginMutation({ client: client as any });

    const handleSubmit = useCallback(
        async (value: LoginFormData) => {
            let user = null;
            try {
                dispatchSystem(setIsLoading());
                user = await login({
                    variables: {
                        email: value.email,
                        password: value.password,
                    },
                });

                const token = user.data?.login.token || null;
                // const userData = user.data?.login.user || null;

                // dispatchUser(setUserData(userData));
                dispatchUser(setToken(token));
                dispatchUser(token ? setIsLoggedIn() : setNotLoggedIn());
            } catch (e) {
                setFormError(e.graphQLErrors[0].message.message);
            }
            dispatchSystem(setNotLoading());
            if (user) {
                push(PATH.DASHBOARD.path);
            }
        },
        [login, dispatchSystem, dispatchUser, push],
    );

    return (
        <Container>
            <div className={classes.paper}>
                <form
                    className={classes.form}
                    onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <Grid container spacing={2}>
                        {formError && (
                            <Grid item xs={12}>
                                <Typography color="error">
                                    {formError}
                                </Typography>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <EmailInput<LoginFormData>
                                name="email"
                                variant="outlined"
                                formRef={form}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput<LoginFormData>
                                name="password"
                                variant="outlined"
                                formRef={form}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        color="primary"
                        fullWidth
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;
