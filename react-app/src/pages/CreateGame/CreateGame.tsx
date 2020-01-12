import React from 'react';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { PATH } from '../../router/routes';

const title = PATH.CREATE_GAME.name;

const CreateGame: React.FC = () => {
    const { name } = useParams();

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Create Game" />
            </Helmet>

            <Grid container alignItems="center">
                <Grid item xs={8}>
                    <p>Create Game for {`${name}`}</p>
                </Grid>
            </Grid>
        </>
    );
};

export default CreateGame;
