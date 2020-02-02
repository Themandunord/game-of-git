import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PATH } from '../../router/routes';

const title = PATH.DASHBOARD.name;

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Dashboard" />
            </Helmet>
            <p>DASHBOARD</p>
        </div>
    );
};

export default Dashboard;
