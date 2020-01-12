import { ListItem, ListItemText } from '@material-ui/core';
import Container from '@material-ui/core/Container/Container';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PATH } from '../../../router/routes';
import { SystemContext } from '../../../store/system';
import { setNavNotExpanded } from '../../../store/system/nav';
import { UserContext } from '../../../store/user';
import { setUser } from '../../../store/user/actions';
import { setNotLoggedIn } from '../../../store/user/loggedIn';
import { setToken } from '../../../store/user/token';
import { setUserData } from '../../../store/user/userData';
import { Button } from '../../inputs/button/Button';
import AppBar from './components/AppBar';
import useStyle from './styles';

const NAV_ITEMS = [PATH.DASHBOARD, PATH.REPOSITORY_LIST, PATH.SETTINGS];

const AppLayout: React.FC = ({ children }) => {
    const classes = useStyle();
    const {
        state: { expanded },
        dispatch: dispatchSystem,
    } = useContext(SystemContext);

    const { dispatch: dispatchUser } = useContext(UserContext);

    const { push } = useHistory();

    const handleDrawerClose = () => {
        dispatchSystem(setNavNotExpanded());
    };

    const logout = () => {
        setUser(null);
        dispatchUser(setToken(null));
        dispatchUser(setUserData(null));
        dispatchUser(setNotLoggedIn());
    };

    return (
        <div className={classes.root}>
            <Container>
                <AppBar />
                <Drawer
                    open={expanded}
                    classes={{
                        paper: clsx(
                            classes.drawerPaper,
                            !expanded && classes.drawerPaperClose,
                        ),
                    }}
                >
                    {NAV_ITEMS.map(navItem => (
                        <Link
                            key={navItem.name}
                            to={navItem.path}
                            className={classes.navLink}
                            onClick={evt => {
                                handleDrawerClose();
                                push(navItem.path);
                            }}
                        >
                            <ListItem>
                                <navItem.icon />
                                <ListItemText primary={navItem.name} />
                            </ListItem>
                        </Link>
                    ))}
                    <Button onClick={handleDrawerClose}> Close</Button>
                    <Button onClick={logout}>Logout</Button>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        {children}
                    </Container>
                </main>
            </Container>
        </div>
    );
};

export default AppLayout;
