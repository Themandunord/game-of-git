import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import AddGithubKeyForm from '../../components/forms/AddGithubKeyForm/AddGithubKeyForm';
import { PATH } from '../../router/routes';
import { UserContext } from '../../store/user';
import useStyle from './styles';

const title = PATH.ADD_GITHUB_KEY.name;

const AddGithubKey = () => {
    const classes = useStyle({});
    const globalUserState = useContext(UserContext);
    const { push } = useHistory();

    useEffect(() => {
        if (
            globalUserState.state.user?.appKeys &&
            globalUserState.state.user?.appKeys.length > 0
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
                <AddGithubKeyForm />
                <Avatar className={classes.avatar}>
                    <CloseIcon />
                </Avatar>
            </div>
        </div>
    );
};

export default AddGithubKey;
