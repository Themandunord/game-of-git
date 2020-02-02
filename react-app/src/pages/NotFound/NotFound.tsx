import React from 'react';
import { Helmet } from 'react-helmet-async';
import PATH from '../../router/routes';

const title = PATH.NOT_FOUND.name;

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Not Found" />
            </Helmet>
            Not Found
        </div>
    );
};

export default NotFound;
