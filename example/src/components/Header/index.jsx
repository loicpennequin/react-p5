import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Box, Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import { useStyles } from './styles';

export function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" component="header" {...props}>
            <Toolbar>
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
