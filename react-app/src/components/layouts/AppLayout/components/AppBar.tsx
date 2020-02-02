import MuiAppBar from '@material-ui/core/AppBar/AppBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { SystemContext } from '../../../../store/system';
import { setNavIsExpanded } from '../../../../store/system/nav';
import useStyle from './styles';

const AppBar: React.FC = ({ children }) => {
    const classes = useStyle({});
    const {
        state: { expanded },
        dispatch,
    } = useContext(SystemContext);

    const handleDrawerOpen = () => {
        dispatch(setNavIsExpanded());
    };

    return (
        <MuiAppBar
            position="absolute"
            className={clsx(classes.appBar, expanded && classes.appBarShift)}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                        classes.menuButton,
                        expanded && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    Game of Git{' '}
                </Typography>
                {/* <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton> */}
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;
