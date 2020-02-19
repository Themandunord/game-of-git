import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    ClickAwayListener,
    Divider,
    IconButton,
} from '@material-ui/core';
import Container from '@material-ui/core/Container/Container';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { SystemContext } from '../../../store/system';
import { setNavNotExpanded } from '../../../store/system/nav';
import { UserContext } from '../../../store/user';
import { setUser } from '../../../store/user/actions';
import { setNotLoggedIn } from '../../../store/user/loggedIn';
import { setToken } from '../../../store/user/token';
import { setUserData } from '../../../store/user/userData';
import AppBar from './components/AppBar';
import NavList from './components/NavList/NavList';
import useStyle from './styles';

const AppLayout: React.FC = ({ children }) => {
    const classes = useStyle();
    const {
        state: { expanded },
        dispatch: dispatchSystem,
    } = useContext(SystemContext);

    const { dispatch: dispatchUser } = useContext(UserContext);

    const handleDrawerClose = () => {
        dispatchSystem(setNavNotExpanded());
    };

    const logout = () => {
        setUser(null);
        dispatchUser(setToken(null));
        dispatchUser(setUserData());
        dispatchUser(setNotLoggedIn());
    };

    const onClickAway = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (
            (event.target as any).className &&
            (event.target as any).className.indexOf
                ? (event.target as any).className.indexOf('MuiBackdrop-root') >=
                  0
                : false
        ) {
            handleDrawerClose();
        }
    };

    return (
        <ClickAwayListener onClickAway={onClickAway}>
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
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={handleDrawerClose}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </IconButton>
                        </div>
                        <Divider />
                        <NavList handleDrawerClose={handleDrawerClose} />
                        <Button
                            onClick={logout}
                            className={classes.logoutButton}
                        >
                            Logout
                        </Button>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
                            {children}
                        </Container>
                    </main>
                </Container>
            </div>
        </ClickAwayListener>
    );
};

export default AppLayout;
