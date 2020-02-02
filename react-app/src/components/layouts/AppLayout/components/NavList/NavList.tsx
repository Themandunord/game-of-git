import {
    Collapse,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarBorder from '@material-ui/icons/StarBorder';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    IComputedRoute,
    RouteManagerContext,
    RouteManagerProvider,
} from '../../../../../router/RouteManager';
import useStyle from '../styles';

interface NavListProps {
    handleDrawerClose: () => void;
}

const NestedNavListItem: React.FC<{
    handleDrawerClose: () => void;
    navItem: IComputedRoute;
}> = ({ handleDrawerClose, navItem }) => {
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);
    const { push } = useHistory();

    const handleClick = (e: any) => {
        setOpen(!open);
        e.stopPropagation();
    };

    return (
        <>
            <ListItem className="navListExpander" button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={navItem.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {navItem.subRoutes?.map(route => (
                        <Link
                            key={route.path}
                            to={route.path}
                            className={classes.navLink}
                            onClick={evt => {
                                handleDrawerClose();
                                push(route.path);
                            }}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={route.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

const NoSubrouteNavListItem: React.FC<{
    handleDrawerClose: () => void;
    navItem: IComputedRoute;
}> = ({ navItem, handleDrawerClose }) => {
    const classes = useStyle();
    const { push } = useHistory();

    return (
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
                <ListItemIcon title={navItem.name}>
                    <navItem.icon />
                </ListItemIcon>
                <ListItemText primary={navItem.name} />
            </ListItem>
        </Link>
    );
};

const NavList: React.FC<NavListProps> = ({ handleDrawerClose }) => {
    // const classes = useStyle();
    const {
        state: routeManagerState,
        // dispatch: routeManagerDispatch,
    } = useContext(RouteManagerContext);

    // const { push } = useHistory();

    return (
        <List className="navList" component="nav">
            {(routeManagerState.routes as IComputedRoute[]).map(
                (navItem: IComputedRoute) => {
                    if (navItem.subRoutes && navItem.subRoutes.length > 0) {
                        return (
                            <NestedNavListItem
                                handleDrawerClose={handleDrawerClose}
                                navItem={navItem}
                                key={navItem.path}
                            />
                        );
                    }
                    return (
                        <NoSubrouteNavListItem
                            handleDrawerClose={handleDrawerClose}
                            navItem={navItem}
                            key={navItem.path}
                        />
                    );
                },
            )}
        </List>
    );
};

const WrappedNavList: React.FC<NavListProps> = props => (
    <RouteManagerProvider>
        <NavList {...props} />
    </RouteManagerProvider>
);

export default WrappedNavList;
