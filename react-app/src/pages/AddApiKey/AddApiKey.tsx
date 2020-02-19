import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import AddApiKeyForm from '../../components/forms/AddApiKeyForm/AddApiKeyForm';
import PATH from '../../router/routes';
import { UserContext } from '../../store/user';
import useStyle from './styles';

const title = PATH.ADD_API_KEY.name;

const AddApiKey = () => {
    const classes = useStyle({});
    const globalUserState = useContext(UserContext);
    const { push } = useHistory();

    useEffect(() => {
        if (
            globalUserState.state.user?.apiKeys &&
            globalUserState.state.user?.apiKeys.length > 0
        ) {
            push(PATH.DASHBOARD.path);
        }
    }, [globalUserState.state.user, push]);

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Add GitHub Key" />
            </Helmet>
            <div id={title} className={classes.paper}>
                <AddApiKeyForm />
                <Avatar className={classes.avatar}>
                    <CloseIcon />
                </Avatar>
            </div>
        </div>
    );
};

export default AddApiKey;
