import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    Link,
    Drawer,
    IconButton,
    useMediaQuery,
} from '@material-ui/core';
import { GitHub, Menu } from '@material-ui/icons';
import { SideBar } from '../SideBar';
import { useStyles } from './styles';

export function Header(props) {
    const classes = useStyles();
    const showSideBar = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const [sideBarOpened, setSideBarOpened] = useState(false);
    const toggleSideBar = () => setSideBarOpened(o => !o);
    return (
        <AppBar position="static" component="header" {...props}>
            <Toolbar>
                {showSideBar && (
                    <>
                        <IconButton onClick={toggleSideBar}>
                            <Menu />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            className={classes.drawer}
                            open={sideBarOpened}
                            onClose={toggleSideBar}
                        >
                            <SideBar
                                onLinkClick={toggleSideBar}
                                className={classes.drawer}
                            />
                        </Drawer>
                    </>
                )}
                <Typography variant="h3" component="h1">
                    <RouterLink to="/" className={classes.title}>
                        P5-React
                    </RouterLink>
                </Typography>
                <Box ml="auto">
                    <Link href="https://github.com/loicpennequin/react-p5">
                        <GitHub fontSize="large" style={{ color: 'white' }} />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
