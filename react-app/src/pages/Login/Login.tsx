import { Avatar, Container, CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import { PATH } from '../../router/routes';
import useStyle from './styles';

const title = PATH.LOGIN.name;

const Login = () => {
    const classes = useStyle({});

    return (
        <Container component="main" maxWidth="xs">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Login Page" />
            </Helmet>
            <CssBaseline />
            <div className={classes.paper}>
                <LoginForm />
                <Avatar
                    className={classes.avatar}
                    src={'http://pcas.io/100/100'}
                ></Avatar>
                <Typography component="h1" variant="h5">
                    Game of Git
                </Typography>
            </div>
        </Container>
    );
};

export default Login;
