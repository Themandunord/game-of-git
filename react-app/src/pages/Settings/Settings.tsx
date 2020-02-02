import React from 'react';
import { Helmet } from 'react-helmet-async';
import PATH from '../../router/routes';

const title = PATH.SETTINGS.name;

const Settings = () => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Settings" />
            </Helmet>
            Settings
        </div>
    );
};

export default Settings;
